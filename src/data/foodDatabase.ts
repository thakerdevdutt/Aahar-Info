import { FoodItem } from '../types';
import { extraFoodItems } from './extraFoodItems';
import { ayurvedicKnowledgeMap } from './ayurvedicKnowledge';

const rawFoodDatabase: FoodItem[] = [
  // --- 1. MILK & DAIRY ---
  {
    id: 'milk',
    categoryId: 'dairy',
    name: {
      en: 'Fresh Cow & Buffalo Milk',
      gu: 'તાજું ગાય અને ભેંસનું દૂધ',
      hi: 'ताजा गाय व भैंस का दूध',
    },
    subtitle: {
      en: 'Essential daily dairy staple vulnerable to water, starch, and synthetic adulterants',
      gu: 'પાણી, સ્ટાર્ચ અને સિન્થેટિક કેમિકલની ભેળસેળથી દૂષિત થતો રોજિંદો આહાર',
      hi: 'पानी, स्टार्च और सिंथेटिक केमिकल से मिलावट का शिकार होने वाला मुख्य आहार',
    },
    alternateNames: ['milk', 'doodh', 'dudh', 'cow milk', 'buffalo milk', 'દૂધ', 'ગાયનું દૂધ', 'ભેંસનું દૂધ', 'दूध', 'डेरी'],
    icon: '🥛',
    riskSeverity: 'Critical',
    overview: {
      en: 'Milk is widely consumed by children and families, but often adulterated with excess water, starch, urea, neutralizers, and detergents to artificially increase shelf-life and density.',
      gu: 'દૂધ બાળકો અને પરિવારો દ્વારા ખૂબ વપરાય છે, પરંતુ ઘનતા અને સેલ્ફ-લાઇફ વધારવા તેમાં પાણી, સ્ટાર્ચ, યુરિયા, ડિટર્જન્ટ અને કેમિકલ ભેળવવામાં આવે છે.',
      hi: 'दूध बच्चों और परिवारों के दैनिक आहार का अभिन्न अंग है, किन्तु घनत्व और शेल्फ-लाइफ बढ़ाने के लिए इसमें पानी, स्टार्च, यूरिया व डिटर्जेंट मिलाए जाते हैं।',
    },
    adulterants: [
      {
        name: { en: 'Starch & Flour', gu: 'સ્ટાર્ચ અને લોટ', hi: 'स्टार्च और मैदा/आटा' },
        riskLevel: 'Moderate',
        description: {
          en: 'Added to artificially raise specific gravity and thickness after diluting with water.',
          gu: 'પાણી ઉમેર્યા પછી દૂધની ઘનતા અને જાડાપણું વધારવા માટે ઉમેરાય છે.',
          hi: 'पानी मिलाने के बाद दूध का गाढ़ापन और डेंसिटी बढ़ाने के लिए डाला जाता है।',
        },
        healthRisks: {
          en: 'Indigestion, gastrointestinal upset in infants, diabetic complications.',
          gu: 'બાળકોમાં અપચો, પેટની તકલીફો અને સુગર લેવલમાં અચાનક વધારો.',
          hi: 'शिशुओं में अपच, पेट की समस्याएं और पोषण की गंभीर कमी।',
        },
      },
      {
        name: { en: 'Detergent & Caustic Soda', gu: 'ડિટર્જન્ટ અને કોસ્ટિક સોડા', hi: 'डिटर्जेंट और कास्टिक सोडा' },
        riskLevel: 'Severe',
        description: {
          en: 'Used to emulsify vegetable oils in water to fabricate fake "synthetic milk".',
          gu: 'તેલ અને પાણીને મિક્સ કરી નકલી સિન્થેટિક દૂધ તૈયાર કરવા વપરાય છે.',
          hi: 'सस्ते तेल व पानी का पायसीकरण कर नकली सिंथेटिक दूध बनाने के लिए प्रयुक्त।',
        },
        healthRisks: {
          en: 'Severe damage to stomach lining, mucosal ulcers, chronic renal toxicity.',
          gu: 'પેટના અંદરના અસ્તરને નુકસાન, અલ્સર અને કિડનીની ગંભીર બીમારીઓ.',
          hi: 'पेट की परत को गंभीर क्षति, अल्सर और किडनी व लीवर का नुकसान।',
        },
      },
      {
        name: { en: 'Urea & Fertilizer', gu: 'યુરિયા અને ખાતર', hi: 'यूरिया और उर्वरक' },
        riskLevel: 'Severe',
        description: {
          en: 'Added to elevate Non-Protein Nitrogen (NPN) and mimic genuine protein content in standard lactometer tests.',
          gu: 'દૂધમાં પ્રોટીનનું પ્રમાણ નકલી રીતે વધુ બતાવવા યુરિયા ભેળવવામાં આવે છે.',
          hi: 'लैक्टोमीटर परीक्षण में कृत्रिम प्रोटीन मान बढ़ाने के लिए यूरिया मिलाया जाता है।',
        },
        healthRisks: {
          en: 'Kidney strain, liver impairment, carcinogenic nitrosamine formation.',
          gu: 'કિડની અને લીવર પર અતિશય દબાણ, લાંબા ગાળે કેન્સરનું જોખમ.',
          hi: 'किडनी और लिवर पर गंभीर तनाव, कार्सिनोजेनिक प्रभाव।',
        },
      },
    ],
    homeTests: [
      {
        id: 'milk-starch-iodine',
        testName: {
          en: 'Starch Detection Test (Iodine Reaction)',
          gu: 'સ્ટાર્ચ ચકાસણી ટેસ્ટ (ટિંચર આયોડિન પ્રક્રિયા)',
          hi: 'स्टार्च परीक्षण (टिंचर आयोडीन विधि)',
        },
        adulterantTargeted: { en: 'Starch, Arrowroot, Rice Flour', gu: 'સ્ટાર્ચ, અરારૂટ, લોટ', hi: 'स्टार्च, अरारोट, आटा' },
        difficulty: 'Easy',
        timeRequiredMinutes: 3,
        requiredMaterials: {
          en: ['5 ml Milk sample', 'Tincture Iodine (available at any medical shop)', 'Clean transparent glass or test tube'],
          gu: ['૫ મિલી દૂધનો નમૂનો', 'ટિંચર આયોડિન (કોઈપણ મેડિકલ સ્ટોરમાં મળે છે)', 'કાચનો સ્વચ્છ પ્યાલો અથવા કાચની નળી'],
          hi: ['५ मिली दूध का नमूना', 'टिंचर आयोडीन (दवा की दुकान पर उपलब्ध)', 'कांच का पारदर्शी गिलास या परखनली'],
        },
        stepByStep: {
          en: [
            'Boil 5 ml of milk sample in a clean steel or glass vessel.',
            'Allow the boiled milk to cool down to room temperature.',
            'Add 2 to 3 drops of Tincture Iodine to the cooled milk.',
            'Gently swirl and observe color changes immediately.',
          ],
          gu: [
            'એક વાસણમાં ૫ મિલી દૂધ ઉકાળો.',
            'દૂધને ઓરડાના તાપમાને ઠંડુ થવા દો (ગરમ દૂધમાં આયોડિન ન નાખવું).',
            'ઠંડા થયેલા દૂધમાં ૨ થી ૩ ટીપાં ટિંચર આયોડિન ઉમેરો.',
            'ધીમેથી હલાવો અને તરત રંગનું નિરીક્ષણ કરો.',
          ],
          hi: [
            '५ मिली दूध को उबालकर कमरे के तापमान तक ठंडा होने दें।',
            'ठंडे दूध में २-३ बूंदें टिंचर आयोडीन की डालें।',
            'हल्के से हिलाएं और तुरंत रंग में बदलाव देखें।',
          ],
        },
        pureSampleResult: {
          en: 'Pure milk does not turn blue; it retains a faint yellow or cream shade of iodine.',
          gu: 'શુદ્ધ દૂધ વાદળી નથી થતું; તે આયોડિનનો આછો પીળો કે ક્રીમ રંગ જાળવી રાખે છે.',
          hi: 'शुद्ध दूध में नीला रंग नहीं बनता; आयोडीन का हल्का पीला/क्रीम रंग ही दिखता है।',
        },
        adulteratedSampleResult: {
          en: 'Adulterated milk instantly turns intense blue or dark purple, proving starch presence.',
          gu: 'સ્ટાર્ચ ભેળવેલું દૂધ તરત જ ઘાટો વાદળી કે જાંબલી રંગ પકડી લે છે.',
          hi: 'मिलावटी दूध तुरंत गहरा नीला या बैंगनी रंग का हो जाता है।',
        },
        canDetect: {
          en: ['Corn starch', 'Potato starch', 'Rice flour', 'Arrowroot'],
          gu: ['કોર્ન સ્ટાર્ચ', 'બટાટાનો લોટ', 'ચોખાનો લોટ', 'અરારૂટ પાવડર'],
          hi: ['कॉर्न स्टार्च', 'चावल का आटा', 'आलू का स्टार्च', 'अरारोट'],
        },
        cannotDetect: {
          en: ['Detergent', 'Urea', 'Water dilution percentage', 'Antibiotic residues', 'Aflatoxin M1'],
          gu: ['ડિટર્જન્ટ', 'યુરિયા', 'પાણીનું ચોક્કસ પ્રમાણ', 'એન્ટિબાયોટિક્સ', 'એફ્લાટોક્સિન ફૂગ'],
          hi: ['डिटर्जेंट', 'यूरिया', 'पानी का प्रतिशत', 'एंटीबायोटिक अवशेष', 'माइकोटॉक्सिन'],
        },
        safetyPrecautions: {
          en: ['Do not consume milk treated with iodine.', 'Discard the tested sample down the drain.'],
          gu: ['આયોડિન ઉમેરેલું દૂધ ક્યારેય પીવું નહીં.', 'પરીક્ષણ કરેલ નમૂનાનો નિકાલ કરો.'],
          hi: ['आयोडीन मिला हुआ दूध कभी न पिएं।', 'परीक्षण किए गए दूध को तुरंत बहा दें।'],
        },
      },
      {
        id: 'milk-detergent-shake',
        testName: {
          en: 'Detergent & Soap Shake Test',
          gu: 'ડિટર્જન્ટ અને સાબુ શેક ટેસ્ટ',
          hi: 'डिटर्जेंट और साबुन शेक टेस्ट',
        },
        adulterantTargeted: { en: 'Detergent, Synthetic foaming agents', gu: 'ડિટર્જન્ટ, ફીણ કરનારા કેમિકલ', hi: 'डिटर्जेंट, झाग पैदा करने वाले रसायन' },
        difficulty: 'Easy',
        timeRequiredMinutes: 2,
        requiredMaterials: {
          en: ['10 ml Milk sample', '10 ml Clean water', 'Glass bottle or test tube with tight stopper'],
          gu: ['૧૦ મિલી દૂધ', '૧૦ મિલી સ્વચ્છ પાણી', 'ઢાંકણાવાળી કાચની બોટલ'],
          hi: ['१० मिली दूध', '१० मिली शुद्ध पानी', 'ढक्कन वाली कांच की शीशी'],
        },
        stepByStep: {
          en: [
            'Take 10 ml of milk and equal quantity of water in a transparent bottle.',
            'Close tightly and shake vigorously for 15 seconds.',
            'Keep it still on a table and observe the froth behaviour.',
          ],
          gu: [
            'કાચની બોટલમાં ૧૦ મિલી દૂધ અને ૧૦ મિલી પાણી લો.',
            'ઢાંકણું બંધ કરી ૧૫ સેકન્ડ જોરથી હલાવો.',
            'ટેબલ પર સ્થિર રાખી ફીણનું નિરીક્ષણ કરો.',
          ],
          hi: [
            'शीशी में १० मिली दूध और १० मिली पानी लें।',
            'ढक्कन बंद कर १५ सेकंड तक तेजी से हिलाएं।',
            'समतल जगह रखकर बनने वाले झाग को देखें।',
          ],
        },
        pureSampleResult: {
          en: 'Pure milk develops very thin foam that subsides almost completely within 20 to 30 seconds.',
          gu: 'શુદ્ધ દૂધમાં આછું ફીણ બને છે જે ૨૦-૩૦ સેકન્ડમાં આપમેળે બેસી જાય છે.',
          hi: 'शुद्ध दूध में बहुत हल्का झाग बनता है जो २०-३० सेकंड में पूरी तरह गायब हो जाता है।',
        },
        adulteratedSampleResult: {
          en: 'Milk with detergent creates dense, thick, soapy lather that remains stable for over 5 minutes.',
          gu: 'ડિટર્જન્ટ વાળા દૂધમાં સાબુ જેવું ઘટ્ટ, ઘટ્ટ ફીણ બને છે જે ૫ મિનિટ સુધી બેસતું નથી.',
          hi: 'डिटर्जेंट मिले दूध में साबुन जैसा गाढ़ा झाग बनता है जो ५ मिनट तक बना रहता है।',
        },
        canDetect: {
          en: ['Laundry detergents', 'Commercial foaming agents', 'Liquid dishwashers'],
          gu: ['કપડાં ધોવાના પાવડર', 'કેમિકલ ફીણ કારક', 'સાબુના તત્વો'],
          hi: ['कपड़े धोने का डिटर्जेंट', 'फोमिंग एजेंट', 'साबुन'],
        },
        cannotDetect: {
          en: ['Trace neutralizers (sodium bicarbonate)', 'Formalin preservatives'],
          gu: ['ખાવાનો સોડા (સોડિયમ બાયકાર્બોનેટ)', 'ફોર્મેલિન રસાયણ'],
          hi: ['सोडियम बाइकार्बोनेट', 'फॉर्मेलिन प्रिजर्वेटिव'],
        },
        safetyPrecautions: {
          en: ['Do not taste or ingest milk with suspicious chemical lather.'],
          gu: ['શંકાસ્પદ ફીણવાળા દૂધનો સ્વાદ ક્યારેય ન ચાખવો.'],
          hi: ['झाग वाले संदिग्ध दूध को कभी भी चखने का प्रयास न करें।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'MilkoScan FT / Gerber Fat & SNF Analysis + LC-MS/MS for Antibiotics',
        gu: 'મિલ્કોસ્કેન FT / ગર્બર પદ્ધતિ અને LC-MS/MS એન્ટિબાયોટિક્સ ટેસ્ટ',
        hi: 'मिल्कोस्कैन FT / गर्बर फैट और LC-MS/MS एंटीबायोटिक्स परीक्षण',
      },
      whyLabNeeded: {
        en: 'Home tests cannot detect toxic microbial count, aflatoxin M1 (fungal toxin excreted in milk), organochlorine pesticide residues, or oxytocin hormone injections.',
        gu: 'ઘરેલુ ટેસ્ટ માઇક્રોબાયોલોજિકલ કચરો, એફ્લાટોક્સિન ફૂગ ઝેર, જંતુનાશકો કે ઓક્સિટોસિન હોર્મોન શોધી શકતા નથી.',
        hi: 'घरेलू परीक्षण सूक्ष्मजीव संदूषण, एफ्लाटॉक्सिन एम1, कीटनाशक अवशेष या ऑक्सीटोसिन हार्मोन नहीं पकड़ सकते।',
      },
      equipmentAndChemicals: {
        en: ['Gerber Butyrometer & Centrifuge', 'HPLC-MS/MS (High-Performance Liquid Chromatography)', 'Kjeldahl Digestion for Crude Protein', 'ELISA Reader for Aflatoxins'],
        gu: ['ગર્બર બ્યુટાયરોમીટર અને સેન્ટ્રીફ્યુજ', 'HPLC-MS/MS સ્પેક્ટ્રોમીટર', 'કેજેલ્ડાહલ પ્રોટીન સિસ્ટમ', 'એલિસા કીટ'],
        hi: ['गर्बर ब्यूटायरोमीटर व सेंट्रीफ्यूज', 'HPLC-MS/MS क्रोमैटोग्राफी', 'केल्डाहल प्रोटीन विश्लेषक', 'एलिसा रीडर'],
      },
      recommendedLabTypes: {
        en: ['FSSAI Notified National Food Laboratories (NFL Ghaziabad, Kolkata)', 'NABL Accredited Food Testing Labs (e.g., Gujarat FDCA Labs, TUV India, SGS India)'],
        gu: ['FSSAI માન્ય સરકારી લેબોરેટરી (વડોદરા, ભુજ, રાજકોટ)', 'NABL માન્ય ફૂડ ટેસ્ટિંગ લેબ્સ'],
        hi: ['FSSAI अधिसूचित राष्ट्रीय खाद्य प्रयोगशालाएं', 'NABL प्रमाणित फूड टेस्टिंग लैब (TUV, SGS)'],
      },
      approxCostINR: '₹800 – ₹2,500 (Basic parameters) | ₹4,500+ (Comprehensive pesticide & antibiotic screening)',
      fssaiStandardRef: 'FSS (Food Products Standards and Food Additives) Regulations, 2011 – Regulation 2.1.1',
      sampleSubmissionAdvice: {
        en: 'Collect 500 ml milk in a sterile, pre-chilled glass container with tamper-evident seal, kept in ice box under 4°C, and deliver to the lab within 6 hours.',
        gu: '૫૦૦ મિલી દૂધ સ્ટરિલાઈઝ્ડ કાચની બોટલમાં ભરી, સીલ લગાવી, ૪ ડિગ્રી સેલ્સિયસ બરફ પેટીમાં રાખી ૬ કલાકમાં લેબમાં પહોંચાડો.',
        hi: '५०० मिली दूध स्टरलाइज्ड कांच की बोतल में सीलबंद कर, ४°C आइस बॉक्स में रखकर ६ घंटे के भीतर लैब पहुंचाएं।',
      },
    },
  },

  // --- 2. OILS & GHEE ---
  {
    id: 'ghee',
    categoryId: 'oils_ghee',
    name: {
      en: 'Pure Desi Ghee & Butter',
      gu: 'શુદ્ધ દેશી ઘી અને માખણ',
      hi: 'शुद्ध देसी घी और मक्खन',
    },
    subtitle: {
      en: 'High-value dietary fat frequently adulterated with Vanaspati, animal tallow, and mineral oil',
      gu: 'વનસ્પતિ ઘી, પ્રાણીઓની ચરબી અને મિનરલ ઓઈલની ભેળસેળનું મુખ્ય જોખમ ધરાવતો પદાર્થ',
      hi: 'वनस्पति घी, जानवरों की चर्बी और मिनरल ऑयल की मिलावट का सबसे बड़ा शिकार',
    },
    alternateNames: ['ghee', 'desi ghee', 'butter', 'makhan', 'cow ghee', 'ઘી', 'દેશી ઘી', 'માખણ', 'घी', 'मक्खन'],
    icon: '🧈',
    riskSeverity: 'Critical',
    overview: {
      en: 'Pure cow and buffalo ghee is premium priced. Unscrupulous suppliers dilute it with hydrogenated vegetable oil (Vanaspati), mashed boiled potatoes/sweet potatoes, and toxic industrial oils.',
      gu: 'શુદ્ધ દેશી ઘી મોંઘુ હોવાથી તેમાં હાઇડ્રોજિનેટેડ વનસ્પતિ તેલ (ડાલ્ડા), બાફેલા બટાકા/શક્કરિયા અને અખાદ્ય તેલની ભેળસેળ વ્યાપક છે.',
      hi: 'देसी घी महंगा होने के कारण इसमें वनस्पति (डालडा), उबले आलू और अखाद्य तेल मिलाकर मुनाफा कमाया जाता है।',
    },
    adulterants: [
      {
        name: { en: 'Vanaspati (Hydrogenated Fat)', gu: 'વનસ્પતિ ઘી (ડાલ્ડા)', hi: 'वनस्पति घी (हाइड्रोजनीकृत वसा)' },
        riskLevel: 'High',
        description: {
          en: 'Solid hydrogenated vegetable fats possessing trans-fats, identical texture to churned ghee.',
          gu: 'ટ્રાન્સ-ફેટ ધરાવતું સસ્તું હાઇડ્રોજિનેટેડ તેલ જે ઘી જેવું જ દાણાદાર દેખાય છે.',
          hi: 'ट्रांस-फैट से भरपूर सस्ता तेल जो बिल्कुल घी जैसी बनावट रखता है।',
        },
        healthRisks: {
          en: 'Blocks arteries, elevates LDL cholesterol, sharply heightens coronary artery disease risk.',
          gu: 'હૃદયની ધમનીઓ બ્લોક થવી, ખરાબ કોલેસ્ટ્રોલ વધવું અને હાર્ટ અટેકનું ઊંચું જોખમ.',
          hi: 'हृदय की धमनियों में रुकावट, बैड कोलेस्ट्रॉल में वृद्धि और दिल के दौरे का खतरा।',
        },
      },
      {
        name: { en: 'Starch & Mashed Potatoes', gu: 'સ્ટાર્ચ અને બાફેલા બટાકા', hi: 'स्टार्च और उबला आलू' },
        riskLevel: 'Moderate',
        description: {
          en: 'Mashed tuber pastes blended into liquid ghee to increase bulk weight.',
          gu: 'વજન વધારવા માટે ઘીમાં બાફેલા બટાકા અથવા સ્ટાર્ચની પેસ્ટ મિક્સ કરવી.',
          hi: 'वजन बढ़ाने के लिए घी में उबले आलू या अरारोट मिलाया जाता है।',
        },
        healthRisks: {
          en: 'Bacterial spoilage, fungal mold formation, digestive disturbances.',
          gu: 'બેક્ટેરિયા અને ફૂગ પેદા થવી, પેટમાં ઈન્ફેક્શન.',
          hi: 'फफूंद लगना, आंतों में संक्रमण और पेट दर्द।',
        },
      },
    ],
    homeTests: [
      {
        id: 'ghee-sugar-hcl-test',
        testName: {
          en: 'Baudouin Test (Sugar & Lemon / Acid Test)',
          gu: 'બોડુઈન ટેસ્ટ (ખાંડ અને એસિડ / લીંબુ પરીક્ષણ)',
          hi: 'बाउडोन टेस्ट (चीनी और एसिड/नींबू परीक्षण)',
        },
        adulterantTargeted: { en: 'Vanaspati (contains sesame oil marker)', gu: 'વનસ્પતિ ઘી (ડાલ્ડા)', hi: 'वनस्पति घी' },
        difficulty: 'Intermediate',
        timeRequiredMinutes: 5,
        requiredMaterials: {
          en: ['5 ml Melted Ghee', '5 ml Hydrochloric Acid (or concentrated vinegar/lemon extract for mild screening)', 'A pinch of refined sugar', 'Test tube or glass cup'],
          gu: ['૫ મિલી ઓગાળેલું ઘી', '૫ મિલી હાઇડ્રોક્લોરિક એસિડ અથવા સાંદ્ર વિનેગર', 'એક ચપટી ખાંડ', 'કાચનો ગ્લાસ'],
          hi: ['५ मिली पिघला हुआ घी', '५ मिली हाइड्रोक्लोरिक एसिड या गाढ़ा सिरका', 'एक चुटकी पिसी चीनी', 'कांच की परखनली'],
        },
        stepByStep: {
          en: [
            'Pour 5 ml of melted ghee into a glass tube.',
            'Add 5 ml of concentrated acid and a pinch of sugar.',
            'Shake well for 2 minutes and allow to stand for 5 minutes.',
            'Look at the bottom layer for distinct crimson/pink color.',
          ],
          gu: [
            'કાચની નળીમાં ૫ મિલી ઓગાળેલું ઘી લો.',
            'તેમાં એસિડ અને ચપટી ખાંડ ઉમેરો.',
            '૨ મિનિટ સુધી સરખી રીતે હલાવો અને ૫ મિનિટ સ્થિર રહેવા દો.',
            'તળિયે બનતા રંગનું નિરીક્ષણ કરો.',
          ],
          hi: [
            '५ मिली पिघले घी में एसिड और थोड़ी चीनी डालें।',
            '२ मिनट तक अच्छी तरह हिलाएं और ५ मिनट शांत रहने दें।',
            'निचली परत में लाल/गुलाबी रंग की जांच करें।',
          ],
        },
        pureSampleResult: {
          en: 'Pure ghee produces no pink or crimson red colouration in the acid layer.',
          gu: 'શુદ્ધ ઘીમાં એસિડ વાળા ભાગમાં કોઈ ગુલાબી કે લાલ રંગ દેખાતો નથી.',
          hi: 'शुद्ध घी में निचली परत पर कोई गहरा गुलाबी या लाल रंग नहीं आता।',
        },
        adulteratedSampleResult: {
          en: 'If Vanaspati is present, the bottom layer turns distinct crimson red / bright pink.',
          gu: 'જો વનસ્પતિ ઘી હોય, તો તળિયે સ્પષ્ટ ગુલાબી અથવા ઘાટો લાલ રંગ બની જાય છે.',
          hi: 'वनस्पति घी की मौजूदगी पर निचली परत तुरंत गहरे गुलाबी या लाल रंग में बदल जाती है।',
        },
        canDetect: {
          en: ['Vanaspati containing sesame marker', 'Hydrogenated edible oils'],
          gu: ['તલના માર્કર વાળું વનસ્પતિ ઘી', 'હાઇડ્રોજિનેટેડ તેલ'],
          hi: ['तिल के तेल युक्त वनस्पति घी'],
        },
        cannotDetect: {
          en: ['Animal body tallow (pig/cattle fat)', 'Refined palm stearin', 'Mineral oils'],
          gu: ['પ્રાણીઓની ચરબી', 'પામ સ્ટીયરિન', 'ખનિજ તેલ'],
          hi: ['जानवरों की चर्बी', 'पाम स्टीयरिन', 'मिनरल ऑयल'],
        },
        safetyPrecautions: {
          en: ['Handle acid with care; do not inhale fumes; keep away from children.', 'Never consume the tested portion.'],
          gu: ['એસિડને કાળજીપૂર્વક વાપરો, બાળકોથી દૂર રાખો.', 'પરીક્ષણ કરેલ ઘી ક્યારેય ખાવું નહીં.'],
          hi: ['एसिड का इस्तेमाल सावधानी से करें।', 'परीक्षित घी को तुरंत फेंक दें।'],
        },
      },
      {
        id: 'ghee-palm-heat-test',
        testName: {
          en: 'Melt & Pan Heating Test',
          gu: 'પામ મેલ્ટ અને પેન હીટિંગ ટેસ્ટ',
          hi: 'पाम मेल्ट और गर्म पैन टेस्ट',
        },
        adulterantTargeted: { en: 'Mashed potatoes, wax, artificial thickeners', gu: 'બટાકા, મીણ, અખાદ્ય ઘટકો', hi: 'आलू, मोम, बाहरी मिलावट' },
        difficulty: 'Easy',
        timeRequiredMinutes: 1,
        requiredMaterials: {
          en: ['1 teaspoon Ghee', 'Clean palm or warm pan'],
          gu: ['૧ ચમચી ઘી', 'સાફ હથેળી અથવા ગરમ તવી'],
          hi: ['१ चम्मच घी', 'साफ हथेली या हल्की गर्म कड़ाही'],
        },
        stepByStep: {
          en: [
            'Place half a teaspoon of ghee onto your palm or a gently heated pan.',
            'Observe the speed and nature of melting.',
          ],
          gu: [
            'અડધી ચમચી ઘી તમારી હથેળી પર અથવા ગરમ તવી પર મૂકો.',
            'ઓગળવાની ઝડપ અને રંગ જુઓ.',
          ],
          hi: [
            'आधा चम्मच घी हथेली या हल्की गर्म कड़ाही में डालें।',
            'इसके पिघलने की गति पर नजर रखें।',
          ],
        },
        pureSampleResult: {
          en: 'Pure desi ghee melts instantly at human body temperature (36°C) within seconds and turns golden brown in a hot pan.',
          gu: 'શુદ્ધ ઘી શરીરના તાપમાને હથેળી પર મૂકતાં જ ક્ષણોમાં ઓગળી જાય છે અને તવી પર તરત બ્રાઉન થાય છે.',
          hi: 'शुद्ध घी शरीर के तापमान पर हथेली पर रखते ही तुरंत पिघल जाता है और पैन में तुरंत भूरा होता है।',
        },
        adulteratedSampleResult: {
          en: 'Adulterated ghee with animal tallow or paraffin stays solid on the palm and takes a long time to melt, burning with a pale yellowish smoke.',
          gu: 'ભેળસેળવાળું ઘી હથેળી પર ઓગળતું નથી, લાંબો સમય લાગે છે અને વિચિત્ર ગંધ આપે છે.',
          hi: 'मिलावटी घी हथेली पर जल्दी नहीं पिघलता और असामान्य महक छोड़ता है।',
        },
        canDetect: {
          en: ['High-melting waxes', 'Paraffin', 'Crude fats'],
          gu: ['હાઈ-મેલ્ટિંગ મીણ', 'પેરાફિન', 'અખાદ્ય ચરબી'],
          hi: ['पैराफिन मोम', 'अखाद्य चर्बी'],
        },
        cannotDetect: {
          en: ['Blended refined liquid vegetable oils (soybean, sunflower)'],
          gu: ['સોયાબીન કે સૂર્યમુખી તેલનું મિશ્રણ'],
          hi: ['सोयाबीन या पाम ऑयल का सूक्ष्म मिश्रण'],
        },
        safetyPrecautions: {
          en: ['Use gentle heat to avoid burns.'],
          gu: ['દાઝી ન જવાય તેનું ધ્યાન રાખવું.'],
          hi: ['कड़ाही ज्यादा गर्म न हो ताकि हाथ न जले।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'Gas Chromatography (GC) for Fatty Acid Profile & RP-HPLC for Triglycerides',
        gu: 'ફેટી એસિડ પ્રોફાઇલ માટે ગેસ ક્રોમેટોગ્રાફી (GC) અને RP-HPLC ટેસ્ટ',
        hi: 'फैटी एसिड प्रोफाइल के लिए गैस क्रोमैटोग्राफी (GC) और RP-HPLC',
      },
      whyLabNeeded: {
        en: 'Advanced synthetic fats, de-odorized palm oils, and animal tallow match ghee physical characteristics and can ONLY be resolved by measuring butyric acid ratio and Reichert-Meissl (RM) value.',
        gu: 'પ્રાણીઓની ચરબી અને રિફાઈન્ડ પામ ઓઈલની ભેળસેળ માત્ર બ્યુટીરિક એસિડ અને RM વેલ્યુ માપીને જ પકડી શકાય છે.',
        hi: 'जानवरों की चर्बी और रिफाइंड पाम ऑयल केवल फैटी एसिड प्रोफाइल व RM वैल्यू मापकर ही सिद्ध हो सकते हैं।',
      },
      equipmentAndChemicals: {
        en: ['Gas Chromatograph with FID (Flame Ionization Detector)', 'Reichert-Meissl & Polenske Distillation Apparatus', 'Baudouin Reagent Set'],
        gu: ['ગેસ ક્રોમેટોગ્રાફ (GC-FID)', 'RM ડિસ્ટિલેશન ઉપકરણ', 'બોડુઈન રિએજન્ટ'],
        hi: ['गैस क्रोमैटोग्राफ (GC-FID)', 'आरएम डिस्टिलेशन उपकरण', 'विशिष्ट रासायनिक रीएजेंट्स'],
      },
      recommendedLabTypes: {
        en: ['National Dairy Development Board (NDDB) CALF Lab Anand', 'FSSAI Regional Laboratories', 'NABL Accredited Oil & Fat Labs'],
        gu: ['નેશનલ ડેરી ડેવલપમેન્ટ બોર્ડ (NDDB) CALF લેબ આણંદ', 'ગુજરાત FDCA ફૂડ લેબોરેટરી', 'NABL ડેરી લેબ્સ'],
        hi: ['एनडीडीबी (NDDB) CALF प्रयोगशाला आणंद', 'FSSAI अधिसूचित प्रयोगशालाएं'],
      },
      approxCostINR: '₹1,500 – ₹3,500 (Fatty acid profile + RM value test)',
      fssaiStandardRef: 'FSS (Food Products Standards and Food Additives) Regulations 2011 – Regulation 2.1.8 (Ghee standards: RM Value minimum 28.0 in most Indian states)',
      sampleSubmissionAdvice: {
        en: 'Send 200g of sample in a dark, clean glass jar without air headspace at ambient temperature.',
        gu: '૨૦૦ ગ્રામ ઘી હવાચુસ્ત કાચની બરણીમાં ભરી સીલ કરીને લેબમાં આપો.',
        hi: '२०० ग्राम घी को कांच के जार में बिना हवा छोड़े सील करके प्रयोगशाला भेजें।',
      },
    },
  },

  // --- 3. MUSTARD OIL (OILS) ---
  {
    id: 'mustard-oil',
    categoryId: 'oils_ghee',
    name: {
      en: 'Mustard Oil (Kachi Ghani / Sarson Ka Tel)',
      gu: 'રાઈ / સરસવનું તેલ (કાચી ઘાણી)',
      hi: 'सरसों का तेल (कच्ची घानी)',
    },
    subtitle: {
      en: 'Vulnerable to lethal Argemone mexicana seed oil causing epidemic dropsy',
      gu: 'ઝેરી આર્જિમોન તેલની ભેળસેળનું મોટું જોખમ જે ડ્રોપ્સી રોગ પેદા કરે છે',
      hi: 'घातक आर्जिमोन तेल की मिलावट का खतरा जिससे ड्रॉपसी रोग होता है',
    },
    alternateNames: ['mustard oil', 'sarson tel', 'rai tel', 'kachi ghani', 'સરસવ તેલ', 'રાઈનું તેલ', 'કાચી ઘાણી', 'सरसों का तेल'],
    icon: '🫒',
    riskSeverity: 'Critical',
    overview: {
      en: 'Mustard seeds look very similar to Argemone mexicana (prickly poppy) seeds. Unscrupulous oil millers blend Argemone oil to boost profit, introducing sanguinarine and dihydrosanguinarine toxins.',
      gu: 'સરસવના દાણા દારૂડી (આર્જિમોન)ના દાણા જેવા જ દેખાય છે. આર્જિમોન તેલની ભેળસેળથી માનવ શરીરમાં પગમાં સોજા, હૃદયની નિષ્ફળતા અને અંધાપો આવી શકે છે.',
      hi: 'सरसों के दानों में आर्जिमोन के बीज मिलाकर तेल निकाला जाता है, जो शरीर के लिए अत्यंत विषैला होता है।',
    },
    adulterants: [
      {
        name: { en: 'Argemone Mexicana Oil', gu: 'આર્જિમોન / દારૂડીનું તેલ', hi: 'आर्जिमोन मैक्सिकाना तेल' },
        riskLevel: 'Severe',
        description: {
          en: 'Extracted from thorny poppy weed seeds resembling black mustard.',
          gu: 'કાળા સરસવ જેવા જ દેખાતા કાંટાળા છોડના ઝેરી બીજમાંથી બનતું તેલ.',
          hi: 'सरसों जैसे दिखने वाले भटकटैया के जहरीले बीजों से निकाला गया तेल।',
        },
        healthRisks: {
          en: 'Epidemic dropsy, severe bilateral leg edema, heart failure, glaucoma leading to irreversible blindness.',
          gu: 'એપિડેમિક ડ્રોપ્સી રોગ, પગમાં ગંભીર સોજા, હાર્ટ ફેઇલ્યોર અને કાયમી અંધાપો.',
          hi: 'एपिडेमिक ड्रॉपसी, पैरों में भारी सूजन, दिल का दौरा और स्थायी अंधापन।',
        },
      },
      {
        name: { en: 'Mineral Oil & Artificial Dye', gu: 'મિનરલ ઓઈલ અને રંગ', hi: 'मिनरल ऑयल और पीला रंग' },
        riskLevel: 'Severe',
        description: {
          en: 'Petroleum-based cheap liquid paraffin colored with butter yellow or metanil yellow.',
          gu: 'પીળા રંગવાળું સસ્તું પેટ્રોલિયમ આધારિત મિનરલ ઓઇલ.',
          hi: 'पेट्रोलियम आधारित तरल पैराफिन जिसमें कृत्रिम पीला रंग मिलाया जाता है।',
        },
        healthRisks: {
          en: 'Carcinogenic, damages gastrointestinal mucosa, impairs fat-soluble vitamin absorption.',
          gu: 'કેન્સરનું જોખમ, પેટ અને આંતરડાનું નુકસાન, વિટામિન શોષણ અટકવું.',
          hi: 'कैंसरकारी, आंतों को गंभीर नुकसान, विटामिन की कमी।',
        },
      },
    ],
    homeTests: [
      {
        id: 'mustard-nitric-acid',
        testName: {
          en: 'Nitric Acid Ring Test for Argemone Oil',
          gu: 'નાઈટ્રિક એસિડ રિંગ ટેસ્ટ (આર્જિમોન તેલ માટે)',
          hi: 'नाइट्रिक एसिड रिंग टेस्ट (आर्जिमोन मिलावट हेतु)',
        },
        adulterantTargeted: { en: 'Argemone mexicana seed oil', gu: 'આર્જિમોન તેલ', hi: 'आर्जिमोन का तेल' },
        difficulty: 'Intermediate',
        timeRequiredMinutes: 4,
        requiredMaterials: {
          en: ['5 ml Mustard oil', '5 ml Concentrated Nitric Acid (HNO3)', 'Clean test tube or narrow glass'],
          gu: ['૫ મિલી સરસવનું તેલ', '૫ મિલી કોન્સન્ટ્રેટેડ નાઈટ્રિક એસિડ', 'કાચની સાંકડી નળી'],
          hi: ['५ मिली सरसों का तेल', '५ मिली नाइट्रिक एसिड', 'कांच की परखनली'],
        },
        stepByStep: {
          en: [
            'Take 5 ml of mustard oil in a test tube.',
            'Carefully add 5 ml of concentrated nitric acid down the side of the tube.',
            'Shake carefully and let the layers settle for 2 to 3 minutes.',
            'Inspect the junction where oil and acid interface meet.',
          ],
          gu: [
            'કાચની નળીમાં ૫ મિલી સરસવનું તેલ લો.',
            'તેમાં કાળજીપૂર્વક ૫ મિલી નાઈટ્રિક એસિડ ઉમેરો.',
            'ધીમેથી હલાવી ૨-૩ મિનિટ સ્થિર રહેવા દો.',
            'બંને પ્રવાહી મળવાના સ્થાને બનતી રિંગ જુઓ.',
          ],
          hi: [
            'परखनली में ५ मिली सरसों तेल लें।',
            'सावधानी से ५ मिली नाइट्रिक एसिड डालें।',
            'हल्के से हिलाकर २-३ मिनट शांत रखें।',
            'दोनों परतों के मिलन बिंदु पर रंगीन घेरा (रिंग) देखें।',
          ],
        },
        pureSampleResult: {
          en: 'Pure mustard oil shows no reddish-brown ring at the junction.',
          gu: 'શુદ્ધ તેલમાં કોઈ લાલ-કથ્થાઈ રંગની રિંગ બનતી નથી.',
          hi: 'शुद्ध सरसों के तेल में कोई लाल-भूरा छल्ला (रिंग) नहीं बनता।',
        },
        adulteratedSampleResult: {
          en: 'If contaminated with Argemone oil, a prominent crimson-red / reddish-brown ring appears at the interface.',
          gu: 'જો આર્જિમોન તેલ હોય, તો સ્પષ્ટ લાલ-કથ્થાઈ રંગની રિંગ બને છે.',
          hi: 'आर्जिमोन मिले तेल में दोनों परतों के बीच गहरा लाल-भूरा छल्ला स्पष्ट दिखाई देता है।',
        },
        canDetect: {
          en: ['Argemone seed oil even at 0.1% concentration'],
          gu: ['૦.૧% જેટલી ઓછી માત્રાનું આર્જિમોન તેલ પણ પકડાઈ જાય છે'],
          hi: ['आर्जिमोन तेल की ०.१% तक की सूक्ष्म मात्रा'],
        },
        cannotDetect: {
          en: ['Refined rice bran oil blend', 'Pesticide residue'],
          gu: ['રાઇસ બ્રાન તેલનું મિશ્રણ', 'જંતુનાશક દવા'],
          hi: ['राइस ब्रान तेल का मिश्रण', 'कीटनाशक रसायन'],
        },
        safetyPrecautions: {
          en: ['Nitric acid is corrosive. Wear gloves and eye protection. Do not touch or inhale.'],
          gu: ['નાઈટ્રિક એસિડ દાહક છે. ગ્લોવ્ઝ પહેરો, હાથ પર પડવા ન દો.'],
          hi: ['नाइट्रिक एसिड संक्षारक है, दस्ताने पहनें और बच्चों से दूर रखें।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'TLC (Thin Layer Chromatography) / HPLC for Sanguinarine Alkaloid',
        gu: 'સેન્ગ્વિનારીન માટે થિન લેયર ક્રોમેટોગ્રાફી (TLC) અને HPLC',
        hi: 'सैंगुइनारिन टॉक्सिन हेतु टीएलसी (TLC) और एचपीएलसी (HPLC)',
      },
      whyLabNeeded: {
        en: 'Legal confirmation of epidemic dropsy toxins requires chromatographic detection of sanguinarine under UV 366nm.',
        gu: 'કાનૂની કાર્યવાહી અને સલામતી પુષ્ટિ માટે UV લાઈટ હેઠળ TLC પરીક્ષણ ફરજિયાત છે.',
        hi: 'कानूनी पुष्टि के लिए यूवी लाइट के तहत टीएलसी परीक्षण आवश्यक है।',
      },
      equipmentAndChemicals: {
        en: ['Silica Gel G TLC plates', 'UV Cabinet 366nm', 'HPLC with Photodiode Array Detector', 'Standard Sanguinarine Reference'],
        gu: ['સિલિકા જેલ પ્લેટ્સ', 'UV કેબિનેટ (૩૬૬ nm)', 'HPLC સિસ્ટમ'],
        hi: ['सिलिका जेल टीएलसी प्लेट', 'यूवी कैबिनेट ३६६nm', 'एचपीएलसी सिस्टम'],
      },
      recommendedLabTypes: {
        en: ['State Public Health Laboratories', 'NABL accredited edible oil analysis labs'],
        gu: ['રાજ્ય જાહેર આરોગ્ય પ્રયોગશાળાઓ', 'NABL પ્રમાણિત લેબ્સ'],
        hi: ['राज्य खाद्य एवं औषधि परीक्षण प्रयोगशाला', 'एनएबीएल खाद्य प्रयोगशाला'],
      },
      approxCostINR: '₹800 – ₹1,800',
      fssaiStandardRef: 'FSS (Prohibition and Restrictions on Sales) Regulations, 2011 – Regulation 2.1.1 (Must be free from Argemone oil, negative TLC test)',
      sampleSubmissionAdvice: {
        en: 'Provide 250 ml in clean, sealed amber glass bottle.',
        gu: '૨૫૦ મિલી તેલ કાળી કે બ્રાઉન કાચની બોટલમાં ભરી મોકલો.',
        hi: '२५० मिली तेल को शीलबंद कांच की बोतल में भेजें।',
      },
    },
  },

  // --- 4. TURMERIC POWDER (SPICES) ---
  {
    id: 'turmeric',
    categoryId: 'spices',
    name: {
      en: 'Turmeric Powder (Haldi)',
      gu: 'હળદર પાવડર (હળદર)',
      hi: 'हल्दी पाउडर',
    },
    subtitle: {
      en: 'Golden immunity spice frequently loaded with neurotoxic Metanil Yellow and Lead Chromate',
      gu: 'મેટાનિલ યલો કેમિકલ કલર અને લીડ ક્રોમેટની ઝેરી ભેળસેળથી જોખમી બનતો મસાલો',
      hi: 'मेटानिल येलो रसायन और लेड क्रोमेट की विषैली मिलावट का शिकार',
    },
    alternateNames: ['turmeric', 'haldi', 'haldar', 'turmeric powder', 'હળદર', 'હળદર પાવડર', 'हल्दी', 'हल्दी पाउडर'],
    icon: '✨',
    riskSeverity: 'Critical',
    overview: {
      en: 'Turmeric is hailed for curcumin benefits, but unbranded powders often contain toxic non-permitted coal tar dye (Metanil Yellow), lead chromate to enhance bright yellow color, and chalk powder/talc.',
      gu: 'હળદર તેના ઔષધીય ગુણો માટે જાણીતી છે, પરંતુ ખુલ્લી હળદરમાં સુંદર પીળો રંગ લાવવા માટે ઝેરી મેટાનિલ યલો, સીસું (લીડ ક્રોમેટ) અને ચોક પાવડર ભેળવાય છે.',
      hi: 'हल्दी में अत्यधिक पीलापन दिखाने के लिए प्रतिबंधित जहरीला कोयला-तार डाई (मेटानिल येलो), लेड क्रोमेट और चॉक पाउडर मिलाया जाता है।',
    },
    adulterants: [
      {
        name: { en: 'Metanil Yellow Dye', gu: 'મેટાનિલ યલો ડાય (કેમિકલ રંગ)', hi: 'मेटानिल येलो डाई' },
        riskLevel: 'Severe',
        description: {
          en: 'Industrial synthetic azo dye used in textiles, non-permitted in any food.',
          gu: 'કાપડ ઉદ્યોગમાં વપરાતો ઝેરી સિન્થેટિક રંગ જે ખોરાકમાં સખત પ્રતિબંધિત છે.',
          hi: 'कपड़ा उद्योग में इस्तेमाल होने वाला गैर-खाद्य विषैला रासायनिक रंग।',
        },
        healthRisks: {
          en: 'Severe neurotoxicity, testicular damage, stomach ulcers, proven carcinogen.',
          gu: 'મગજ અને નર્વસ સિસ્ટમને નુકસાન, પ્રજનન ક્ષમતા પર માઠી અસર, કેન્સરનું જોખમ.',
          hi: 'तंत्रिका तंत्र पर विषैला प्रभाव, पेट के घाव, कैंसरकारी तत्व।',
        },
      },
      {
        name: { en: 'Lead Chromate (PbCrO4)', gu: 'લીડ ક્રોમેટ (સીસું)', hi: 'लेड क्रोमेट (सीसा)' },
        riskLevel: 'Severe',
        description: {
          en: 'Heavy metal chemical pigment added to give roots and powder radiant golden shine.',
          gu: 'હળદરને ચમકદાર સોનેરી બનાવવા માટે ઉમેરાતું ઝેરી સીસાનું રસાયણ.',
          hi: 'हल्दी की गांठों को चमकीला पीला दिखाने के लिए मिलाया जाने वाला भारी धातु रसायन।',
        },
        healthRisks: {
          en: 'Irreversible brain damage in growing children, severe anemia, kidney failure, mental retardation.',
          gu: 'બાળકોમાં બૌદ્ધિક વિકાસ અટકવો, ગંભીર એનિમિયા, કિડની ફેલ્યોર.',
          hi: 'बच्चों के मानसिक विकास में स्थायी रुकावट, खून की भारी कमी, किडनी फेल होना।',
        },
      },
      {
        name: { en: 'Chalk & Yellow Soapstone', gu: 'ચોક પાવડર અને સાબુ પથ્થર', hi: 'चॉक पाउडर और सोपस्टोन' },
        riskLevel: 'Moderate',
        description: {
          en: 'Mineral powders added to increase packet weight cheaply.',
          gu: 'વજન વધારવા માટે ઉમેરાતો સફેદ ચોક પાવડર.',
          hi: 'वजन बढ़ाने के लिए मिलाया जाने वाला सस्ता खनिज पाउडर।',
        },
        healthRisks: {
          en: 'Kidney and bladder stone formation, gastrointestinal distress.',
          gu: 'કિડનીમાં પથરી, પેટમાં ભારે દુખાવો.',
          hi: 'गुर्दे की पथरी, पेट में ऐंठन।',
        },
      },
    ],
    homeTests: [
      {
        id: 'turmeric-water-settling',
        testName: {
          en: 'Water Settling Test (Pure vs Added Colour)',
          gu: 'પાણીમાં સેટલિંગ ટેસ્ટ (શુદ્ધ વિરુદ્ધ નકલી રંગ)',
          hi: 'पानी में घुलनशीलता परीक्षण (शुद्ध बनाम मिलावटी)',
        },
        adulterantTargeted: { en: 'Artificial dyes, chalk, starch', gu: 'કૃત્રિમ રંગો, ચોક, સ્ટાર્ચ', hi: 'कृत्रिम रंग, चॉक' },
        difficulty: 'Easy',
        timeRequiredMinutes: 2,
        requiredMaterials: {
          en: ['1 teaspoon Turmeric powder', 'A clear glass tumbler filled with lukewarm water'],
          gu: ['૧ ચમચી હળદર પાવડર', 'નવશેકા પાણીથી ભરેલો કાચનો પારદર્શક ગ્લાસ'],
          hi: ['१ चम्मच हल्दी पाउडर', 'हल्के गुनगुने पानी से भरा पारदर्शी कांच का गिलास'],
        },
        stepByStep: {
          en: [
            'Take a glass full of lukewarm water.',
            'Add 1 teaspoon of turmeric powder on the water surface without stirring.',
            'Let it sit undisturbed for 20 minutes.',
            'Observe how the powder settles and look at the clarity of the water on top.',
          ],
          gu: [
            'એક કાચના ગ્લાસમાં નવશેકું પાણી લો.',
            'હલાવ્યા વગર ૧ ચમચી હળદર પાવડર પાણીની સપાટી પર નાખો.',
            '૨૦ મિનિટ સુધી તેને અડ્યા વગર રહેવા દો.',
            'પાવડર કેવી રીતે તળિયે બેસે છે અને ઉપરના પાણીનો રંગ જુઓ.',
          ],
          hi: [
            'कांच के गिलास में गुनगुना पानी लें।',
            'बिना हिलाए १ चम्मच हल्दी पानी की सतह पर छोड़ दें।',
            '२० मिनट तक गिलास को बिना हिलाए स्थिर रखें।',
            'हल्दी के बैठने और ऊपर के पानी के रंग को ध्यान से देखें।',
          ],
        },
        pureSampleResult: {
          en: 'Pure turmeric slowly settles down to the bottom. The water above remains clear, light yellow, and transparent.',
          gu: 'શુદ્ધ હળદર ધીમે ધીમે તળિયે બેસી જાય છે અને ઉપરનું પાણી પારદર્શક, આછું પીળું રહે છે.',
          hi: 'शुद्ध हल्दी धीरे-धीरे तली में बैठ जाती है और ऊपर का पानी साफ, हल्का पीला रहता है।',
        },
        adulteratedSampleResult: {
          en: 'Adulterated turmeric makes the entire water cloudy and intensely dark neon yellow, indicating artificial chemical dyes.',
          gu: 'ભેળસેળવાળી હળદરથી આખું પાણી તરત જ ઘાટું અંધારું કે ચમકદાર પીળું બની જાય છે.',
          hi: 'मिलावटी हल्दी पूरे पानी को तुरंत गाढ़ा, अपारदर्शी और तेज पीला कर देती है।',
        },
        canDetect: {
          en: ['Water-soluble artificial dyes', 'Coarse insoluble chalk'],
          gu: ['પાણીમાં ઓગળતા કેમિકલ રંગો', 'ચોક પાવડર'],
          hi: ['घुलनशील रासायनिक रंग', 'चॉक पाउडर'],
        },
        cannotDetect: {
          en: ['Trace Lead chromate parts-per-million (PPM)', 'Pesticides'],
          gu: ['સીસા (લીડ)ની અતિ સૂક્ષ્મ માત્રા'],
          hi: ['लेड (सीसा) के सूक्ष्म कण'],
        },
        safetyPrecautions: {
          en: ['Safe home test using plain water. Do not consume tested water.'],
          gu: ['સાદા પાણીથી થતો ટેસ્ટ છે, પરીક્ષણ કરેલું પાણી ફેંકી દો.'],
          hi: ['सामान्य पानी से सुरक्षित परीक्षण। पानी को पीएं नहीं।'],
        },
      },
      {
        id: 'turmeric-acid-test',
        testName: {
          en: 'Acid Test for Metanil Yellow Dye',
          gu: 'મેટાનિલ યલો માટે એસિડ ટેસ્ટ',
          hi: 'मेटानिल येलो हेतु एसिड टेस्ट',
        },
        adulterantTargeted: { en: 'Metanil Yellow dye', gu: 'મેટાનિલ યલો રંગ', hi: 'मेटानिल येलो डाई' },
        difficulty: 'Easy',
        timeRequiredMinutes: 2,
        requiredMaterials: {
          en: ['A pinch of turmeric powder', 'Fresh lemon juice or dilute hydrochloric acid / vinegar', 'White ceramic spoon or plate'],
          gu: ['ચપટી હળદર પાવડર', 'લીંબુનો રસ અથવા વિનેગર', 'સફેદ ચમચી કે રકાબી'],
          hi: ['एक चुटकी हल्दी', 'ताजा नींबू का रस या सिरका', 'सफेद प्लेट या चम्मच'],
        },
        stepByStep: {
          en: [
            'Place a pinch of turmeric in a white saucer.',
            'Squeeze a few drops of lemon juice or add dilute acid.',
            'Observe colour change. Now add a few drops of water.',
          ],
          gu: [
            'સફેદ રકાબીમાં ચપટી હળદર લો.',
            'તેના પર લીંબુના રસના થોડા ટીપાં નાખો.',
            'રંગ જુઓ અને પછી થોડું પાણી ઉમેરો.',
          ],
          hi: [
            'सफेद प्लेट पर थोड़ी हल्दी रखें।',
            'उस पर नींबू के रस की कुछ बूंदें डालें।',
            'रंग में बदलाव देखें और फिर थोड़ा पानी मिलाएं।',
          ],
        },
        pureSampleResult: {
          en: 'Pure turmeric turns slightly reddish with acid, but immediately reverts to its original yellow when diluted with water.',
          gu: 'શુદ્ધ હળદર લીંબુથી થોડી લાલ થાય છે, પરંતુ પાણી નાખતાં જ પાછી સામાન્ય પીળા રંગની થઈ જાય છે.',
          hi: 'शुद्ध हल्दी एसिड से हल्की लाल होती है, पर पानी मिलाने पर तुरंत वापस पीली हो जाती है।',
        },
        adulteratedSampleResult: {
          en: 'If Metanil Yellow is present, it turns intense bright magenta / pink and DOES NOT revert to yellow even after adding water.',
          gu: 'મેટાનિલ યલો હોય તો તે ઘાટો ગુલાબી/મેજેન્ટા રંગ પકડે છે અને પાણી ઉમેરવા છતાં પીળો થતો નથી.',
          hi: 'मेटानिल येलो होने पर गहरा गुलाबी/मैजेंटा रंग बनता है जो पानी डालने पर भी पीला नहीं होता।',
        },
        canDetect: {
          en: ['Metanil Yellow industrial textile dye'],
          gu: ['મેટાનિલ યલો ટેક્સટાઇલ રંગ'],
          hi: ['मेटानिल येलो रासायनिक डाई'],
        },
        cannotDetect: {
          en: ['Natural curcumin percentage', 'Lead chromate'],
          gu: ['કુદરતી કુરક્યુમિનની ટકાવારી', 'લીડ ક્રોમેટ'],
          hi: ['नेचुरल करक्यूमिन का प्रतिशत', 'लेड क्रोमेट'],
        },
        safetyPrecautions: {
          en: ['Discard sample after inspection.'],
          gu: ['પરીક્ષણ પછી નમૂનો ફેંકી દેવો.'],
          hi: ['परीक्षित हल्दी को फेंक दें।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'ICP-MS (Inductively Coupled Plasma Mass Spectrometry) for Lead & HPLC for Synthetic Dyes',
        gu: 'સીસા (લીડ) માટે ICP-MS અને કેમિકલ રંગ માટે HPLC ટેસ્ટ',
        hi: 'लेड (सीसा) जांच हेतु ICP-MS और सिंथेटिक रंगों हेतु HPLC',
      },
      whyLabNeeded: {
        en: 'Home testing cannot quantify heavy metal parts-per-million (PPM). Lead chromate is neurotoxic even at microgram levels; ICP-MS measures down to parts per billion (PPB).',
        gu: 'સીસા (લેડ) જેવી ઝેરી ભારે ધાતુઓ માઇક્રોગ્રામમાં પણ મગજને નુકસાન કરે છે, જે માત્ર ICP-MS ઉપકરણ દ્વારા જ માપી શકાય છે.',
        hi: 'लेड क्रोमेट जैसे विषैले भारी धातुओं की सूक्ष्म मात्रा केवल ICP-MS उपकरण से ही मापी जा सकती है।',
      },
      equipmentAndChemicals: {
        en: ['ICP-MS (Agilent/PerkinElmer)', 'HPLC with UV-Vis detector', 'Microwave digestion system with trace nitric acid'],
        gu: ['ICP-MS સ્પેક્ટ્રોમીટર', 'HPLC સિસ્ટમ', 'માઇક્રોવેવ ડાયજેશન સિસ્ટમ'],
        hi: ['ICP-MS स्पेक्ट्रोमीटर', 'HPLC उपकरण', 'माइक्रोवेव डाइजेशन सिस्टम'],
      },
      recommendedLabTypes: {
        en: ['FSSAI National Food Laboratories', 'Spices Board Quality Evaluation Laboratories (Mumbai, Cochin, Guntur, Chennai)'],
        gu: ['સ્પાઈસીસ બોર્ડ ક્વોલિટી લેબોરેટરી', 'FSSAI માન્ય પ્રયોગશાળાઓ'],
        hi: ['स्पाइसेस बोर्ड ऑफ इंडिया टेस्टिंग लैब', 'FSSAI राष्ट्रीय खाद्य प्रयोगशाला'],
      },
      approxCostINR: '₹1,200 – ₹2,800 (Lead test + Artificial color screening)',
      fssaiStandardRef: 'FSS (Contaminants, Toxins and Residues) Regulations 2011 – Regulation 2.1 (Lead limit in whole/powdered turmeric is max 2.5 mg/kg or ppm)',
      sampleSubmissionAdvice: {
        en: 'Submit 100g sample in a clean zip-lock pouch or sterile plastic container.',
        gu: '૧૦૦ ગ્રામ હળદર સાફ પ્લાસ્ટિક બેગ અથવા કાચની બરણીમાં મોકલો.',
        hi: '१०० ग्राम हल्दी पाउडर साफ एयरटाइट पाउच में भेजें।',
      },
    },
  },

  // --- 5. RED CHILLI POWDER (SPICES) ---
  {
    id: 'red-chilli',
    categoryId: 'spices',
    name: {
      en: 'Red Chilli Powder (Lal Mirch)',
      gu: 'લાલ મરચું પાવડર (મરચું)',
      hi: 'लाल मिर्च पाउडर',
    },
    subtitle: {
      en: 'Often adulterated with brick powder, wood sawdust, and carcinogenic Sudan Dyes',
      gu: 'ઈંટનો ભૂકો, લાકડાંનો વહેર અને કેન્સરકારક સુદાન લાલ રંગની ભેળસેળ',
      hi: 'ईंट का चूरा, लकड़ी का बुरादा और कैंसरकारी सूडान रंगों की मिलावट',
    },
    alternateNames: ['red chilli', 'chilli powder', 'lal mirch', 'marchu', 'લાલ મરચું', 'મરચું પાવડર', 'लाल मिर्च', 'मिर्च'],
    icon: '🌶️',
    riskSeverity: 'Critical',
    overview: {
      en: 'Red chilli powder is notorious for adulteration with red brick dust, dyed wood sawdust, lead salts, and illegal industrial red dyes like Sudan I, II, III, IV and Rhodamine B.',
      gu: 'લાલ મરચાંના પાવડરમાં વજન વધારવા માટે લાલ ઈંટનો ભૂકો, લાકડાનો વહેર અને લાલ રંગ માટે પ્રતિબંધિત સુદાન રંગ ભેળવવામાં આવે છે.',
      hi: 'लाल मिर्च पाउडर में वजन बढ़ाने के लिए ईंट का चूरा, रंगा हुआ लकड़ी का बुरादा और सूडान जैसे खतरनाक कैंसरकारी रंग मिलाए जाते हैं।',
    },
    adulterants: [
      {
        name: { en: 'Brick Powder & Sand Dust', gu: 'ઈંટનો ભૂકો અને લાલ રેતી', hi: 'ईंट का चूरा और लाल रेत' },
        riskLevel: 'Severe',
        description: {
          en: 'Ground construction brick and silica dust added to mimic natural ground pepper texture.',
          gu: 'વજન વધારવા માટે લાલ ઈંટ અને રેતીનો બારીક ભૂકો ઉમેરવો.',
          hi: 'वजन बढ़ाने के लिए पिसी हुई लाल ईंट व रेत मिलाना।',
        },
        healthRisks: {
          en: 'Severe stomach ulceration, gastritis, intestinal perforation, dental abrasion.',
          gu: 'પેટમાં ચાંદા (અલ્સર), આંતરડાનું નુકસાન, દાંત ઘસાઈ જવા.',
          hi: 'पेट में अल्सर, आंतों को नुकसान, अत्यधिक जलन व पाचन तंत्र की खराबी।',
        },
      },
      {
        name: { en: 'Sudan Dyes (Sudan I to IV) & Rhodamine B', gu: 'સુદાન ડાય અને રોડામાઈન બી (લાલ કેમિકલ રંગ)', hi: 'सूडान डाई और रोडामाइन बी' },
        riskLevel: 'Severe',
        description: {
          en: 'Synthetic solvent dyes formulated for polishing shoe wax and plastics, strictly prohibited globally.',
          gu: 'પ્લાસ્ટિક અને પોલિશ માટે વપરાતો ઝેરી લાલ ઔદ્યોગિક રંગ.',
          hi: 'जूते की पॉलिश और प्लास्टिक के लिए इस्तेमाल होने वाले प्रतिबंधित रासायनिक रंग।',
        },
        healthRisks: {
          en: 'Potent genotoxic carcinogen that damages DNA and triggers liver and bladder cancers.',
          gu: 'DNA ને નુકસાન કરનાર અને કેન્સર પેદા કરનાર અત્યંત ઝેરી તત્વ.',
          hi: 'डीएनए को क्षति पहुंचाने वाले और लिवर कैंसर पैदा करने वाले तत्व।',
        },
      },
    ],
    homeTests: [
      {
        id: 'chilli-water-glass-test',
        testName: {
          en: 'Water Sedimentation & Rub Test (Brick & Grit)',
          gu: 'પાણી સેટલિંગ અને રબ ટેસ્ટ (ઈંટનો ભૂકો અને રેતી)',
          hi: 'पानी तलछट और घर्षण परीक्षण (ईंट का चूरा व रेत)',
        },
        adulterantTargeted: { en: 'Brick dust, sand, saw dust', gu: 'ઈંટનો ભૂકો, રેતી, લાકડાનો વહેર', hi: 'ईंट का चूरा, रेत, लकड़ी का बुरादा' },
        difficulty: 'Easy',
        timeRequiredMinutes: 3,
        requiredMaterials: {
          en: ['1 teaspoon Chilli powder', 'Glass tumbler of plain water'],
          gu: ['૧ ચમચી લાલ મરચું', 'પાણી ભરેલો કાચનો ગ્લાસ'],
          hi: ['१ चम्मच लाल मिर्च', 'साफ पानी से भरा कांच का गिलास'],
        },
        stepByStep: {
          en: [
            'Add 1 teaspoon of chilli powder into a glass of plain water.',
            'Do not stir. Wait for 5 minutes.',
            'Examine the sediment at the bottom and floating material on the surface.',
            'Take a small amount of bottom sediment and rub it between your fingers.',
          ],
          gu: [
            'કાચના ગ્લાસમાં ૧ ચમચી મરચું પાવડર નાખો.',
            'હલાવ્યા વગર ૫ મિનિટ રહેવા દો.',
            'તળિયે બેસેલા કચરા અને ઉપર તરતી સામગ્રીનું નિરીક્ષણ કરો.',
            'તળિયે બેસેલા પદાર્થને આંગળીઓ વચ્ચે ઘસીને જુઓ.',
          ],
          hi: [
            'कांच के गिलास में १ चम्मच मिर्च पाउडर डालें।',
            'बिना हिलाए ५ मिनट इंतजार करें।',
            'तली में बैठे कणों और सतह पर तैरती सामग्री को देखें।',
            'तली की तलछट को उंगलियों के बीच रगड़कर देखें।',
          ],
        },
        pureSampleResult: {
          en: 'Pure chilli powder leaves little to no gritty sediment. It feels smooth when rubbed between fingers.',
          gu: 'શુદ્ધ મરચાંમાં તળિયે કરકરી રેતી જેવો કચરો નથી બેસતો અને આંગળીઓ વચ્ચે લીસું લાગે છે.',
          hi: 'शुद्ध मिर्च में तली पर कोई किरकिराहट नहीं होती और उंगलियों के बीच मुलायम अहसास होता है।',
        },
        adulteratedSampleResult: {
          en: 'Brick dust and sand settle rapidly at the bottom and feel harsh and gritty when rubbed. Dyed sawdust floats noticeably at the top surface.',
          gu: 'ઈંટનો ભૂકો અને રેતી તરત તળિયે બેસે છે અને ઘસતાં કચકચ બોલે છે; લાકડાનો વહેર પાણી ઉપર તરે છે.',
          hi: 'ईंट का चूरा व रेत तुरंत तली में बैठते हैं और रगड़ने पर कंकड़ जैसे किरकिराते हैं; लकड़ी का बुरादा ऊपर तैरता है।',
        },
        canDetect: {
          en: ['Brick powder', 'Sand and grit', 'Light sawdust'],
          gu: ['ઈંટનો ભૂકો', 'રેતીના કણ', 'લાકડાનો વહેર'],
          hi: ['ईंट का चूरा', 'रेत के कण', 'लकड़ी का बुरादा'],
        },
        cannotDetect: {
          en: ['Microscopic Sudan dyes in low concentrations', 'Pesticide residues'],
          gu: ['સુદાન કેમિકલ રંગનું પ્રમાણ'],
          hi: ['सूडान डाई की सूक्ष्म मात्रा'],
        },
        safetyPrecautions: {
          en: ['Wash hands thoroughly after touching chilli sediment. Do not touch your eyes!'],
          gu: ['મરચું અડ્યા પછી હાથ સાબુથી ધોઈ લેવા, આંખે હાથ ન અડાડવો.'],
          hi: ['मिर्च छूने के बाद हाथ साबुन से धोएं, आंखों में हाथ बिल्कुल न लगाएं।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'LC-MS/MS for Illegal Sudan I–IV Dyes & Total Ash / Acid Insoluble Ash test',
        gu: 'સુદાન રંગ માટે LC-MS/MS અને એસિડ ઇનસોલ્યુબલ એશ (રાખ) ટેસ્ટ',
        hi: 'अवैध सूडान रंगों के लिए LC-MS/MS और एसिड इनसॉल्यूबल ऐश टेस्ट',
      },
      whyLabNeeded: {
        en: 'Sudan dyes can only be definitively identified using Liquid Chromatography coupled with tandem mass spectrometry (LC-MS/MS) with detection limits down to 10 PPB.',
        gu: 'સુદાન ડાય જેવા ઝેરી રંગો અત્યંત આધુનિક LC-MS/MS મશીન દ્વારા જ ૧૦૦% સાબિત થઈ શકે છે.',
        hi: 'सूडान रंगों की पुष्टि केवल आधुनिक LC-MS/MS तकनीक द्वारा ही संभव है।',
      },
      equipmentAndChemicals: {
        en: ['Triple Quadrupole LC-MS/MS', 'Muffle furnace (for Total Ash at 550°C)', 'Dilute Hydrochloric acid'],
        gu: ['ટ્રિપલ ક્વાડ્રુપલ LC-MS/MS', 'મફલ ફર્નેસ ભઠ્ઠી'],
        hi: ['ट्रिपल क्वाड्रुपोल LC-MS/MS', 'मफल फर्नेस'],
      },
      recommendedLabTypes: {
        en: ['Spices Board Quality Evaluation Laboratories', 'NABL Accredited Food Chemistry Labs'],
        gu: ['સ્પાઈસીસ બોર્ડ પ્રયોગશાળા', 'NABL ફૂડ લેબ્સ'],
        hi: ['मसाला बोर्ड गुणवत्ता मूल्यांकन लैब', 'एनएबीएल प्रमाणित प्रयोगशाला'],
      },
      approxCostINR: '₹2,000 – ₹4,000 (Sudan dyes panel + Total Ash test)',
      fssaiStandardRef: 'FSS (Food Products Standards) 2011 – Regulation 2.9.5 (Acid Insoluble Ash not more than 1.3% by weight)',
      sampleSubmissionAdvice: {
        en: 'Send 150g in sealed moisture-proof foil packaging.',
        gu: '૧૫૦ ગ્રામ મરચું ભેજમુક્ત ફોઈલ પાઉચમાં સીલ કરીને મોકલો.',
        hi: '१५० ग्राम मिर्च सीलबंद नमी-रोधी पाउच में भेजें।',
      },
    },
  },

  // --- 6. PURE HONEY (HONEY & SUGAR) ---
  {
    id: 'honey',
    categoryId: 'honey_sugar',
    name: {
      en: 'Pure Natural Bee Honey',
      gu: 'શુદ્ધ કુદરતી મધ',
      hi: 'शुद्ध प्राकृतिक शहद',
    },
    subtitle: {
      en: 'Frequently blended with inverted sugar, high-fructose corn syrup (HFCS), and rice syrups',
      gu: 'ખાંડની ચાસણી, કોર્ન સીરપ અને ચાઇનીઝ રાઇસ સીરપની ગુપ્ત ભેળસેળ',
      hi: 'चीनी की चाशनी, कॉर्न सिरप और राइस सिरप की गुप्त मिलावट',
    },
    alternateNames: ['honey', 'madh', 'shahad', 'bee honey', 'raw honey', 'મધ', 'શુદ્ધ મધ', 'દેશી મધ', 'शहद'],
    icon: '🍯',
    riskSeverity: 'High',
    overview: {
      en: 'Honey is one of the most counterfeited foods on earth. High-tech synthetic syrups engineered to bypass basic sugar tests (like C4/C3 plant sugars) are added to maximize bulk.',
      gu: 'મધ વિશ્વભરમાં સૌથી વધુ નકલી બનતા પદાર્થોમાંથી એક છે. સાદા ટેસ્ટ પાસ કરી જાય તેવા ચાઇનીઝ રાઇસ સીરપ અને ખાંડની ચાસણી મધમાં ભેળવવામાં આવે છે.',
      hi: 'शहद में सामान्य जांच को चकमा देने वाले विशेष राइस सिरप, कॉर्न सिरप और चीनी की चाशनी की मिलावट की जाती है।',
    },
    adulterants: [
      {
        name: { en: 'Inverted Sugar Syrup & Molasses', gu: 'ખાંડની ચાસણી અને ગોળની રસી', hi: 'इनवर्टेड शुगर सिरप और चाशनी' },
        riskLevel: 'Moderate',
        description: {
          en: 'Chemically hydrolyzed cane sugar syrup mimicking natural fructose-glucose ratio.',
          gu: 'ખાંડને એસિડ વડે પ્રોસેસ કરીને બનાવેલી ઘટ્ટ ચાસણી.',
          hi: 'गन्ने की चीनी को विशेष रूप से प्रोसेस कर बनाई गई चाशनी।',
        },
        healthRisks: {
          en: 'Spikes blood glucose rapidly, triggers obesity, accelerates fatty liver disease.',
          gu: 'બ્લડ સુગર અચાનક વધવું, સ્થૂળતા, ફેટી લીવર.',
          hi: 'डायबिटीज के मरीजों के लिए घातक, वजन बढ़ना, फैटी लिवर।',
        },
      },
      {
        name: { en: 'Rice Syrup & Corn Syrup (C3 / C4 Sugars)', gu: 'ચોખા અને મકાઈની સીરપ', hi: 'चावल और मक्के का सिरप' },
        riskLevel: 'High',
        description: {
          en: 'Engineered syrups that do not crystallize and are transparent.',
          gu: 'ચોખા કે મકાઈમાંથી બનતી કૃત્રિમ સ્વીટનર સીરપ.',
          hi: 'चावल और मक्के के स्टार्च से बनी औद्योगिक सिरप।',
        },
        healthRisks: {
          en: 'Metabolic syndrome, insulin resistance, zero natural bee enzyme value.',
          gu: 'ઇન્સ્યુલિન પ્રતિકાર, કુદરતી એન્ઝાઇમ્સનો અભાવ.',
          hi: 'इंसुलिन रेजिस्टेंस, प्राकृतिक एंजाइम का न होना।',
        },
      },
    ],
    homeTests: [
      {
        id: 'honey-water-dispersion',
        testName: {
          en: 'Water Glass Dispersion Test',
          gu: 'પાણીના ગ્લાસમાં ડિસ્પર્શન ટેસ્ટ',
          hi: 'पानी के गिलास में फैलाव परीक्षण',
        },
        adulterantTargeted: { en: 'Watery sugar syrup, jaggery water', gu: 'ખાંડનું પાણી, ચાસણી', hi: 'पतली चाशनी, मीठा पानी' },
        difficulty: 'Easy',
        timeRequiredMinutes: 1,
        requiredMaterials: {
          en: ['1 teaspoon Honey', 'Transparent glass of room temperature water'],
          gu: ['૧ ચમચી મધ', 'ઓરડાના તાપમાનવાળા પાણીથી ભરેલો કાચનો ગ્લાસ'],
          hi: ['१ चम्मच शहद', 'सामान्य पानी से भरा कांच का गिलास'],
        },
        stepByStep: {
          en: [
            'Fill a clean transparent glass with clear water.',
            'Drop 1 spoonful of honey gently into the water without stirring.',
            'Observe whether it dissolves immediately while falling or settles intact at the bottom.',
          ],
          gu: [
            'કાચના ગ્લાસમાં સ્વચ્છ પાણી ભરો.',
            'હલાવ્યા વગર ૧ ચમચી મધ ધીમેથી પાણીમાં છોડો.',
            'જુઓ કે તે પડતાં જ ઓગળી જાય છે કે તળિયે જઈને ગઠ્ઠો બનીને બેસી જાય છે.',
          ],
          hi: [
            'कांच के गिलास में साफ पानी लें।',
            'बिना हिलाए १ चम्मच शहद धीरे से पानी में डालें।',
            'देखें कि क्या यह गिरते हुए ही घुल जाता है या तली में जाकर जमता है।',
          ],
        },
        pureSampleResult: {
          en: 'Pure honey is dense and coherent. It drops straight to the bottom without dissolving on the way down and sits as an intact layer.',
          gu: 'શુદ્ધ મધ ઘટ્ટ હોય છે. તે પાણીમાં ઓગળ્યા વગર સીધું તળિયે જઈને ગઠ્ઠો બનીને બેસી જાય છે.',
          hi: 'शुद्ध शहद भारी होता है। यह बिना घुले सीधे तली में बैठ जाता है और थक्का बना रहता है।',
        },
        adulteratedSampleResult: {
          en: 'Sugar-syrup adulterated honey begins dissolving and diffusing threads into the water immediately as it sinks.',
          gu: 'ચાસણી વાળું ભેળસેળિયું મધ પાણીમાં પડતાં જ ઓગળવા લાગે છે અને પાણીમાં ફેલાઈ જાય છે.',
          hi: 'चाशनी मिला शहद पानी में गिरते ही तुरंत घुलने लगता है और लकीरें बनाकर फैल जाता है।',
        },
        canDetect: {
          en: ['Crude sugar syrup', 'Excess moisture / water dilution'],
          gu: ['કાચી ખાંડની ચાસણી', 'પાણીની ભેળસેળ'],
          hi: ['सामान्य चीनी की चाशनी', 'अतिरिक्त पानी'],
        },
        cannotDetect: {
          en: ['High-tech enzymatically tailored Rice Syrup / C4 Cane sugar syrups'],
          gu: ['આધુનિક ચાઇનીઝ રાઇસ સીરપ અને C4 સુગર'],
          hi: ['आधुनिक राइस सिरप व C4 शुगर सिरप'],
        },
        safetyPrecautions: {
          en: ['Use cold or room temperature water; hot water naturally accelerates dissolution.'],
          gu: ['ગરમ પાણી ન વાપરવું, સામાન્ય પાણી વાપરવું.'],
          hi: ['गुनगुना या गर्म पानी न लें, सामान्य पानी लें।'],
        },
      },
      {
        id: 'honey-cotton-flame',
        testName: {
          en: 'Cotton Wick Flame Test',
          gu: 'રૂની વાટ અને અગ્નિ ટેસ્ટ',
          hi: 'रुई की बाती और ज्वाला परीक्षण',
        },
        adulterantTargeted: { en: 'High moisture and water dilution', gu: 'પાણીની માત્રા અને ભેજ', hi: 'अत्यधिक पानी की मिलावट' },
        difficulty: 'Easy',
        timeRequiredMinutes: 2,
        requiredMaterials: {
          en: ['Dry cotton wick / earbud', 'Honey sample', 'Matchbox / lighter'],
          gu: ['સૂકી રૂની વાટ', 'મધનો નમૂનો', 'માચીસ'],
          hi: ['सूखी रुई की बाती', 'शहद', 'माचिस'],
        },
        stepByStep: {
          en: [
            'Dip the tip of a dry cotton wick into the honey sample.',
            'Hold it over a safe fireproof surface and light the coated tip with a matchstick.',
          ],
          gu: [
            'સૂકી રૂની વાટની ટોચને મધમાં બોળો.',
            'સુરક્ષિત જગ્યાએ રાખી માચીસ વડે સળગાવો.',
          ],
          hi: [
            'रुई की सूखी बाती को शहद में डुबोएं।',
            'सुरक्षित स्थान पर रखकर माचिस से जलाएं।',
          ],
        },
        pureSampleResult: {
          en: 'Pure honey with low moisture (<20%) burns smoothly without sputtering.',
          gu: 'શુદ્ધ મધ તડતડ અવાજ વગર આસાનીથી સળગે છે.',
          hi: 'शुद्ध शहद बिना किसी चरमराहट की आवाज के आसानी से जल उठता है।',
        },
        adulteratedSampleResult: {
          en: 'Honey diluted with water or thin syrup will not catch fire easily, or will crackle and sputter violently due to steam escaping.',
          gu: 'પાણીવાળું મધ સળગતું નથી અથવા તડતડ અવાજ કરીને હોલવાઈ જાય છે.',
          hi: 'पानी मिला शहद जलता नहीं या फिर चरमराहट के साथ पटाखे जैसी आवाज करता है।',
        },
        canDetect: {
          en: ['High moisture content (>20%)'],
          gu: ['વધારે પડતો ભેજ'],
          hi: ['अतिरिक्त पानी'],
        },
        cannotDetect: {
          en: ['Thick dehydrated glucose-fructose syrup'],
          gu: ['ઘટ્ટ ફ્રુક્ટોઝ સીરપ'],
          hi: ['गाढ़ा ग्लूकोज सिरप'],
        },
        safetyPrecautions: {
          en: ['Perform over a ceramic or metal plate away from flammable curtains.'],
          gu: ['ધાતુ કે સિરામિક વાસણ પર જ અગ્નિ પ્રયોગ કરવો.'],
          hi: ['आग से सुरक्षा का ध्यान रखें।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'EA-IRMS (Elemental Analyzer - Isotope Ratio Mass Spectrometry) & NMR (Nuclear Magnetic Resonance)',
        gu: 'EA-IRMS આઇસોટોપ ટેસ્ટ અને NMR (ન્યુક્લિયર મેગ્નેટિક રેઝોનન્સ)',
        hi: 'EA-IRMS आइसोटोप परीक्षण और NMR (न्यूक्लियर मैग्नेटिक रेजोनेंस)',
      },
      whyLabNeeded: {
        en: 'Commercial adulteration with C4 (cane/corn) and C3 (rice/beet) syrups matches honey sugars so closely that only carbon isotope ratio spectrometry (EA-IRMS) and NMR fingerprinting can expose the fake syrups.',
        gu: 'આધુનિક ચાસણી અને રાઇસ સીરપને પકડવા માટે ફક્ત કાર્બન આઇસોટોપ રેશિયો (EA-IRMS) અને NMR સ્પેક્ટ્રોસ્કોપી જ સક્ષમ છે.',
        hi: 'राइस सिरप और आधुनिक चाशनी को केवल कार्बन आइसोटोप (EA-IRMS) और NMR टेस्ट से ही पकड़ा जा सकता है।',
      },
      equipmentAndChemicals: {
        en: ['EA-IRMS (Delta V Isotope Mass Spectrometer)', 'Bruker 400 MHz FoodScreener NMR', 'HPLC with Refractive Index Detector for Specific Sugars'],
        gu: ['EA-IRMS આઇસોટોપ સ્પેક્ટ્રોમીટર', 'NMR ફૂડ સ્ક્રીનર', 'HPLC સુગર એનાલાઇઝર'],
        hi: ['EA-IRMS आइसोटोप उपकरण', 'NMR फूडस्क्रीनर', 'HPLC शुगर विश्लेषक'],
      },
      recommendedLabTypes: {
        en: ['National Dairy Development Board (NDDB) Lab Anand', 'Export Inspection Council (EIC) Labs', 'CFTRI Mysore'],
        gu: ['NDDB લેબ આણંદ', 'CFTRI મૈસૂર', 'એક્સપોર્ટ ઇન્સ્પેક્શન એજન્સી'],
        hi: ['एनडीडीबी आणंद', 'सीएफटीआरआई (CFTRI) मैसूर', 'निर्यात निरीक्षण प्रयोगशालाएं'],
      },
      approxCostINR: '₹3,500 – ₹7,500 (Comprehensive C3/C4 Isotope + SMR/TMR + NMR test)',
      fssaiStandardRef: 'FSSAI Order 2020 on Honey Purity: 18-parameter standard compliance including Specific Marker for Rice syrup (SMR), Trace Marker (TMR), and 13C carbon isotopic ratio delta difference.',
      sampleSubmissionAdvice: {
        en: 'Send 250g in original sealed glass bottle.',
        gu: '૨૫૦ ગ્રામ મધ ઓરિજિનલ પેકિંગમાં લેબમાં મોકલો.',
        hi: '२५० ग्राम शहद मूल सीलबंद कांच की शीशी में भेजें।',
      },
    },
  },

  // --- 7. BLACK PEPPER (SPICES) ---
  {
    id: 'black-pepper',
    categoryId: 'spices',
    name: {
      en: 'Black Pepper (Kali Mirch / Mari)',
      gu: 'કાળા મરી (મરી)',
      hi: 'काली मिर्च',
    },
    subtitle: {
      en: 'Commonly mixed with dried toxic papaya seeds and mineral oil coated light berries',
      gu: 'ઝેરી પપૈયાના સૂકા બીજ અને મિનરલ ઓઇલ ચડાવેલા હલકા દાણાની ભેળસેળ',
      hi: 'पपीते के सूखे जहरीले बीज और मिनरल ऑयल की पॉलिश वाली मिलावट',
    },
    alternateNames: ['black pepper', 'kali mirch', 'mari', 'kaala mari', 'કાળા મરી', 'મરી', 'काली मिर्च', 'गोल मिर्च'],
    icon: '🌑',
    riskSeverity: 'Medium',
    overview: {
      en: 'Black pepper is valued for piperine. Dried papaya seeds have an almost identical shrivelled shape, colour, and size, but lack the fiery taste and cause intestinal distress.',
      gu: 'કાળા મરીમાં પપૈયાના સૂકા બીજ ભેળવાય છે, જે દેખાવમાં અને કદમાં મરી જેવા જ કરચલીવાળા હોય છે પરંતુ પાચનતંત્ર બગાડે છે.',
      hi: 'काली मिर्च में पपीते के सूखे बीज मिलाए जाते हैं, जो आकार, रंग और सिकुड़न में बिल्कुल काली मिर्च जैसे लगते हैं।',
    },
    adulterants: [
      {
        name: { en: 'Dried Papaya Seeds', gu: 'પપૈયાના સૂકા બીજ', hi: 'पपीते के सूखे बीज' },
        riskLevel: 'High',
        description: {
          en: 'Waste seeds of papaya dried and mixed into whole peppercorns.',
          gu: 'પપૈયાના બીજ સૂકવીને કાળા મરી સાથે મિક્સ કરવા.',
          hi: 'पपीते के अपशिष्ट बीजों को सुखाकर काली मिर्च में मिलाना।',
        },
        healthRisks: {
          en: 'Contains carpaine alkaloid; toxic to heart muscle in excessive doses, harmful for pregnant women, causes severe stomach cramps.',
          gu: 'કાર્પેઇન આલ્કલોઇડ ધરાવે છે; ગર્ભવતી મહિલાઓ માટે હાનિકારક, પેટમાં દુખાવો.',
          hi: 'गर्भवती महिलाओं के लिए अत्यंत नुकसानदेह, पेट में तीव्र मरोड़ और ऐंठन।',
        },
      },
    ],
    homeTests: [
      {
        id: 'pepper-alcohol-water-float',
        testName: {
          en: 'Flotation Test in Water / Alcohol',
          gu: 'પાણી અથવા આલ્કોહોલમાં ફ્લોટેશન ટેસ્ટ',
          hi: 'पानी में तैरने की जांच (फ्लोटेशन टेस्ट)',
        },
        adulterantTargeted: { en: 'Papaya seeds and hollow light berries', gu: 'પપૈયાના બીજ અને પોચા દાણા', hi: 'पपीते के बीज व खोखली मिर्च' },
        difficulty: 'Easy',
        timeRequiredMinutes: 2,
        requiredMaterials: {
          en: ['A handful of black pepper berries', 'A glass tumbler filled with plain water'],
          gu: ['એક મુઠ્ઠી કાળા મરી', 'પાણી ભરેલો કાચનો ગ્લાસ'],
          hi: ['एक मुट्ठी काली मिर्च', 'पानी से भरा कांच का गिलास'],
        },
        stepByStep: {
          en: [
            'Take a glass of plain water.',
            'Drop a tablespoon of whole black pepper into the water.',
            'Observe which berries sink and which float.',
          ],
          gu: [
            'કાચના ગ્લાસમાં પાણી લો.',
            'તેમાં એક ચમચી કાળા મરી નાખો.',
            'જુઓ કયા દાણા તળિયે બેસે છે અને કયા ઉપર તરે છે.',
          ],
          hi: [
            'कांच के गिलास में पानी लें।',
            'उसमें एक चम्मच काली मिर्च डालें।',
            'देखें कौन से दाने तली में बैठते हैं और कौन से ऊपर तैरते हैं।',
          ],
        },
        pureSampleResult: {
          en: 'Genuine black pepper berries are dense and solid; almost all of them sink straight to the bottom.',
          gu: 'અસલી કાળા મરી વજનદાર હોય છે; લગભગ બધા જ દાણા તરત તળિયે બેસી જાય છે.',
          hi: 'असली काली मिर्च ठोस और भारी होती है, इसलिए सारे दाने सीधे तली में बैठ जाते हैं।',
        },
        adulteratedSampleResult: {
          en: 'Papaya seeds and hollow exhausted berries are lighter and float promptly on top of the water.',
          gu: 'પપૈયાના બીજ અને પોલા નકામા દાણા હલકા હોવાથી પાણીની સપાટી પર તરવા લાગે છે.',
          hi: 'पपीते के बीज और खोखले दाने हल्के होते हैं और पानी की सतह पर तैरने लगते हैं।',
        },
        canDetect: {
          en: ['Papaya seeds', 'Immature hollow peppercorns'],
          gu: ['પપૈયાના બીજ', 'પોચા-હલકા દાણા'],
          hi: ['पपीते के बीज', 'खोखले दाने'],
        },
        cannotDetect: {
          en: ['Mineral oil polish sheen', 'Pesticide residues'],
          gu: ['મિનરલ ઓઈલ કોટિંગ'],
          hi: ['मिनरल ऑयल की कोटिंग'],
        },
        safetyPrecautions: {
          en: ['Safe household test.'],
          gu: ['સલામત ઘરગથ્થુ ટેસ્ટ.'],
          hi: ['सुरक्षित घरेलू टेस्ट।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'Piperine Content by HPLC & Bulk Density Determination',
        gu: 'HPLC દ્વારા પાઇપરીન પ્રમાણ અને બલ્ક ડેન્સિટી ટેસ્ટ',
        hi: 'पाइपरीन मात्रा हेतु HPLC और बल्क डेंसिटी जांच',
      },
      whyLabNeeded: {
        en: 'Detects spent pepper (where essential oils and oleoresins have been industrially extracted before re-selling).',
        gu: 'ઓઈલ કાઢી લીધેલા નકામા મરીને વેચતા પકડવા માટે પાઇપરીન તપાસવું જરૂરી છે.',
        hi: 'तेल निकाला हुआ निष्कासित मसाला पहचानने के लिए पाइपरीन जांच जरूरी है।',
      },
      equipmentAndChemicals: {
        en: ['HPLC system with C18 column', 'Analytical Balance', 'Soxhlet extraction apparatus'],
        gu: ['HPLC સિસ્ટમ', 'એનાલિટિકલ બેલેન્સ'],
        hi: ['एचपीएलसी सिस्टम', 'सॉक्सलेट निष्कर्षण उपकरण'],
      },
      recommendedLabTypes: {
        en: ['Spices Board Quality Evaluation Centre', 'NABL Spices Testing Labs'],
        gu: ['સ્પાઈસીસ બોર્ડ ઓફ ઈન્ડિયા લેબ'],
        hi: ['मसाला बोर्ड गुणवत्ता केंद्र'],
      },
      approxCostINR: '₹1,000 – ₹1,800',
      fssaiStandardRef: 'FSS (Food Products Standards) 2011 – Regulation 2.9.2 (Piperine content not less than 4.0% by weight)',
      sampleSubmissionAdvice: {
        en: 'Submit 100g in moisture-proof zip pouch.',
        gu: '૧૦૦ ગ્રામ મરી સીલબંધ પાઉચમાં મોકલો.',
        hi: '१०० ग्राम काली मिर्च साफ पाउच में भेजें।',
      },
    },
  },

  // --- 8. SILVER FOIL / VARK (OTHER FOOD PRODUCTS) ---
  {
    id: 'silver-vark',
    categoryId: 'other',
    name: {
      en: 'Silver Leaf / Vark for Sweets',
      gu: 'ચાંદીનું વરખ (મીઠાઈ માટે)',
      hi: 'चांदी का वर्क (मिठाइयों पर लगाने वाला)',
    },
    subtitle: {
      en: 'Frequently replaced with toxic Aluminium foil which damages nerves and bones',
      gu: 'ઝેરી એલ્યુમિનિયમ વરખની ગંભીર ભેળસેળ જે હાડકાં અને મગજને નુકસાન કરે છે',
      hi: 'जहरीले एल्युमिनियम फॉयल की मिलावट जो हड्डियों व दिमाग को नुकसान पहुंचाती है',
    },
    alternateNames: ['silver foil', 'vark', 'chandi vark', 'silver leaf', 'varakh', 'ચાંદીનું વરખ', 'વરખ', 'ચાંદી વરખ', 'चांदी का वर्क', 'वर्क'],
    icon: '✨',
    riskSeverity: 'Critical',
    overview: {
      en: 'Silver leaf is traditionally applied to festive Indian sweets like Kaju Katli and Barfi. Unscrupulous manufacturers substitute pure silver (Ag 99.9%) with toxic cheap aluminium leaf, which has catastrophic health consequences when ingested.',
      gu: 'કાજુ કતરી અને બરફી જેવી મીઠાઈઓ પર શોભા માટે ચાંદીનું વરખ લગાવાય છે. સસ્તી કિંમત માટે શુદ્ધ ચાંદીની જગ્યાએ એલ્યુમિનિયમનું ઝેરી વરખ વપરાય છે.',
      hi: 'काजू कतली, बर्फी और पान पर चांदी का वर्क लगाया जाता है। मुनाफा कमाने के लिए शुद्ध चांदी की जगह सस्ता व विषैला एल्युमिनियम वर्क लगा दिया जाता है।',
    },
    adulterants: [
      {
        name: { en: 'Toxic Aluminium Metal Foil', gu: 'ઝેરી એલ્યુમિનિયમ ધાતુનું વરખ', hi: 'जहरीला एल्युमिनियम वर्क' },
        riskLevel: 'Severe',
        description: {
          en: 'Extremely thin beaten sheets of aluminium instead of 99.9% pure refined silver.',
          gu: 'શુદ્ધ ચાંદીની જગ્યાએ ટીપીને બનાવાતું અત્યંત પાતળું એલ્યુમિનિયમ પતરું.',
          hi: 'शुद्ध चांदी के स्थान पर पीटी गई एल्युमिनियम की पतली परत।',
        },
        healthRisks: {
          en: 'Aluminium accumulates in bone tissue, triggers neurological dementia (Alzheimer’s association), causes kidney toxicity.',
          gu: 'એલ્યુમિનિયમ શરીરમાં જમા થાય છે, હાડકાં નબળાં પાડે છે અને યાદશક્તિ ગુમાવવાની બીમારી (અલ્ઝાઈમર) પેદા કરે છે.',
          hi: 'शरीर में एल्युमिनियम का जमाव, हड्डियों की कमजोरी, मस्तिष्क विकार (अल्जाइमर) और किडनी विकार।',
        },
      },
    ],
    homeTests: [
      {
        id: 'vark-flame-test',
        testName: {
          en: 'Flame Burning Test (Silver vs Aluminium)',
          gu: 'અગ્નિ દહન ટેસ્ટ (ચાંદી વિરુદ્ધ એલ્યુમિનિયમ)',
          hi: 'अग्नि दहन परीक्षण (चांदी बनाम एल्युमिनियम)',
        },
        adulterantTargeted: { en: 'Aluminium foil', gu: 'એલ્યુમિનિયમ વરખ', hi: 'एल्युमिनियम फॉयल' },
        difficulty: 'Easy',
        timeRequiredMinutes: 1,
        requiredMaterials: {
          en: ['Small sample of the silver leaf from sweet surface', 'Matchstick or candle', 'Tongs or metal spoon'],
          gu: ['મીઠાઈ પરથી ઉતારેલ વરખનો ટુકડો', 'મીણબત્તી કે માચીસ', 'ચીપિયો કે ધાતુની ચમચી'],
          hi: ['मिठाई से उतारा गया थोड़ा सा वर्क', 'माचिस या मोमबत्ती', 'चिमटा या चम्मच'],
        },
        stepByStep: {
          en: [
            'Carefully lift a piece of the leaf with tongs or on a steel spoon.',
            'Hold it directly into the flame for 5 to 10 seconds.',
            'Observe how it burns and what residue it leaves.',
          ],
          gu: [
            'ચીપિયા વડે વરખનો ટુકડો પકડો.',
            'તેને ૫ થી ૧૦ સેકન્ડ સુધી જ્યોત પર ધરો.',
            'તે કેવી રીતે બળે છે અને શું રાખ વધે છે તે જુઓ.',
          ],
          hi: [
            'चिमटे की मदद से वर्क का टुकड़ा पकड़ें।',
            'इसे ५ से १० सेकंड तक लौ (आग) के ऊपर रखें।',
            'देखें कि यह कैसे जलता है और क्या अवशेष बचता है।',
          ],
        },
        pureSampleResult: {
          en: 'Pure silver leaf does not burn to black ash. It instantly collapses and melts into a tiny shiny metallic silver ball/globule.',
          gu: 'શુદ્ધ ચાંદી કાળી રાખ બનતી નથી. તે ગરમીથી પીગળીને ચમકદાર ચાંદીની નાની ગોળી બની જાય છે.',
          hi: 'शुद्ध चांदी का वर्क काली राख नहीं बनता। वह पिघलकर तुरंत चमकदार चांदी की छोटी गोली बन जाता है।',
        },
        adulteratedSampleResult: {
          en: 'Toxic aluminium foil catches fire instantly, burns with an intense glow, and turns into dull greyish-black powdery ash.',
          gu: 'એલ્યુમિનિયમ વરખ તરત જ સળગી ઊઠે છે અને કાળી-રાખોડી પાવડર જેવી રાખ બની જાય છે.',
          hi: 'एल्युमिनियम का वर्क तुरंत आग पकड़ लेता है और जलकर काले-धूसर रंग की राख में बदल जाता है।',
        },
        canDetect: {
          en: ['Aluminium substitution with 100% certainty'],
          gu: ['એલ્યુમિનિયમની ભેળસેળ ૧૦૦% પકડાઈ જાય છે'],
          hi: ['एल्युमिनियम की मिलावट की सटीक पहचान'],
        },
        cannotDetect: {
          en: ['Minor trace impurities of nickel or copper'],
          gu: ['તાંબા કે નિકલની અતિ સૂક્ષ્મ અશુદ્ધિ'],
          hi: ['तांबे या निकेल की बहुत सूक्ष्म मिलावट'],
        },
        safetyPrecautions: {
          en: ['Use tongs to hold leaf over flame. Do not touch hot metal.'],
          gu: ['હાથ ન દાઝે તે માટે ચીપિયો વાપરવો.'],
          hi: ['चिमटे का प्रयोग करें ताकि हाथ न जले।'],
        },
      },
      {
        id: 'vark-rub-finger-test',
        testName: {
          en: 'Finger Rubbing Test',
          gu: 'આંગળીઓ વડે ઘસવાની કસોટી',
          hi: 'उंगलियों से रगड़ने की जांच',
        },
        adulterantTargeted: { en: 'Aluminium sheet', gu: 'એલ્યુમિનિયમ પતરું', hi: 'एल्युमिनियम शीट' },
        difficulty: 'Easy',
        timeRequiredMinutes: 1,
        requiredMaterials: {
          en: ['Small piece of leaf', 'Clean dry fingers'],
          gu: ['વરખનો ટુકડો', 'સાફ સૂકી આંગળીઓ'],
          hi: ['वर्क का टुकड़ा', 'साफ उंगलियां'],
        },
        stepByStep: {
          en: [
            'Place the leaf sample between your thumb and index finger.',
            'Gently rub them together for 10 seconds.',
          ],
          gu: [
            'વરખને અંગૂઠા અને આંગળી વચ્ચે મૂકો.',
            '૧૦ સેકન્ડ સુધી ધીમેથી ઘસો.',
          ],
          hi: [
            'वर्क को अंगूठे और पहली उंगली के बीच रखें।',
            '१० सेकंड तक आपस में हल्के से रगड़ें।',
          ],
        },
        pureSampleResult: {
          en: 'Pure silver is so delicate that it crumbles completely and vanishes, seamlessly adhering as microscopic glitter to skin pores.',
          gu: 'શુદ્ધ ચાંદી એટલી કોમળ હોય છે કે ઘસતાં જ ભૂકો થઈને ગાયબ થઈ જાય છે અને ત્વચા સાથે ભળી જાય છે.',
          hi: 'शुद्ध चांदी इतनी कोमल होती है कि रगड़ते ही पूरी तरह टूटकर गायब हो जाती है और त्वचा पर चिपक जाती है।',
        },
        adulteratedSampleResult: {
          en: 'Aluminium leaf does not crumble; it merely rolls up into a stubborn metallic clump without disintegrating.',
          gu: 'એલ્યુમિનિયમ વરખ તૂટતું નથી; તે નાનો ધાતુનો ડૂચો બની જાય છે.',
          hi: 'एल्युमिनियम वर्क टूटता नहीं बल्कि मुड़कर धातु की एक छोटी सी गोली जैसा बन जाता है।',
        },
        canDetect: {
          en: ['Coarse aluminium sheets'],
          gu: ['એલ્યુમિનિયમ શીટ'],
          hi: ['मोटा एल्युमिनियम फॉयल'],
        },
        cannotDetect: {
          en: ['Exact metal purity percentage'],
          gu: ['ચોક્કસ ટકાવારી'],
          hi: ['सटीक प्रतिशत'],
        },
        safetyPrecautions: {
          en: ['Wash hands after test.'],
          gu: ['હાથ ધોઈ લેવા.'],
          hi: ['हाथ धो लें।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'AAS (Atomic Absorption Spectrometry) / ICP-OES for Silver (Ag) Assay & Heavy Metals',
        gu: 'ચાંદીની શુદ્ધતા માટે AAS / ICP-OES પરીક્ષણ',
        hi: 'चांदी की शुद्धता हेतु AAS / ICP-OES परीक्षण',
      },
      whyLabNeeded: {
        en: 'FSSAI mandates 99.9% minimum silver purity by weight for Chandi Vark. AAS measures exact silver vs aluminium, cadmium, and nickel presence.',
        gu: 'FSSAI ના કાયદા મુજબ ચાંદીના વરખમાં ઓછામાં ઓછી ૯૯.૯% શુદ્ધ ચાંદી હોવી જોઈએ, જે AAS દ્વારા જ માપી શકાય છે.',
        hi: 'FSSAI के अनुसार चांदी के वर्क में कम से कम ९९.९% शुद्ध चांदी होनी चाहिए, जो केवल एएएस (AAS) से प्रमाणित होती है।',
      },
      equipmentAndChemicals: {
        en: ['Flame Atomic Absorption Spectrometer', 'ICP-OES system', 'Trace grade Nitric acid'],
        gu: ['એટોમિક એબ્સોર્પ્શન સ્પેક્ટ્રોમીટર (AAS)', 'ICP-OES સિસ્ટમ'],
        hi: ['परमाणु अवशोषण स्पेक्ट्रोमीटर (AAS)', 'आईसीपी-ओईएस'],
      },
      recommendedLabTypes: {
        en: ['FSSAI Notified Food Laboratories', 'NABL Metallurgy & Food Testing Facilities'],
        gu: ['FSSAI માન્ય પ્રયોગશાળાઓ', 'NABL ધાતુ અને ફૂડ લેબ્સ'],
        hi: ['FSSAI अधिसूचित प्रयोगशालाएं', 'एनएबीएल धातु व खाद्य परीक्षण लैब'],
      },
      approxCostINR: '₹1,500 – ₹2,500',
      fssaiStandardRef: 'FSS (Food Products Standards) Regulations 2011 – Regulation 2.11.5 (Silver leaf shall have minimum silver purity of 999/1000 and zero aluminium)',
      sampleSubmissionAdvice: {
        en: 'Submit at least 1 gram of leaf or 1 entire sheet placed carefully between butter paper in an envelope.',
        gu: 'બટર પેપરમાં સાચવીને ૧ શીટ અથવા ૧ ગ્રામ વરખ કવરમાં મોકલો.',
        hi: 'बटर पेपर में सुरक्षित रखकर कम से कम १ शीट या १ ग्राम वर्क लिफाफे में भेजें।',
      },
    },
  },

  // --- 9. GREEN PEAS & VEGETABLES (FRUITS & VEGGIES) ---
  {
    id: 'green-peas',
    categoryId: 'vegetables',
    name: {
      en: 'Fresh Green Peas & Ladyfinger (Bhindi)',
      gu: 'લીલા વટાણા અને ભીંડા',
      hi: 'हरी मटर और भिंडी',
    },
    subtitle: {
      en: 'Treated with toxic Malachite Green dye to fake freshness and vibrant green hue',
      gu: 'તાજા દેખાડવા માટે કેન્સરકારક મેલાકાઇટ ગ્રીન કેમિકલ કલરનું અખાદ્ય કોટિંગ',
      hi: 'ताजा दिखाने के लिए कैंसरकारी मैलाकाइट ग्रीन केमिकल रंग की मिलावट',
    },
    alternateNames: ['green peas', 'peas', 'bhindi', 'ladyfinger', 'vatana', 'lila vatana', 'લીલા વટાણા', 'ભીંડા', 'વટાણા', 'हरी मटर', 'मटर', 'भिंडी'],
    icon: '🫛',
    riskSeverity: 'High',
    overview: {
      en: 'Dried or stale yellowed peas and wilted green vegetables are dipped into solutions of Malachite Green dye to bestow an unnaturally vibrant fresh green luster.',
      gu: 'જૂના કે સુકાઈ ગયેલા વટાણા અને વાસી શાકભાજીને આકર્ષક લીલા દેખાડવા માટે મેલાકાઇટ ગ્રીન નામના ઝેરી રંગના દ્રાવણમાં બોળવામાં આવે છે.',
      hi: 'सूखे व बासी मटर और पुरानी सब्जियों को एकदम ताजी व चमकीली हरी दिखाने के लिए जहरीले मैलाकाइट ग्रीन रंग के घोल में डुबोया जाता है।',
    },
    adulterants: [
      {
        name: { en: 'Malachite Green Dye', gu: 'મેલાકાઇટ ગ્રીન ડાય', hi: 'मैलाकाइट ग्रीन डाई' },
        riskLevel: 'Severe',
        description: {
          en: 'Synthetic triphenylmethane dye used for dyeing silk and leather, strictly banned in food.',
          gu: 'ચામડું અને સિલ્ક રંગવા વપરાતો રંગ જે માનવ આહારમાં સખત પ્રતિબંધિત છે.',
          hi: 'रेशम और चमड़ा रंगने में प्रयुक्त विषैला रासायनिक रंग, भोजन में पूर्णतः प्रतिबंधित।',
        },
        healthRisks: {
          en: 'Highly mutagenic and carcinogenic; induces DNA damage, liver tumors, thyroid abnormalities.',
          gu: 'કેન્સર અને ટ્યુમર પેદા કરનાર, થાઈરોઈડ અને લીવરને ગંભીર નુકસાન.',
          hi: 'लिवर में ट्यूमर, थायरॉयड विकार और डीएनए को नुकसान पहुंचाने वाला तत्व।',
        },
      },
    ],
    homeTests: [
      {
        id: 'peas-cotton-paraffin-test',
        testName: {
          en: 'Wet Cotton Rubbing Test (FSSAI DART)',
          gu: 'ભીના રૂથી ઘસવાની કસોટી (FSSAI DART)',
          hi: 'गीली रुई से पोंछने की जांच (FSSAI DART)',
        },
        adulterantTargeted: { en: 'Malachite Green and artificial water dyes', gu: 'મેલાકાઇટ ગ્રીન અને સિન્થેટિક લીલો રંગ', hi: 'मैलाकाइट ग्रीन व कृत्रिम हरा रंग' },
        difficulty: 'Easy',
        timeRequiredMinutes: 2,
        requiredMaterials: {
          en: ['Sample of green peas or outer pod of ladyfinger', 'Clean white cotton ball or white blotting paper', 'Water or liquid paraffin'],
          gu: ['લીલા વટાણા અથવા ભીંડા', 'સફેદ રૂનું પૂમડું અથવા સફેદ ફિલ્ટર પેપર', 'પાણી અથવા લિક્વિડ પેરાફિન'],
          hi: ['हरी मटर या भिंडी का नमूना', 'सफेद रुई का फाहा', 'थोड़ा पानी'],
        },
        stepByStep: {
          en: [
            'Dampen a clean white cotton swab with water.',
            'Firmly rub the outer skin of the green pea or vegetable surface for 15 seconds.',
            'Examine the cotton swab for green stain transfer.',
          ],
          gu: [
            'સફેદ રૂના પૂમડાને પાણીથી ભીનું કરો.',
            'વટાણા કે ભીંડાની સપાટી પર ૧૫ સેકન્ડ સુધી જોરથી ઘસો.',
            'રૂ પર લીલો રંગ ચોંટે છે કે નહીં તે તપાસો.',
          ],
          hi: [
            'सफेद रुई को पानी से थोड़ा गीला करें।',
            'मटर के दानों या भिंडी की सतह पर १५ सेकंड तक रगड़ें।',
            'रुई पर हरे रंग के निशान को देखें।',
          ],
        },
        pureSampleResult: {
          en: 'Pure unadulterated vegetable does not release synthetic green dye onto the cotton. The cotton remains white or picks up only natural plant dirt.',
          gu: 'કુદરતી વટાણામાંથી રંગ છૂટતો નથી; રૂ સફેદ જ રહે છે.',
          hi: 'प्राकृतिक सब्जी से रुई पर कोई कृत्रिम हरा रंग नहीं छूटता; रुई सफेद ही रहती है।',
        },
        adulteratedSampleResult: {
          en: 'Artificially dyed peas transfer an immediate bright green chemical dye onto the white cotton swab.',
          gu: 'જો મેલાકાઇટ ગ્રીન રંગ હશે તો રૂ તરત જ ઘાટા લીલા રંગનું થઈ જશે.',
          hi: 'मैलाकाइट ग्रीन से रंगी मटर होने पर रुई तुरंत चमकीली हरी हो जाती है।',
        },
        canDetect: {
          en: ['Surface topical chemical dyes'],
          gu: ['ઉપર લગાડેલા સિન્થેટિક રંગો'],
          hi: ['सतह पर लगे कृत्रिम रंग'],
        },
        cannotDetect: {
          en: ['Systemic chemical pesticides absorbed inside the vegetable tissue'],
          gu: ['શાકભાજીની અંદર ઉતરેલા જંતુનાશકો'],
          hi: ['अंदर समाए हुए कीटनाशक रसायन'],
        },
        safetyPrecautions: {
          en: ['Wash vegetables thoroughly before handling; do not consume dyed vegetables.'],
          gu: ['રંગવાળા શાકભાજી ન ખાવા.'],
          hi: ['रंग वाली सब्जियों का सेवन न करें।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'LC-MS/MS for Leuco-Malachite Green & GC-MS for Multi-Residue Pesticides',
        gu: 'મેલાકાઇટ ગ્રીન માટે LC-MS/MS અને જંતુનાશકો માટે GC-MS',
        hi: 'मैलाकाइट ग्रीन हेतु LC-MS/MS और कीटनाशकों हेतु GC-MS',
      },
      whyLabNeeded: {
        en: 'Malachite Green rapidly metabolizes inside living tissues into leuco-malachite green, which is invisible on the surface and requires LC-MS/MS detection.',
        gu: 'મેલાકાઇટ ગ્રીન શાકના કોષોમાં ઉતરી જાય છે જે ફક્ત અદ્યતન LC-MS/MS થી જ પકડાય છે.',
        hi: 'यह रसायन ऊतकों के अंदर समा जाता है जिसे केवल LC-MS/MS से पकड़ा जा सकता है।',
      },
      equipmentAndChemicals: {
        en: ['High Resolution LC-MS/MS', 'QuEChERS extraction kit', 'Centrifuge'],
        gu: ['LC-MS/MS સ્પેક્ટ્રોમીટર', 'સેન્ટ્રીફ્યુજ'],
        hi: ['हाई रेजोल्यूशन LC-MS/MS', 'एक्सट्रैक्शन किट'],
      },
      recommendedLabTypes: {
        en: ['FSSAI Referral Laboratories', 'Export Inspection Agency Labs'],
        gu: ['FSSAI રેફરલ લેબોરેટરીઝ'],
        hi: ['FSSAI रेफरल प्रयोगशालाएं'],
      },
      approxCostINR: '₹2,500 – ₹4,500',
      fssaiStandardRef: 'FSS (Prohibition and Restrictions on Sales) Regulations 2011 – Complete prohibition of Malachite Green in any food.',
      sampleSubmissionAdvice: {
        en: 'Submit 500g in breathable paper bag kept chilled under 10°C.',
        gu: '૫૦૦ ગ્રામ શાક પેપર બેગમાં રાખી ઠંડા વાતાવરણમાં મોકલો.',
        hi: '५०० ग्राम सब्जी ठंडी अवस्था में तुरंत भेजें।',
      },
    },
  },

  // --- 10. APPLES & FRUITS (FRUITS & VEGGIES) ---
  {
    id: 'apples-wax',
    categoryId: 'fruits',
    name: {
      en: 'Apples (Wax Coating & Artificial Ripening)',
      gu: 'સફરજન (મીણનું કોટિંગ / વેક્સ)',
      hi: 'सेब (मोम की कोटिंग व कृत्रिम चमक)',
    },
    subtitle: {
      en: 'Coated with industrial petroleum paraffin wax to boost shine and shelf life',
      gu: 'ચમક અને સેલ્ફ-લાઇફ વધારવા પેટ્રોલિયમ આધારિત ઝેરી મીણનું પડ ચડાવવું',
      hi: 'चमक और ताजगी दिखाने के लिए पेट्रोलियम आधारित मोम की परत चढ़ाना',
    },
    alternateNames: ['apples', 'apple', 'wax', 'paraffin wax', 'safarchand', 'સફરજન', 'વેક્સ', 'મીણ', 'સેબ', 'मोम'],
    icon: '🍎',
    riskSeverity: 'Medium',
    overview: {
      en: 'Imported and cold-storage apples are frequently coated with synthetic paraffin wax to seal moisture, prevent weight loss, and give a glossy photographic sheen. Ingestion of non-food grade wax strains the digestive system.',
      gu: 'સફરજન ચમકદાર દેખાય અને વજન ન ઘટે તે માટે તેના પર બિન-ખાદ્ય પેરાફિન વેક્સ (મીણ)નું પડ ચડાવવામાં આવે છે, જે પેટમાં પચતું નથી.',
      hi: 'सेब की चमक बढ़ाने और नमी बनाए रखने के लिए उस पर गैर-खाद्य पेट्रोलियम मोम (पैराफिन) की परत चढ़ा दी जाती है।',
    },
    adulterants: [
      {
        name: { en: 'Non-Food Grade Paraffin Wax', gu: 'બિન-ખાદ્ય પેરાફિન વેક્સ (મીણ)', hi: 'अखाद्य पैराफिन मोम' },
        riskLevel: 'Moderate',
        description: {
          en: 'Petroleum distillation byproduct sprayed onto apple peel.',
          gu: 'પેટ્રોલિયમ આધારિત સસ્તું મીણ જે સફરજનની છાલ પર છાંટવામાં આવે છે.',
          hi: 'पेट्रोलियम आधारित सस्ता मोम जो छिलके पर चिपका रहता है।',
        },
        healthRisks: {
          en: 'Indigestion, intestinal lining irritation, blocks nutrient absorption in gut.',
          gu: 'અપચો, આંતરડામાં સોજો, પેટમાં ગેસ અને દુખાવો.',
          hi: 'अपच, आंतों में जलन और पोषण के अवशोषण में बाधा।',
        },
      },
    ],
    homeTests: [
      {
        id: 'apple-blade-scrape',
        testName: {
          en: 'Blade Scraping Test',
          gu: 'બ્લેડથી છાલ ઘસવાની કસોટી',
          hi: 'ब्लेड या चाकू से खुरचने का परीक्षण',
        },
        adulterantTargeted: { en: 'Paraffin wax layer', gu: 'મીણનું કોટિંગ', hi: 'मोम की परत' },
        difficulty: 'Easy',
        timeRequiredMinutes: 1,
        requiredMaterials: {
          en: ['Apple sample at room temperature', 'A clean butter knife or blunt edge of a blade'],
          gu: ['સફરજન', 'રસોડાની છરી અથવા બ્લેડની બુઠ્ઠી ધાર'],
          hi: ['सेब', 'चाकू या ब्लेड की धार'],
        },
        stepByStep: {
          en: [
            'Take a dry, room-temperature apple.',
            'Hold the knife blade perpendicular to the apple skin.',
            'Gently scrape downwards across the red peel without cutting the skin.',
            'Observe what accumulates on the blade edge.',
          ],
          gu: [
            'સૂકું સફરજન લો.',
            'છરીની ધાર સફરજનની છાલ પર ધીમેથી ઊભી રાખી ઘસો.',
            'છાલ કાપ્યા વગર હળવેથી નીચે તરફ ઘસો.',
            'છરીની ધાર પર શું જમા થાય છે તે જુઓ.',
          ],
          hi: [
            'सूखा सेब लें।',
            'चाकू को छिलके पर हल्का तिरछा रखकर नीचे की ओर धीरे-धीरे खुरचें।',
            'देखें कि चाकू की धार पर क्या जमा होता है।',
          ],
        },
        pureSampleResult: {
          en: 'Unwaxed natural apples produce minimal to no white powder, only faint organic moisture.',
          gu: 'કુદરતી સફરજનમાંથી સફેદ પાવડર નીકળતો નથી.',
          hi: 'प्राकृतिक सेब से कोई सफेद पाउडर नहीं निकलता।',
        },
        adulteratedSampleResult: {
          en: 'Wax-coated apples release copious amounts of white, flaky, waxy shavings that stick to the blade.',
          gu: 'મીણ ચડાવેલા સફરજનમાંથી સફેદ રંગનો મીણનો ભૂકો બ્લેડ પર ચોખ્ખો ઉખડી આવે છે.',
          hi: 'मोम लगे सेब से सफेद रंग का मोमी चूरा निकलकर चाकू पर चिपक जाता है।',
        },
        canDetect: {
          en: ['Surface wax coating'],
          gu: ['સપાટી પરનું મીણ'],
          hi: ['सतह पर लगा मोम'],
        },
        cannotDetect: {
          en: ['Whether wax is natural carnauba or toxic petroleum paraffin (requires lab analysis)'],
          gu: ['મીણ કુદરતી છે કે કેમિકલ પેરાફિન'],
          hi: ['मोम प्राकृतिक है या रासायनिक पैराफिन'],
        },
        safetyPrecautions: {
          en: ['Handle knife carefully. If wax is present, peel the apple skin or wash with warm baking soda water before eating.'],
          gu: ['છરી વાપરતી વખતે સાચવવું. મીણ હોય તો છાલ ઉતારીને જ ખાવું.'],
          hi: ['चाकू से हाथ न कटे। मोम हो तो छिलका उतारकर ही खाएं।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'FTIR (Fourier Transform Infrared Spectroscopy) for Hydrocarbon Wax Identification',
        gu: 'હાઈડ્રોકાર્બન વેક્સ માટે FTIR સ્પેક્ટ્રોસ્કોપી',
        hi: 'हाइड्रोकार्बन वैक्स जांच हेतु FTIR स्पेक्ट्रोस्कोपी',
      },
      whyLabNeeded: {
        en: 'Differentiates permissible plant beeswax/carnauba wax from illegal petroleum-derived paraffin wax.',
        gu: 'પરવાનગી પ્રાપ્ત ખાદ્ય મીણ અને બિન-પરવાનગી પેટ્રોલિયમ મીણ વચ્ચેનો ભેદ પારખવા માટે FTIR જરૂરી છે.',
        hi: 'स्वीकृत खाद्य मोम और प्रतिबंधित पेट्रोलियम मोम का अंतर केवल FTIR से पता चलता है।',
      },
      equipmentAndChemicals: {
        en: ['FTIR Spectrometer with ATR crystal', 'Chloroform solvent'],
        gu: ['FTIR સ્પેક્ટ્રોમીટર'],
        hi: ['FTIR स्पेक्ट्रोमीटर'],
      },
      recommendedLabTypes: {
        en: ['NABL accredited Organic Chemistry Labs', 'CFTRI'],
        gu: ['NABL એક્રેડિટેડ લેબ્સ'],
        hi: ['एनएबीएल मान्यता प्राप्त प्रयोगशाला'],
      },
      approxCostINR: '₹1,200 – ₹2,200',
      fssaiStandardRef: 'FSS (Packaging and Labelling) Regulations 2011 – If wax is applied, every package must carry label: "Coated with Food Grade Wax (Name of wax)". Unlabelled wax is illegal.',
      sampleSubmissionAdvice: {
        en: 'Deliver 3 whole apples in clean paper bag.',
        gu: '૩ આખા સફરજન પેપર બેગમાં મોકલો.',
        hi: '३ पूरे सेब कागज के थैले में भेजें।',
      },
    },
  },

  // --- 11. TEA LEAVES (BEVERAGES) ---
  {
    id: 'tea-leaves',
    categoryId: 'beverages',
    name: {
      en: 'Tea Leaves / CTC Chai Patti',
      gu: 'ચા ની પત્તી (ચા પત્તી)',
      hi: 'चाय पत्ती (सीटीसी चाय)',
    },
    subtitle: {
      en: 'Exhausted used leaves re-dyed with coal tar dye, graphite, and iron filings',
      gu: 'વપરાઈ ગયેલી ચાને ફરી સુકવી કાળો રંગ, ગ્રેફાઈટ અને લોખંડની રજકણ ભેળવવી',
      hi: 'इस्तेमाल की हुई चाय पत्ती को रंगकर और लोहे का बुरादा मिलाकर बेचना',
    },
    alternateNames: ['tea', 'chai', 'tea leaves', 'chai patti', 'ctc tea', 'ચા', 'ચા પત્તી', 'ચાય', 'चाय', 'चाय पत्ती'],
    icon: '☕',
    riskSeverity: 'High',
    overview: {
      en: 'Tea is India’s favourite drink, but cheap packets often mix "exhausted" (already brewed and dried) tea leaves dyed with black coal tar or Prussian blue, plus iron filings from old processing rollers.',
      gu: 'ચામાં વપરાયેલી (ઉકાળીને સૂકવેલી) પત્તીઓ, કેમિકલ રંગ અને પ્રોસેસિંગ મશીનોમાંથી નીકળતો લોખંડનો ઝીણો ભૂકો ભેળવવામાં આવે છે.',
      hi: 'चाय पत्ती में इस्तेमाल की हुई बासी पत्तियां, काला रासायनिक रंग और लोहे का महीन बुरादा मिला दिया जाता है।',
    },
    adulterants: [
      {
        name: { en: 'Iron Filings', gu: 'લોખંડની રજકણો (આયર્ન ફાઈલિંગ્સ)', hi: 'लोहे का बुरादा' },
        riskLevel: 'Severe',
        description: {
          en: 'Magnetic iron particulates fallen during roller shredding and deliberately not filtered out.',
          gu: 'પ્રોસેસિંગ વખતે મશીનમાંથી ખરેલી અને વજન વધારવા રહેવા દેવાયેલી લોખંડની રજકણો.',
          hi: 'रोलर से घिसकर गिरा हुआ लोहे का महीन बुरादा।',
        },
        healthRisks: {
          en: 'Lacerates digestive mucosa, internal stomach bleeding, chronic iron overload.',
          gu: 'પેટના અંદરના અસ્તરમાં ઘસરકા, આંતરિક રક્તસ્ત્રાવ.',
          hi: 'आंतों में कट लगना, आंतरिक रक्तस्राव और पेट दर्द।',
        },
      },
      {
        name: { en: 'Exhausted Leaves with Coal Tar Dye', gu: 'વપરાયેલી પત્તીઓ અને કોલટાર રંગ', hi: 'इस्तेमाल की गई पत्तियां और काला रंग' },
        riskLevel: 'High',
        description: {
          en: 'Hotel waste tea grounds redried and coated with dyes.',
          gu: 'હોટલોની વધેલી ચાને સૂકવીને તેના પર કાળો કેમિકલ રંગ ચડાવવો.',
          hi: 'होटलों की इस्तेमाल की हुई चाय पत्ती को सुखाकर कृत्रिम रंग चढ़ाना।',
        },
        healthRisks: {
          en: 'Carcinogenic coal tar toxins, hepatic strain.',
          gu: 'કેન્સર અને લીવરની બીમારીઓ.',
          hi: 'लिवर पर दबाव और कैंसर का खतरा।',
        },
      },
    ],
    homeTests: [
      {
        id: 'tea-magnet-test',
        testName: {
          en: 'Magnet Test for Iron Filings',
          gu: 'ચુંબક ટેસ્ટ (લોખંડની રજકણો માટે)',
          hi: 'चुंबक परीक्षण (लोहे के बुरादे हेतु)',
        },
        adulterantTargeted: { en: 'Iron filings', gu: 'લોખંડની રજકણો', hi: 'लोहे का बुरादा' },
        difficulty: 'Easy',
        timeRequiredMinutes: 1,
        requiredMaterials: {
          en: ['2 tablespoons Tea powder', 'A white sheet of paper', 'A small household magnet'],
          gu: ['૨ ચમચી ચા પત્તી', 'સફેદ કાગળ', 'સામાન્ય ચુંબક'],
          hi: ['२ चम्मच चाय पत्ती', 'सफेद कागज', 'छोटा चुंबक'],
        },
        stepByStep: {
          en: [
            'Spread the tea powder thinly across the white paper.',
            'Hover and glide the magnet slowly just 2 mm above the tea leaves.',
            'Observe if any dark particles jump and cling onto the magnet surface.',
          ],
          gu: [
            'કાગળ પર ચા પત્તીને પાતળી પાથરી દો.',
            'ચુંબકને ચા ની પત્તીથી ૨ મિમી ઉપર રાખી ધીમેથી ફેરવો.',
            'જુઓ કે કોઈ કાળા કણો ચુંબક તરફ ખેંચાઈને ચોંટે છે કે નહીં.',
          ],
          hi: [
            'सफेद कागज पर चाय पत्ती को पतला फैलाएं।',
            'चुंबक को चाय पत्ती के बिल्कुल ऊपर धीरे-धीरे घुमाएं।',
            'देखें कि क्या कोई काले कण खिंचकर चुंबक पर चिपकते हैं।',
          ],
        },
        pureSampleResult: {
          en: 'Pure tea leaves contain zero magnetic material; nothing attaches to the magnet.',
          gu: 'શુદ્ધ ચા માં કોઈ ચુંબકીય પદાર્થ નથી હોતો; ચુંબક પર કશું ચોંટતું નથી.',
          hi: 'शुद्ध चाय पत्ती में कोई कण चुंबक से नहीं चिपकता।',
        },
        adulteratedSampleResult: {
          en: 'Adulterated tea will show dark sharp iron particles visibly leaping up and clinging in clusters onto the magnet.',
          gu: 'ભેળસેળવાળી ચામાંથી લોખંડના તીક્ષ્ણ કણો ચુંબક તરફ ખેંચાઈને ચોંટી જાય છે.',
          hi: 'लोहे का बुरादा होने पर काले नुकीले कण उछलकर चुंबक पर चिपक जाते हैं।',
        },
        canDetect: {
          en: ['Iron filings and magnetic minerals'],
          gu: ['લોખંડની રજકણો'],
          hi: ['लोहे के कण'],
        },
        cannotDetect: {
          en: ['Coal tar dyes', 'Exhausted leaves without magnetic material'],
          gu: ['કેમિકલ રંગ'],
          hi: ['कृत्रिम रंग'],
        },
        safetyPrecautions: {
          en: ['Do not use the tested tea batch if iron filings are found.'],
          gu: ['જો લોખંડ નીકળે તો તે ચા વાપરવી નહીં.'],
          hi: ['लोहा निकलने पर चाय तुरंत नष्ट करें।'],
        },
      },
      {
        id: 'tea-cold-filter-paper',
        testName: {
          en: 'Cold Filter Paper Test for Artificial Color',
          gu: 'ઠંડા ફિલ્ટર પેપર પર કલર ટેસ્ટ',
          hi: 'ठंडे फिल्टर पेपर पर रंग परीक्षण',
        },
        adulterantTargeted: { en: 'Artificial dyes and coal tar color', gu: 'કૃત્રિમ રંગ અને કોલટાર ડાય', hi: 'कृत्रिम रंग व डाई' },
        difficulty: 'Easy',
        timeRequiredMinutes: 2,
        requiredMaterials: {
          en: ['White filter paper or white tissue napkin', 'A little cold water', '1 teaspoon tea leaves'],
          gu: ['સફેદ ફિલ્ટર પેપર અથવા ટિશ્યુ પેપર', 'થોડું ઠંડું પાણી', '૧ ચમચી ચા'],
          hi: ['सफेद फिल्टर पेपर या टिश्यू पेपर', 'थोड़ा ठंडा पानी', '१ चम्मच चाय पत्ती'],
        },
        stepByStep: {
          en: [
            'Dampen the center of the white filter paper with a few drops of cold water.',
            'Sprinkle a small pinch of tea leaves onto the wet area.',
            'Wait for 1 to 2 minutes and inspect the paper beneath the leaves.',
          ],
          gu: [
            'સફેદ પેપરના વચ્ચેના ભાગને ઠંડા પાણીથી ભીનો કરો.',
            'તે ભીના ભાગ પર ચપટી ચા પત્તી છાંટો.',
            '૧-૨ મિનિટ રાહ જોઈ પત્તીઓ નીચે પેપર પર રંગ જુઓ.',
          ],
          hi: [
            'सफेद पेपर को थोड़े ठंडे पानी से गीला करें।',
            'गीले भाग पर थोड़ी चाय पत्ती छिड़कें।',
            '१-२ मिनट बाद पत्तियों को हटाकर पेपर को देखें।',
          ],
        },
        pureSampleResult: {
          en: 'Genuine tea requires boiling water to infuse; in cold water it does NOT bleed any color immediately onto the paper.',
          gu: 'અસલી ચા માત્ર ઉકળતા પાણીમાં જ રંગ છોડે છે; ઠંડા પાણીમાં પેપર પર કોઈ રંગ ફેલાતો નથી.',
          hi: 'असली चाय केवल उबलते पानी में रंग छोड़ती है; ठंडे पानी में पेपर पर कोई रंग नहीं फैलता।',
        },
        adulteratedSampleResult: {
          en: 'Artificially coloured tea bleeds dark brownish, reddish, or black dye stains across the wet paper within 60 seconds.',
          gu: 'રંગવાળી ચા ઠંડા પાણીમાં પણ ૧ મિનિટમાં જ ઘાટા લાલ-કથ્થાઈ કે કાળા ડાઘા પાડી દે છે.',
          hi: 'रंगी हुई चाय पत्ती ६० सेकंड में ही ठंडे पानी में गहरा कत्थई या लाल रंग छोड़ देती है।',
        },
        canDetect: {
          en: ['Cold water-soluble synthetic dyes'],
          gu: ['પાણીમાં ઓગળતા કૃત્રિમ રંગો'],
          hi: ['घुलनशील कृत्रिम रंग'],
        },
        cannotDetect: {
          en: ['Aroma chemicals (synthetic bergamot/cardamom oils)'],
          gu: ['સુગંધિત કેમિકલ'],
          hi: ['कृत्रिम सुगंध'],
        },
        safetyPrecautions: {
          en: ['Safe home test.'],
          gu: ['સલામત ટેસ્ટ.'],
          hi: ['सुरक्षित घरेलू टेस्ट।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'Iron Content by AAS & TLC for Coal Tar Dyes',
        gu: 'AAS દ્વારા આયર્ન ટેસ્ટ અને રંગો માટે TLC',
        hi: 'AAS द्वारा लौह मात्रा और रंगों हेतु TLC',
      },
      whyLabNeeded: {
        en: 'FSSAI limits iron filings to 250 mg/kg max. Precise quantification requires acid digestion and Atomic Absorption Spectroscopy.',
        gu: 'FSSAI મુજબ ૨૫૦ mg/kg કરતાં વધુ લોખંડ ગેરકાયદેસર છે, જે AAS મશીનથી જ નક્કી થાય છે.',
        hi: 'FSSAI के अनुसार २५० mg/kg से अधिक लोहे का बुरादा प्रतिबंधित है।',
      },
      equipmentAndChemicals: {
        en: ['Atomic Absorption Spectrometer (AAS)', 'Magnetic separation jig', 'TLC apparatus'],
        gu: ['AAS સ્પેક્ટ્રોમીટર'],
        hi: ['परमाणु अवशोषण स्पेक्ट्रोमीटर (AAS)'],
      },
      recommendedLabTypes: {
        en: ['Tea Board of India Quality Laboratories (Kolkata, Siliguri, Coonoor)', 'NABL Accredited Labs'],
        gu: ['ટી બોર્ડ ઓફ ઈન્ડિયા લેબ્સ', 'NABL લેબ્સ'],
        hi: ['भारतीय चाय बोर्ड गुणवत्ता लैब', 'एनएबीएल प्रयोगशाला'],
      },
      approxCostINR: '₹1,000 – ₹1,800',
      fssaiStandardRef: 'FSSAI Notification 2016: Iron filings in tea strictly capped at 250 mg/kg maximum limit.',
      sampleSubmissionAdvice: {
        en: 'Provide 200g in factory-sealed packet.',
        gu: '૨૦૦ ગ્રામ ચા પેકેટમાં સીલ કરીને આપો.',
        hi: '२०० ग्राम चाय पत्ती सीलबंद पैकेट में भेजें।',
      },
    },
  },

  // --- 12. TOOR DAL / ARHAR DAL (GRAINS & PULSES) ---
  {
    id: 'toor-dal',
    categoryId: 'pulses',
    name: {
      en: 'Toor Dal / Arhar Dal (Pigeon Pea)',
      gu: 'તુવેર દાળ',
      hi: 'तुअर दाल / अरहर दाल',
    },
    subtitle: {
      en: 'Adulterated with paralysis-causing Kesari Dal (Lathyrus sativus) and Metanil Yellow',
      gu: 'લકવો કરતાં ઝેરી કેસરી દાળ (લાથાઇરસ) અને મેટાનિલ યલો રંગની ભેળસેળ',
      hi: 'लकवा पैदा करने वाली केसरी दाल और मेटानिल येलो रंग की खतरनाक मिलावट',
    },
    alternateNames: ['toor dal', 'tuver dal', 'arhar dal', 'pigeon pea', 'તુવેર દાળ', 'તુવર દાળ', 'દાળ', 'तुअर दाल', 'अरहर दाल', 'दाल'],
    icon: '🥣',
    riskSeverity: 'Critical',
    overview: {
      en: 'Toor dal is a staple protein across Indian households. Cheaper toxic Kesari dal (Lathyrus sativus), which contains neurotoxins causing lower limb paralysis (Neurolathyrism), is polished with yellow dye and mixed in.',
      gu: 'તુવેર દાળ ભારતીય ઘરોમાં પ્રોટીનનો મુખ્ય સ્ત્રોત છે. તેના જેવી જ દેખાતી સસ્તી કેસરી દાળ ભેળવાય છે, જેમાં રહેલું ન્યુરોટોક્સિન પગનો લકવો (લેથાઇરિઝમ) પેદા કરે છે.',
      hi: 'तुअर दाल में सस्ती केसरी दाल मिलाई जाती है, जिसमें मौजूद न्यूरोटॉक्सिन पैरों में स्थायी लकवा (न्यूरोलैथाइरिज्म) पैदा करता है।',
    },
    adulterants: [
      {
        name: { en: 'Kesari Dal (Lathyrus sativus)', gu: 'કેસરી દાળ (લખોડી દાળ)', hi: 'केसरी दाल (खेसारी दाल)' },
        riskLevel: 'Severe',
        description: {
          en: 'A pulse containing potent neurotoxin beta-ODAP, cheaper to cultivate in drought.',
          gu: 'દુષ્કાળમાં પણ થતી સસ્તી દાળ જેમાં પગનો લકવો કરતાં બીટા-ODAP ન્યુરોટોક્સિન હોય છે.',
          hi: 'बीटा-ओडीएपी (beta-ODAP) न्यूरोटॉक्सिन युक्त दाल जो दिखने में तुअर जैसी होती है।',
        },
        healthRisks: {
          en: 'Neurolathyrism: Irreversible spastic paralysis of lower limbs, stiffness in knees and ankles.',
          gu: 'ન્યુરોલેથાઇરિઝમ: બંને પગમાં કાયમી લકવો, ઘૂંટણમાં સખત જકડાઈ જવું.',
          hi: 'न्यूरोलैथाइरिज्म: निचले अंगों का स्थायी पक्षाघात (लकवा) और जोड़ों में जकड़न।',
        },
      },
    ],
    homeTests: [
      {
        id: 'dal-shape-inspection',
        testName: {
          en: 'Physical Shape & Slant Visual Inspection',
          gu: 'આકાર અને ઢાળનું શારીરિક નિરીક્ષણ',
          hi: 'आकार और बनावट की दृश्य पहचान',
        },
        adulterantTargeted: { en: 'Kesari Dal (Lathyrus)', gu: 'કેસરી દાળ', hi: 'केसरी (खेसारी) दाल' },
        difficulty: 'Easy',
        timeRequiredMinutes: 2,
        requiredMaterials: {
          en: ['Handful of Toor dal', 'White plate and good lighting'],
          gu: ['એક મુઠ્ઠી તુવેર દાળ', 'સફેદ થાળી અને સારો પ્રકાશ'],
          hi: ['एक मुट्ठी तुअर दाल', 'सफेद थाली'],
        },
        stepByStep: {
          en: [
            'Spread the dal grains evenly on a flat white plate.',
            'Examine individual grain contours carefully with naked eyes or magnifying lens.',
          ],
          gu: [
            'સફેદ થાળી પર દાળના દાણા પાથરી દો.',
            'દરેક દાણાનો આકાર ધ્યાનથી જુઓ.',
          ],
          hi: [
            'सफेद थाली पर दाल के दानों को फैलाएं।',
            'प्रत्येक दाने की बनावट को ध्यान से देखें।',
          ],
        },
        pureSampleResult: {
          en: 'Pure Toor dal grains are spherical, uniformly rounded, and smooth at the edges.',
          gu: 'અસલી તુવેર દાળના દાણા સંપૂર્ણ ગોળાકાર અને કિનારીઓથી લીસા હોય છે.',
          hi: 'असली तुअर दाल के दाने गोल और किनारों से चिकने व सपाट होते हैं।',
        },
        adulteratedSampleResult: {
          en: 'Kesari dal grains are wedge-shaped, flat-sided, rectangular/trapezoidal, and have a slanted cross-cut edge.',
          gu: 'કેસરી દાળના દાણા ચોરસ, ખૂણાવાળા, એક તરફથી ઢળતા અને પથ્થર જેવા ચપટા હોય છે.',
          hi: 'केसरी दाल के दाने चौकोर, तिरछे, एक तरफ ढलान वाले और चपटे पत्थर जैसे होते हैं।',
        },
        canDetect: {
          en: ['Kesari dal based on morphology'],
          gu: ['કેસરી દાળનો આકાર'],
          hi: ['केसरी दाल की बनावट'],
        },
        cannotDetect: {
          en: ['Heavy metal sprays or internal fumigant residues'],
          gu: ['જંતુનાશક દવાઓ'],
          hi: ['कीटनाशक गैस अवशेष'],
        },
        safetyPrecautions: {
          en: ['Do not cook or consume if wedge-shaped grains exceed 1% of the sample.'],
          gu: ['જો ચોરસ-ત્રિકોણાકાર દાણા દેખાય તો દાળ ન રાંધવી.'],
          hi: ['तिरछे दाने दिखने पर दाल का सेवन न करें।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'HPLC for beta-ODAP Neurotoxin & Acid extraction for Metanil Yellow',
        gu: 'બીટા-ODAP ટોક્સિન માટે HPLC ટેસ્ટ',
        hi: 'बीटा-ओडीएपी न्यूरोटॉक्सिन हेतु HPLC टेस्ट',
      },
      whyLabNeeded: {
        en: 'Accurately quantifies beta-N-oxalyl-L-alpha,beta-diaminopropionic acid (ODAP) to confirm toxic lathyrus species legally.',
        gu: 'લકવો કરનાર ODAP ઝેરનું ચોક્કસ પ્રમાણ માપવા માટે HPLC જરૂરી છે.',
        hi: 'लकवाकारी ओडीएपी विष की मात्रा मापने के लिए HPLC आवश्यक है।',
      },
      equipmentAndChemicals: {
        en: ['HPLC with Fluorescent detector', 'Amino acid analyzer'],
        gu: ['HPLC મશીન'],
        hi: ['HPLC विश्लेषक'],
      },
      recommendedLabTypes: {
        en: ['National Institute of Nutrition (NIN) Hyderabad', 'FSSAI State Labs'],
        gu: ['નેશનલ ઇન્સ્ટિટ્યૂટ ઓફ ન્યુટ્રીશન (NIN)'],
        hi: ['राष्ट्रीय पोषण संस्थान (NIN) हैदराबाद'],
      },
      approxCostINR: '₹1,500 – ₹2,500',
      fssaiStandardRef: 'FSS (Prohibition and Restrictions on Sales) Regulations 2011 – Complete ban on sale of Kesari gram and Kesari dal in whole, broken or flour form.',
      sampleSubmissionAdvice: {
        en: 'Deliver 250g in sealed bag.',
        gu: '૨૫૦ ગ્રામ દાળ સીલબંધ બેગમાં મોકલો.',
        hi: '२५० ग्राम दाल सीलबंद बैग में भेजें।',
      },
    },
  },

  // --- 13. PANEER & MAWA/KHOYA (DAIRY) ---
  {
    id: 'paneer-khoya',
    categoryId: 'dairy',
    name: {
      en: 'Paneer & Mawa / Khoya',
      gu: 'પનીર અને માવો (ખોયા)',
      hi: 'पनीर और मावा / खोया',
    },
    subtitle: {
      en: 'Festive dairy solids heavily bulked with starch, refined flour, detergent, and synthetic fats',
      gu: 'તહેવારોમાં સ્ટાર્ચ, મેંદો, ડિટર્જન્ટ અને સિન્થેટિક તેલની ભેળસેળથી દૂષિત થતો પદાર્થ',
      hi: 'त्यौहारों में स्टार्च, मैदा, डिटर्जेंट और घटिया तेल से मिलावटी बनाया जाने वाला मावा',
    },
    alternateNames: ['paneer', 'khoya', 'mawa', 'cottage cheese', 'પનીર', 'માવો', 'ખોયા', 'पनीर', 'मावा'],
    icon: '🧀',
    riskSeverity: 'Critical',
    overview: {
      en: 'Used extensively in Indian curries and traditional sweets (Gulab Jamun, Barfi, Peda). During festive seasons, synthetic mawa concocted with skimmed milk powder, starch, detergent, and rancid palm oil floods the market.',
      gu: 'શાક અને મીઠાઈઓમાં મોટાપાયે વપરાય છે. તહેવારોમાં દૂધના પાવડર, સ્ટાર્ચ, ડિટર્જન્ટ અને પામોલિન તેલમાંથી નકલી માવો અને પનીર બનાવાય છે.',
      hi: 'त्यौहारों में मांग अधिक होने पर स्किम्ड मिल्क पाउडर, अरारोट, डिटर्जेंट और सस्ते तेल को मिलाकर कृत्रिम मावा व पनीर तैयार किया जाता है।',
    },
    adulterants: [
      {
        name: { en: 'Starch & Arrowroot', gu: 'સ્ટાર્ચ અને અરારૂટ', hi: 'स्टार्च और अरारोट' },
        riskLevel: 'Moderate',
        description: {
          en: 'Added to give artificial firmness and volume to coagulated solids.',
          gu: 'માવા અને પનીરનો જથ્થો વધારવા માટે ઉમેરાતો સસ્તો સ્ટાર્ચ.',
          hi: 'मावे का वजन और ठोसपन बढ़ाने के लिए मिलाया जाने वाला स्टार्च।',
        },
        healthRisks: {
          en: 'Digestive upset, sudden hyperglycemia spikes in diabetics.',
          gu: 'અપચો અને ડાયાબિટીસ દર્દીઓમાં સુગરમાં અસામાન્ય વધારો.',
          hi: 'पाचन विकार और मधुमेह के मरीजों में शुगर का असंतुलन।',
        },
      },
      {
        name: { en: 'Detergent & Synthetic Emulsifiers', gu: 'ડિટર્જન્ટ અને કેમિકલ', hi: 'डिटर्जेंट और इमल्सीफायर' },
        riskLevel: 'Severe',
        description: {
          en: 'Used to combine vegetable fats and water into fake milk solids.',
          gu: 'તેલ અને પાણીને દૂધ જેવું ઘટ્ટ બનાવવા વપરાતો સાબુ/ડિટર્જન્ટ.',
          hi: 'सस्ते तेल और पानी को गाढ़ा मावा बनाने के लिए प्रयुक्त रसायन।',
        },
        healthRisks: {
          en: 'Severe stomach mucosal erosion, acute vomiting and food poisoning.',
          gu: 'પેટમાં અલ્સર, ઝાડા-ઉલટી અને ગંભીર ફૂડ પોઈઝનિંગ.',
          hi: 'पेट में छाले, उल्टी-दस्त और तीव्र फूड पॉइजनिंग।',
        },
      },
    ],
    homeTests: [
      {
        id: 'paneer-iodine-test',
        testName: {
          en: 'Iodine Test for Starch in Paneer / Mawa',
          gu: 'પનીર / માવામાં સ્ટાર્ચ માટે આયોડિન ટેસ્ટ',
          hi: 'पनीर व मावा में स्टार्च जांच (आयोडीन विधि)',
        },
        adulterantTargeted: { en: 'Starch, maida, flour', gu: 'સ્ટાર્ચ, મેંદો, લોટ', hi: 'स्टार्च, मैदा' },
        difficulty: 'Easy',
        timeRequiredMinutes: 3,
        requiredMaterials: {
          en: ['Small piece of paneer or mawa', 'Tincture Iodine (or Povidone Iodine solution)', 'A cup of water and clean plate'],
          gu: ['પનીર કે માવાનો નાનો ટુકડો', 'ટિંચર આયોડિન', 'પાણીનો કપ અને રકાબી'],
          hi: ['पनीर या मावे का छोटा टुकड़ा', 'टिंचर आयोडीन', 'पानी और सफेद प्लेट'],
        },
        stepByStep: {
          en: [
            'Boil a small sample of paneer or mawa in a cup of water for 2 minutes.',
            'Allow the sample to cool completely to room temperature.',
            'Add 2 to 3 drops of Tincture Iodine onto the cooled sample.',
            'Watch the reaction surface.',
          ],
          gu: [
            'પનીર કે માવાના ટુકડાને પાણીમાં ૨ મિનિટ ઉકાળો.',
            'તેને સંપૂર્ણ ઠંડુ થવા દો.',
            'તેના પર ૨-૩ ટીપાં ટિંચર આયોડિન ઉમેરો.',
            'સપાટી પર બનતો રંગ જુઓ.',
          ],
          hi: [
            'पनीर या मावे के टुकड़े को पानी में २ मिनट उबालें।',
            'इसे पूरी तरह ठंडा होने दें।',
            'ठंडे नमूने पर २-३ बूंदें टिंचर आयोडीन की डालें।',
            'रंग में बदलाव का निरीक्षण करें।',
          ],
        },
        pureSampleResult: {
          en: 'Pure dairy paneer/mawa remains pale yellowish-brown without any intense blue color.',
          gu: 'શુદ્ધ પનીર કે માવો વાદળી નથી થતો; આયોડિનનો સામાન્ય આછો પીળો રંગ રહે છે.',
          hi: 'शुद्ध पनीर/मावे में कोई नीला रंग नहीं बनता; सामान्य पीलापन ही रहता है।',
        },
        adulteratedSampleResult: {
          en: 'If starch or flour was added, the sample turns intense dark blue or violet within 5 seconds.',
          gu: 'સ્ટાર્ચ કે લોટ હોય તો ૫ સેકન્ડમાં જ નમૂનો ઘાટો વાદળી કે જાંબલી થઈ જાય છે.',
          hi: 'स्टार्च या मैदा मिला होने पर नमूना तुरंत गहरा नीला या बैंगनी हो जाता है।',
        },
        canDetect: {
          en: ['Starch', 'Arrowroot', 'Refined wheat flour (Maida)'],
          gu: ['સ્ટાર્ચ', 'અરારૂટ', 'મેંદો'],
          hi: ['स्टार्च', 'मैदा', 'अरारोट'],
        },
        cannotDetect: {
          en: ['Detergent', 'Microbial bacterial count', 'Urea'],
          gu: ['ડિટર્જન્ટ', 'બેક્ટેરિયા', 'યુરિયા'],
          hi: ['डिटर्जेंट', 'जीवाणु', 'यूरिया'],
        },
        safetyPrecautions: {
          en: ['Do not consume tested food sample.'],
          gu: ['ટેસ્ટ કરેલો ટુકડો ક્યારેય ખાવો નહીં.'],
          hi: ['परीक्षित टुकड़े को फेंक दें।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'Babcock Fat Extraction & HPLC/GC for Extraneous Fat + Microbial Plate Count',
        gu: 'ફેટ એક્સટ્રેક્શન અને માઇક્રોબાયોલોજીકલ પ્લેટ કાઉન્ટ',
        hi: 'फैट निष्कर्षण और माइक्रोबियल प्लेट काउंट टेस्ट',
      },
      whyLabNeeded: {
        en: 'Differentiates true milk fat from cheap hydrogenated palm fats and counts dangerous coliform and E. coli pathogens.',
        gu: 'દૂધની અસલી ચરબી અને વનસ્પતિ તેલનો ભેદ પારખવા અને હાનિકારક ઇ-કોલાઇ બેક્ટેરિયા તપાસવા લેબ જરૂરી છે.',
        hi: 'दूध के असली फैट और वनस्पति तेल का अंतर तथा ई-कोलाई बैक्टीरिया की जांच केवल लैब में संभव है।',
      },
      equipmentAndChemicals: {
        en: ['Babcock centrifuge', 'Gas Chromatograph (GC)', 'Incubator for Coliform culture'],
        gu: ['સેન્ટ્રીફ્યુજ', 'ગેસ ક્રોમેટોગ્રાફ'],
        hi: ['सेंट्रीफ्यूज', 'गैस क्रोमैटोग्राफ'],
      },
      recommendedLabTypes: {
        en: ['FSSAI Notified State Food Testing Laboratories', 'CALF - NDDB Anand'],
        gu: ['ગુજરાત સ્ટેટ ફૂડ ટેસ્ટિંગ લેબ્સ', 'NDDB આણંદ'],
        hi: ['FSSAI अधिसूचित राज्य खाद्य प्रयोगशालाएं'],
      },
      approxCostINR: '₹1,000 – ₹2,200',
      fssaiStandardRef: 'FSS (Food Products Standards) 2011 – Regulation 2.1.16 (Paneer/Chhana shall contain not less than 50% milk fat on dry matter basis)',
      sampleSubmissionAdvice: {
        en: 'Pack 200g in an insulated cold-pack box under 4°C and submit within 12 hours.',
        gu: '૨૦૦ ગ્રામ પનીર ૪ ડિગ્રી સેલ્સિયસ કોલ્ડ બોક્સમાં રાખી ૧૨ કલાકમાં લેબમાં પહોંચાડો.',
        hi: '२०० ग्राम पनीर आइस पैक के साथ ४°C पर १२ घंटे के भीतर लैब पहुंचाएं।',
      },
    },
  },

  // --- 14. BASMATI & RAW RICE (GRAINS & PULSES) ---
  {
    id: 'rice',
    categoryId: 'grains',
    name: {
      en: 'Basmati & Raw Rice',
      gu: 'બાસમતી અને સાદા ચોખા',
      hi: 'बासमती व सामान्य चावल',
    },
    subtitle: {
      en: 'Vulnerable to mineral oil/talc polishing, urea whitening, and artificial synthetic plastic grain hoaxes',
      gu: 'મિનરલ ઓઇલ પોલિશિંગ, યુરિયા સફેદાઈ અને હલકી ગુણવત્તાના મિશ્રણનું જોખમ',
      hi: 'मिनरल ऑयल और टेलकम पॉलिश, यूरिया की चमक और मिलावट का खतरा',
    },
    alternateNames: ['rice', 'basmati rice', 'chawal', 'chokha', 'ચોખા', 'બાસમતી ચોખા', 'ભાત', 'चावल', 'बासमती चावल'],
    icon: '🍚',
    riskSeverity: 'Medium',
    overview: {
      en: 'Premium basmati rice commands top rates. Low-grade rice is chemically bleached, coated with toxic talc and liquid paraffin for pearlescent shine, or polished with urea.',
      gu: 'બાસમતી ચોખા મોંઘા હોવાથી હલકા ચોખાને ટેલ્કમ પાવડર, મિનરલ ઓઇલ અને યુરિયાથી પોલિશ કરી બાસમતી તરીકે વેચવામાં આવે છે.',
      hi: 'बासमती चावल महंगा होने के कारण सस्ते चावल को टेलकम पाउडर, मिनरल ऑयल और रासायनिक पॉलिश से चमकाकर बेचा जाता है।',
    },
    adulterants: [
      {
        name: { en: 'Talc & Liquid Paraffin Polish', gu: 'ટેલ્કમ પાવડર અને લિક્વિડ પેરાફિન', hi: 'टेलकम पाउडर और पैराफिन पॉलिश' },
        riskLevel: 'Moderate',
        description: {
          en: 'Mineral dust and petroleum oil applied to impart high gloss.',
          gu: 'ચોખાને મોતી જેવો ચમકદાર બનાવવા માટે લગાવવામાં આવતું રસાયણ.',
          hi: 'चावल को अत्यधिक सफेद व चमकदार बनाने के लिए लगाई गई पॉलिश।',
        },
        healthRisks: {
          en: 'Stomach irritation, potential asbestos-like mineral dust accumulation over years.',
          gu: 'પેટમાં સોજો અને લાંબા ગાળે પાચનતંત્રને નુકસાન.',
          hi: 'पेट में जलन और लंबे समय में आंतों को नुकसान।',
        },
      },
    ],
    homeTests: [
      {
        id: 'rice-soak-wash-test',
        testName: {
          en: 'Water Wash & Clarity Test for Talc Polish',
          gu: 'ચોખા ધોવાની અને ચોખ્ખાઈની કસોટી (ટેલ્ક પોલિશ માટે)',
          hi: 'पानी से धोने और चमक जांच का परीक्षण (टेलकम पॉलिश)',
        },
        adulterantTargeted: { en: 'Talc, chalk, mineral oil', gu: 'ટેલ્કમ પાવડર, ચોક, તેલ', hi: 'टेलकम पाउडर, चॉक' },
        difficulty: 'Easy',
        timeRequiredMinutes: 2,
        requiredMaterials: {
          en: ['2 tablespoons Rice grains', 'A clear glass of water'],
          gu: ['૨ ચમચી ચોખા', 'પાણીનો કાચનો ગ્લાસ'],
          hi: ['२ चम्मच चावल', 'कांच का गिलास पानी'],
        },
        stepByStep: {
          en: [
            'Place 2 tablespoons of rice in a glass tumbler of water.',
            'Stir briskly for 30 seconds.',
            'Observe the surface and water clarity.',
          ],
          gu: [
            'કાચના ગ્લાસમાં ૨ ચમચી ચોખા લો.',
            '૩૦ સેકન્ડ સુધી જોરથી હલાવો.',
            'પાણીની સપાટી અને પારદર્શિતા જુઓ.',
          ],
          hi: [
            'कांच के गिलास में २ चम्मच चावल डालें।',
            '३० सेकंड तक तेजी से हिलाएं।',
            'पानी के रंग और सतह पर नजर रखें।',
          ],
        },
        pureSampleResult: {
          en: 'Natural rice yields faint translucent starch cloudiness without oily slick on the top surface.',
          gu: 'કુદરતી ચોખાથી પાણી સામાન્ય આછું સફેદ થાય છે, સપાટી પર કોઈ તેલનું પડ તરતું નથી.',
          hi: 'प्राकृतिक चावल से पानी हल्का दूधिया होता है और सतह पर कोई तेल की परत नहीं तैरती।',
        },
        adulteratedSampleResult: {
          en: 'Talc/chalk makes water chalky opaque white with dense bottom residue, and mineral oil creates rainbow iridescent film on water surface.',
          gu: 'ટેલ્કમથી પાણી અતિશય દૂધ જેવું સફેદ બને છે અને તેલના કારણે પાણી ઉપર મેઘધનુષી તેલના ટીપાં તરે છે.',
          hi: 'टेलकम पाउडर से पानी अत्यधिक सफेद होता है और मिनरल ऑयल की वजह से पानी पर चिकनी परत तैरती है।',
        },
        canDetect: {
          en: ['Excess surface talc and mineral oil'],
          gu: ['ઉપરનું ટેલ્ક અને તેલ'],
          hi: ['अत्यधिक टेलकम व मिनरल ऑयल'],
        },
        cannotDetect: {
          en: ['Pesticide residues in kernel'],
          gu: ['ચોખાના દાણાની અંદર રહેલા જંતુનાશકો'],
          hi: ['भीतर मौजूद कीटनाशक'],
        },
        safetyPrecautions: {
          en: ['Wash rice thoroughly 3 times with warm water before cooking to remove surface contaminants.'],
          gu: ['રાંધતાં પહેલાં ચોખાને ૩ વાર પાણીથી ધોઈ લેવા.'],
          hi: ['पकाने से पहले चावल को ३ बार साफ पानी से धोएं।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'Basmati DNA Fingerprinting (SSR Marker PCR) & Multi-Residue Pesticide Screen',
        gu: 'બાસમતી DNA ફિંગરપ્રિન્ટિંગ (PCR) અને જંતુનાશક ટેસ્ટ',
        hi: 'बासमती डीएनए फिंगरप्रिंटिंग (PCR) और कीटनाशक जांच',
      },
      whyLabNeeded: {
        en: 'DNA marker analysis is the only definitive scientific method to determine the exact percentage of non-basmati rice blended into basmati bags.',
        gu: 'બાસમતીમાં ભેળવેલા સામાન્ય ચોખાની ટકાવારી ફક્ત DNA ફિંગરપ્રિન્ટિંગ દ્વારા જ જાણી શકાય છે.',
        hi: 'बासमती में मिलाए गए गैर-बासमती चावल का प्रतिशत केवल डीएनए टेस्ट से ही पता चलता है।',
      },
      equipmentAndChemicals: {
        en: ['Thermal Cycler Real-Time PCR', 'Capillary DNA Sequencer', 'GC-MS/MS for Fungicides (Tricyclazole)'],
        gu: ['રીઅલ-ટાઇમ PCR', 'DNA સિક્વેન્સર'],
        hi: ['रियल टाइम पीसीआर (PCR)', 'डीएनए सीक्वेंसर'],
      },
      recommendedLabTypes: {
        en: ['Export Inspection Agency (EIA) Laboratories', 'NABL accredited cereal labs'],
        gu: ['એક્સપોર્ટ ઇન્સ્પેક્શન લેબ્સ', 'NABL લેબોરેટરીઝ'],
        hi: ['निर्यात निरीक्षण एजेंसी प्रयोगशालाएं'],
      },
      approxCostINR: '₹2,500 – ₹4,500 (DNA purity verification)',
      fssaiStandardRef: 'FSSAI Basmati Rice Standards 2023: Non-basmati rice admixture shall not exceed 15% in pure basmati rice.',
      sampleSubmissionAdvice: {
        en: 'Submit 500g in clean moisture-proof seal.',
        gu: '૫૦૦ ગ્રામ ચોખા સીલબંધ મોકલો.',
        hi: '५०० ग्राम चावल सीलबंद पैकेट में भेजें।',
      },
    },
  },

  // --- 15. COFFEE POWDER (BEVERAGES) ---
  {
    id: 'coffee-powder',
    categoryId: 'beverages',
    name: {
      en: 'Pure Coffee Powder',
      gu: 'શુદ્ધ કોફી પાવડર',
      hi: 'शुद्ध कॉफी पाउडर',
    },
    subtitle: {
      en: 'Excessive undeclared Chicory, roasted date seeds, and tamarind seed powder',
      gu: 'પરવાનગી વગર વધુ પડતી ચિકોરી, ખજૂરના શેકેલા ઠળિયા અને આંબલીના બીજનો ભૂકો',
      hi: 'अघोषित चिकोरी, खजूर के भुने बीज और इमली के बीजों के पाउडर की मिलावट',
    },
    alternateNames: ['coffee', 'coffee powder', 'pure coffee', 'filter coffee', 'chicory', 'કોફી', 'કોફી પાવડર', 'ચિકોરી', 'कॉफी', 'कॉफी पाउडर'],
    icon: '☕',
    riskSeverity: 'Medium',
    overview: {
      en: 'Pure coffee is made from Coffea arabica / robusta beans. Unscrupulous brands dilute pure coffee with over 50% roasted chicory root or cheap roasted date and tamarind seed powders without declaring on label.',
      gu: 'શુદ્ધ કોફી મોંઘી હોવાથી તેમાં પેકેટ પર લખ્યા વગર ૫૦% કરતાં વધુ ચિકોરી અથવા ખજૂર અને આંબલીના શેકેલા બીજનો પાવડર મિક્સ કરવામાં આવે છે.',
      hi: 'शुद्ध कॉफी में बिना घोषणा किए सस्ती भुनी हुई चिकोरी की जड़, खजूर की गुठली और इमली के बीजों का पाउडर मिलाया जाता है।',
    },
    adulterants: [
      {
        name: { en: 'Undeclared Chicory & Date Seed Powder', gu: 'ચિકોરી અને ખજૂરના બીજનો ભૂકો', hi: 'अघोषित चिकोरी और खजूर के बीज' },
        riskLevel: 'Moderate',
        description: {
          en: 'Roasted roots and seed meals ground to match coffee color and bitterness.',
          gu: 'કોફી જેવા જ રંગ અને કડવાશવાળો શેકેલા બીજનો સસ્તો ભૂકો.',
          hi: 'कॉफी जैसा रंग व कड़वाहट देने के लिए भुने बीजों का सस्ता पाउडर।',
        },
        healthRisks: {
          en: 'Gastrointestinal bloating, flatulence, allergic reaction in sensitive individuals.',
          gu: 'પેટમાં ગેસ, એસિડિટી અને એલર્જી.',
          hi: 'पेट फूलना, गैस बनना और पेट में भारीपन।',
        },
      },
    ],
    homeTests: [
      {
        id: 'coffee-water-float-test',
        testName: {
          en: 'Cold Water Flotation & Color Trail Test',
          gu: 'ઠંડા પાણીમાં ફ્લોટેશન અને કલર ટ્રેલ ટેસ્ટ',
          hi: 'ठंडे पानी में तैरने और रंग छोड़ने का परीक्षण',
        },
        adulterantTargeted: { en: 'Chicory, date seeds, tamarind seed', gu: 'ચિકોરી, ખજૂરના બીજ', hi: 'चिकोरी, खजूर की गुठली' },
        difficulty: 'Easy',
        timeRequiredMinutes: 1,
        requiredMaterials: {
          en: ['1 teaspoon Coffee powder', 'A clear glass tumbler filled with cold water'],
          gu: ['૧ ચમચી કોફી પાવડર', 'ઠંડા પાણીથી ભરેલો કાચનો ગ્લાસ'],
          hi: ['१ चम्मच कॉफी पाउडर', 'ठंडे पानी से भरा कांच का गिलास'],
        },
        stepByStep: {
          en: [
            'Take a transparent glass filled with plain cold water.',
            'Gently sprinkle 1 teaspoon of coffee powder over the surface without stirring.',
            'Watch the particles for 1 minute.',
          ],
          gu: [
            'કાચના ગ્લાસમાં ઠંડું પાણી ભરો.',
            'હલાવ્યા વગર ૧ ચમચી કોફી પાવડર પાણીની સપાટી પર છાંટો.',
            '૧ મિનિટ સુધી કણોનું નિરીક્ષણ કરો.',
          ],
          hi: [
            'कांच के गिलास में ठंडा पानी लें।',
            'बिना हिलाए १ चम्मच कॉफी पाउडर पानी की सतह पर हल्के से छिड़कें।',
            '१ मिनट तक नीचे गिरते कणों को देखें।',
          ],
        },
        pureSampleResult: {
          en: 'Pure coffee contains light organic oils and does not absorb cold water readily; it floats on the surface for a long time and releases almost no color downwards.',
          gu: 'શુદ્ધ કોફી તેલીય ગુણ ધરાવતી હોવાથી લાંબો સમય પાણીની સપાટી પર તરે છે અને ઠંડા પાણીમાં રંગ છોડતી નથી.',
          hi: 'शुद्ध कॉफी में प्राकृतिक तेल होने से वह पानी की सतह पर तैरती रहती है और नीचे रंग नहीं छोड़ती।',
        },
        adulteratedSampleResult: {
          en: 'Chicory sinks rapidly like a stone within seconds and leaves distinct reddish-brown color streaks/trails all the way to the bottom.',
          gu: 'ચિકોરી ક્ષણોમાં જ પથ્થરની જેમ તળિયે બેસી જાય છે અને નીચે જતાં જતાં લાલ-કથ્થાઈ રંગની લકીરો છોડે છે.',
          hi: 'चिकोरी के कण तुरंत नीचे बैठने लगते हैं और गिरते हुए गहरे लाल-भूरे रंग की लकीरें छोड़ते हैं।',
        },
        canDetect: {
          en: ['Chicory root presence in coffee'],
          gu: ['કોફીમાં ચિકોરીની હાજરી'],
          hi: ['कॉफी में चिकोरी की उपस्थिति'],
        },
        cannotDetect: {
          en: ['Exact caffeine percentage'],
          gu: ['ચોક્કસ કેફીન ટકાવારી'],
          hi: ['कैफीन का सटीक प्रतिशत'],
        },
        safetyPrecautions: {
          en: ['Safe home test.'],
          gu: ['સલામત ઘરગથ્થુ ટેસ્ટ.'],
          hi: ['सुरक्षित घरेलू परीक्षण।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'HPLC for Caffeine Content & Spectrophotometric Aqueous Extract Analysis',
        gu: 'કેફીન માટે HPLC અને એક્વાઈસ એક્સટ્રેક્ટ ટેસ્ટ',
        hi: 'कैफीन मात्रा हेतु HPLC और जलीय निष्कर्ष जांच',
      },
      whyLabNeeded: {
        en: 'Measures exact caffeine ratio. Pure coffee must have min 2.8% caffeine (dry basis), while chicory has 0% caffeine.',
        gu: 'શુદ્ધ કોફીમાં ઓછામાં ઓછું ૨.૮% કેફીન હોવું ફરજિયાત છે, જ્યારે ચિકોરીમાં શૂન્ય ટકા કેફીન હોય છે.',
        hi: 'शुद्ध कॉफी में कम से कम २.८% कैफीन होना चाहिए जबकि चिकोरी में शून्य कैफीन होता है।',
      },
      equipmentAndChemicals: {
        en: ['HPLC with UV Detector', 'Spectrophotometer'],
        gu: ['HPLC મશીન'],
        hi: ['HPLC स्पेक्ट्रोमीटर'],
      },
      recommendedLabTypes: {
        en: ['Coffee Board of India Quality Evaluation Centre (Bengaluru)', 'NABL Beverage Testing Labs'],
        gu: ['કોફી બોર્ડ ઓફ ઈન્ડિયા લેબ બેંગલોર'],
        hi: ['कॉफी बोर्ड ऑफ इंडिया लैब'],
      },
      approxCostINR: '₹1,000 – ₹1,800',
      fssaiStandardRef: 'FSS (Food Products Standards) 2011 – Regulation 2.10.1 (Pure coffee must declare zero chicory; Coffee-Chicory mixture must declare exact percentage on label).',
      sampleSubmissionAdvice: {
        en: 'Send 100g in sealed vacuum foil.',
        gu: '૧૦૦ ગ્રામ કોફી સીલબંધ મોકલો.',
        hi: '१०० ग्राम कॉफी सीलबंद पाउच में भेजें।',
      },
    },
  },

  // --- 16. ASAFOETIDA / HING (SPICES & MASALA) ---
  {
    id: 'asafoetida',
    categoryId: 'spices',
    name: {
      en: 'Compounded Asafoetida (Hing)',
      gu: 'હિંગ (કમ્પાઉન્ડેડ હિંગ)',
      hi: 'हींग (कंपाउंडेड हींग)',
    },
    subtitle: {
      en: 'Expensive aromatic gum resin bulked with soapstone, colophony resin, and heavy chalk',
      gu: 'સાબુ પથ્થર, નકામા રાળ અને ચોક પાવડરની ભેળસેળથી દૂષિત થતો ઔષધીય મસાલો',
      hi: 'साबुन पत्थर, घटिया गोंद/राल और चॉक पाउडर की भारी मिलावट',
    },
    alternateNames: ['asafoetida', 'hing', 'heeng', 'asafetida', 'હિંગ', 'હીંગ', 'હીંગ પાવડર', 'हींग'],
    icon: '🌾',
    riskSeverity: 'Medium',
    overview: {
      en: 'Natural Ferula gum resin (Hing) is imported and costly. In powdered compounded forms, excessive non-edible colophony resins, chalk powder, gypsum, and soapstone (talc) are blended.',
      gu: 'કુદરતી હિંગ વિદેશથી આયાત થતી હોવાથી મોંઘી છે. બજારમાં મળતી હિંગમાં સસ્તો સાબુ પથ્થર, પ્લાસ્ટર જેવો જીપ્સમ અને કૃત્રિમ રાળ ભેળવાય છે.',
      hi: 'प्राकृतिक हींग महंगी होने के कारण इसमें वजन बढ़ाने के लिए सोपस्टोन (साबुन पत्थर), खड़िया मिट्टी और अखाद्य राल मिला दी जाती है।',
    },
    adulterants: [
      {
        name: { en: 'Soapstone / Chalk & Colophony Resin', gu: 'સાબુ પથ્થર, ચોક અને સસ્તી રાળ', hi: 'सोपस्टोन, चॉक और अखाद्य राल' },
        riskLevel: 'Moderate',
        description: {
          en: 'Mineral powders and sticky pine resin used to dilute original gum.',
          gu: 'હિંગનું પ્રમાણ ઘટાડી સસ્તા ખનિજ પાવડર ઉમેરવા.',
          hi: 'खनिज पाउडर और चीड़ की राल मिलाकर हींग का वजन बढ़ाना।',
        },
        healthRisks: {
          en: 'Kidney stones, digestive inflammation, loss of therapeutic carminative action.',
          gu: 'કિડનીમાં પથરી, પેટમાં દુખાવો, પાચન ક્રિયા બગડવી.',
          hi: 'गुर्दे में पथरी, आंतों में सूजन और पेट की खराबी।',
        },
      },
    ],
    homeTests: [
      {
        id: 'hing-water-milky-test',
        testName: {
          en: 'Water Solubility & Milky Emulsion Test',
          gu: 'પાણીમાં દ્રાવ્યતા અને દૂધિયા રંગની કસોટી',
          hi: 'पानी में घुलनशीलता और दूधिया रंग का परीक्षण',
        },
        adulterantTargeted: { en: 'Chalk, soapstone, insoluble dirt', gu: 'ચોક, સાબુ પથ્થર, રેતી', hi: 'चॉक, सोपस्टोन' },
        difficulty: 'Easy',
        timeRequiredMinutes: 2,
        requiredMaterials: {
          en: ['Half teaspoon Hing', 'A glass tumbler of warm water'],
          gu: ['અડધી ચમચી હિંગ', 'હૂંફાળા પાણીનો કાચનો ગ્લાસ'],
          hi: ['आधा चम्मच हींग', 'गुनगुने पानी का कांच का गिलास'],
        },
        stepByStep: {
          en: [
            'Add half a teaspoon of Hing into a glass of warm water.',
            'Stir continuously for 1 minute.',
            'Allow it to stand for 5 minutes and observe.',
          ],
          gu: [
            'હૂંફાળા પાણીમાં અડધી ચમચી હિંગ નાખો.',
            '૧ મિનિટ સરખી રીતે હલાવો.',
            '૫ મિનિટ સ્થિર રહેવા દો અને જુઓ.',
          ],
          hi: [
            'गुनगुने पानी में आधा चम्मच हींग डालें।',
            '१ मिनट तक चम्मच से हिलाएं।',
            '५ मिनट स्थिर रहने दें और देखें।',
          ],
        },
        pureSampleResult: {
          en: 'Genuine pure Hing dissolves completely to form a clean, uniform milky white emulsion with no heavy gritty sediment at the bottom.',
          gu: 'અસલી હિંગ પાણીમાં ઓગળીને દૂધ જેવું સમાન સફેદ પ્રવાહી બનાવે છે અને તળિયે કચરો બેસતો નથી.',
          hi: 'असली हींग पानी में घुलकर दूध जैसा एकसमान सफेद घोल बनाती है और तली में कोई पत्थर नहीं बैठता।',
        },
        adulteratedSampleResult: {
          en: 'Adulterated Hing with chalk or soapstone fails to create a smooth emulsion; insoluble mineral debris rapidly settles at the bottom.',
          gu: 'ભેળસેળવાળી હિંગમાં પાણી ચોખ્ખું નથી બનતું અને તળિયે ચોક કે પથ્થરનો ભારે કચરો જમા થઈ જાય છે.',
          hi: 'मिलावटी हींग में तली में चॉक या पत्थर की गाद तुरंत जम जाती है।',
        },
        canDetect: {
          en: ['Insoluble mineral fillers (soapstone, chalk)'],
          gu: ['સાબુ પથ્થર, ચોક પાવડર'],
          hi: ['चॉक, सोपस्टोन पाउडर'],
        },
        cannotDetect: {
          en: ['Synthetic asafoetida aroma chemicals'],
          gu: ['સિન્થેટિક સુગંધ રસાયણો'],
          hi: ['कृत्रिम सुगंध रसायन'],
        },
        safetyPrecautions: {
          en: ['Safe home test.'],
          gu: ['સલામત ટેસ્ટ.'],
          hi: ['सुरक्षित परीक्षण।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'Total Ash & Alcohol-Soluble / Water-Soluble Extractive Assay',
        gu: 'ટોટલ એશ અને આલ્કોહોલ એક્સટ્રેક્ટિવ ટેસ્ટ',
        hi: 'टोटल ऐश और एल्कोहल-सॉल्यूबल एक्सट्रैक्टिव टेस्ट',
      },
      whyLabNeeded: {
        en: 'FSSAI limits total ash to not more than 10% in compounded asafoetida. Soapstone drastically shoots total ash above legal limits.',
        gu: 'હિંગમાં રાખ (એશ)નું પ્રમાણ ૧૦% થી વધુ ન હોવું જોઈએ, જે લેબમાં ભઠ્ઠીમાં બાળીને જ ચકાસાય છે.',
        hi: 'हींग में कुल राख १०% से अधिक नहीं होनी चाहिए। सोपस्टोन मिलाने पर राख बहुत बढ़ जाती है।',
      },
      equipmentAndChemicals: {
        en: ['Muffle furnace (at 600°C)', 'Analytical microbalance', 'Reflux condenser'],
        gu: ['મફલ ફર્નેસ', 'એનાલિટિકલ બેલેન્સ'],
        hi: ['मफल फर्नेस', 'माइक्रोबैलेंस'],
      },
      recommendedLabTypes: {
        en: ['FSSAI Notified Laboratories', 'Spices Board Labs'],
        gu: ['FSSAI માન્ય પ્રયોગશાળાઓ'],
        hi: ['FSSAI अधिसूचित प्रयोगशालाएं'],
      },
      approxCostINR: '₹800 – ₹1,500',
      fssaiStandardRef: 'FSS (Food Products Standards) 2011 – Regulation 2.9.1 (Compounded asafoetida standards)',
      sampleSubmissionAdvice: {
        en: 'Submit 50g in sealed airtight container.',
        gu: '૫૦ ગ્રામ હિંગ એરટાઈટ ડબ્બીમાં મોકલો.',
        hi: '५० ग्राम हींग एयरटाइट डिब्बी में भेजें।',
      },
    },
  },

  // --- 17. EDIBLE SALT (OTHER FOOD PRODUCTS) ---
  {
    id: 'edible-salt',
    categoryId: 'other',
    name: {
      en: 'Edible Common Salt & Rock Salt (Sendha Namak)',
      gu: 'ખાદ્ય મીઠું અને સિંધવ મીઠું (સિંધાલુણ)',
      hi: 'खाद्य नमक और सेंधा नमक',
    },
    subtitle: {
      en: 'Adulterated with insoluble white chalk powder, gypsum, and fine white silica sand',
      gu: 'અદ્રાવ્ય ચોક પાવડર, પ્લાસ્ટર અને ઝીણી સફેદ રેતીની ભેળસેળ',
      hi: 'अघुलनशील चॉक पाउडर, जिप्सम और सफेद महीन रेत की मिलावट',
    },
    alternateNames: ['salt', 'edible salt', 'rock salt', 'sendha namak', 'mithu', 'sindhalun', 'મીઠું', 'સિંધવ મીઠું', 'સંચળ', 'નમક', 'नमक', 'सेंधा नमक'],
    icon: '🧂',
    riskSeverity: 'Medium',
    overview: {
      en: 'Salt is consumed in every meal. Unscrupulous suppliers add powdered white chalk, gypsum (calcium sulphate), or ground marble powder to unrefined bulk bags.',
      gu: 'મીઠું દરેક ભોજનમાં અનિવાર્ય છે. સસ્તા મીઠામાં વજન વધારવા માટે સફેદ ચોક પાવડર, જીપ્સમ અને આરસપહાણનો બારીક ભૂકો ભેળવવામાં આવે છે.',
      hi: 'नमक के थोक व्यापार में वजन बढ़ाने के लिए सफेद चॉक पाउडर, जिप्सम और संगमरमर का महीन चूरा मिला दिया जाता है।',
    },
    adulterants: [
      {
        name: { en: 'Chalk Powder & Gypsum (Insoluble Mineral)', gu: 'ચોક પાવડર અને જીપ્સમ', hi: 'चॉक पाउडर और जिप्सम' },
        riskLevel: 'Moderate',
        description: {
          en: 'Insoluble white calcium salts added to increase volume and weight.',
          gu: 'પાણીમાં ન ઓગળતા ખનિજો જે વજન વધારવા માટે ઉમેરાય છે.',
          hi: 'पानी में न घुलने वाले सफेद खनिज जो वजन बढ़ाते हैं।',
        },
        healthRisks: {
          en: 'Kidney stones, gallstones, gastrointestinal tract irritation.',
          gu: 'કિડનીમાં પથરી, પિત્તાશયમાં પથરી, પેટમાં દુખાવો.',
          hi: 'गुर्दे और पित्त की पथरी, पेट में जलन।',
        },
      },
    ],
    homeTests: [
      {
        id: 'salt-water-clarity-test',
        testName: {
          en: 'Water Solubility & Clarity Test (Chalk vs Salt)',
          gu: 'પાણીમાં દ્રાવ્યતા અને પારદર્શિતા કસોટી (ચોક વિરુદ્ધ મીઠું)',
          hi: 'पानी में घुलनशीलता और स्वच्छता परीक्षण (चॉक बनाम नमक)',
        },
        adulterantTargeted: { en: 'Chalk, gypsum, insoluble sand', gu: 'ચોક, જીપ્સમ, રેતી', hi: 'चॉक, जिप्सम, रेत' },
        difficulty: 'Easy',
        timeRequiredMinutes: 2,
        requiredMaterials: {
          en: ['1 teaspoon Salt', 'A clear glass tumbler filled with clean water'],
          gu: ['૧ ચમચી મીઠું', 'સ્વચ્છ પાણીથી ભરેલો કાચનો ગ્લાસ'],
          hi: ['१ चम्मच नमक', 'साफ पानी से भरा कांच का गिलास'],
        },
        stepByStep: {
          en: [
            'Add 1 teaspoon of salt into a glass of clean water.',
            'Stir thoroughly until completely dissolved.',
            'Hold the glass against light and inspect transparency.',
          ],
          gu: [
            'કાચના ગ્લાસમાં ૧ ચમચી મીઠું નાખો.',
            'સંપૂર્ણ ઓગળી જાય ત્યાં સુધી સરખી રીતે હલાવો.',
            'ગ્લાસને પ્રકાશ સામે ધરીને પારદર્શિતા જુઓ.',
          ],
          hi: [
            'कांच के गिलास में १ चम्मच नमक डालें।',
            'पूरी तरह घुलने तक चम्मच से हिलाएं।',
            'गिलास को रोशनी के सामने रखकर देखें।',
          ],
        },
        pureSampleResult: {
          en: 'Pure table salt dissolves 100% cleanly; the water remains transparent and crystal clear with zero residue.',
          gu: 'શુદ્ધ મીઠું પાણીમાં ૧૦૦% સંપૂર્ણ ઓગળી જાય છે; પાણી કાચ જેવું એકદમ પારદર્શક રહે છે.',
          hi: 'शुद्ध नमक पानी में १००% घुल जाता है; पानी बिल्कुल पारदर्शी व साफ रहता है।',
        },
        adulteratedSampleResult: {
          en: 'Chalk or gypsum turns the solution murky white; insoluble white sediment settles at the bottom of the glass within 2 minutes.',
          gu: 'ચોક કે જીપ્સમ હોય તો પાણી દૂધિયું ડહોળું બને છે અને ૨ મિનિટમાં તળિયે સફેદ પાવડર જમા થઈ જાય છે.',
          hi: 'चॉक या जिप्सम होने पर पानी मटमैला सफेद हो जाता है और तली में सफेद पाउडर बैठ जाता है।',
        },
        canDetect: {
          en: ['Insoluble white mineral powders'],
          gu: ['અદ્રાવ્ય ખનિજ પાવડર'],
          hi: ['अघुलनशील खनिज पाउडर'],
        },
        cannotDetect: {
          en: ['Iodine content PPM (requires titration)'],
          gu: ['આયોડિનનું ચોક્કસ પ્રમાણ'],
          hi: ['आयोडीन का सटीक स्तर'],
        },
        safetyPrecautions: {
          en: ['Safe home test.'],
          gu: ['સલામત ઘરગથ્થુ ટેસ્ટ.'],
          hi: ['सुरक्षित घरेलू टेस्ट।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'Water Insoluble Matter Test & Iodometric Titration for Potassium Iodate',
        gu: 'વોટર ઇનસોલ્યુબલ મેટર અને આયોડોમેટ્રિક ટાઇટ્રેશન',
        hi: 'वॉटर इनसॉल्यूबल मैटर और आयोडीन टाइट्रेशन टेस्ट',
      },
      whyLabNeeded: {
        en: 'FSSAI limits water-insoluble matter to max 1.0% by weight and mandates minimum 15 PPM iodine at consumer retail level.',
        gu: 'FSSAI મુજબ પાણીમાં ન ઓગળતો કચરો ૧% થી ઓછો અને આયોડિન ઓછામાં ઓછું ૧૫ PPM હોવું જોઈએ.',
        hi: 'नमक में अघुलनशील पदार्थ १% से कम और आयोडीन कम से कम १५ PPM होना कानूनी अनिवार्य है।',
      },
      equipmentAndChemicals: {
        en: ['Gooch crucible and vacuum filter', 'Standard Sodium Thiosulphate solution', 'Starch indicator'],
        gu: ['વેક્યુમ ફિલ્ટર', 'ટાઇટ્રેશન સેટ'],
        hi: ['वैक्यूम फिल्टर', 'टाइट्रेशन उपकरण'],
      },
      recommendedLabTypes: {
        en: ['CSIR - Central Salt and Marine Chemicals Research Institute (CSMCRI) Bhavnagar, Gujarat', 'FSSAI Notified Labs'],
        gu: ['CSIR - સેન્ટ્રલ સોલ્ટ રિસર્ચ ઇન્સ્ટિટ્યૂટ (CSMCRI) ભાવનગર', 'FSSAI લેબ્સ'],
        hi: ['केंद्रीय नमक अनुसंधान संस्थान (CSMCRI) भावनगर गुजरात'],
      },
      approxCostINR: '₹800 – ₹1,200',
      fssaiStandardRef: 'FSS (Food Products Standards) 2011 – Regulation 2.9.30: Iodized salt iodine content.',
      sampleSubmissionAdvice: {
        en: 'Submit 250g in sealed dry container.',
        gu: '૨૫૦ ગ્રામ મીઠું સૂકી ડબ્બીમાં સીલ કરીને આપો.',
        hi: '२५० ग्राम नमक सूखी डिब्बी में भेजें।',
      },
    },
  },

  // --- 18. MANGOES (FRUITS & VEGGIES) ---
  {
    id: 'mango',
    categoryId: 'fruits',
    name: {
      en: 'Fresh Mangoes (Kesar, Alphonso, Langra)',
      gu: 'તાજી કેરી (કેસર, હાફૂસ, લંગડો)',
      hi: 'ताजे आम (केसर, अल्फांसो, लंगड़ा)',
    },
    subtitle: {
      en: 'Artificially ripened with toxic Calcium Carbide (Masala) releasing poisonous arsenic and phosphorus',
      gu: 'ઝેરી કેલ્શિયમ કાર્બાઇડ (મસાલો) વડે કૃત્રિમ રીતે પકવેલી કેરી જે કેન્સર અને ગેસ પેદા કરે છે',
      hi: 'जहरीले कैल्शियम कार्बाइड (मसाला) से कृत्रिम रूप से पकाए गए आम जो स्वास्थ्य के लिए घातक हैं',
    },
    alternateNames: ['mango', 'mangoes', 'keri', 'aam', 'alphonso', 'kesar keri', 'કેરી', 'કેસર કેરી', 'હાફૂસ', 'આમ', 'आम', 'केसर आम'],
    icon: '🥭',
    riskSeverity: 'Critical',
    overview: {
      en: 'Mango is the king of fruits, but to make quick profit before the natural season, raw green mangoes are packed with pouches of industrial Calcium Carbide (CaC2). The moisture reacts to form carcinogenic Acetylene gas, leaving behind traces of toxic arsenic and phosphorus hydrides.',
      gu: 'કેરી કુદરતી રીતે પાકે તે પહેલાં ઊંચા ભાવ મેળવવા માટે કાચી કેરીઓને કેલ્શિયમ કાર્બાઇડ (મસાલાની પડીકી) મૂકી રાતોરાત પકવવામાં આવે છે. તેનાથી ઉત્પન્ન થતો એસિટિલિન ગેસ આંતરડા અને લીવરને ગંભીર નુકસાન કરે છે.',
      hi: 'सीजन से पहले मुनाफा कमाने के लिए कच्चे आमों को जहरीले कैल्शियम कार्बाइड की पुड़िया में लपेटकर पकाया जाता है, जो स्वास्थ्य के लिए अत्यंत हानिकारक है।',
    },
    adulterants: [
      {
        name: { en: 'Calcium Carbide (CaC2)', gu: 'કેલ્શિયમ કાર્બાઇડ (કૃત્રિમ મસાલો)', hi: 'कैल्शियम कार्बाइड (कृत्रिम मसाला)' },
        riskLevel: 'Severe',
        description: {
          en: 'Industrial chemical that produces acetylene gas to artificially turn the skin yellow.',
          gu: 'ઔદ્યોગિક રસાયણ જે એસિટિલિન વાયુ છોડી કેરીની છાલને બહારથી પીળી બનાવી દે છે.',
          hi: 'औद्योगिक रसायन जो एसिटिलीन गैस छोड़कर आम को बाहर से जबरन पीला करता है।',
        },
        healthRisks: {
          en: 'Frequent neurological dizziness, headache, vomiting, burning throat, ulceration, and potential risk of stomach cancer due to arsenic/phosphorus traces.',
          gu: 'ચક્કર, ઉલટી, ગળામાં બળતરા, પેટમાં અલ્સર અને આર્સેનિક ઝેરના કારણે કેન્સરનું મોટું જોખમ.',
          hi: 'सिरदर्द, चक्कर, गले में जलन, पेट में छाले और आर्सेनिक की मौजूदगी से कैंसर का खतरा।',
        },
      },
    ],
    homeTests: [
      {
        id: 'mango-bucket-water-test',
        testName: {
          en: 'Bucket Water Immersion Flotation Test',
          gu: 'પાણીની ડોલ અથવા તપેલીમાં ડૂબાડવાની કસોટી',
          hi: 'बाल्टी में पानी में डूबने की जांच (फ्लोटेशन टेस्ट)',
        },
        adulterantTargeted: { en: 'Carbide artificial ripening vs Tree-ripened', gu: 'કાર્બાઇડ પકવેલ વિરુદ્ધ કુદરતી પાકેલ કેરી', hi: 'कार्बाइड से पका बनाम पेड़ का पका आम' },
        difficulty: 'Easy',
        timeRequiredMinutes: 2,
        requiredMaterials: {
          en: ['Suspected mangoes', 'A deep bucket or large vessel filled with water'],
          gu: ['કેરીઓ', 'પાણી ભરેલી મોટી ડોલ અથવા મોટું તપેલું'],
          hi: ['आम', 'पानी से भरी बाल्टी'],
        },
        stepByStep: {
          en: [
            'Fill a deep bucket with plain room-temperature water.',
            'Gently drop the whole mangoes into the water one by one.',
            'Observe whether the mango sinks to the bottom or floats on the surface.',
          ],
          gu: [
            'એક ડોલમાં સામાન્ય પાણી ભરો.',
            'કેરીઓને એક પછી એક ધીમેથી પાણીમાં મૂકો.',
            'જુઓ કે કેરી તળિયે બેસી જાય છે કે પાણી ઉપર તરે છે.',
          ],
          hi: [
            'बाल्टी में सामान्य पानी भरें।',
            'आमों को एक-एक करके पानी में डालें।',
            'देखें कि आम तली में डूब जाता है या पानी पर तैरता है।',
          ],
        },
        pureSampleResult: {
          en: 'Naturally tree-ripened mangoes are dense, heavy, and full of concentrated natural sugars; they sink straight to the bottom of the bucket.',
          gu: 'કુદરતી રીતે ઝાડ પર પાકેલી કેરી વજનદાર અને રસથી ભરેલી હોવાથી પાણીમાં સીધી તળિયે બેસી જાય છે.',
          hi: 'पेड़ पर प्राकृतिक रूप से पका आम भारी और गूदेदार होता है, इसलिए पानी में पूरी तरह डूब जाता है।',
        },
        adulteratedSampleResult: {
          en: 'Carbide-ripened mangoes are harvested immature and raw inside with internal gas pockets and lack density; they float on the water surface.',
          gu: 'કાર્બાઇડથી પકવેલી કેરી અંદરથી કાચી અને પોચી હોવાથી હલકી હોય છે અને પાણીની સપાટી પર તરવા લાગે છે.',
          hi: 'कार्बाइड से जबरन पकाया आम अंदर से कच्चा व हल्का होता है और पानी की सतह पर तैरने लगता है।',
        },
        canDetect: {
          en: ['Immature artificially forced ripening'],
          gu: ['અકુદરતી રીતે પકવેલી કાચી કેરી'],
          hi: ['जबरन पके हुए कच्चे आम'],
        },
        cannotDetect: {
          en: ['Ethephon chemical hormone spray at low dosage'],
          gu: ['ઇથેફોન હોર્મોન સ્પ્રેનું પ્રમાણ'],
          hi: ['इथेफॉन की सूक्ष्म मात्रा'],
        },
        safetyPrecautions: {
          en: ['Always wash mangoes thoroughly under running water and soak in baking soda water for 15 minutes before peeling. Never bite mango peel directly!'],
          gu: ['કેરીને હંમેશાં વહેતા પાણીમાં ધોઈને છોલીને જ ખાવી, છાલ સીધી મોંમાં ન મૂકવી!'],
          hi: ['आम को हमेशा अच्छी तरह धोकर छिलका उतारकर ही खाएं। छिलका दांत से कभी न काटें!'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'Headspace Gas Chromatography (GC) for Acetylene & ICP-MS for Arsenic/Hydrides',
        gu: 'એસિટિલિન વાયુ માટે ગેસ ક્રોમેટોગ્રાફી (GC) અને આર્સેનિક માટે ICP-MS',
        hi: 'एसिटिलीन गैस हेतु हेडस्पेस GC और आर्सेनिक हेतु ICP-MS',
      },
      whyLabNeeded: {
        en: 'Commercial calcium carbide contains industrial impurities of Arsenic Hydride (Arsine) and Phosphorus Hydride (Phosphine). Only ICP-MS can detect these trace neurotoxins on fruit skins.',
        gu: 'કાર્બાઇડમાં રહેલા ઝેરી આર્સેનિક અને ફોસ્ફરસ જેવા તત્વો માત્ર લેબોરેટરીમાં ICP-MS દ્વારા જ પકડાય છે.',
        hi: 'कार्बाइड में मौजूद आर्सेनिक और फॉस्फीन जैसे जहरीले तत्व केवल आधुनिक ICP-MS से ही प्रमाणित होते हैं।',
      },
      equipmentAndChemicals: {
        en: ['Headspace Gas Chromatograph with FID', 'ICP-MS system', 'Microwave digestion apparatus'],
        gu: ['ગેસ ક્રોમેટોગ્રાફ', 'ICP-MS'],
        hi: ['गैस क्रोमैटोग्राफ', 'आईसीपी-एमएस'],
      },
      recommendedLabTypes: {
        en: ['FSSAI National Food Laboratories', 'Gujarat FDCA State Laboratories', 'IIHR ICAR Labs'],
        gu: ['FSSAI માન્ય પ્રયોગશાળાઓ', 'ગુજરાત FDCA ફૂડ લેબ્સ'],
        hi: ['FSSAI अधिसूचित प्रयोगशालाएं'],
      },
      approxCostINR: '₹1,500 – ₹3,000',
      fssaiStandardRef: 'FSS (Prohibition and Restrictions on Sales) Regulations, 2011 – Regulation 2.3.5: "No person shall sell or have in his possession with intent of sale any fruits which have been artificially ripened by use of acetylene gas, commonly known as carbide gas."',
      sampleSubmissionAdvice: {
        en: 'Submit 3 whole unwashed mangoes in breathable paper bag kept under 15°C.',
        gu: '૩ આખી કેરીઓ પેપર બેગમાં રાખી લેબમાં પહોંચાડો.',
        hi: '३ पूरे आम पेपर बैग में रखकर लैब पहुंचाएं।',
      },
    },
  },

  // --- 19. WATERMELON (FRUITS & VEGGIES) ---
  {
    id: 'watermelon',
    categoryId: 'fruits',
    name: {
      en: 'Fresh Watermelon (Tarbooj)',
      gu: 'તાજું તરબૂચ',
      hi: 'ताजा तरबूज',
    },
    subtitle: {
      en: 'Injected with toxic chemical red dyes (Rhodamine B / Erythrosine) and artificial Saccharin sweetness',
      gu: 'લાલ રંગ માટે ઝેરી રોડામાઈન ડાય અને મીઠાશ માટે સેકેરીન કેમિકલના ઇન્જેક્શનની ભેળસેળ',
      hi: 'लाल रंग के लिए रोडामाइन बी रंग और मिठास के लिए सैक्रीन इंजेक्शन की मिलावट',
    },
    alternateNames: ['watermelon', 'tarbooj', 'tarbuj', 'kalingad', 'તરબૂચ', 'તડબૂચ', 'કાલિંગડ', 'तरबूज', 'कलिंद'],
    icon: '🍉',
    riskSeverity: 'Critical',
    overview: {
      en: 'To make unripened pale watermelons look mouth-wateringly blood-red and sweet, unscrupulous vendors use hypodermic needle syringes to inject red chemical dye (Rhodamine B, Erythrosine) and saccharin solution into the stem or core.',
      gu: 'કાચા અને ફિક્કા તરબૂચને અંદરથી લાલઘૂમ અને મીઠું બનાવવા માટે સિરિંજ વડે પ્રતિબંધિત લાલ કેમિકલ રંગ અને સેકેરીનની ચાસણીના ઇન્જેક્શન મારવામાં આવે છે.',
      hi: 'कच्चे और फीके तरबूज को गहरा लाल और अत्यधिक मीठा दिखाने के लिए इंजेक्शन द्वारा लाल रासायनिक डाई (रोडामाइन) और सैक्रीन का घोल भरा जाता है।',
    },
    adulterants: [
      {
        name: { en: 'Injected Red Chemical Dyes (Rhodamine B / Erythrosine)', gu: 'લાલ કેમિકલ રંગના ઇન્જેક્શન', hi: 'लाल केमिकल रंग (रोडामाइन बी)' },
        riskLevel: 'Severe',
        description: {
          en: 'Banned industrial red colorants injected directly into fruit flesh.',
          gu: 'ફળના ગર્ભમાં સોય વડે ઉતારવામાં આવતો ઝેરી લાલ રંગ.',
          hi: 'फल के गूदे में सीधे सुई से डाला गया जहरीला लाल रंग।',
        },
        healthRisks: {
          en: 'Acute stomach toxicity, nausea, severe diarrhea, mucosal damage, liver tumors upon chronic intake.',
          gu: 'પેટમાં તીવ્ર બળતરા, ઝાડા-ઉલટી, આંતરડાના ચાંદા અને લીવરની ગંભીર બીમારીઓ.',
          hi: 'तीव्र पेट दर्द, उल्टी-दस्त, आंतों में घाव और लिवर की गंभीर बीमारी।',
        },
      },
    ],
    homeTests: [
      {
        id: 'watermelon-cotton-rub-test',
        testName: {
          en: 'White Cotton Swab Blotting Test (FSSAI DART)',
          gu: 'સફેદ રૂના પૂમડા વડે કલર બ્લોટિંગ ટેસ્ટ',
          hi: 'सफेद रुई से रंग जांचने का परीक्षण (FSSAI DART)',
        },
        adulterantTargeted: { en: 'Injected artificial red chemical dye', gu: 'કૃત્રિમ લાલ રંગનું ઇન્જેક્શન', hi: 'इंजेक्ट किया हुआ लाल रासायनिक रंग' },
        difficulty: 'Easy',
        timeRequiredMinutes: 1,
        requiredMaterials: {
          en: ['Fresh slice of cut watermelon', 'Clean dry white cotton ball or white tissue napkin'],
          gu: ['કાપેલા તરબૂચનો ટુકડો', 'સાફ સફેદ રૂનું પૂમડું અથવા સફેદ ટિશ્યુ પેપર'],
          hi: ['कटे तरबूज का टुकड़ा', 'साफ सफेद रुई का फाहा'],
        },
        stepByStep: {
          en: [
            'Cut a fresh cross-section slice of the watermelon.',
            'Take a clean, dry white cotton ball or paper napkin.',
            'Gently press the white cotton onto the red core and inner flesh of the watermelon.',
            'Lift and inspect the cotton surface under light.',
          ],
          gu: [
            'તરબૂચનો તાજો ટુકડો કાપો.',
            'સાફ સૂકું સફેદ રૂનું પૂમડું લો.',
            'રૂને તરબૂચના લાલ ગર્ભ પર ધીમેથી દબાવો.',
            'રૂને ઉપાડીને જુઓ કે તેના પર કેવો રંગ લાગ્યો છે.',
          ],
          hi: [
            'तरबूज का एक ताजा टुकड़ा काटें।',
            'सफेद रुई का सूखा फाहा लें।',
            'रुई को तरबूज के लाल गूदे पर हल्के से दबाएं।',
            'रुई को हटाकर देखें कि उस पर कैसा रंग लगा है।',
          ],
        },
        pureSampleResult: {
          en: 'Pure natural watermelon juice is translucent pale pinkish-watery; it moistens the cotton without leaving an intense bright red chemical dye stain.',
          gu: 'કુદરતી તરબૂચનો રસ આછો ગુલાબી પાણી જેવો હોય છે; રૂ માત્ર ભીનું થાય છે પણ તેના પર ઘાટો કેમિકલ લાલ ડાઘ નથી પડતો.',
          hi: 'प्राकृतिक तरबूज का रस हल्का पारदर्शी गुलाबी होता है; रुई केवल गीली होती है, गहरा लाल रंग नहीं छूटता।',
        },
        adulteratedSampleResult: {
          en: 'Injected watermelon instantly stains the white cotton a vibrant, deep crimson-red or magenta dye color.',
          gu: 'ઇન્જેક્શન મારેલું તરબૂચ રૂ પર તરત જ ચમકદાર ઘાટો લાલ કે ગુલાબી કેમિકલ રંગ છોડી દે છે.',
          hi: 'इंजेक्ट किया हुआ तरबूज रुई को तुरंत गहरा चमकदार लाल या गुलाबी कर देता है।',
        },
        canDetect: {
          en: ['Artificial water-soluble injected dyes (Rhodamine B, Erythrosine, Sudan Red)'],
          gu: ['પાણીમાં ઓગળતા કેમિકલ રંગો'],
          hi: ['पानी में घुलनशील कृत्रिम रंग'],
        },
        cannotDetect: {
          en: ['Artificial sweetener Saccharin percentage (requires laboratory HPLC)'],
          gu: ['સેકેરીન મીઠાશનું પ્રમાણ'],
          hi: ['सैक्रीन का प्रतिशत'],
        },
        safetyPrecautions: {
          en: ['Never consume watermelon if the cotton picks up intense red chemical stains, or if you spot tiny puncture injection holes on the rind.'],
          gu: ['જો રૂ પર ઘાટો રંગ છૂટે અથવા તરબૂચની છાલ પર સોયના કાણાં દેખાય તો ક્યારેય ન ખાવું!'],
          hi: ['यदि रुई पर लाल रंग छूटता है या छिलके पर सुई के छेद दिखते हैं, तो तरबूज बिल्कुल न खाएं!'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'TLC & HPLC for Synthetic Colors + HPLC for Artificial Sweeteners (Saccharin, Aspartame)',
        gu: 'સિન્થેટિક રંગો માટે TLC અને સેકેરીન સ્વીટનર માટે HPLC',
        hi: 'सिंथेटिक रंगों हेतु TLC और सैक्रीन हेतु HPLC टेस्ट',
      },
      whyLabNeeded: {
        en: 'Definitively identifies banned non-permitted food dyes and quantifies illegal artificial sweeteners in natural fruit.',
        gu: 'તરબૂચમાં ગેરકાયદેસર સેકેરીન અને પ્રતિબંધિત રંગો સાબિત કરવા માટે HPLC ટેસ્ટ જરૂરી છે.',
        hi: 'तरबूज में प्रतिबंधित रंगों और सैक्रीन की कानूनी पुष्टि हेतु HPLC आवश्यक है।',
      },
      equipmentAndChemicals: {
        en: ['HPLC with Photodiode Array (PDA) detector', 'TLC scanner', 'Centrifuge'],
        gu: ['HPLC સ્પેક્ટ્રોમીટર', 'સેન્ટ્રીફ્યુજ'],
        hi: ['HPLC सिस्टम', 'सेंट्रीफ्यूज'],
      },
      recommendedLabTypes: {
        en: ['FSSAI Notified Laboratories', 'State FDCA Labs'],
        gu: ['ગુજરાત FDCA લેબોરેટરી', 'FSSAI માન્ય લેબ્સ'],
        hi: ['राज्य खाद्य एवं औषधि परीक्षण प्रयोगशाला'],
      },
      approxCostINR: '₹1,500 – ₹2,500',
      fssaiStandardRef: 'FSS (Food Products Standards) 2011 – Complete prohibition of addition of any artificial dye or non-nutritive sweetener to fresh fruits.',
      sampleSubmissionAdvice: {
        en: 'Send whole fruit or packed chilled pulp within 8 hours.',
        gu: 'આખું તરબૂચ અથવા ઠંડું પેક કરેલું સેમ્પલ ૮ કલાકમાં મોકલો.',
        hi: 'पूरा तरबूज या ठंडा पैक किया नमूना ८ घंटे के भीतर भेजें।',
      },
    },
  },

  // --- 20. BANANAS (FRUITS & VEGGIES) ---
  {
    id: 'banana',
    categoryId: 'fruits',
    name: {
      en: 'Fresh Bananas (Kela)',
      gu: 'તાજાં કેળાં',
      hi: 'ताजे केले',
    },
    subtitle: {
      en: 'Forced ripening with toxic chemicals leaving raw tasteless core and chemical residues',
      gu: 'કેમિકલથી પકવેલા કેળાં જેમાં અંદરથી ગર્ભ કાચો અને બહારથી છાલ પીળી હોય છે',
      hi: 'रासायनिक घोल से जबरन पकाए गए केले जो अंदर से कच्चे और बेस्वाद होते हैं',
    },
    alternateNames: ['banana', 'bananas', 'kela', 'kelan', 'કેળાં', 'કેળા', 'કેળું', 'केला', 'केले'],
    icon: '🍌',
    riskSeverity: 'Medium',
    overview: {
      en: 'Bananas naturally ripen gradually by producing ethylene gas. Modern wholesale vendors submerge entire bunches in chemical solutions of Ethephon or expose them to calcium carbide, resulting in glowing yellow skins on fruits that are hard and tasteless inside.',
      gu: 'કેળાંને કુદરતી રીતે પાકવા દેવાને બદલે રાતોરાત વેચવા માટે ઇથેફોન કેમિકલના દ્રાવણમાં બોળવામાં આવે છે અથવા કાર્બાઇડનો ધુમાડો આપવામાં આવે છે.',
      hi: 'केलों को रातोंरात पकाने के लिए उन्हें इथेफॉन केमिकल के घोल में डुबोया जाता है, जिससे छिलका तो पीला हो जाता है पर अंदर से फल सख्त व कच्चा रहता है।',
    },
    adulterants: [
      {
        name: { en: 'Ethephon & Carbide Chemical Dip', gu: 'ઇથેફોન અને કેમિકલ સોલ્યુશન', hi: 'इथेफॉन व केमिकल डिप' },
        riskLevel: 'High',
        description: {
          en: 'Organophosphorus plant growth regulator applied in concentrated baths.',
          gu: 'કેળાંની છાલને પીળી કરવા વપરાતું ઓર્ગેનોફોસ્ફરસ રસાયણ.',
          hi: 'केले को जबरन पकाने के लिए इस्तेमाल होने वाला रासायनिक घोल।',
        },
        healthRisks: {
          en: 'Mouth irritation, throat burning, abdominal discomfort, stomach cramps.',
          gu: 'મોં અને ગળામાં બળતરા, પેટમાં ચૂંક, એસિડિટી.',
          hi: 'मुंह व गले में जलन, पेट में मरोड़ और पाचन विकार।',
        },
      },
    ],
    homeTests: [
      {
        id: 'banana-stem-peel-test',
        testName: {
          en: 'Stem Color & Visual Texture Inspection',
          gu: 'ડાળીનો રંગ અને છાલની દ્રશ્ય ચકાસણી',
          hi: 'डंठल का रंग और छिलके का निरीक्षण',
        },
        adulterantTargeted: { en: 'Chemical forced ripening', gu: 'કેમિકલ વડે પકવેલા કેળાં', hi: 'रासायनिक रूप से पके केले' },
        difficulty: 'Easy',
        timeRequiredMinutes: 1,
        requiredMaterials: {
          en: ['Banana fruit bunch', 'Good natural lighting'],
          gu: ['કેળાંની લૂમ', 'કુદરતી પ્રકાશ'],
          hi: ['केले का गुच्छा', 'प्राकृतिक रोशनी'],
        },
        stepByStep: {
          en: [
            'Examine the stem/stalk connecting the banana to the bunch.',
            'Compare the color of the stem with the color of the banana skin.',
            'Peel and taste a small piece for texture and natural aroma.',
          ],
          gu: [
            'કેળાંની ઉપરની ડાળી (દાંડી) જુઓ.',
            'દાંડીનો રંગ અને છાલના રંગની સરખામણી કરો.',
            'કેળું છોલીને તેની સુગંધ અને અંદરની મુલાયમતા જુઓ.',
          ],
          hi: [
            'केले की ऊपरी डंठल का रंग देखें।',
            'डंठल के रंग और छिलके के रंग की तुलना करें।',
            'छिलका उतारकर गूदे की महक और मिठास देखें।',
          ],
        },
        pureSampleResult: {
          en: 'Naturally ripened bananas have golden-yellow stems that develop small brown sugar spots on the skin; the fruit is uniformly soft and deeply fragrant from stem to tip.',
          gu: 'કુદરતી પાકેલા કેળાંની દાંડી પીળી હોય છે અને છાલ પર કાળા-બ્રાઉન કુદરતી ટપકાં હોય છે; કેળું અંદરથી મુલાયમ અને મીઠું હોય છે.',
          hi: 'प्राकृतिक पके केले की डंठल पीली होती है और छिलके पर काले-भूरे धब्बे होते हैं; गूदा पूरे सिरे तक मीठा और मुलायम होता है।',
        },
        adulteratedSampleResult: {
          en: 'Chemically ripened bananas feature a spotless bright neon yellow skin, BUT the stem/stalk remains dark raw green. The inner core is stiff, astringent, and lacks natural sweetness.',
          gu: 'કેમિકલવાળા કેળાંની છાલ એકદમ ચમકદાર પીળી હોય છે પરંતુ ઉપરની દાંડી ઘેરી કાચી લીલી હોય છે; અંદરનો ગર્ભ કડક અને તૂરો હોય છે.',
          hi: 'केमिकल से पके केले का छिलका तो बिल्कुल पीला दिखता है पर डंठल कच्ची हरी रहती है और अंदर का गूदा कड़ा व बेस्वाद होता है।',
        },
        canDetect: {
          en: ['Forced artificial ripening'],
          gu: ['કેમિકલથી પકવેલા કેળાં'],
          hi: ['जबरन पकाए गए केले'],
        },
        cannotDetect: {
          en: ['Exact chemical parts-per-million'],
          gu: ['ચોક્કસ રાસાયણિક માત્રા'],
          hi: ['सटीक रासायनिक मात्रा'],
        },
        safetyPrecautions: {
          en: ['Wash hands after peeling bananas.'],
          gu: ['કેળાં છોલ્યા પછી હાથ ધોવા.'],
          hi: ['केला छीलने के बाद हाथ धोएं।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'LC-MS/MS Multi-Residue Analysis for Ethephon',
        gu: 'ઇથેફોન માટે LC-MS/MS મલ્ટી-રેસિડ્યુ ટેસ્ટ',
        hi: 'इथेफॉन हेतु LC-MS/MS परीक्षण',
      },
      whyLabNeeded: {
        en: 'Measures pesticide residue levels to verify compliance with FSSAI MRL (Maximum Residue Limit).',
        gu: 'FSSAI ના નિયમ મુજબ મહત્તમ મર્યાદા (MRL) કરતાં વધુ રસાયણ છે કે નહીં તે માપે છે.',
        hi: 'FSSAI की अधिकतम अवशेष सीमा (MRL) की जांच केवल लैब में होती है।',
      },
      equipmentAndChemicals: {
        en: ['Triple Quad LC-MS/MS', 'QuEChERS extraction'],
        gu: ['LC-MS/MS'],
        hi: ['ट्रिपल क्वाड LC-MS/MS'],
      },
      recommendedLabTypes: {
        en: ['NABL Accredited Food Labs', 'ICAR-NRC for Banana Tiruchirappalli'],
        gu: ['NABL ફૂડ લેબોરેટરીઝ'],
        hi: ['एनएबीएल मान्यता प्राप्त प्रयोगशालाएं'],
      },
      approxCostINR: '₹2,000 – ₹3,500',
      fssaiStandardRef: 'FSSAI Advisory on Artificial Ripening of Fruits: Ethephon residue capped strictly at legal limits; calcium carbide prohibited.',
      sampleSubmissionAdvice: {
        en: 'Submit 4 whole bananas in protected cardboard box.',
        gu: '૪ કેળાં બોક્સમાં રાખી મોકલો.',
        hi: '४ केले बॉक्स में रखकर भेजें।',
      },
    },
  },

  // --- 21. POINTED GOURD & RIDGE GOURD (FRUITS & VEGGIES) ---
  {
    id: 'pointed-gourd',
    categoryId: 'vegetables',
    name: {
      en: 'Pointed Gourd (Parwal) & Ivy Gourd (Tindora)',
      gu: 'પરવળ, ટીંડોરા અને તુરિયા',
      hi: 'परवल, टिंडोरा (कुंदरू) और तोरई',
    },
    subtitle: {
      en: 'Dipped in poisonous Copper Sulphate (Blue Vitriol / Morthuthu) to give radiant emerald green look',
      gu: 'ચમકદાર લીલો રંગ લાવવા માટે ઝેરી મોરથૂથુ (કોપર સલ્ફેટ) અને મેલાકાઇટ ગ્રીનમાં બોળેલા શાકભાજી',
      hi: 'ताजा और चमकदार हरा दिखाने के लिए जहरीले कॉपर सल्फेट (नीला थोथा) के घोल में डुबोई गई सब्जियां',
    },
    alternateNames: ['parwal', 'tindora', 'parval', 'ridge gourd', 'ivy gourd', 'giloda', 'turiya', 'પરવળ', 'ટીંડોરા', 'ગિલોડા', 'તુરિયા', 'પરવલ', 'પરવાલ', 'परवल', 'टिंडोरा', 'कुंदरू', 'तोरई'],
    icon: '🥒',
    riskSeverity: 'Critical',
    overview: {
      en: 'Pointed gourds and tindora fade to dull yellowish-green within hours of harvesting. Street vendors immerse whole crates into solutions of Copper Sulphate (CuSO4 - Blue Vitriol) and Malachite Green dye. Copper ions bind with surface chlorophyll to lock an unnaturally bright emerald green tint.',
      gu: 'પરવળ, ટીંડોરા અને ગિલોડા તૂટ્યા પછી પીળા પડી જાય છે. તેને અતિશય લીલા અને તાજા દેખાડવા માટે વેપારીઓ તેને મોરથૂથુ (કોપર સલ્ફેટ) અને મેલાકાઇટ ગ્રીનના ઝેરી પાણીમાં બોળે છે.',
      hi: 'परवल और कुंदरू को अत्यधिक हरा व ताजा दिखाने के लिए जहरीले नीले थोथे (कॉपर सल्फेट) के घोल में डुबोया जाता है जो शरीर में तांबे का विषैलापन फैलाता है।',
    },
    adulterants: [
      {
        name: { en: 'Copper Sulphate (Blue Vitriol / Morthuthu)', gu: 'મોરથૂથુ (કોપર સલ્ફેટ)', hi: 'नीला थोथा (कॉपर सल्फेट)' },
        riskLevel: 'Severe',
        description: {
          en: 'Industrial heavy metal salt used as fungicide, highly toxic to human ingestion.',
          gu: 'ઝેરી ધાતુનું રસાયણ જે ખોરાકમાં સખત અખાદ્ય અને પ્રતિબંધિત છે.',
          hi: 'भारी धातु रसायन जो मानव शरीर के लिए अत्यधिक विषैला है।',
        },
        healthRisks: {
          en: 'Acute copper poisoning: metallic taste, bloody diarrhea, hemolysis of red blood cells, acute kidney and liver necrosis.',
          gu: 'મોંમાં ધાતુ જેવો સ્વાદ, લોહીવાળા ઝાડા, લાલ રક્તકણો નાશ પામવા, કિડની અને લીવર ફેઇલ્યોર.',
          hi: 'तीव्र कॉपर पॉइजनिंग, खूनी दस्त, रक्त कोशिकाओं का टूटना, किडनी व लिवर फेल होना।',
        },
      },
    ],
    homeTests: [
      {
        id: 'parwal-acid-copper-test',
        testName: {
          en: 'Dilute Acid & Cotton Rub Test for Copper / Dye',
          gu: 'હળવા એસિડ/વિનેગર અને રૂ વડે કોપર ટેસ્ટ',
          hi: 'हल्के सिरके और रुई से तांबा (कॉपर) जांचने की विधि',
        },
        adulterantTargeted: { en: 'Copper sulphate & Malachite green', gu: 'મોરથૂથુ અને લીલો કેમિકલ રંગ', hi: 'कॉपर सल्फेट व कृत्रिम हरा रंग' },
        difficulty: 'Easy',
        timeRequiredMinutes: 2,
        requiredMaterials: {
          en: ['Sample of Parwal or Tindora', 'White cotton ball', 'Household white vinegar or dilute acid'],
          gu: ['પરવળ કે ટીંડોરાનો નમૂનો', 'સફેદ રૂનું પૂમડું', 'ઘરનો સફેદ વિનેગર અથવા લીંબુનો રસ'],
          hi: ['परवल या टिंडोरा', 'सफेद रुई का फाहा', 'सफेद सिरका या नींबू'],
        },
        stepByStep: {
          en: [
            'Dip a clean white cotton swab in household white vinegar.',
            'Firmly rub the outer green ridged skin of the parwal/tindora for 20 seconds.',
            'Examine the cotton swab for green or blue-green color stain.',
          ],
          gu: [
            'સફેદ રૂના પૂમડાને વિનેગરમાં પલાળો.',
            'પરવળ કે ટીંડોરાની બહારની છાલ પર ૨૦ સેકન્ડ જોરથી ઘસો.',
            'રૂ પર લીલો કે વાદળી-લીલો ડાઘ પડ્યો છે કે નહીં તે જુઓ.',
          ],
          hi: [
            'सफेद रुई को सिरके में भिगोएं।',
            'परवल या कुंदरू के छिलके पर २० सेकंड तक रगड़ें।',
            'रुई पर हरे या नीले-हरे रंग के निशान को देखें।',
          ],
        },
        pureSampleResult: {
          en: 'Natural vegetable skin does not transfer synthetic green or bluish dye to the cotton; the cotton stays white or picks up only faint natural plant sap.',
          gu: 'કુદરતી શાકભાજીમાંથી રંગ છૂટતો નથી; રૂ સફેદ જ રહે છે.',
          hi: 'प्राकृतिक सब्जी से रुई पर कोई कृत्रिम हरा रंग नहीं लगता; रुई सफेद ही रहती है।',
        },
        adulteratedSampleResult: {
          en: 'Treated with copper sulphate or dye, the cotton instantly picks up an unmistakable bright green or teal-blue chemical stain.',
          gu: 'જો મોરથૂથુ કે કેમિકલ રંગ હશે તો રૂ તરત જ ઘાટો લીલો કે વાદળી-લીલો થઈ જશે.',
          hi: 'कॉपर सल्फेट या डाई लगी होने पर रुई तुरंत चमकीली हरी या नीली-हरी हो जाती है।',
        },
        canDetect: {
          en: ['Topical copper sulphate and synthetic green dyes'],
          gu: ['બહાર લગાવેલું મોરથૂથુ અને કેમિકલ રંગ'],
          hi: ['सतह पर लगा कॉपर सल्फेट और रंग'],
        },
        cannotDetect: {
          en: ['Internal systemic pesticides'],
          gu: ['શાકભાજીની અંદર ઉતરેલી જંતુનાશક દવા'],
          hi: ['अंदर समाए हुए कीटनाशक'],
        },
        safetyPrecautions: {
          en: ['Never consume vegetables that leave bluish-green chemical stains on cotton!'],
          gu: ['વાદળી-લીલો રંગ છોડતાં શાકભાજી ક્યારેય રાંધીને ન ખાવા!'],
          hi: ['रंग छोड़ने वाली सब्जियों को तुरंत नष्ट करें, कभी न खाएं!'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'AAS (Atomic Absorption Spectrometry) / ICP-MS for Copper (Cu) Determination',
        gu: 'તાંબા (કોપર) ના પ્રમાણ માટે AAS / ICP-MS ટેસ્ટ',
        hi: 'कॉपर (तांबा) मात्रा हेतु AAS / ICP-MS टेस्ट',
      },
      whyLabNeeded: {
        en: 'FSSAI caps copper content in foods strictly. Artificial dipping drastically shoots copper content beyond legal threshold of 30 mg/kg.',
        gu: 'મોરથૂથુમાં બોળેલા શાકમાં કોપરનું પ્રમાણ કાનૂની મર્યાદા (૩૦ mg/kg) કરતાં ઘણું વધી જાય છે, જે AAS દ્વારા જ મપાય છે.',
        hi: 'FSSAI के अनुसार तांबे की मात्रा ३० mg/kg से अधिक नहीं होनी चाहिए।',
      },
      equipmentAndChemicals: {
        en: ['Flame Atomic Absorption Spectrometer', 'Microwave acid digestion with trace nitric acid'],
        gu: ['AAS સ્પેક્ટ્રોમીટર'],
        hi: ['परमाणु अवशोषण स्पेक्ट्रोमीटर (AAS)'],
      },
      recommendedLabTypes: {
        en: ['State FDCA Testing Labs (Vadodara, Rajkot)', 'FSSAI Referral Labs'],
        gu: ['ગુજરાત FDCA ફૂડ લેબ્સ'],
        hi: ['राज्य खाद्य एवं औषधि प्रयोगशाला'],
      },
      approxCostINR: '₹1,000 – ₹1,800',
      fssaiStandardRef: 'FSS (Contaminants, Toxins and Residues) Regulations 2011 – Complete prohibition of addition of Copper Salts to green vegetables.',
      sampleSubmissionAdvice: {
        en: 'Submit 250g fresh gourds in clean dry paper bag.',
        gu: '૨૫૦ ગ્રામ શાકભાજી પેપર બેગમાં મોકલો.',
        hi: '२५० ग्राम सब्जी पेपर बैग में भेजें।',
      },
    },
  },

  // --- 22. TRUE CEYLON CINNAMON VS TOXIC CASSIA (HERBS & AYURVEDIC) ---
  {
    id: 'cinnamon-dalchini',
    categoryId: 'herbs_ayurvedic',
    name: {
      en: 'True Ceylon Cinnamon vs Toxic Cassia Bark (Dalchini)',
      gu: 'અસલી તજ (સിലോન તજ) વિરુદ્ધ ઝેરી ચાઈનીઝ કેસિયા',
      hi: 'असली सीलोन दालचीनी बनाम जहरीली कैसिया छाल',
    },
    subtitle: {
      en: 'Substituted with cheap Chinese Cassia bark loaded with liver-damaging Coumarin',
      gu: 'સસ્તી લાકડા જેવી કેસિયા છાલની ભેળસેળ જેમાં લીવરને નુકસાન કરતું કુમેરિન ઝેર હોય છે',
      hi: 'सस्ती कठोर कैसिया छाल की मिलावट जिसमें लिवर को नुकसान पहुंचाने वाला क्यूमारिन होता है',
    },
    alternateNames: ['cinnamon', 'dalchini', 'cassia', 'taj', 'ceylon cinnamon', 'તજ', 'દાલચીની', 'કેસિયા', 'દાળચીની', 'दालचीनी', 'तज', 'कैसिया'],
    icon: '🪵',
    riskSeverity: 'Critical',
    overview: {
      en: 'True Ceylon cinnamon (Cinnamomum verum) is a prized sweet medicinal herb with potent antioxidant and insulin-sensitizing benefits. Over 80% of what is sold in Indian markets as "Dalchini" is actually cheap Chinese Cassia (Cinnamomum cassia). Cassia contains up to 1% toxic Coumarin, which causes severe liver and kidney damage upon regular use.',
      gu: 'અસલી સિંહાલી તજ (સરાહનીય આયુર્વેદિક ઔષધિ) ખૂબ જ ગુણકારી છે. પરંતુ બજારમાં મોટાભાગે સસ્તી ચાઇનીઝ કેસિયા છાલ વેચાય છે, જેમાં રહેલું કૌમેરિન લીવર અને કિડનીને ભારે નુકસાન કરે છે.',
      hi: 'असली सीलोन दालचीनी अत्यंत गुणकारी औषधि है। किन्तु बाजार में ज्यादातर सस्ती चीनी कैसिया बेची जाती है, जिसमें मौजूद क्यूमारिन लिवर और किडनी को खराब करता है।',
    },
    adulterants: [
      {
        name: { en: 'Chinese Cassia Bark (High Coumarin)', gu: 'ચાઈનીઝ કેસિયા છાલ (કૌમેરિન ઝેર)', hi: 'कैसिया छाल (जहरीला क्यूमारिन)' },
        riskLevel: 'Severe',
        description: {
          en: 'Thick, hard, tree bark of Cinnamomum cassia containing dangerous hepatotoxins.',
          gu: 'ઝાડની જાડી લાકડા જેવી છાલ જેમાં લીવરને બગાડતું ઝેર હોય છે.',
          hi: 'सख्त लकड़ी जैसी छाल जिसमें लिवर को नुकसान पहुंचाने वाला विषैला तत्व होता है।',
        },
        healthRisks: {
          en: 'Severe hepatotoxicity (liver damage), chronic renal impairment, internal hemorrhages with daily use.',
          gu: 'લીવર ફેલ્યોર, કિડનીનું નુકસાન અને નિયમિત સેવનથી આંતરિક રક્તસ્ત્રાવ.',
          hi: 'लिवर की गंभीर क्षति, गुर्दे की विफलता और स्वास्थ्य पर स्थायी दुष्प्रभाव।',
        },
      },
    ],
    homeTests: [
      {
        id: 'cinnamon-quill-layer-test',
        testName: {
          en: 'Physical Multi-Layer Scroll & Texture Test',
          gu: 'સ્તરો (લેયર્સ) અને બરડપણાની ભૌતિક કસોટી',
          hi: 'परतों (लेयर्स) और बनावट का भौतिक परीक्षण',
        },
        adulterantTargeted: { en: 'Cassia bark vs Ceylon cinnamon', gu: 'કેસિયા વિરુદ્ધ અસલી તજ', hi: 'कैसिया बनाम सीलोन दालचीनी' },
        difficulty: 'Easy',
        timeRequiredMinutes: 1,
        requiredMaterials: {
          en: ['Sample sticks of cinnamon/dalchini', 'Your fingers'],
          gu: ['તજના ટુકડા', 'હાથની આંગળીઓ'],
          hi: ['दालचीनी के टुकड़े', 'उंगलियां'],
        },
        stepByStep: {
          en: [
            'Look at the cross-section end of the rolled cinnamon stick.',
            'Observe whether it is a single thick hollow roll, or multiple paper-thin layers rolled inside each other like a cigar.',
            'Try to crush or snap the bark between your thumb and fingers.',
          ],
          gu: [
            'તજની ગોળ વળેલી લાકડીનો અંદરનો છેડો જુઓ.',
            'જુઓ કે તે એક જ જાડો લાકડાનો ટુકડો છે કે સિગારની જેમ કાગળ જેવા પાતળા અનેક પડો એકબીજામાં વળેલા છે.',
            'તેને આંગળીઓ વડે તોડવાનો પ્રયત્ન કરો.',
          ],
          hi: [
            'दालचीनी की डंडी के किनारे को ध्यान से देखें।',
            'देखें कि क्या यह एक ही मोटी सख्त छाल है, या सिगार की तरह कागज जैसी कई पतली परतें एक-दूसरे में लिपटी हैं।',
            'इसे उंगलियों से तोड़ने का प्रयास करें।',
          ],
        },
        pureSampleResult: {
          en: 'True Ceylon Cinnamon is tan-brown, paper-thin, soft, and composed of multiple delicate concentric layers tightly rolled together. It crumbles easily between your fingers with a sweet, refined aroma.',
          gu: 'અસલી તજ કાગળ જેવી પાતળી, આછા બદામી રંગની અને અનેક પડોથી બનેલી હોય છે; તે આંગળીઓથી સરળતાથી ભૂકો થઈ જાય છે અને મીઠી સુગંધ આપે છે.',
          hi: 'असली सीलोन दालचीनी कागज जैसी पतली, कई परतों वाली और मुलायम होती है; उंगलियों से आसानी से टूट जाती है और मीठी महक देती है।',
        },
        adulteratedSampleResult: {
          en: 'Toxic Cassia is very thick (1 to 2 mm), hard as timber, dark reddish-brown, and forms a single hollow rigid tube that CANNOT be crushed by hand without a hammer.',
          gu: 'કેસિયા ૧ થી ૨ મિમી જાડી, લાકડા જેવી સખત અને માત્ર એક જ વળેલી નળી જેવી હોય છે; તે હાથથી તૂટતી નથી અને તીખો કડવો સ્વાદ આપે છે.',
          hi: 'कैसिया लकड़ी जैसी बहुत मोटी (१-२ मिमी), सख्त और एक ही खोखली नली जैसी होती है; इसे हाथ से तोड़ना असंभव होता है।',
        },
        canDetect: {
          en: ['Cassia bark substitution with 100% physical certainty'],
          gu: ['કેસિયાની ભેળસેળ ૧૦૦% સ્પષ્ટ પકડાય છે'],
          hi: ['कैसिया की मिलावट की शत-प्रतिशत पहचान'],
        },
        cannotDetect: {
          en: ['Coumarin PPM in finely ground mixed powders (requires HPLC)'],
          gu: ['પીસેલા પાવડરમાં કૌમેરિન ટકાવારી'],
          hi: ['पाउडर में क्यूमारिन का प्रतिशत'],
        },
        safetyPrecautions: {
          en: ['Do not use hard Cassia bark daily for health drinks, weight-loss tea, or diabetic remedies!'],
          gu: ['રોજિંદા ઉકાળા કે ડાયાબિટીસની દવા તરીકે ક્યારેય જાડી કેસિયા ન વાપરવી!'],
          hi: ['काढ़े या वजन घटाने के लिए रोजाना कैसिया का सेवन कभी न करें!'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'HPLC for Coumarin Content (mg/kg) & Volatile Cinnamaldehyde Assay',
        gu: 'કૌમેરિન અને સિનામાલ્ડીહાઇડ માટે HPLC ટેસ્ટ',
        hi: 'क्यूमारिन मात्रा हेतु HPLC टेस्ट',
      },
      whyLabNeeded: {
        en: 'Ceylon cinnamon contains safe trace levels of coumarin (<0.004%), whereas Cassia has up to 1% (10,000 ppm) coumarin, which is hepatotoxic.',
        gu: 'અસલી તજમાં કૌમેરિન માત્ર ૦.૦૦૪% હોય છે જ્યારે કેસિયામાં ૧% જેટલું ઝેરી કૌમેરિન હોય છે જે ફક્ત HPLC થી મપાય છે.',
        hi: 'सीलोन में क्यूमारिन नगण्य होता है जबकि कैसिया में १% तक विषैला क्यूमारिन होता है।',
      },
      equipmentAndChemicals: {
        en: ['HPLC with UV detector', 'Coumarin certified reference standard'],
        gu: ['HPLC મશીન'],
        hi: ['HPLC स्पेक्ट्रोमीटर'],
      },
      recommendedLabTypes: {
        en: ['Spices Board Quality Evaluation Laboratories', 'NABL Phytochemical Labs'],
        gu: ['સ્પાઈસીસ બોર્ડ પ્રયોગશાળા'],
        hi: ['मसाला बोर्ड गुणवत्ता केंद्र'],
      },
      approxCostINR: '₹1,500 – ₹2,500',
      fssaiStandardRef: 'FSS (Food Products Standards) 2011 – Regulation 2.9.4: Cinnamon must be free from Cassia bark unless explicitly labelled as Cassia.',
      sampleSubmissionAdvice: {
        en: 'Submit 100g in moisture-proof pouch.',
        gu: '૧૦૦ ગ્રામ તજ પાઉચમાં સીલ કરીને મોકલો.',
        hi: '१०० ग्राम दालचीनी सीलबंद पाउच में भेजें।',
      },
    },
  },

  // --- 23. CLOVES (HERBS & AYURVEDIC) ---
  {
    id: 'cloves',
    categoryId: 'herbs_ayurvedic',
    name: {
      en: 'Medicinal Cloves (Laung / Laving)',
      gu: 'ઔષધીય લવિંગ (લવંગ)',
      hi: 'औषधीय लौंग',
    },
    subtitle: {
      en: 'Exhausted cloves (oil extracted industrially) and coated with mineral oil to fake quality',
      gu: 'તેલ કાઢી લીધેલા નકામા સૂકા લવિંગ અને ચમક માટે મિનરલ ઓઇલની ભેળસેળ',
      hi: 'तेल निकाली हुई बेअसर सूखी लौंग और चमक के लिए मिनरल ऑयल की पॉलिश',
    },
    alternateNames: ['cloves', 'clove', 'laving', 'laung', 'lavang', 'લવિંગ', 'લવંગ', 'લવીંગ', 'लौंग', 'लवंग'],
    icon: '🤎',
    riskSeverity: 'Medium',
    overview: {
      en: 'Cloves are cherished in Ayurveda for oral dental health, cough, and digestive fire due to rich Eugenol essential oil. Pharmaceutical companies industrially distill out the precious clove oil, then re-dry the spent, exhausted empty husks, coat them with petroleum oil for shine, and sell them in grocery markets.',
      gu: 'દાંતના દુખાવા અને શરદી-ઉધરસમાં લવિંગનું તેલ (યૂજેનોલ) ખૂબ ગુણકારી છે. કંપનીઓ લવિંગમાંથી કિંમતી તેલ ખેંચી લીધા પછી વધેલા નકામા ખોખા પર તેલ લગાવી બજારમાં વેચી દે છે.',
      hi: 'दवा कंपनियां लौंग से कीमती तेल (यूजेनॉल) निकाल लेती हैं और बेअसर सूखी खोखली लौंग पर तेल चमकाकर बाजार में बेच देती हैं।',
    },
    adulterants: [
      {
        name: { en: 'Exhausted Spent Cloves & Mineral Polish', gu: 'તેલ કાઢી લીધેલા નકામા લવિંગ', hi: 'तेल निकाली हुई निष्कासित लौंग' },
        riskLevel: 'Moderate',
        description: {
          en: 'Distilled clove buds lacking volatile medicinal oils.',
          gu: 'તેલ વગરના માત્ર કચરા જેવા લવિંગ.',
          hi: 'तेल रहित खोखली व बेअसर लौंग।',
        },
        healthRisks: {
          en: 'Zero therapeutic benefit for dental and respiratory complaints; ingestion of petroleum polish.',
          gu: 'ઔષધીય ગુણ શૂન્ય અને મિનરલ ઓઇલથી પેટમાં ખરાબી.',
          hi: 'दांत दर्द व खांसी में कोई लाभ नहीं और पेट में खराबी।',
        },
      },
    ],
    homeTests: [
      {
        id: 'clove-water-settling-test',
        testName: {
          en: 'Water Vertical Sinking Test (FSSAI DART)',
          gu: 'પાણીમાં ઊભા ડૂબવાની કસોટી (FSSAI DART)',
          hi: 'पानी में लंबवत डूबने की जांच (FSSAI DART)',
        },
        adulterantTargeted: { en: 'Exhausted spent cloves', gu: 'તેલ કાઢી લીધેલા નકામા લવિંગ', hi: 'तेल निकाली हुई लौंग' },
        difficulty: 'Easy',
        timeRequiredMinutes: 2,
        requiredMaterials: {
          en: ['5 to 10 Clove buds', 'A transparent glass of room temperature water'],
          gu: ['૫ થી ૧૦ લવિંગ', 'પાણીથી ભરેલો કાચનો ગ્લાસ'],
          hi: ['५-१० लौंग', 'पानी से भरा कांच का गिलास'],
        },
        stepByStep: {
          en: [
            'Take a glass tumbler filled with clean water.',
            'Drop the clove buds onto the water surface.',
            'Observe whether they float horizontally on their sides, or stand vertically/sink head-down.',
          ],
          gu: [
            'કાચના ગ્લાસમાં પાણી ભરો.',
            'તેમાં લવિંગના દાણા નાખો.',
            'જુઓ કે લવિંગ પાણી પર આડા તરે છે કે ઊભા રહીને ડૂબે છે.',
          ],
          hi: [
            'कांच के गिलास में पानी लें।',
            'उसमें लौंग डालें।',
            'देखें कि लौंग पानी पर आड़ी तैरती है या सीधी खड़ी होकर डूबती है।',
          ],
        },
        pureSampleResult: {
          en: 'Genuine cloves rich in volatile oil are heavy and dense at the head; they stand upright vertically in the water or sink straight to the bottom.',
          gu: 'તેલથી ભરપૂર અસલી લવિંગ વજનદાર હોવાથી પાણીમાં માથું નીચે રાખીને ઊભા રહે છે અથવા તળિયે બેસી જાય છે.',
          hi: 'तेल से भरपूर असली लौंग भारी होने के कारण पानी में सीधी खड़ी रहती है या सिर के बल तली में डूब जाती है।',
        },
        adulteratedSampleResult: {
          en: 'Exhausted cloves with oil extracted are light, hollow, and dry; they float completely flat horizontally on top of the water.',
          gu: 'તેલ કાઢી લીધેલા લવિંગ પોચા અને હલકા હોવાથી પાણીની સપાટી પર આડા થઈને તરે છે.',
          hi: 'तेल निकाली हुई खोखली लौंग बिल्कुल हल्की होती है और पानी की सतह पर सपाट (आड़ी) तैरती रहती है।',
        },
        canDetect: {
          en: ['Exhausted cloves with volatile oil removed'],
          gu: ['તેલ વગરના નકામા લવિંગ'],
          hi: ['तेल रहित निष्कासित लौंग'],
        },
        cannotDetect: {
          en: ['Trace pesticide sprays'],
          gu: ['જંતુનાશક દવાઓ'],
          hi: ['कीटनाशक रसायन'],
        },
        safetyPrecautions: {
          en: ['Safe home test.'],
          gu: ['સલામત ઘરગથ્થુ ટેસ્ટ.'],
          hi: ['सुरक्षित घरेलू परीक्षण।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'Volatile Essential Oil Distillation & GC-MS for Eugenol Content',
        gu: 'બાષ્પશીલ તેલ (વોલેટાઈલ ઓઈલ) અને યુજેનોલ ટેસ્ટ',
        hi: 'वाष्पशील तेल और यूजेनॉल हेतु GC-MS टेस्ट',
      },
      whyLabNeeded: {
        en: 'FSSAI mandates minimum 17.0% (v/w) volatile oil in genuine whole cloves.',
        gu: 'FSSAI ના કાયદા મુજબ લવિંગમાં ઓછામાં ઓછું ૧૭% કુદરતી તેલ હોવું ફરજિયાત છે.',
        hi: 'FSSAI के अनुसार असली लौंग में कम से कम १७% प्राकृतिक तेल होना अनिवार्य है।',
      },
      equipmentAndChemicals: {
        en: ['Clevenger volatile oil distillation apparatus', 'Gas Chromatograph with MS'],
        gu: ['ક્લેવેન્જર ડિસ્ટિલેશન ઉપકરણ', 'GC-MS'],
        hi: ['क्लेवेंजर डिस्टिलेशन उपकरण', 'GC-MS'],
      },
      recommendedLabTypes: {
        en: ['Spices Board Quality Evaluation Centre', 'NABL Spices Testing Labs'],
        gu: ['સ્પાઈસીસ બોર્ડ ઓફ ઈન્ડિયા'],
        hi: ['मसाला बोर्ड गुणवत्ता केंद्र'],
      },
      approxCostINR: '₹1,000 – ₹1,800',
      fssaiStandardRef: 'FSS (Food Products Standards) 2011 – Regulation 2.9.6: Cloves whole must contain not less than 17.0% volatile oil by volume.',
      sampleSubmissionAdvice: {
        en: 'Send 100g in sealed moisture-proof foil.',
        gu: '૧૦૦ ગ્રામ લવિંગ સીલબંધ પાઉચમાં મોકલો.',
        hi: '१०० ग्राम लौंग सीलबंद पाउच में भेजें।',
      },
    },
  },

  // --- 24. ASHWAGANDHA ROOT POWDER (HERBS & AYURVEDIC) ---
  {
    id: 'ashwagandha',
    categoryId: 'herbs_ayurvedic',
    name: {
      en: 'Ashwagandha Root Powder (Indian Ginseng)',
      gu: 'અશ્વગંધા ચૂર્ણ (અસગંધ પાવડર)',
      hi: 'अश्वगंधा चूर्ण (भारतीय जिनसेंग)',
    },
    subtitle: {
      en: 'Frequently adulterated with wheat flour, arrowroot starch, talc, and wild non-medicinal roots',
      gu: 'મેંદો, સ્ટાર્ચ, ટેલ્કમ પાવડર અને નકામા જંગલી મૂળિયાની ભેળસેળ',
      hi: 'मैदा, अरारोट स्टार्च, टेलकम पाउडर और जंगली जड़ों के पाउडर की मिलावट',
    },
    alternateNames: ['ashwagandha', 'asgandh', 'withania', 'indian ginseng', 'churna', 'અશ્વગંધા', 'અસગંધ', 'અશ્વગંધા ચૂર્ણ', 'અશ્વગંધા પાવડર', 'अश्वगंधा', 'अश्वगंधा चूर्ण'],
    icon: '🌱',
    riskSeverity: 'High',
    overview: {
      en: 'Ashwagandha (Withania somnifera) is one of the most celebrated rejuvenating rasayanas in Ayurveda for strength, vitality, and stress reduction. Rising global demand has led to heavy adulteration of root powders with cheap wheat flour, arrowroot starch, inert talc powder, and exhausted roots stripped of active withanolides.',
      gu: 'અશ્વગંધા શારીરિક બળ, માનસિક શાંતિ અને રોગપ્રતિકારક શક્તિ વધારવા માટે જાણીતી આયુર્વેદિક ઔષધિ છે. વધતી માંગને કારણે બજારમાં મળતા ચૂર્ણમાં ઘઉંનો લોટ, સ્ટાર્ચ અને ટેલ્કમ પાવડર ભેળવવામાં આવે છે.',
      hi: 'अश्वगंधा बल, वीर्य और तनाव मुक्ति की प्रमुख आयुर्वेदिक औषधि है। अत्यधिक मांग के कारण इसके चूर्ण में मैदा, अरारोट और टेलकम पाउडर की भारी मिलावट की जाती है।',
    },
    adulterants: [
      {
        name: { en: 'Starch & Wheat Flour Fillers', gu: 'સ્ટાર્ચ અને લોટની ભેળસેળ', hi: 'स्टार्च और मैदे की मिलावट' },
        riskLevel: 'Moderate',
        description: {
          en: 'Cheap cereal flours added to dilute expensive root powder.',
          gu: 'વજન વધારવા ઉમેરાતો સસ્તો લોટ કે સ્ટાર્ચ.',
          hi: 'वजन बढ़ाने के लिए मिलाया गया सस्ता आटा या स्टार्च।',
        },
        healthRisks: {
          en: 'Zero therapeutic adaptogenic benefit; allergic reactions in gluten-sensitive patients.',
          gu: 'ઔષધીય ફાયદો શૂન્ય અને ગ્લુટેન એલર્જીવાળા દર્દીઓને નુકસાન.',
          hi: 'औषधीय असर शून्य और ग्लूटेन से एलर्जी वाले रोगियों को नुकसान।',
        },
      },
    ],
    homeTests: [
      {
        id: 'ashwagandha-iodine-starch-test',
        testName: {
          en: 'Iodine Test for Starch Adulteration in Ashwagandha',
          gu: 'અશ્વગંધામાં સ્ટાર્ચ/લોટ શોધવા આયોડિન ટેસ્ટ',
          hi: 'अश्वगंधा में स्टार्च जांचने हेतु आयोडीन परीक्षण',
        },
        adulterantTargeted: { en: 'Starch, flour, maida', gu: 'સ્ટાર્ચ, મેંદો, લોટ', hi: 'स्टार्च, मैदा' },
        difficulty: 'Easy',
        timeRequiredMinutes: 2,
        requiredMaterials: {
          en: ['Half teaspoon Ashwagandha powder', 'Tincture Iodine solution', 'A small cup of warm water'],
          gu: ['અડધી ચમચી અશ્વગંધા ચૂર્ણ', 'ટિંચર આયોડિન', 'હૂંફાળું પાણી'],
          hi: ['आधा चम्मच अश्वगंधा चूर्ण', 'टिंचर आयोडीन', 'गुनगुना पानी'],
        },
        stepByStep: {
          en: [
            'Mix half a teaspoon of Ashwagandha powder in a cup of warm water.',
            'Let it cool down for 2 minutes.',
            'Add 2 to 3 drops of Tincture Iodine and stir gently.',
            'Observe color transformation.',
          ],
          gu: [
            'અડધી ચમચી અશ્વગંધા પાવડર પાણીમાં ઓગાળો.',
            '૨ મિનિટ ઠંડુ થવા દો.',
            'તેમાં ૨-૩ ટીપાં ટિંચર આયોડિન ઉમેરો.',
            'રંગમાં થતો ફેરફાર જુઓ.',
          ],
          hi: [
            'आधा चम्मच अश्वगंधा गुनगुने पानी में घोलें।',
            '२ मिनट ठंडा होने दें।',
            'उसमें २-३ बूंदें टिंचर आयोडीन की डालें।',
            'रंग में बदलाव को देखें।',
          ],
        },
        pureSampleResult: {
          en: 'Pure Ashwagandha root powder does not contain free starch; it retains a dull brownish or light amber hue with iodine.',
          gu: 'શુદ્ધ અશ્વગંધામાં સ્ટાર્ચ ન હોવાથી તે વાદળી થતી નથી; આયોડિનનો આછો કથ્થાઈ રંગ જ રહે છે.',
          hi: 'शुद्ध अश्वगंधा में स्टार्च नहीं होता, इसलिए घोल नीला नहीं पड़ता; हल्का कत्थई रंग ही रहता है।',
        },
        adulteratedSampleResult: {
          en: 'Adulterated powder with flour or arrowroot instantly turns dark ink-blue or blackish-purple, exposing starch.',
          gu: 'જો લોટ કે સ્ટાર્ચ ભેળવેલો હશે તો તે તરત જ ઘાટો શાહી જેવો વાદળી કે જાંબલી થઈ જશે.',
          hi: 'मैदा या स्टार्च मिला होने पर घोल तुरंत गहरा स्याही जैसा नीला या काला-बैंगनी हो जाता है।',
        },
        canDetect: {
          en: ['Wheat flour', 'Arrowroot', 'Corn starch fillers'],
          gu: ['ઘઉંનો લોટ', 'અરારૂટ', 'સ્ટાર્ચ'],
          hi: ['मैदा', 'अरारोट', 'स्टार्च'],
        },
        cannotDetect: {
          en: ['Active Withanolides concentration (requires HPLC)'],
          gu: ['વિથેનોલાઈડ્સની સાંદ્રતા'],
          hi: ['विथेनोलाइड्स की मात्रा'],
        },
        safetyPrecautions: {
          en: ['Discard sample after test.'],
          gu: ['ટેસ્ટ કરેલો નમૂનો ફેંકી દેવો.'],
          hi: ['परीक्षित नमूने को फेंक दें।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'HPLC for Total Withanolides (Withaferin A & Withanolide D) Assay',
        gu: 'વિથેનોલાઈડ્સ માટે HPLC ટેસ્ટ (આયુર્વેદિક ફાર્માકોપિયા સ્ટાન્ડર્ડ)',
        hi: 'विथेनोलाइड्स हेतु HPLC परीक्षण',
      },
      whyLabNeeded: {
        en: 'Ayurvedic Pharmacopoeia of India (API) mandates minimum 0.3% total withanolides for genuine clinical efficacy.',
        gu: 'આયુર્વેદિક ફાર્માકોપિયા મુજબ અશ્વગંધામાં ઓછામાં ઓછું ૦.૩% વિથેનોલાઈડ્સ હોવું ફરજિયાત છે.',
        hi: 'आयुर्वेदिक मानकों के अनुसार असली अश्वगंधा में कम से कम ०.३% विथेनोलाइड्स होना चाहिए।',
      },
      equipmentAndChemicals: {
        en: ['HPLC with C18 column & UV detector', 'Certified Withaferin A standard'],
        gu: ['HPLC મશીન'],
        hi: ['HPLC सिस्टम'],
      },
      recommendedLabTypes: {
        en: ['Pharmacopoeial Laboratory for Indian Medicine (PLIM)', 'NABL Ayurvedic Testing Labs'],
        gu: ['આયુર્વેદિક ફાર્માકોપિયા લેબ્સ', 'NABL લેબ્સ'],
        hi: ['आयुष मंत्रालय मान्यता प्राप्त प्रयोगशालाएं'],
      },
      approxCostINR: '₹1,800 – ₹3,000',
      fssaiStandardRef: 'Ayurvedic Pharmacopoeia of India (API) Vol. 1 & FSSAI Standards for Ayurveda Aahara.',
      sampleSubmissionAdvice: {
        en: 'Submit 50g in sealed airtight glass container.',
        gu: '૫૦ ગ્રામ ચૂર્ણ એરટાઈટ ડબ્બીમાં મોકલો.',
        hi: '५० ग्राम चूर्ण सीलबंद डिब्बी में भेजें।',
      },
    },
  },

  // --- 25. SWEET POTATOES (FRUITS & VEGGIES) ---
  {
    id: 'sweet-potatoes',
    categoryId: 'vegetables',
    name: {
      en: 'Sweet Potatoes (Shakkariya / Shakarkand)',
      gu: 'શક્કરિયાં (રાતા શક્કરિયાં)',
      hi: 'शकरकंद (लाल मीठा आलू)',
    },
    subtitle: {
      en: 'Coated with toxic Rhodamine B textile dye to impart an intense fresh red-purple colour',
      gu: 'તાજા અને આકર્ષક ગુલાબી-લાલ દેખાડવા માટે કેન્સરકારક રોડામાઇન-બી કેમિકલ કલરનું કોટિંગ',
      hi: 'ताजा और लाल दिखाने के लिए कैंसरकारी रोडामाइन-बी टेक्सटाइल डाई का लेप',
    },
    alternateNames: ['sweet potato', 'shakkariya', 'shakarkand', 'shakariya', 'શક્કરિયાં', 'શક્કરીયા', 'शकरकंद'],
    icon: '🍠',
    riskSeverity: 'High',
    overview: {
      en: 'Vendors frequently dip ordinary, discoloured or stale sweet potatoes into Rhodamine B dye solution to fake the deep purple-red hue of fresh produce. Rhodamine B is a textile industrial dye banned in food worldwide.',
      gu: 'બજારમાં જૂના કે ફિક્કા શક્કરિયાંને આકર્ષક ગુલાબી-લાલ રંગ આપવા માટે કાપડ રંગવાના રોડામાઇન-બી નામના ઝેરી કેમિકલમાં બોળવામાં આવે છે, જે સ્વાસ્થ્ય માટે અત્યંત જોખમી છે.',
      hi: 'शकरकंद को ताजा और गहरा लाल-गुलाबी दिखाने के लिए कपड़ा रंगने वाली विषैली रोडामाइन-बी डाई में डुबोया जाता है।',
    },
    adulterants: [
      {
        name: { en: 'Rhodamine B Dye', gu: 'રોડામાઇન બી કેમિકલ કલર', hi: 'रोडामाइन बी रासायनिक रंग' },
        riskLevel: 'Severe',
        description: {
          en: 'Synthetic dye used in textile and paper printing, strictly prohibited in food items.',
          gu: 'કાપડ અને કાગળ રંગવા વપરાતો રંગ જે માનવ વપરાશ માટે પ્રતિબંધિત છે.',
          hi: 'कपड़ा उद्योग में प्रयुक्त रंग, खाद्य पदार्थों में पूर्णतः प्रतिबंधित।',
        },
        healthRisks: {
          en: 'Carcinogenic, damages renal and hepatic tissues, skin allergy and respiratory distress.',
          gu: 'કેન્સરનું જોખમ, કિડની અને લીવરને નુકસાન, એલર્જી.',
          hi: 'कैंसरकारी, लिवर और किडनी को नुकसान पहुंचाने वाला तत्व।',
        },
      },
    ],
    homeTests: [
      {
        id: 'sweet-potato-cotton-alcohol-test',
        testName: {
          en: 'Cotton Swab Alcohol / Water Test (FSSAI DART)',
          gu: 'રૂ અને પાણી/આલ્કોહોલ કસોટી (FSSAI DART)',
          hi: 'रुई और पानी/अल्कोहल से पोंछने की जांच (FSSAI DART)',
        },
        adulterantTargeted: { en: 'Rhodamine B and artificial red dye', gu: 'રોડામાઇન બી કેમિકલ કલર', hi: 'रोडामाइन बी कृत्रिम लाल रंग' },
        difficulty: 'Easy',
        timeRequiredMinutes: 1,
        requiredMaterials: {
          en: ['Piece of sweet potato', 'Clean white cotton ball', 'Few drops of water or rubbing alcohol'],
          gu: ['શક્કરિયાંનો ટુકડો', 'સફેદ રૂનું પૂમડું', 'પાણી કે આલ્કોહોલનાં થોડાં ટીપાં'],
          hi: ['शकरकंद का टुकड़ा', 'सफेद रुई', 'पानी या थोड़ा एल्कोहल'],
        },
        stepByStep: {
          en: [
            'Dampen a clean white cotton ball with water or sanitizer.',
            'Vigorously rub the outer purple/red peel of the sweet potato for 10 seconds.',
            'Check the cotton ball for bright pink or reddish-purple stain.',
          ],
          gu: [
            'સફેદ રૂને પાણી અથવા સેનિટાઈઝર વડે ભીનું કરો.',
            'શક્કરિયાંની લાલ-ગુલાબી છાલ પર ૧૦ સેકન્ડ સુધી જોરથી ઘસો.',
            'રૂ પર ગુલાબી કે લાલ કલર ચોંટે છે કે નહીં તે જુઓ.',
          ],
          hi: [
            'सफेद रुई को पानी या सैनिटाइजर से गीला करें।',
            'शकरकंद के लाल छिलके पर १० सेकंड तक रगड़ें।',
            'देखें कि क्या रुई पर चमकदार गुलाबी या लाल रंग छूटता है।',
          ],
        },
        pureSampleResult: {
          en: 'Naturally coloured sweet potato peel retains its natural pigment; the cotton swab stays clean or gets slight earthen dust.',
          gu: 'કુદરતી શક્કરિયાંમાંથી રંગ છૂટતો નથી; રૂ સફેદ જ રહે છે અથવા માત્ર સામાન્ય માટી લાગે છે.',
          hi: 'प्राकृतिक शकरकंद से कोई कृत्रिम रंग नहीं छूटता; रुई सफेद ही रहती है।',
        },
        adulteratedSampleResult: {
          en: 'If dyed with Rhodamine B, the cotton swab immediately stains deep magenta-pink.',
          gu: 'જો રોડામાઇન બી કલર હશે તો રૂ તરત જ ઘાટા ગુલાબી કે મેજેન્ટા રંગનું થઈ જશે.',
          hi: 'रोडामाइन बी से रंगे शकरकंद पर रगड़ते ही रुई तुरंत चमकीली गुलाबी/लाल हो जाती है।',
        },
        canDetect: {
          en: ['Surface Rhodamine B dye coating'],
          gu: ['ઉપર લગાડેલો રોડામાઇન બી કલર'],
          hi: ['सतह पर लगा रोडामाइन बी रंग'],
        },
        cannotDetect: {
          en: ['Systemic soil contaminants and pesticide residues'],
          gu: ['જમીનમાંથી શોષાયેલા જંતુનાશકો'],
          hi: ['जमीन से अवशोषित कीटनाशक'],
        },
        safetyPrecautions: {
          en: ['Always wash vegetables under running tap water and peel thoroughly.'],
          gu: ['શાકભાજીને હંમેશા વહેતા પાણીમાં ધોઈને છોલીને જ વાપરવાં.'],
          hi: ['सब्जियों को हमेशा अच्छे से धोकर और छीलकर ही उपयोग करें।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'High Performance Thin Layer Chromatography (HPTLC) / LC-MS for Rhodamine B',
        gu: 'રોડામાઇન બી માટે HPTLC / LC-MS પરીક્ષણ',
        hi: 'रोडामाइन बी हेतु HPTLC / LC-MS जांच',
      },
      whyLabNeeded: {
        en: 'Definitive chemical confirmation and quantification for legal food safety action.',
        gu: 'કાનૂની પુરાવા અને ચોક્કસ કેમિકલ પ્રમાણ માટે લેબ ટેસ્ટ જરૂરી છે.',
        hi: 'कानूनी कार्रवाई और सटीक पहचान हेतु प्रयोगशाला जांच आवश्यक है।',
      },
      equipmentAndChemicals: {
        en: ['CAMAG HPTLC scanner', 'TLC Silica plates', 'Fluorescence detector'],
        gu: ['HPTLC સ્કેનર', 'સિલિકા પ્લેટ્સ'],
        hi: ['HPTLC स्कैनर', 'सिलिका प्लेट्स'],
      },
      recommendedLabTypes: {
        en: ['FSSAI Notified State Food Laboratories', 'NABL accredited Food Testing Labs'],
        gu: ['FSSAI રાજ્ય ખાદ્ય પ્રયોગશાળાઓ', 'NABL લેબ્સ'],
        hi: ['FSSAI अधिसूचित प्रयोगशालाएं'],
      },
      approxCostINR: '₹1,500 – ₹2,500',
      fssaiStandardRef: 'FSSAI Guidance on Prohibition of Non-Permitted Colours in Agricultural Produce 2022.',
      sampleSubmissionAdvice: {
        en: 'Submit 500g in breathable paper bag.',
        gu: '૫૦૦ ગ્રામ શક્કરિયાં પેપર બેગમાં મોકલો.',
        hi: '५०० ग्राम शकरकंद पेपर बैग में भेजें।',
      },
    },
  },

  // --- 26. CAULIFLOWER (FRUITS & VEGGIES) ---
  {
    id: 'cauliflower',
    categoryId: 'vegetables',
    name: {
      en: 'Cauliflower (Ful Kobi / Gobhi)',
      gu: 'ફૂલકોબી (ફ્લાવર)',
      hi: 'फूलगोभी (गोभी)',
    },
    subtitle: {
      en: 'Treated with chemical bleaching agents and sulphur dioxide to whiten yellowed or browned florets',
      gu: 'પીળા કે ડાઘવાળા ફૂલને દૂધ જેવું સફેદ દેખાડવા સલ્ફર ડાયોક્સાઇડ અને કેમિકલ બ્લીચિંગની ભેળસેળ',
      hi: 'पीली व दागदार गोभी को दूध जैसी सफेद दिखाने के लिए सल्फर ब्लीचिंग की मिलावट',
    },
    alternateNames: ['cauliflower', 'ful kobi', 'flower', 'gobhi', 'phool gobhi', 'ફૂલકોબી', 'ફ્લાવર', 'કોબી', 'फूलगोभी', 'गोभी'],
    icon: '🥦',
    riskSeverity: 'Medium',
    overview: {
      en: 'To make oxidized, sun-damaged, or stale cauliflowers look pristine white, unscrupulous merchants spray or soak them in chemical bleaching agents or sulphur dioxide gas, leaving toxic chemical residues.',
      gu: 'જૂની, તડકાથી પીળી પડી ગયેલી કે કીડાના ડાઘવાળી ફૂલકોબીને ચમકદાર સફેદ દેખાડવા માટે વેપારીઓ તેના પર કેમિકલ બ્લીચ કે સલ્ફર ડાયોક્સાઇડનો છંટકાવ કરે છે.',
      hi: 'पुरानी या पीली पड़ चुकी फूलगोभी को दूधिया सफेद दिखाने के लिए उस पर हानिकारक ब्लीचिंग एजेंट या सल्फर डाइऑक्साइड का छिड़काव किया जाता है।',
    },
    adulterants: [
      {
        name: { en: 'Sulphur Dioxide & Bleaching Chemicals', gu: 'સલ્ફર ડાયોક્સાઇડ અને બ્લીચિંગ પાવડર', hi: 'सल्फर डाइऑक्साइड व ब्लीचिंग केमिकल' },
        riskLevel: 'Moderate',
        description: {
          en: 'Sulphite salts and bleaching sprays used to artificially whiten produce.',
          gu: 'શાકભાજીને કૃત્રિમ રીતે ધોળા કરવા વપરાતાં કેમિકલ્સ.',
          hi: 'गोभी को सफेद करने के लिए छिड़के गए रासायनिक ब्लीच।',
        },
        healthRisks: {
          en: 'Causes severe bronchospasm in asthmatic individuals, stomach irritation, nausea, throat burning.',
          gu: 'અસ્થમાના દર્દીઓ માટે અત્યંત જોખમી, શ્વાસનળીમાં સોજો, પેટમાં બળતરા.',
          hi: 'अस्थमा रोगियों के लिए खतरनाक, सांस लेने में तकलीफ, पेट में जलन।',
        },
      },
    ],
    homeTests: [
      {
        id: 'cauliflower-soak-smell-test',
        testName: {
          en: 'Warm Water Soak & Odour Inspection',
          gu: 'હૂંફાળા પાણીમાં પલાળવાની અને ગંધ કસોટી',
          hi: 'गुनगुने पानी में भिगोने और गंध की जांच',
        },
        adulterantTargeted: { en: 'Bleaching agents and chemical sulphur residue', gu: 'બ્લીચિંગ રસાયણ અને સલ્ફર', hi: 'ब्लीचिंग केमिकल व सल्फर अवशेष' },
        difficulty: 'Easy',
        timeRequiredMinutes: 5,
        requiredMaterials: {
          en: ['Cauliflower florets', 'Warm water in a glass bowl'],
          gu: ['ફૂલકોબીના ટુકડા', 'કાચના બાઉલમાં હૂંફાળું પાણી'],
          hi: ['फूलगोभी के टुकड़े', 'कांच के बर्तन में गुनगुना पानी'],
        },
        stepByStep: {
          en: [
            'Cut a few florets from the top crown.',
            'Submerge them in a bowl of warm water for 5 minutes.',
            'Smell the water and observe whether any chemical sheen or pungent chlorine/sulphur odor emerges.',
          ],
          gu: [
            'ફૂલકોબીના ઉપરના ભાગમાંથી ૨-૩ ટુકડા કાપો.',
            'તેને હૂંફાળા પાણીમાં ૫ મિનિટ પલાળી રાખો.',
            'પાણીની ગંધ સૂંઘો અને સપાટી પર ફીણ કે રાસાયણિક વાસ આવે છે કે નહીં તે તપાસો.',
          ],
          hi: [
            'फूलगोभी के कुछ टुकड़े काटें।',
            'उन्हें ५ मिनट के लिए गुनगुने पानी में डुबोएं।',
            'पानी की गंध सूंघें और देखें कि क्या क्लोरीन या सल्फर की तीखी दुर्गंध आती है।',
          ],
        },
        pureSampleResult: {
          en: 'Naturally fresh cauliflower yields fresh earthy vegetable smell with no biting pungency or frothy chemical film.',
          gu: 'કુદરતી ફૂલકોબીમાંથી માટી અને શાકની સામાન્ય સુગંધ આવે છે; કોઈ તીખી કેમિકલ વાસ આવતી નથી.',
          hi: 'प्राकृतिक गोभी से सामान्य ताजी महक आती है, कोई तीखी रासायनिक दुर्गंध नहीं आती।',
        },
        adulteratedSampleResult: {
          en: 'Chemically bleached cauliflower emits a pungent biting odor resembling matches/chlorine and water may turn hazy.',
          gu: 'જો બ્લીચ કરેલું હશે તો દિવાસળી કે ક્લોરીન જેવી તીખી વાસ આવશે અને પાણી ડોળું થશે.',
          hi: 'ब्लीच की गई गोभी से माचिस की तीली या क्लोरीन जैसी तीखी रासायनिक गंध आती है।',
        },
        canDetect: {
          en: ['Heavy surface sulphite/bleaching spray'],
          gu: ['સલ્ફર અને બ્લીચિંગની તીખી ગંધ'],
          hi: ['तीखी ब्लीचिंग की दुर्गंध'],
        },
        cannotDetect: {
          en: ['Systemic internal pesticide residues'],
          gu: ['અંદર ઉતરેલા જંતુનાશકો'],
          hi: ['अंदर समाए कीटनाशक'],
        },
        safetyPrecautions: {
          en: ['Always soak vegetables in salt or turmeric water for 15 minutes before cooking.'],
          gu: ['રાંધતા પહેલાં મીઠા કે હળદરવાળા પાણીમાં ૧૫ મિનિટ પલાળીને જ વાપરવી.'],
          hi: ['पकाने से पहले नमक व हल्दी के पानी में १५ मिनट अवश्य भिगोएं।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'Monier-Williams Method for Sulphites (SO2) & Multi-Pesticide Screen by GC-MS/MS',
        gu: 'સલ્ફાઇટ્સ માટે મોનિયર-વિલિયમ્સ પદ્ધતિ અને જંતુનાશકો માટે GC-MS/MS',
        hi: 'सल्फाइट्स हेतु मोनियर-विलियम्स विधि व GC-MS/MS',
      },
      whyLabNeeded: {
        en: 'Determines precise parts-per-million (ppm) of sulphur dioxide residues.',
        gu: 'સલ્ફર ડાયોક્સાઇડના ચોક્કસ પીપીએમ પ્રમાણ માટે.',
        hi: 'सल्फर डाइऑक्साइड की सटीक मात्रा मापने के लिए।',
      },
      equipmentAndChemicals: {
        en: ['Monier-Williams distillation apparatus', 'GC-MS/MS triple quad'],
        gu: ['ડિસ્ટિલેશન ઉપકરણ', 'GC-MS/MS'],
        hi: ['डिस्टिलेशन उपकरण', 'GC-MS/MS'],
      },
      recommendedLabTypes: {
        en: ['NABL accredited Agricultural Residue Labs'],
        gu: ['NABL એગ્રીકલ્ચરલ લેબ્સ'],
        hi: ['एनएबीएल मान्यता प्राप्त कृषि परीक्षण लैब'],
      },
      approxCostINR: '₹2,000 – ₹3,500',
      fssaiStandardRef: 'FSS (Food Products Standards) Regulations 2011 on Maximum Residual Limits for Sulphites in Fresh Vegetables.',
      sampleSubmissionAdvice: {
        en: 'Submit 1 whole head wrapped in paper.',
        gu: 'આખો ગઠ્ઠો પેપરમાં લપેટીને મોકલો.',
        hi: 'पूरी गोभी कागज में लपेटकर भेजें।',
      },
    },
  },

  // --- 27. HIMALAYAN SHILAJIT RESIN (HERBS & AYURVEDIC) ---
  {
    id: 'shilajit',
    categoryId: 'herbs_ayurvedic',
    name: {
      en: 'Pure Himalayan Shilajit Resin (Shilajit / Silajit)',
      gu: 'શુદ્ધ હિમાલયન શિલાજીત (શિલાજિત રેઝિન)',
      hi: 'शुद्ध हिमालयन शिलाजीत (शिलाजीत राल)',
    },
    subtitle: {
      en: 'Frequently faked using jaggery molasses, coal tar, gum acacia, asphalt, and heavy-metal laden bitumen',
      gu: 'ગોળની રાબ, ડામર, ગુંદર, કોલસો અને ઝેરી રસાયણોની ગંભીર નકલી બનાવટ',
      hi: 'गुड़ का शीरा, डामर, बबूल का गोंद और भारी धातुओं से बनी नकली शिलाजीत',
    },
    alternateNames: ['shilajit', 'silajit', 'salajeet', 'mineral pitch', 'fulvic acid', 'શિલાજીત', 'શિલાજિત', 'शिलाजीत'],
    icon: '⛰️',
    riskSeverity: 'Critical',
    overview: {
      en: 'Shilajit is an exudate from high-altitude Himalayan rocks rich in Fulvic Acid and over 84 ionic trace minerals. Because genuine purified raw shilajit is rare and expensive, the market is flooded with fake products made from thickened sugar syrup, coal tar, and industrial pitch.',
      gu: 'શિલાજીત હિમાલયના ઊંચા પહાડોમાંથી નીકળતું અતિ મૂલ્યવાન ઔષધીય દ્રવ્ય છે જે ફુલવિક એસિડ અને ૮૪ થી વધુ મિનરલ્સ ધરાવે છે. કિંમતી હોવાથી બજારમાં ગોળની કાળી ચાસણી, ગુંદર અને ડામર મેળવીને નકલી શિલાજીત વેચાય છે.',
      hi: 'शिलाजीत हिमालय की ऊंची चट्टानों से प्राप्त बहुमूल्य औषधि है जिसमें फुल्विक एसिड व ८४ से अधिक खनिज होते हैं। बाजार में नकली शिलाजीत गुड़ की चाशनी और डामर मिलाकर बेची जाती है।',
    },
    adulterants: [
      {
        name: { en: 'Coal Tar, Asphalt & Bitumen', gu: 'ડામર, બીટુમેન અને કોલ ટાર', hi: 'डामर और कोलतार' },
        riskLevel: 'Severe',
        description: {
          en: 'Petroleum distillation residues shaped into black sticky paste.',
          gu: 'પેટ્રોલિયમ ડામર જેને શિલાજીત તરીકે પધરાવાય છે.',
          hi: 'पेट्रोलियम अवशेष जिसे शिलाजीत बताकर बेचा जाता है।',
        },
        healthRisks: {
          en: 'High polycyclic aromatic hydrocarbons (PAHs), heavy metal poisoning (lead, mercury, arsenic), kidney failure.',
          gu: 'ભારે ધાતુઓ (પારો, સીસું, આર્સેનિક) ની ઝેરી અસર, કિડની ફેલ થવાનું જોખમ.',
          hi: 'लेड, मरकरी व आर्सेनिक का गंभीर जहर, किडनी खराब होने का खतरा।',
        },
      },
    ],
    homeTests: [
      {
        id: 'shilajit-warm-water-solubility',
        testName: {
          en: 'Warm Water / Milk Complete Dissolution Test',
          gu: 'હૂંફાળા પાણી અથવા દૂધમાં સંપૂર્ણ દ્રાવ્યતા કસોટી',
          hi: 'गुनगुने पानी या दूध में घुलनशीलता परीक्षण',
        },
        adulterantTargeted: { en: 'Insoluble gums, asphalt, tar, inert fillers', gu: 'ડામર, ગુંદર, માટી, પથ્થરનો પાઉડર', hi: 'डामर, गोंद, मिट्टी की मिलावट' },
        difficulty: 'Easy',
        timeRequiredMinutes: 2,
        requiredMaterials: {
          en: ['Pea-sized portion of Shilajit resin', 'Glass of warm water or warm milk'],
          gu: ['વટાણા જેવડી શિલાજીતની ગોળી', 'કાચના ગ્લાસમાં હૂંફાળું પાણી અથવા દૂધ'],
          hi: ['मटर के दाने बराबर शिलाजीत', 'गुनगुना पानी या दूध'],
        },
        stepByStep: {
          en: [
            'Take a pea-sized portion of Shilajit resin on the tip of a spoon.',
            'Drop it into warm water or milk without vigorous stirring.',
            'Observe how it dissolves and check the bottom of the glass.',
          ],
          gu: [
            'ચમચીની અણી પર વટાણા જેટલી શિલાજીત લો.',
            'તેને હૂંફાળા પાણી કે દૂધમાં નાખો.',
            'જુઓ કે તે કેવી રીતે ઓગળે છે અને તળિયે કોઈ કચરો કે ગઠ્ઠો વધે છે કે નહીં.',
          ],
          hi: [
            'मटर के दाने बराबर शिलाजीत लें।',
            'इसे गुनगुने पानी या दूध में डालें।',
            'देखें कि यह कैसे घुलती है और तली में कोई कचरा बचता है या नहीं।',
          ],
        },
        pureSampleResult: {
          en: 'Pure Shilajit dissolves 100% completely in warm water or milk in a few minutes, creating a rich golden-amber to reddish-brown liquid with ZERO sediment, grit, or oily film on top.',
          gu: 'શુદ્ધ શિલાજીત ૧૦૦% સંપૂર્ણપણે ઓગળી જાય છે. પાણી સોનેરી-લાલ રંગનું થાય છે અને તળિયે જરાય કચરો, કાંકરી કે ઉપર તેલનું પડ તરતું નથી.',
          hi: 'शुद्ध शिलाजीत पानी में १००% घुल जाती है। पानी का रंग सुनहरा-भूरा हो जाता है और तली में रत्ती भर भी कचरा या तलछट नहीं बचती।',
        },
        adulteratedSampleResult: {
          en: 'Fake shilajit containing asphalt, gums, or tar leaves sticky insoluble black residue, insoluble clumps, or an oily film on water surface.',
          gu: 'નકલી શિલાજીતમાં ડામર કે ગુંદર હોવાથી તે પૂરી ઓગળતી નથી; તળિયે કાળો ગઠ્ઠો બેસી રહે છે અથવા ઉપર તેલ તરે છે.',
          hi: 'नकली शिलाजीत पूरी तरह नहीं घुलती; तली में काला चिपचिपा डामर या कचरा जमा रह जाता है।',
        },
        canDetect: {
          en: ['Insoluble petroleum binders, clay, sand, insoluble resins'],
          gu: ['ઓગળે નહીં તેવો ડામર, ગુંદર, માટી'],
          hi: ['न घुलने वाला डामर, मिट्टी, गोंद'],
        },
        cannotDetect: {
          en: ['Heavy metal parts-per-billion levels (requires ICP-MS)'],
          gu: ['સૂક્ષ્મ ભારે ધાતુઓનું પ્રમાણ'],
          hi: ['सूक्ष्म भारी धातु की जांच'],
        },
        safetyPrecautions: {
          en: ['Never consume unpurified raw rock shilajit.'],
          gu: ['અશુદ્ધ કાચી શિલાજીત ક્યારેય ન ખાવી.'],
          hi: ['अशोधित कच्ची शिलाजीत का सेवन कभी न करें।'],
        },
      },
      {
        id: 'shilajit-flame-bubble-test',
        testName: {
          en: 'Flame Burning & Pliability Test',
          gu: 'અગ્નિ દહન અને પરપોટા ટેસ્ટ',
          hi: 'अग्नि परीक्षण (जलने और बुलबुले की जांच)',
        },
        adulterantTargeted: { en: 'Flammable petrochemical pitch, sugar charring', gu: 'ડામર અને ખાંડની ચાસણી', hi: 'डामर और चीनी की चाशनी' },
        difficulty: 'Easy',
        timeRequiredMinutes: 2,
        requiredMaterials: {
          en: ['Small dab of Shilajit on a needle or wire', 'Candle or gas flame'],
          gu: ['સોય પર થોડી શિલાજીત', 'મીણબત્તી કે જ્યોત'],
          hi: ['सुई या तार पर थोड़ी शिलाजीत', 'मोमबत्ती की लौ'],
        },
        stepByStep: {
          en: [
            'Place a small dab of resin on a metal paperclip or needle.',
            'Hold it over a flame for 10 seconds.',
            'Observe if it catches fire like candle wax or bubbles and puffs up into ash.',
          ],
          gu: [
            'ધાતુની સોય પર થોડી શિલાજીત લગાવો.',
            'તેને જ્યોત પર ૧૦ સેકન્ડ ધરો.',
            'જુઓ કે તે સળગી ઊઠે છે કે પરપોટા થઈને રાખ બને છે.',
          ],
          hi: [
            'धातु की सुई पर थोड़ी शिलाजीत लगाएं।',
            'इसे लौ के ऊपर १० सेकंड रखें।',
            'देखें कि क्या यह मोमबत्ती की तरह आग पकड़ती है या बुलबुले बनाकर फूलती है।',
          ],
        },
        pureSampleResult: {
          en: 'Pure Shilajit does NOT catch fire or produce black petroleum smoke. It slowly bubbles, expands, and turns into fine mineral ash.',
          gu: 'શુદ્ધ શિલાજીત જ્યોત પકડતી નથી કે કાળો ધુમાડો કરતી નથી; તે ધીમે ધીમે પરપોટા બનીને ફૂલે છે અને રાખ બને છે.',
          hi: 'शुद्ध शिलाजीत आग नहीं पकड़ती और न ही काला धुआं छोड़ती है; वह केवल बुलबुले बनाकर फूलती है और राख बनती है।',
        },
        adulteratedSampleResult: {
          en: 'Asphalt and petrochemical substitutes catch fire immediately and burn with sooty black smoke and a chemical gasoline odor.',
          gu: 'ડામર કે કેમિકલવાળી નકલી શિલાજીત તરત જ ભડકો થઈને સળગે છે અને કાળો ધુમાડો તથા ડામર જેવી ગંધ છોડે છે.',
          hi: 'डामर वाली नकली शिलाजीत तुरंत आग पकड़ लेती है और काले धुएं के साथ जलती है।',
        },
        canDetect: {
          en: ['Petrochemical pitch and flammable hydrocarbons'],
          gu: ['પેટ્રોલિયમ ડામર'],
          hi: ['पेट्रोकेमिकल डामर की मिलावट'],
        },
        cannotDetect: {
          en: ['Fulvic acid percentage'],
          gu: ['ફુલવિક એસિડની ટકાવારી'],
          hi: ['फुल्विक एसिड की मात्रा'],
        },
        safetyPrecautions: {
          en: ['Perform over a fire-safe surface.'],
          gu: ['સલામત જગ્યાએ પ્રયોગ કરવો.'],
          hi: ['सुरक्षित स्थान पर प्रयोग करें।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'Fulvic Acid Quantification by Gravimetric/UV-Vis & Heavy Metal Profile by ICP-MS',
        gu: 'ફુલવિક એસિડ પ્રમાણ અને ICP-MS દ્વારા હેવી મેટલ ટેસ્ટ',
        hi: 'फुल्विक एसिड और भारी धातुओं हेतु ICP-MS जांच',
      },
      whyLabNeeded: {
        en: 'Shilajit must have minimum 40% fulvic acid and be certified free from toxic lead, arsenic, and cadmium contamination.',
        gu: 'શિલાજીતમાં ઓછામાં ઓછું ૪૦% ફુલવિક એસિડ હોવું જોઈએ અને સીસું, પારો ન હોવા જોઈએ.',
        hi: 'असली शिलाजीत में कम से कम ४०% फुल्विक एसिड होना चाहिए और लेड, मरकरी शून्य होना चाहिए।',
      },
      equipmentAndChemicals: {
        en: ['ICP-MS (Inductively Coupled Plasma Mass Spectrometer)', 'UV-Vis Spectrophotometer'],
        gu: ['ICP-MS સ્પેક્ટ્રોમીટર', 'UV-Vis સ્પેક્ટ્રોફોટોમીટર'],
        hi: ['ICP-MS सिस्टम', 'स्पेक्ट्रोफोटोमीटर'],
      },
      recommendedLabTypes: {
        en: ['AYUSH Ministry Approved Drug Testing Laboratories', 'NABL accredited Ayurvedic Labs'],
        gu: ['આયુષ મંત્રાલય માન્ય લેબ્સ'],
        hi: ['आयुष मंत्रालय मान्यता प्राप्त प्रयोगशालाएं'],
      },
      approxCostINR: '₹3,000 – ₹5,500',
      fssaiStandardRef: 'Ayurvedic Pharmacopoeia of India (API) Part I, Vol. 1 & FSSAI Ayurveda Aahara Guidelines.',
      sampleSubmissionAdvice: {
        en: 'Submit 20g in sealed glass jar.',
        gu: '૨૦ ગ્રામ શિલાજીત કાચની બરણીમાં મોકલો.',
        hi: '२० ग्राम शिलाजीत कांच की शीशी में भेजें।',
      },
    },
  },

  // --- 28. TRIPHALA CHURNA (HERBS & AYURVEDIC) ---
  {
    id: 'triphala',
    categoryId: 'herbs_ayurvedic',
    name: {
      en: 'Triphala Churna (Amla, Haritaki, Bibhitaki)',
      gu: 'ત્રિફળા ચૂર્ણ (આમળાં, હરડે, બહેડા)',
      hi: 'त्रिफला चूर्ण (आंवला, हरड़, बहेड़ा)',
    },
    subtitle: {
      en: 'Commonly adulterated with sawdust, exhausted fruit pulp, sand, and non-medicinal fruit rinds',
      gu: 'લાકડાનો વહેર, રસ કાઢી લીધેલા આમળાંનો કૂચો, રેતી અને નકામી છાલની ભેળસેળ',
      hi: 'लकड़ी का बुरादा, सूखा निष्कासित गूदा, रेत और घटिया छिलकों की मिलावट',
    },
    alternateNames: ['triphala', 'trifala', 'triphala churna', 'amla haritaki bibhitaki', 'ત્રિફળા', 'ત્રિફલા', 'ત્રિફળા ચૂર્ણ', 'त्रिफला', 'त्रिफला चूर्ण'],
    icon: '🥣',
    riskSeverity: 'Medium',
    overview: {
      en: 'Triphala is an essential Ayurvedic formulation of three sacred myrobalans (Emblica officinalis, Terminalia chebula, Terminalia bellirica). Commercial batches frequently substitute the costly active deseeded pulp with wood sawdust, sand, and cheap exhausted factory waste.',
      gu: 'ત્રિફળા આયુર્વેદનું ઉત્તમ રસાયણ છે જે આમળાં, હરડે અને બહેડાંમાંથી બને છે. બજારમાં વજન વધારવા માટે બીજ કાઢ્યા વગરનો કચરો, લાકડાનો વહેર કે માટી ભેળવાય છે.',
      hi: 'त्रिफला आंवला, हरड़ और बहेड़ा के फलों से बनती है। वजन बढ़ाने के लिए इसमें लकड़ी का बुरादा, रेत और रस निकाले हुए फलों का कचरा मिलाया जाता है।',
    },
    adulterants: [
      {
        name: { en: 'Fine Wood Sawdust & Sand', gu: 'લાકડાનો ઝીણો વહેર અને રેતી', hi: 'लकड़ी का बुरादा व रेत' },
        riskLevel: 'Moderate',
        description: {
          en: 'Cellulose sawdust powdered and dyed to match Triphala colour.',
          gu: 'લાકડાનો ભૂકો જે વજન વધારવા માટે ઉમેરાય છે.',
          hi: 'लकड़ी का बारीक बुरादा जो वजन बढ़ाने के लिए मिलाया जाता है।',
        },
        healthRisks: {
          en: 'Intestinal irritation, zero therapeutic benefit, potential ingestion of chemical wood preservatives.',
          gu: 'પાચનતંત્ર બગાડે છે, પેટમાં દુખાવો, ઔષધીય ગુણ શૂન્ય.',
          hi: 'आंतों में जलन, पेट दर्द और औषधीय लाभ शून्य।',
        },
      },
    ],
    homeTests: [
      {
        id: 'triphala-water-float-test',
        testName: {
          en: 'Water Settling & Floating Sawdust Test',
          gu: 'પાણીમાં તળિયે બેસવાની અને વહેર કસોટી',
          hi: 'पानी में तलछट और बुरादे की जांच',
        },
        adulterantTargeted: { en: 'Wood sawdust and heavy grit/sand', gu: 'લાકડાનો વહેર અને રેતી', hi: 'लकड़ी का बुरादा व रेत' },
        difficulty: 'Easy',
        timeRequiredMinutes: 2,
        requiredMaterials: {
          en: ['1 teaspoon Triphala powder', 'Transparent glass of water'],
          gu: ['૧ ચમચી ત્રિફળા ચૂર્ણ', 'કાચના ગ્લાસમાં પાણી'],
          hi: ['१ चम्मच त्रिफला चूर्ण', 'कांच के गिलास में पानी'],
        },
        stepByStep: {
          en: [
            'Stir 1 teaspoon of Triphala powder into a transparent glass of water.',
            'Let it sit undisturbed for 5 minutes.',
            'Check the surface and bottom of the glass.',
          ],
          gu: [
            '૧ ચમચી ત્રિફળા ચૂર્ણ પાણીમાં હલાવો.',
            '૫ મિનિટ સુધી ગ્લાસને હલાવ્યા વગર રહેવા દો.',
            'પાણીની સપાટી ઉપર શું તરે છે અને તળિયે શું બેસે છે તે જુઓ.',
          ],
          hi: [
            '१ चम्मच त्रिफला चूर्ण पानी में घोलें।',
            '५ मिनट तक बिना हिलाए छोड़ दें।',
            'पानी की सतह और तली में देखें।',
          ],
        },
        pureSampleResult: {
          en: 'Pure fruit pulp gradually settles at the bottom forming a soft uniform sediment without gritty sand or light wooden fibers floating on the surface.',
          gu: 'શુદ્ધ ત્રિફળાનો કુદરતી પલ્પ ધીમે ધીમે નીચે બેસી જાય છે. સપાટી પર લાકડાના રેસા તરતા નથી કે તળિયે રેતીના કણ કરકરા લાગતા નથી.',
          hi: 'शुद्ध फल का गूदा धीरे-धीरे तली में बैठ जाता है। सतह पर लकड़ी के रेशे नहीं तैरते और न ही नीचे रेत की किरकिराहट होती है।',
        },
        adulteratedSampleResult: {
          en: 'Wood sawdust floats stubbornly on the surface meniscus, while heavy sand settles instantly with audible scratching when stirred.',
          gu: 'લાકડાનો વહેર હલકો હોવાથી પાણીની ઉપર તરતો રહે છે અને રેતી ચમચી ફેરવતાં કરકરી અવાજ કરે છે.',
          hi: 'लकड़ी का बुरादा पानी के ऊपर तैरता रहता है और भारी रेत तली में किरकिराहट करती है।',
        },
        canDetect: {
          en: ['Wood sawdust', 'Sand and silica grit'],
          gu: ['લાકડાનો વહેર', 'રેતી'],
          hi: ['लकड़ी का बुरादा', 'रेत'],
        },
        cannotDetect: {
          en: ['Tannin and gallic acid potency'],
          gu: ['ગેલિક એસિડની સાંદ્રતા'],
          hi: ['गैलिक एसिड का प्रतिशत'],
        },
        safetyPrecautions: {
          en: ['Always buy Triphala from GMP-certified Ayurvedic pharmacies.'],
          gu: ['હંમેશા માન્ય આયુર્વેદિક ફાર્મસીનું જ ચૂર્ણ ખરીદવું.'],
          hi: ['हमेशा प्रमाणित आयुर्वेदिक फार्मेसी का ही चूर्ण खरीदें।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'Total Ash & Acid-Insoluble Ash Determination & HPLC for Gallic Acid Content',
        gu: 'એસિડ-ઇનસોલ્યુબલ એશ અને ગેલિક એસિડ માટે HPLC ટેસ્ટ',
        hi: 'एसिड इनसोल्युबल ऐश और गैलिक एसिड हेतु HPLC',
      },
      whyLabNeeded: {
        en: 'Ayurvedic Pharmacopoeia sets strict limit for Acid-Insoluble Ash (<3.0%) and minimum Gallic Acid content to ensure pure pulp was used without sand/dirt.',
        gu: 'રેતી કે માટી પકડવા માટે એસિડ-ઇનસોલ્યુબલ એશ ટેસ્ટ અનિવાર્ય છે.',
        hi: 'रेत और मिट्टी की मिलावट पकड़ने के लिए एसिड इनसोल्युबल ऐश परीक्षण अनिवार्य है।',
      },
      equipmentAndChemicals: {
        en: ['Muffle furnace (at 600°C)', 'Analytical balance', 'HPLC-DAD'],
        gu: ['મફલ ફર્નેસ', 'HPLC'],
        hi: ['मफल फर्नेस', 'HPLC'],
      },
      recommendedLabTypes: {
        en: ['NABL accredited Ayurvedic Quality Control Labs'],
        gu: ['આયુર્વેદિક કંટ્રોલ લેબ્સ'],
        hi: ['आयुर्वेदिक गुणवत्ता नियंत्रण लैब'],
      },
      approxCostINR: '₹1,200 – ₹2,200',
      fssaiStandardRef: 'Ayurvedic Pharmacopoeia of India (API) Part I, Vol. 2: Acid insoluble ash shall not be more than 3.0%.',
      sampleSubmissionAdvice: {
        en: 'Submit 50g in sealed pouch.',
        gu: '૫૦ ગ્રામ ચૂર્ણ સીલબંધ પાઉચમાં મોકલો.',
        hi: '५० ग्राम चूर्ण सीलबंद पाउच में भेजें।',
      },
    },
  },

  // --- 29. GREEN CARDAMOM (SPICES / HERBS) ---
  {
    id: 'green-cardamom',
    categoryId: 'herbs_ayurvedic',
    name: {
      en: 'Green Cardamom (Elaichi / Hari Elaichi)',
      gu: 'લીલી ઈલાયચી (એલચી)',
      hi: 'हरी इलायची (छोटी इलायची)',
    },
    subtitle: {
      en: 'Treated with toxic synthetic green dyes, sulphur dioxide fumigation, or empty pods devoid of seeds',
      gu: 'આકર્ષક લીલી દેખાડવા માટે કેમિકલ કલર અને સલ્ફર ધૂણીની ભેળસેળ તેમજ બીજ વગરની ખાલી પોચી એલચી',
      hi: 'चमकीली हरी दिखाने के लिए जहरीले हरे रंग और सल्फर धुंए की मिलावट व बिना बीज वाली खोखली इलायची',
    },
    alternateNames: ['cardamom', 'elaichi', 'hari elaichi', 'chhoti elaichi', 'elchi', 'લીલી ઈલાયચી', 'એલચી', 'इलायची', 'हरी इलायची'],
    icon: '🌱',
    riskSeverity: 'Medium',
    overview: {
      en: 'High-grade large green cardamom pods command premium prices. Merchants often take stale, faded yellow pods, wash them with chemical bleaching agents, and soak them in green dyes to pass them off as top-grade harvest.',
      gu: 'લીલી ઈલાયચી બહુ કિંમતી હોવાથી જૂની, સફેદ પડી ગયેલી કે પીળી એલચીને સલ્ફરથી બ્લીચ કરી લીલા રંગમાં બોળીને નવી તરીકે વેચવામાં આવે છે.',
      hi: 'हरी इलायची की ऊंची कीमत के कारण पुरानी व पीली पड़ी इलायची को रासायनिक हरे रंग में डुबोकर व सल्फर से ब्लीच करके बेचा जाता है।',
    },
    adulterants: [
      {
        name: { en: 'Chemical Green Dyes & Sulphur Fumes', gu: 'કૃત્રિમ લીલો કલર અને સલ્ફર', hi: 'कृत्रिम हरा रंग व सल्फर धुआं' },
        riskLevel: 'Moderate',
        description: {
          en: 'Banned industrial dyes added to colorize washed faded pods.',
          gu: 'ફિક્કી પડી ગયેલી એલચી પર ચડાવવામાં આવતો લીલો રંગ.',
          hi: 'फीकी इलायची को हरी दिखाने के लिए लगाया गया रंग।',
        },
        healthRisks: {
          en: 'Stomach cramping, nausea, respiratory allergy from sulphur dioxide residues.',
          gu: 'પેટમાં ચૂંક, ઉબકા, સલ્ફરના કારણે શ્વાસની તકલીફ.',
          hi: 'पेट में ऐंठन, उल्टी, सांस की एलर्जी।',
        },
      },
    ],
    homeTests: [
      {
        id: 'elaichi-rub-water-test',
        testName: {
          en: 'Wet Cotton Rubbing & Seed Fullness Test',
          gu: 'ભીના રૂથી ઘસવાની અને બીજની ભરાવદારતા કસોટી',
          hi: 'गीली रुई से रगड़ने व बीज की जांच',
        },
        adulterantTargeted: { en: 'Artificial green color coating and empty pods', gu: 'કૃત્રિમ લીલો રંગ અને ખાલી દાણા', hi: 'कृत्रिम हरा रंग व खोखले दाने' },
        difficulty: 'Easy',
        timeRequiredMinutes: 1,
        requiredMaterials: {
          en: ['Sample cardamom pods', 'Clean white cotton moistened with water'],
          gu: ['ઈલાયચીના દાણા', 'પાણીથી ભીનું કરેલું સફેદ રૂ'],
          hi: ['इलायची के दाने', 'पानी से गीली सफेद रुई'],
        },
        stepByStep: {
          en: [
            'Rub the outer green pod vigorously with a moist white cotton swab for 10 seconds.',
            'Press the pod between your fingers to feel firmness, then crack it open to inspect internal seeds.',
          ],
          gu: [
            'ભીના સફેદ રૂ વડે ઈલાયચીની છાલ પર ૧૦ સેકન્ડ સુધી જોરથી ઘસો.',
            'આંગળી વડે દબાવીને જુઓ કે તે કડક છે કે પોચી, અને ફોલીને અંદર કાળા-કથ્થાઈ બીજ છે કે નહીં તે તપાસો.',
          ],
          hi: [
            'गीली सफेद रुई से इलायची के छिलके पर १० सेकंड तक रगड़ें।',
            'उंगलियों से दबाकर देखें कि वह ठोस है या खोखली, फिर छीलकर अंदर के बीज देखें।',
          ],
        },
        pureSampleResult: {
          en: 'Natural cardamom has a dull subtle pale green shade. It leaves no artificial green dye on cotton, and inside is densely packed with dark brown/black aromatic seeds.',
          gu: 'કુદરતી ઈલાયચીનો રંગ આછો લીલો હોય છે. રૂ પર કોઈ રંગ છૂટતો નથી અને ફોલતાં અંદર સુગંધિત કાળા-ઘાટા કથ્થાઈ બીજ ભરેલા હોય છે.',
          hi: 'प्राकृतिक इलायची का रंग हल्का स्वाभाविक हरा होता है। रुई पर कोई रंग नहीं छूटता और अंदर काले-भूरे सुगंधित बीज भरे होते हैं।',
        },
        adulteratedSampleResult: {
          en: 'Artificially colored cardamom instantly stains the white cotton swab bright vivid green; pods are often hollow or contain immature shrivelled white seeds.',
          gu: 'જો રંગેલી હશે તો રૂ તરત જ ચમકદાર લીલું થઈ જશે અને અંદર બીજ કાળાને બદલે સફેદ કે ચીમળાયેલા હશે.',
          hi: 'रंगी हुई इलायची से रुई तुरंत चमकीली हरी हो जाती है और अंदर बीज सिकुड़े या सफेद निकलते हैं।',
        },
        canDetect: {
          en: ['Artificial green dye transfer', 'Exhausted empty pods'],
          gu: ['કૃત્રિમ લીલો કલર', 'બીજ વગરની ખાલી એલચી'],
          hi: ['कृत्रिम हरा रंग', 'खाली छिलके'],
        },
        cannotDetect: {
          en: ['Volatile essential oil composition (1,8-cineole vs terpinyl acetate)'],
          gu: ['કુદરતી તેલની ચોક્કસ ટકાવારી'],
          hi: ['प्राकृतिक तेल का सटीक प्रतिशत'],
        },
        safetyPrecautions: {
          en: ['Safe home test.'],
          gu: ['સલામત ઘરગથ્થુ ટેસ્ટ.'],
          hi: ['सुरक्षित घरेलू टेस्ट।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'Volatile Essential Oil Assay & Gas Chromatography (GC-MS) for Cardamom Oil Purity',
        gu: 'બાષ્પશીલ તેલ (વોલેટાઈલ ઓઈલ) અને GC-MS પદ્ધતિ',
        hi: 'वाष्पशील तेल और GC-MS परीक्षण',
      },
      whyLabNeeded: {
        en: 'FSSAI mandates whole cardamom shall contain not less than 3.5% (v/w) volatile essential oil.',
        gu: 'FSSAI ના નિયમ મુજબ અસલી એલચીમાં ઓછામાં ઓછું ૩.૫% કુદરતી સુગંધિત તેલ હોવું જોઈએ.',
        hi: 'FSSAI के अनुसार असली इलायची में कम से कम ३.५% प्राकृतिक तेल होना अनिवार्य है।',
      },
      equipmentAndChemicals: {
        en: ['Clevenger distillation apparatus', 'GC-FID/MS'],
        gu: ['ક્લેવેન્જર ઉપકરણ', 'GC-MS'],
        hi: ['क्लेवेंजर उपकरण', 'GC-MS'],
      },
      recommendedLabTypes: {
        en: ['Spices Board Quality Evaluation Laboratories', 'NABL Spices Testing Labs'],
        gu: ['સ્પાઈસીસ બોર્ડ ઓફ ઈન્ડિયા'],
        hi: ['मसाला बोर्ड गुणवत्ता केंद्र'],
      },
      approxCostINR: '₹1,200 – ₹2,000',
      fssaiStandardRef: 'FSS (Food Products Standards) Regulations 2011 – Regulation 2.9.4: Cardamom whole.',
      sampleSubmissionAdvice: {
        en: 'Submit 50g in sealed pouch.',
        gu: '૫૦ ગ્રામ એલચી સીલબંધ પાઉચમાં મોકલો.',
        hi: '५० ग्राम इलायची सीलबंद पाउच में भेजें।',
      },
    },
  },
];

function getDefaultHealthDetails(item: FoodItem) {
  const custom = ayurvedicKnowledgeMap[item.id] || ayurvedicKnowledgeMap[item.id.replace(/-/g, '_')];
  if (custom) {
    return custom;
  }
  return {
    ayurvedicProps: {
      rasa: { en: 'Madhura & Kashaya', gu: 'મધુર અને કષાય રસ', hi: 'मधुर और कषाय' },
      guna: { en: 'Laghu & Snigdha', gu: 'લઘુ અને સ્નિગ્ધ ગુણ', hi: 'लघु और स्निग्ध' },
      virya: {
        en: item.categoryId === 'spices' || item.categoryId === 'oils_ghee' ? 'Ushna (Heating)' : 'Sheeta (Cooling)',
        gu: item.categoryId === 'spices' || item.categoryId === 'oils_ghee' ? 'ઉષ્ણ (ગરમ તાસીર)' : 'શીતળ (ઠંડી તાસીર)',
        hi: item.categoryId === 'spices' || item.categoryId === 'oils_ghee' ? 'उष्ण' : 'शीतल',
      },
      vipaka: { en: 'Madhura', gu: 'મધુર વિપાક', hi: 'मधुर' },
      doshaEffect: { en: 'Balances Tridosha in moderation', gu: 'યોગ્ય માત્રામાં ત્રિદોષ સંતુલન રાખે છે', hi: 'त्रिदोष संतुलन में सहायक' },
    },
    benefits: {
      en: ['Nourishes vital tissues and provides bio-available energy', 'Supports healthy gut microflora and metabolism', 'Rich in natural essential micronutrients and antioxidants'],
      gu: ['શરીરની ધાતુઓને પોષણ અને ટકાઉ ઉર્જા પૂરી પાડે છે', 'પાચનતંત્ર અને આંતરડાના આરોગ્યને મજબૂત બનાવે છે', 'કુદરતી પોષક તત્વો અને એન્ટીઓકિસડન્ટથી ભરપૂર'],
      hi: ['शरीर को पोषण और ऊर्जा प्रदान करता है', 'पाचन तंत्र को दुरुस्त रखता है', 'प्राकृतिक एंटीऑक्सीडेंट्स से भरपूर'],
    },
    precautionsAndSideEffects: {
      en: ['Always verify purity through FSSAI home test before consumption', 'Avoid stale, chemically dyed, or unwashed items'],
      gu: ['ખાતા પહેલાં શુદ્ધતા ટેસ્ટ દ્વારા ભેળસેળ ચકાસો', 'બજારમાંથી લાવેલ વસ્તુને બરાબર ધોઈને જ વાપરો'],
      hi: ['सेवन से पहले शुद्धता की जांच अवश्य करें', 'बिना धोए या बासी न खाएं'],
    },
    whoShouldAvoid: {
      en: ['Persons with known allergies to this food group', 'Consult Ayurvedic physician if experiencing acute digestive disorders'],
      gu: ['આ ખાદ્ય પદાર્થની એલર્જી ધરાવતી વ્યક્તિઓ', 'તીવ્ર બીમારી વખતે ડૉક્ટર કે વૈદ્યની સલાહ લેવી'],
      hi: ['एलर्जी वाले व्यक्ति सावधानी बरतें'],
    },
  };
}

export const foodDatabase: FoodItem[] = [...rawFoodDatabase, ...extraFoodItems].map((item) => ({
  ...item,
  healthDetails: item.healthDetails || getDefaultHealthDetails(item),
}));



