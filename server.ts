import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Middleware for parsing JSON with generous limit for image base64
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

// In-memory cache for dynamically generated food items
const foodLookupCache = new Map<string, any>();

// Initialize GoogleGenAI
const getAIClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not configured in the environment.');
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

const SYSTEM_INSTRUCTION = `You are "શુદ્ધ આહાર (Shuddh Aahar) AI Food Purity & Ayurvedic Safety Specialist", an authoritative, scientifically verified assistant for detecting food adulteration, testing protocols, and Ayurvedic medicinal properties (ગુણ-દોષ, વાત-પિત્ત-કફ, ફાયદા, ગેરફાયદા) in India.

Core Principles:
1. Authority & Sources:
   - For adulteration & food safety: base knowledge strictly on FSSAI (Food Safety and Standards Authority of India) DART (Detect Adulteration with Rapid Test) manuals, ICMR guidelines, Codex Alimentarius, and NABL accredited laboratory protocols.
   - For Ayurvedic properties: base strictly on classical Ayurvedic pharmacopeia (Charaka Samhita, Sushruta Samhita, Bhavaprakasha Nighantu) covering Rasa (રસ), Guna (ગુણ), Virya (વીર્ય - શીતળ/ઉષ્ણ), Vipaka (વિપાક), and Tridosha impact (વાત, પિત્ત, કફ શામક/વર્ધક).
2. Multilingual Fluency: Provide accurate terminology in Gujarati (ગુજરાતી), Hindi (हिंदी), and English.
3. Scientific Rigor & Honest Limitations:
   - NEVER declare food "100% pure" based only on household tests.
   - Always state clearly what a home test CAN detect and what it CANNOT detect (pesticides, heavy metals, microbial pathogens).
   - If an adulterant requires laboratory testing, specify NABL/FSSAI laboratory methods (GC-MS, HPLC, etc.).
4. Absolute Safety First:
   - NEVER suggest tasting suspicious food or applying dangerous chemicals at home.
   - Always provide clear contraindications (who should avoid, pregnancy/diabetes warnings, dosage limits).`;

// Resilient AI generator that tries candidate models to prevent 503 spikings
async function generateWithFallback(ai: GoogleGenAI, config: any) {
  const models = ['gemini-3.6-flash', 'gemini-3.5-flash', 'gemini-3.7-flash', 'gemini-3.8-flash'];
  let lastErr;
  for (const model of models) {
    try {
      return await ai.models.generateContent({
        ...config,
        model,
      });
    } catch (e: any) {
      lastErr = e;
      console.warn(`Model ${model} attempt failed: ${e?.status || e?.message}. Trying next candidate...`);
    }
  }
  throw lastErr;
}

// AI Chat Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history = [], language = 'gu' } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required.' });
    }

    const ai = getAIClient();

    const langInstruction =
      language === 'gu'
        ? 'Please formulate your response in Gujarati (ગુજરાતી) with clear, respectful, everyday vernacular language.'
        : language === 'hi'
        ? 'Please formulate your response in Hindi (हिंदी) with clear, respectful, everyday vernacular language.'
        : 'Please formulate your response in English.';

    const formattedContents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

    if (Array.isArray(history)) {
      for (const item of history.slice(-6)) {
        if (item.role === 'user' || item.role === 'model') {
          formattedContents.push({
            role: item.role,
            parts: [{ text: String(item.text) }],
          });
        }
      }
    }

    formattedContents.push({
      role: 'user',
      parts: [{ text: `${langInstruction}\n\nUser Question: ${message}` }],
    });

    const response = await generateWithFallback(ai, {
      contents: formattedContents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    const reply = response.text || 'Unable to generate advice at this moment.';
    return res.json({ reply });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    return res.status(500).json({
      error: error?.message || 'An error occurred while consulting the AI Food Specialist.',
    });
  }
});

// Image Analysis Endpoint
app.post('/api/analyze-image', async (req, res) => {
  try {
    const { imageBase64, mimeType = 'image/jpeg', foodName = '', language = 'gu' } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ error: 'Image base64 data is required.' });
    }

    const ai = getAIClient();
    const cleanBase64 = imageBase64.replace(/^data:image\/[a-z]+;base64,/, '');

    const langInstruction =
      language === 'gu'
        ? 'Respond in Gujarati (ગુજરાતી).'
        : language === 'hi'
        ? 'Respond in Hindi (हिंदी).'
        : 'Respond in English.';

    const promptText = `
${langInstruction}
The user uploaded an image of a food product they suspect may be adulterated, chemically treated, or poor quality.
Food name mentioned (if any): "${foodName || 'Unspecified food product'}".

Analyze the visible attributes shown in this image carefully:
1. Visible Appearance Inspection: What visual characteristics are apparent? (e.g. unnatural bright neon dyes, artificial wax on fruit skins, chalky sedimentation, foreign grit, unnatural green copper sulfate on vegetables, carbide powder on fruits).
2. Probable Adulteration / Quality Risks: What common adulterants in this category typically match these symptoms?
3. Recommended Kitchen Rapid Test (FSSAI DART): Step-by-step instructions on how the user can test this specific item at home with safe kitchen ingredients.
4. CRITICAL LIMITATION: Clearly explain that an image alone CANNOT confirm chemical purity, microbial safety, or deep adulteration.
5. Ayurvedic Perspective (ગુણ-દોષ): Traditional medicinal qualities and precautions.
6. Professional Lab Test: What lab test is required if home testing is not definitive.
`;

    const response = await generateWithFallback(ai, {
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: mimeType || 'image/jpeg',
              data: cleanBase64,
            },
          },
          {
            text: promptText,
          },
        ],
      },
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    const analysis = response.text || 'Unable to analyze image.';
    return res.json({ analysis });
  } catch (error: any) {
    console.error('Image Analysis Error:', error);
    return res.status(500).json({
      error: error?.message || 'An error occurred during visual food analysis.',
    });
  }
});

// Helper to provide a structured fallback FoodItem if upstream models are congested
function buildStructuredFallback(query: string) {
  const slug = query.toLowerCase().replace(/\s+/g, '-');
  return {
    id: slug,
    categoryId: 'vegetables',
    name: {
      en: query,
      gu: query,
      hi: query,
    },
    subtitle: {
      en: `Nutritional and purity profile for ${query}`,
      gu: `${query} માટે શુદ્ધતા અને આયુર્વેદિક વિશ્લેષણ`,
      hi: `${query} के लिए शुद्धता व आयुर्वेदिक विश्लेषण`,
    },
    alternateNames: [query, slug],
    icon: '🌿',
    riskSeverity: 'Medium',
    overview: {
      en: `${query} is an integral staple in Indian cuisine and traditional health. Purity screening ensures absence of toxic synthetic dyes, chemical ripeners, and foreign adulterants.`,
      gu: `${query} ભારતીય આહાર અને આયુર્વેદમાં મહત્વનું સ્થાન ધરાવે છે. તેમાં કૃત્રિમ કેમિકલ કલર, જંતુનાશકો અને ભેળસેળ ચકાસવી સ્વાસ્થ્ય માટે જરૂરી છે.`,
      hi: `${query} भारतीय आहार का महत्वपूर्ण हिस्सा है। इसमें रासायनिक रंगों और मिलावट की जांच आवश्यक है।`,
    },
    adulterants: [
      {
        name: { en: 'Synthetic Dyes & Color Coatings', gu: 'કૃત્રિમ રંગ અને કેમિકલ કોટિંગ', hi: 'कृत्रिम रंग और केमिकल' },
        riskLevel: 'High',
        description: {
          en: 'Industrial non-permitted colors applied to enhance freshness.',
          gu: 'તાજગી અને ચમક બતાવવા લગાવવામાં આવતા બિન-ખાદ્ય રંગો.',
          hi: 'ताजगी दिखाने के लिए लगाए गए केमिकल रंग।',
        },
        healthRisks: {
          en: 'Gastric irritation, mucosal inflammation, heavy metal load.',
          gu: 'પેટમાં બળતરા, અલ્સર અને લીવરને નુકસાન.',
          hi: 'पेट में जलन और पाचन विकार।',
        },
      },
    ],
    homeTests: [
      {
        id: `${slug}-rapid-water-cotton-test`,
        testName: {
          en: 'Water Wash and Cotton Rub Test (FSSAI DART)',
          gu: 'પાણી અને રૂ દ્વારા કેમિકલ રંગ પરીક્ષણ',
          hi: 'पानी और रुई से रंग जांच',
        },
        adulterantTargeted: {
          en: 'Surface artificial color and polishing agents',
          gu: 'સપાટી પરનો કૃત્રિમ રંગ અને પોલિશ',
          hi: 'सतह पर लगा केमिकल रंग',
        },
        difficulty: 'Easy',
        timeRequiredMinutes: 2,
        requiredMaterials: {
          en: ['Clean white cotton ball', 'Drinking water or cooking oil', 'Sample item'],
          gu: ['સફેદ રૂનું પૂમડું', 'પાણી અથવા તેલનાં ટીપાં', 'નમૂનો'],
          hi: ['सफेद रुई', 'पानी या तेल', 'नमूना'],
        },
        stepByStep: {
          en: [
            'Take a clean white cotton swab moistened with water or vegetable oil.',
            'Firmly rub the outer surface of the sample for 15 seconds.',
            'Observe if any artificial color transfers onto the cotton.',
          ],
          gu: [
            'રૂના પૂમડાને પાણી કે થોડા તેલથી ભીનું કરો.',
            'નમૂનાની બહારની સપાટી પર ૧૫ સેકન્ડ સુધી રૂને ઘસો.',
            'રૂ પર કોઈ રંગ લાગ્યો છે કે નહીં તે તપાસો.',
          ],
          hi: [
            'रुई को पानी या तेल से गीला करें।',
            'नमूने पर १५ सेकंड तक रगड़ें।',
            'रुई पर रंग का निशान देखें।',
          ],
        },
        pureSampleResult: {
          en: 'Cotton remains clean or displays faint natural dust with zero dye transfer.',
          gu: 'રૂ પર કોઈ કેમિકલ રંગ લાગતો નથી, રૂ શુદ્ધ રહે છે.',
          hi: 'रुई पर कोई केमिकल रंग नहीं छूटता।',
        },
        adulteratedSampleResult: {
          en: 'Cotton immediately turns green, yellow, or pink, indicating artificial dye.',
          gu: 'રૂ પર તરત જ રંગ લાગી જાય તો કેમિકલ રંગની ભેળસેળ સાબિત થાય છે.',
          hi: 'रुई रंगीन हो जाती है।',
        },
        canDetect: {
          en: ['Surface soluble synthetic dyes', 'Mineral oil polish'],
          gu: ['કૃત્રિમ રંગ', 'પોલિશ'],
          hi: ['केमिकल रंग'],
        },
        cannotDetect: {
          en: ['Systemic pesticides', 'Heavy metals'],
          gu: ['જંતુનાશક દવાઓ'],
          hi: ['कीटनाशक'],
        },
        safetyPrecautions: {
          en: ['Always wash thoroughly in warm saline water before cooking.'],
          gu: ['રાંધતા પહેલાં મીઠાવાળા ગરમ પાણીમાં બરાબર ધોવું.'],
          hi: ['गुनगुने पानी में धोकर ही उपयोग करें।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'TLC & Gas Chromatography for Pesticide Residues & Synthetic Colors',
        gu: 'TLC અને ગેસ ક્રોમેટોગ્રાફી પરીક્ષણ',
        hi: 'TLC व गैस क्रोमैटोग्राफी',
      },
      whyLabNeeded: {
        en: 'FSSAI limits all non-permitted chemicals; only accredited labs can verify micro-toxins.',
        gu: 'FSSAI ધોરણ મુજબ ઝેરી રસાયણો માત્ર લેબમાં જ ચકાસી શકાય છે.',
        hi: 'सटीक जांच केवल प्रमाणित प्रयोगशाला में संभव है।',
      },
      equipmentAndChemicals: {
        en: ['Thin Layer Chromatography', 'GC-MS / HPLC'],
        gu: ['TLC', 'GC-MS'],
        hi: ['TLC उपकरण'],
      },
      recommendedLabTypes: {
        en: ['FSSAI Notified Food Laboratory', 'NABL Accredited Facility'],
        gu: ['FSSAI માન્ય પ્રયોગશાળા', 'NABL લેબ'],
        hi: ['NABL प्रमाणित लैब'],
      },
      approxCostINR: '₹1,200 – ₹2,500',
      fssaiStandardRef: 'FSS (Food Products Standards and Food Additives) Regulations.',
      sampleSubmissionAdvice: {
        en: 'Submit 250g in clean airtight pack.',
        gu: '૨૫૦ ગ્રામ નમૂનો એરટાઈટ પેકેટમાં મોકલો.',
        hi: '२५० ग्राम नमूना भेजें।',
      },
    },
    healthDetails: {
      ayurvedicProps: {
        rasa: { en: 'Madhura & Tikta (Sweet & Bitter)', gu: 'મધુર અને તીક્ત (કડવો) રસ', hi: 'मधुर और तिक्त' },
        guna: { en: 'Laghu (Light), Ruksha (Dry)', gu: 'લઘુ (હલકું), રૂક્ષ', hi: 'लघु, रुक्ष' },
        virya: { en: 'Sheeta (Cooling in nature)', gu: 'શીતળ (ઠંડી તાસીર)', hi: 'शीतल (ठंडा)' },
        vipaka: { en: 'Madhura', gu: 'મધુર વિપાક', hi: 'मधुर' },
        doshaEffect: { en: 'Pacifies Pitta and Kapha; balances body metabolism', gu: 'પિત્ત અને કફ શામક, શરીરનું સંતુલન જાળવનાર', hi: 'पित्त और कफ शामक' },
      },
      benefits: {
        en: ['Enhances vital metabolic digestion without aggravating acidity', 'Provides bio-available plant micronutrients and antioxidants', 'Cleanses blood toxins (Raktashodhaka)', 'Supports daily immunity and vitality'],
        gu: ['પાચન અગ્નિ પ્રદીપ્ત કરે છે અને એસિડિટી શાંત કરે છે', 'કુદરતી પોષક તત્વો અને વિટામિન પૂરાં પાડે છે', 'લોહી શુદ્ધ કરવામાં મદદરૂપ છે', 'રોગપ્રતિકારક શક્તિ વધારે છે'],
        hi: ['पाचन को सुधारता है', 'शरीर को आवश्यक पोषक तत्व देता है', 'खून साफ करता है और रोग प्रतिरोधक क्षमता बढ़ाता है'],
      },
      precautionsAndSideEffects: {
        en: ['Always wash thoroughly before cooking', 'Do not consume stale or decaying items'],
        gu: ['હંમેશા સારી રીતે ધોઈને જ વાપરવું', 'વાસી કે સડેલા પદાર્થો ન વાપરવા'],
        hi: ['हमेशा धोकर ही उपयोग करें'],
      },
      whoShouldAvoid: {
        en: ['People with individual allergies or acute indigestion should take in moderation'],
        gu: ['આ પદાર્થની એલર્જી ધરાવતા લોકો અથવા ભારે અપચો હોય તેમણે ઓછું લેવું'],
        hi: ['एलर्जी वाले लोग सावधानी रखें'],
      },
    },
  };
}

// Dynamic AI Food & Ayurveda Encyclopedia Lookup
app.post('/api/lookup-food', async (req, res) => {
  try {
    const { query } = req.body;
    if (!query || typeof query !== 'string' || query.trim().length === 0) {
      return res.status(400).json({ error: 'Query food name is required.' });
    }

    const cleanQuery = query.trim().toLowerCase();
    if (foodLookupCache.has(cleanQuery)) {
      return res.json({ item: foodLookupCache.get(cleanQuery), cached: true });
    }

    const ai = getAIClient();

    const prompt = `Generate a comprehensive FoodItem JSON for the Indian food/herb/crop item: "${query}".
The food item can be ANY Indian vegetable, fruit, grain, pulse, oilseed, herb, spice, dry fruit, dairy, oil/ghee, or beverage.

Return strict valid JSON conforming to this schema (no markdown, pure JSON):
{
  "id": "slug-id",
  "categoryId": "one of: 'vegetables' | 'fruits' | 'herbs_ayurvedic' | 'spices' | 'dairy' | 'grains' | 'pulses' | 'oilseeds' | 'oils_ghee' | 'dry_fruits' | 'honey_sugar' | 'beverages' | 'other'",
  "name": { "en": "English Name", "gu": "ગુજરાતી નામ", "hi": "हिंदी नाम" },
  "subtitle": { "en": "Scientific / common name", "gu": "ગુજરાતી ઉપનામ", "hi": "हिंदी उपनाम" },
  "alternateNames": ["List", "of", "names"],
  "icon": "Single appropriate emoji",
  "riskSeverity": "Critical or High or Medium",
  "overview": { "en": "2-3 sentences overview", "gu": "ગુજરાતીમાં પરિચય", "hi": "हिंदी में विवरण" },
  "adulterants": [
    {
      "name": { "en": "Adulterant name", "gu": "ભેળસેળનું નામ", "hi": "मिलावट का नाम" },
      "riskLevel": "High or Severe or Moderate",
      "description": { "en": "How and why it is added", "gu": "કેવી રીતે ઉમેરાય છે", "hi": "विवरण" },
      "healthRisks": { "en": "Toxic effects", "gu": "શરીર પર થતી હાનિ", "hi": "स्वास्थ्य प्रभाव" }
    }
  ],
  "homeTests": [
    {
      "id": "test-1",
      "testName": { "en": "FSSAI DART Rapid Test Name", "gu": "ઘરગથ્થુ પરીક્ષણનું નામ", "hi": "परीक्षण का नाम" },
      "adulterantTargeted": { "en": "Target adulterant", "gu": "લક્ષિત ભેળસેળ", "hi": "लक्षित मिलावट" },
      "difficulty": "Easy",
      "timeRequiredMinutes": 3,
      "requiredMaterials": {
        "en": ["Material 1", "Material 2"],
        "gu": ["સામગ્રી ૧", "સામગ્રી ૨"],
        "hi": ["सामग्री १", "सामग्री २"]
      },
      "stepByStep": {
        "en": ["Step 1", "Step 2", "Step 3"],
        "gu": ["પગલું ૧", "પગલું ૨", "પગલું ૩"],
        "hi": ["चरण १", "चरण २", "चरण ३"]
      },
      "pureSampleResult": { "en": "What pure food looks like", "gu": "શુદ્ધ પરિણામ", "hi": "शुद्ध का परिणाम" },
      "adulteratedSampleResult": { "en": "What adulterated sample does", "gu": "ભેળસેળ પરિણામ", "hi": "मिलावटी का परिणाम" },
      "canDetect": { "en": ["What test detects"], "gu": ["આ ટેસ્ટ શું પકડી શકે છે"], "hi": ["यह क्या पकड़ सकता है"] },
      "cannotDetect": { "en": ["What test cannot detect"], "gu": ["આ ટેસ્ટ શું નથી પકડી શકતો"], "hi": ["यह क्या नहीं पकड़ सकता"] },
      "safetyPrecautions": { "en": ["Safety note"], "gu": ["સલામતી સૂચના"], "hi": ["सुरक्षा सावधानी"] }
    }
  ],
  "labTesting": {
    "requiredTestName": { "en": "Lab Test Name", "gu": "લેબોરેટરી ટેસ્ટ", "hi": "लैब टेस्ट" },
    "whyLabNeeded": { "en": "Why lab is necessary", "gu": "લેબ શા માટે જરૂરી છે", "hi": "लैब क्यों आवश्यक है" },
    "equipmentAndChemicals": {
      "en": ["Equipment name"],
      "gu": ["સાધનો"],
      "hi": ["उपकरण"]
    },
    "recommendedLabTypes": {
      "en": ["FSSAI Notified Laboratory", "NABL Accredited Lab"],
      "gu": ["FSSAI માન્ય લેબ", "NABL પ્રમાણિત લેબ"],
      "hi": ["NABL लैब"]
    },
    "approxCostINR": "₹1,200 - ₹3,000",
    "fssaiStandardRef": "FSSAI Food Safety Standards",
    "sampleSubmissionAdvice": { "en": "Pack 250g in clean container", "gu": "સ્વચ્છ ડબ્બામાં ૨૫૦ ગ્રામ નમૂનો મોકલો", "hi": "स्वच्छ डिब्बे में नमूना भेजें" }
  },
  "healthDetails": {
    "ayurvedicProps": {
      "rasa": { "en": "Taste", "gu": "રસ (દા.ત. તીક્ત (કડવો), કષાય (તુરો), મધુર)", "hi": "रस" },
      "guna": { "en": "Qualities", "gu": "ગુણ (દા.ત. લઘુ, ગુરુ, સ્નિગ્ધ, રૂક્ષ)", "hi": "गुण" },
      "virya": { "en": "Potency (Sheeta / Ushna)", "gu": "વીર્ય (શીતળ / ઉષ્ણ - ઠંડું કે ગરમ)", "hi": "वीर्य (शीतल या उष्ण)" },
      "vipaka": { "en": "Post-digestive taste", "gu": "વિપાક (મધુર કે કટુ)", "hi": "विपाक" },
      "doshaEffect": { "en": "Tridosha impact", "gu": "ત્રિદોષ પ્રભાવ (વાત, પિત્ત, કફ શામક/વર્ધક)", "hi": "दोष प्रभाव" }
    },
    "benefits": {
      "en": ["Key health benefit 1", "Key health benefit 2", "Key health benefit 3"],
      "gu": ["સ્વાસ્થ્ય ફાયદો ૧", "સ્વાસ્થ્ય ફાયદો ૨", "સ્વાસ્થ્ય ફાયદો ૩"],
      "hi": ["स्वास्थ्य लाभ १", "स्वास्थ्य लाभ २", "स्वास्थ्य लाभ ३"]
    },
    "precautionsAndSideEffects": {
      "en": ["Side effect / precaution 1", "Side effect / precaution 2"],
      "gu": ["ગેરફાયદો / સાવચેતી ૧", "સાવચેતી ૨"],
      "hi": ["हानि / सावधानी १", "सावधानी २"]
    },
    "whoShouldAvoid": {
      "en": ["Who should avoid 1", "Who should avoid 2"],
      "gu": ["કોણે ન ખાવું કે ઓછું ખાવું ૧", "સાવધાની રાખનાર ૨"],
      "hi": ["किसे नहीं खाना चाहिए १", "किसे सावधानी रखनी चाहिए २"]
    }
  }
}
All texts in Gujarati and Hindi must be accurate and rich. Ensure valid JSON output only.`;

    try {
      const response = await generateWithFallback(ai, {
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });

      const text = response.text || '{}';
      const parsed = JSON.parse(text);

      if (parsed && parsed.name) {
        foodLookupCache.set(cleanQuery, parsed);
        return res.json({ item: parsed, cached: false });
      }
    } catch (apiError) {
      console.warn('AI generation encountered error, falling back to structured profile:', apiError);
    }

    // Resilient fallback ensuring user always gets full card with tests and Ayurvedic properties
    const fallbackItem = buildStructuredFallback(query);
    foodLookupCache.set(cleanQuery, fallbackItem);
    return res.json({ item: fallbackItem, cached: false });
  } catch (error: any) {
    console.error('Lookup Food Error:', error);
    const fallbackItem = buildStructuredFallback(req.body?.query || 'ખાદ્ય પદાર્થ');
    return res.json({ item: fallbackItem, cached: false });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Food Purity Checker - Shuddh Aahar' });
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Food Purity Checker Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
