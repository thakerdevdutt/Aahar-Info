import { Language } from '../types';

export const translations: Record<Language, {
  appName: string;
  appTagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  searchPlaceholder: string;
  categoriesTitle: string;
  categoriesSubtitle: string;
  allCategories: string;
  categories: {
    dairy: string;
    oils_ghee: string;
    spices: string;
    grains: string;
    pulses: string;
    oilseeds: string;
    vegetables: string;
    fruits: string;
    herbs_ayurvedic: string;
    dry_fruits: string;
    honey_sugar: string;
    beverages: string;
    other: string;
  };
  filterAll: string;
  viewDetails: string;
  testAtHome: string;
  labTestRequired: string;
  pureResult: string;
  suspiciousResult: string;
  whatCanDetect: string;
  whatCannotDetect: string;
  householdMaterials: string;
  stepByStep: string;
  safetyPrecautions: string;
  adulterantsFound: string;
  healthImpact: string;
  labTestingTitle: string;
  labEquipNeeded: string;
  whereToTest: string;
  estimatedCost: string;
  fssaiRef: string;
  sampleSubmission: string;
  aiAdvisorTab: string;
  imageUploadTab: string;
  directoryTab: string;
  safetyBannerTitle: string;
  safetyBannerText: string;
  emergencyHelpline: string;
  emergencyTitle: string;
  emergencySubtitle: string;
  emergencyPoisonCenter: string;
  emergencyFssai: string;
  emergencyDoctorAdvice: string;
  noResultsFound: string;
  askAiAboutThis: string;
  imageUploadTitle: string;
  imageUploadDesc: string;
  imageUploadDisclaimer: string;
  uploadButtonText: string;
  analyzingImage: string;
  imageAnalysisResult: string;
  aiChatPlaceholder: string;
  send: string;
  quickQuestionsTitle: string;
  quickQuestions: string[];
  selectFoodToAnalyze: string;
  testDifficulty: string;
  duration: string;
  close: string;
  officialLaboratoriesTitle: string;
  officialLaboratoriesDesc: string;
  consumerComplaintGuide: string;
  // Ayurvedic & Health Section
  ayurvedicTab: string;
  ayurvedicTitle: string;
  ayurvedicSubtitle: string;
  doshaImpact: string;
  viryaPotency: string;
  rasaTaste: string;
  gunaQuality: string;
  vipakaMetabolic: string;
  healthBenefits: string;
  sideEffectsAndPrecautions: string;
  whoShouldAvoid: string;
  aiInstantLookup: string;
  aiInstantLookupDesc: string;
  liveGenerating: string;
  instantSearchPrompt: string;
}> = {
  en: {
    appName: "Aahar Info",
    appTagline: "શુદ્ધ આહાર • Shuddh Aahar",
    heroHeadline: "Protect Your Family with Pure & Safe Food",
    heroSubheadline: "Scientifically verified household tests, laboratory protocols, and Ayurvedic health analysis based on FSSAI DART standards and traditional science.",
    searchPlaceholder: "Search any food (e.g. ઘઉં, કારેલાં, તુવેર, કેરી, અશ્વગંધા, દૂધ, Wheat, Honey)...",
    categoriesTitle: "Explore Food Categories",
    categoriesSubtitle: "Select any category to discover rapid home testing methods, toxic adulterants, laboratory tests, and complete Ayurvedic dosha benefits.",
    allCategories: "All Products",
    categories: {
      vegetables: "🥦 Fresh Vegetables",
      fruits: "🍎 Fresh Fruits",
      herbs_ayurvedic: "🌿 Medicinal Herbs",
      spices: "✨ Spices & Masala",
      dairy: "🥛 Milk & Dairy",
      grains: "🌾 Grains & Cereals",
      pulses: "🥣 Pulses & Lentils",
      oilseeds: "🌱 Oilseeds",
      oils_ghee: "🫒 Oils & Ghee",
      dry_fruits: "🥜 Dry Fruits & Nuts",
      honey_sugar: "🍯 Honey & Jaggery",
      beverages: "☕ Beverages",
      other: "🧂 Other Foods",
    },
    filterAll: "All Items",
    viewDetails: "View Tests & Benefits",
    testAtHome: "Home Rapid Test (FSSAI DART)",
    labTestRequired: "Laboratory Testing (NABL/FSSAI)",
    pureResult: "Expected Result for Pure Food",
    suspiciousResult: "Indication of Adulteration",
    whatCanDetect: "What This Test CAN Detect",
    whatCannotDetect: "What This Test CANNOT Detect",
    householdMaterials: "Required Household Materials",
    stepByStep: "Step-by-Step Instructions",
    safetyPrecautions: "Crucial Safety Precautions",
    adulterantsFound: "Common Adulterants & Risks",
    healthImpact: "Health Risks",
    labTestingTitle: "Professional Laboratory Verification",
    labEquipNeeded: "Required Lab Equipment & Reagents",
    whereToTest: "Accredited Testing Facilities",
    estimatedCost: "Approximate Testing Cost",
    fssaiRef: "FSSAI Standard Reference",
    sampleSubmission: "How to Submit Sample",
    aiAdvisorTab: "AI Food & Health Expert",
    imageUploadTab: "Food Photo Inspection",
    directoryTab: "Settings",
    safetyBannerTitle: "Important Consumer Health Notice",
    safetyBannerText: "Household tests are rapid qualitative screening tools. Never declare any food '100% pure' based solely on a home test. Invisible hazards require accredited laboratory chromatography.",
    emergencyHelpline: "Emergency Contacts",
    emergencyTitle: "Suspected Food Poisoning or Contamination?",
    emergencySubtitle: "If anyone experiences severe nausea, vomiting, stomach cramps, vision issues, or difficulty breathing after consuming food:",
    emergencyPoisonCenter: "National Poison Information Centre (AIIMS New Delhi): 1800-116-117 (Toll-Free, 24/7)",
    emergencyFssai: "FSSAI Consumer Grievance & Toll-Free Helpline: 1800-112-100",
    emergencyDoctorAdvice: "Preserve the original food sample and packaging in an airtight container for laboratory evidence. Seek immediate medical attention at the nearest hospital.",
    noResultsFound: "No food items found matching your search. You can ask our AI specialist below or generate an instant analysis!",
    askAiAboutThis: "Ask AI Specialist About This Food",
    imageUploadTitle: "Visual Food Quality Inspection",
    imageUploadDesc: "Upload a clear photo of your food sample, powder, oil, spice, or product label. Our AI will inspect visible traits such as discoloration, synthetic glow, sedimentation, or artificial ripening.",
    imageUploadDisclaimer: "CRITICAL SAFETY DISCLAIMER: A digital image alone can NEVER confirm chemical purity, absence of toxins, or microbial safety.",
    uploadButtonText: "Choose Food Photo",
    analyzingImage: "AI is analyzing visual characteristics...",
    imageAnalysisResult: "Visual Inspection Report",
    aiChatPlaceholder: "Ask in English, ગુજરાતી, or हिंदी (e.g. How to test if milk has urea? કારેલાંના ફાયદા અને નુકસાન?)...",
    send: "Send",
    quickQuestionsTitle: "Common Purity & Health Questions:",
    quickQuestions: [
      "How to test if milk contains detergent or urea?",
      "હળદરમાં મેટાનિલ યલો કેમિકલ રંગ કેવી રીતે શોધવો?",
      "કારેલાં અને દૂધીના આયુર્વેદિક ગુણ-દોષ અને કોણે ન ખાવું?",
      "તુવેર દાળમાં કેસરી દાળની ભેળસેળ કેવી રીતે પકડવી?",
      "અશ્વગંધા અને શિલાજીત અસલી છે કે નકલી તે કેવી રીતે જાણવું?",
      "સરસવના તેલમાં આર્જિમોનની ભેળસેળ અને સ્વાસ્થ્ય પર અસર?",
    ],
    selectFoodToAnalyze: "Select food type (optional):",
    testDifficulty: "Difficulty",
    duration: "Time Needed",
    close: "Close",
    officialLaboratoriesTitle: "Accredited Laboratory Network in India",
    officialLaboratoriesDesc: "For conclusive legal and chemical safety verification, submit samples to NABL or FSSAI-notified facilities.",
    consumerComplaintGuide: "How to File a Consumer Complaint on FoSCoS (FSSAI Portal)",
    // Ayurvedic
    ayurvedicTab: "🌿 Ayurvedic & Health Benefits",
    ayurvedicTitle: "Ayurvedic Profile & Medicinal Properties",
    ayurvedicSubtitle: "Classical properties according to Charaka Samhita and Bhavaprakasha Nighantu (Rasa, Guna, Virya, Vipaka, Dosha effect)",
    doshaImpact: "Tridosha Effect (Vata, Pitta, Kapha)",
    viryaPotency: "Virya (Hot / Cold Potency)",
    rasaTaste: "Rasa (Taste Profile)",
    gunaQuality: "Guna (Qualities / Texture)",
    vipakaMetabolic: "Vipaka (Post-Digestive Effect)",
    healthBenefits: "Key Health & Medicinal Benefits",
    sideEffectsAndPrecautions: "Side Effects & Safe Consumption Precautions",
    whoShouldAvoid: "Contraindications (Who Should Avoid / Caution)",
    aiInstantLookup: "Instant Food Encyclopedia (400+ Items)",
    aiInstantLookupDesc: "Type any Indian vegetable, fruit, grain, pulse, seed, or herb to get verified purity tests and Ayurvedic analysis in seconds.",
    liveGenerating: "Consulting AI Food & Ayurveda Knowledge Base...",
    instantSearchPrompt: "Search or tap any of 400+ Indian items:",
  },
  gu: {
    appName: "આહાર ઇન્ફો",
    appTagline: "શુદ્ધ આહાર • Shuddh Aahar",
    heroHeadline: "તમારા પરિવાર માટે શુદ્ધ, સલામત અને પૌષ્ટિક આહારની ખાતરી કરો",
    heroSubheadline: "FSSAI DART માર્ગદર્શિકા મુજબ વૈજ્ઞાનિક રીતે ચકાસાયેલી ઘરગથ્થુ ટેસ્ટ પદ્ધતિઓ, પ્રયોગશાળા નિયમો તેમજ આયુર્વેદિક ઔષધીય ગુણ-દોષ અને ફાયદા-ગેરફાયદા.",
    searchPlaceholder: "કોઈપણ ખોરાક શોધો (દા.ત. ઘઉં, કારેલાં, તુવેર, કેરી, અશ્વગંધા, દૂધ, હળદર, જીરું)...",
    categoriesTitle: "ખાદ્ય પદાર્થોની તમામ શ્રેણીઓ",
    categoriesSubtitle: "ઝડપી ઘરગથ્થુ પરીક્ષણ પદ્ધતિઓ, ઝેરી ભેળસેળ, લેબ ટેસ્ટ અને વિગતવાર આયુર્વેદિક ગુણ-દોષ જાણવા માટે શ્રેણી પસંદ કરો.",
    allCategories: "બધા ખાદ્ય પદાર્થો",
    categories: {
      vegetables: "🥦 શાકભાજી (કારેલાં, દૂધી, પરવળ, પાલક...)",
      fruits: "🍎 તાજા ફળો (કેરી, કેળાં, દાડમ, પપૈયું...)",
      herbs_ayurvedic: "🌿 ઔષધિઓ (શિલાજીત, અશ્વગંધા, ગિલોય...)",
      spices: "✨ મસાલા (હળદર, મરી, જીરું, હિંગ...)",
      dairy: "🥛 દૂધ અને ડેરી (ગાયનું દૂધ, ઘી, પનીર...)",
      grains: "🌾 અનાજ (ઘઉં, બાજરી, જુવાર, ચોખા...)",
      pulses: "🥣 કઠોળ (તુવેર, મગ, ચણા, અડદ, વાલ...)",
      oilseeds: "🌱 તેલીબિયાં (તલ, સરસવ, મગફળી, અળસી...)",
      oils_ghee: "🫒 તેલ અને ઘી (સીંગતેલ, રાઈ તેલ, દેશી ઘી...)",
      dry_fruits: "🥜 સુકામેવા (બદામ, કાજુ, અખરોટ, અંજીર...)",
      honey_sugar: "🍯 મધ અને ગોળ/ખાંડ",
      beverages: "☕ પીણાં (ચા, કોફી, કાઢો)",
      other: "🧂 અન્ય ખાદ્ય પદાર્થો (મીઠું, વરખ, સોજી)",
    },
    filterAll: "બધા પદાર્થો",
    viewDetails: "પરીક્ષણ અને ગુણ-દોષ જુઓ",
    testAtHome: "ઘરે સરળ પરીક્ષણ (FSSAI DART)",
    labTestRequired: "પ્રયોગશાળા પરીક્ષણ (NABL / FSSAI)",
    pureResult: "શુદ્ધ નમૂનાનું અપેક્ષિત પરિણામ",
    suspiciousResult: "ભેળસેળ હોવાનો સંકેત",
    whatCanDetect: "આ ટેસ્ટ શું પકડી શકે છે",
    whatCannotDetect: "આ ટેસ્ટ શું નથી પકડી શકતો",
    householdMaterials: "જરૂરી ઘરગથ્થુ સામગ્રી",
    stepByStep: "પગલાં-દર-પગલાં સૂચનાઓ",
    safetyPrecautions: "મહત્વપૂર્ણ સલામતી સાવચેતી",
    adulterantsFound: "સામાન્ય ભેળસેળ અને જોખમો",
    healthImpact: "આરોગ્ય પર જોખમ",
    labTestingTitle: "વ્યાવસાયિક પ્રયોગશાળા (લેબ) ચકાસણી",
    labEquipNeeded: "જરૂરી લેબ સાધનો અને રસાયણો",
    whereToTest: "માન્યતા પ્રાપ્ત પ્રયોગશાળાઓ",
    estimatedCost: "અંદાજિત પરીક્ષણ ખર્ચ",
    fssaiRef: "FSSAI સ્ટાન્ડર્ડ સંદર્ભ",
    sampleSubmission: "નમૂનો કેવી રીતે જમા કરાવવો",
    aiAdvisorTab: "AI ખાદ્ય અને આયુર્વેદ નિષ્ણાત",
    imageUploadTab: "ફોટો દ્વારા ચકાસણી",
    directoryTab: "સેટિંગ્સ",
    safetyBannerTitle: "ગ્રાહકો માટે અતિ મહત્વપૂર્ણ સલામતી સૂચના",
    safetyBannerText: "ઘરગથ્થુ પરીક્ષણો માત્ર પ્રાથમિક સંકેત આપે છે. માત્ર ઘરના ટેસ્ટના આધારે કોઈપણ ખોરાકને '૧૦૦% શુદ્ધ' જાહેર કરશો નહીં. જંતુનાશકો, ભારે ધાતુઓ અને હાનિકારક બેક્ટેરિયા ફક્ત લેબોરેટરીમાં જ ચકાસી શકાય છે.",
    emergencyHelpline: "ઈમરજન્સી સંપર્ક નંબર",
    emergencyTitle: "ઝેરી ખોરાક કે ફૂડ પોઈઝનિંગની શંકા છે?",
    emergencySubtitle: "જો ખોરાક લીધા પછી કોઈને ગંભીર ઉલટી, ચક્કર, પેટમાં સખત દુખાવો કે શ્વાસ લેવામાં તકલીફ થાય તો:",
    emergencyPoisonCenter: "નેશનલ પોઈઝન ઈન્ફોર્મેશન સેન્ટર (AIIMS નવી દિલ્હી): 1800-116-117 (ટોલ ફ્રી, ૨૪ કલાક)",
    emergencyFssai: "FSSAI રાષ્ટ્રીય ગ્રાહક હેલ્પલાઇન: 1800-112-100",
    emergencyDoctorAdvice: "શંકાસ્પદ ખોરાક અને તેનું પેકેટ એરટાઈટ ડબ્બામાં પુરાવા રૂપે સાચવી રાખો અને તાત્કાલિક નજીકની હોસ્પિટલમાં ડૉક્ટરની સલાહ લો.",
    noResultsFound: "આ ખાદ્ય પદાર્થ અમારી લોકલ યાદીમાં મળ્યો નથી. તમે તરત જ નીચે AI જ્ઞાનકોશ દ્વારા ૧ સેકન્ડમાં તેની સંપૂર્ણ વિગત મેળવી શકો છો!",
    askAiAboutThis: "આ ખાદ્ય પદાર્થ વિશે AI ને પૂછો",
    imageUploadTitle: "ખોરાકના ફોટાનું દ્રશ્ય વિશ્લેષણ",
    imageUploadDesc: "તમારા ખાદ્ય પદાર્થ, મસાલા, તેલ કે શાકભાજીનો સ્પષ્ટ ફોટો અપલોડ કરો. અમારું AI અકુદરતી રંગ, ચમક, કચરો કે રાસાયણિક પકવણીના સંકેતો તપાસશે.",
    imageUploadDisclaimer: "મહત્વપૂર્ણ સલામતી ચેતવણી: માત્ર ફોટો જોઈને કોઈ પદાર્થ રસાયણિક રીતે ૧૦૦% શુદ્ધ છે કે નહીં તે કહી શકાતું નથી. તે ફક્ત પ્રાથમિક તપાસમાં મદદ કરે છે.",
    uploadButtonText: "ખોરાકનો ફોટો પસંદ કરો",
    analyzingImage: "AI ફોટાનું નિરીક્ષણ કરી રહ્યું છે...",
    imageAnalysisResult: "દ્રશ્ય તપાસ રિપોર્ટ",
    aiChatPlaceholder: "ગુજરાતીમાં કોઈપણ પ્રશ્ન પૂછો (દા.ત., દૂધમાં કેમિકલ કેવી રીતે ઓળખવું? કારેલાંના ગુણ-દોષ?)...",
    send: "મોકલો",
    quickQuestionsTitle: "સામાન્ય પ્રશ્નો:",
    quickQuestions: [
      "દૂધમાં સ્ટાર્ચ કે યુરિયાની ભેળસેળ કેવી રીતે પકડવી?",
      "કારેલાં અને દૂધીના ઔષધીય ગુણ-દોષ અને કોણે ન ખાવું?",
      "તુવેર દાળમાં કેસરી દાળની ભેળસેળ કેવી રીતે પકડવી?",
      "હળદરમાં મેટાનિલ યલો કેમિકલ રંગ કેવી રીતે શોધવો?",
      "અશ્વગંધા અને શિલાજીત અસલી છે કે નકલી તે કેવી રીતે ચકાસવું?",
      "રાઈના તેલમાં આર્જિમોન તેલની ભેળસેળ કેવી રીતે પકડવી?",
    ],
    selectFoodToAnalyze: "ખાદ્ય પદાર્થનો પ્રકાર પસંદ કરો (વૈકલ્પિક):",
    testDifficulty: "સરળતા",
    duration: "સમય",
    close: "બંધ કરો",
    officialLaboratoriesTitle: "ભારતમાં માન્યતા પ્રાપ્ત પ્રયોગશાળાઓ (NABL / FSSAI)",
    officialLaboratoriesDesc: "કાનૂની અને રાસાયણિક પુષ્ટિ માટે નમૂના FSSAI માન્ય અથવા NABL પ્રમાણિત લેબમાં મોકલો.",
    consumerComplaintGuide: "FoSCoS પોર્ટલ પર ગ્રાહક ફરિયાદ કેવી રીતે નોંધાવવી",
    // Ayurvedic
    ayurvedicTab: "🌿 ઔષધીય ગુણ-દોષ અને ફાયદા",
    ayurvedicTitle: "આયુર્વેદિક ઔષધીય ગુણ-દોષ વિશ્લેષણ",
    ayurvedicSubtitle: "ચરકસંહિતા અને ભાવપ્રકાશ નિઘંટુ શાસ્ત્ર અનુસાર રસ, ગુણ, વીર્ય, વિપાક અને વાત-પિત્ત-કફ પ્રભાવ",
    doshaImpact: "ત્રિદોષ પ્રભાવ (વાત, પિત્ત, કફ)",
    viryaPotency: "વીર્ય (તાસીર: ઠંડું / ગરમ)",
    rasaTaste: "રસ (સ્વાદ)",
    gunaQuality: "ગુણ (પ્રકૃતિ)",
    vipakaMetabolic: "વિપાક (પાચન પછીનો સ્વાદ)",
    healthBenefits: "આરોગ્યના મુખ્ય ફાયદાઓ",
    sideEffectsAndPrecautions: "ગેરફાયદા, આડઅસરો અને સાવચેતી",
    whoShouldAvoid: "કોણે ન ખાવું કે ઓછું ખાવું (નિષેધ)",
    aiInstantLookup: "લાઈવ AI ખાદ્ય જ્ઞાનકોશ (૪૦૦+ દેશી વસ્તુઓ)",
    aiInstantLookupDesc: "ભારતની કોઈપણ શાકભાજી, ફળ, કઠોળ, અનાજ, તેલીબિયાં કે ઔષધિનું નામ લખો — AI તરત જ શુદ્ધતા ટેસ્ટ + આયુર્વેદિક ગુણદોષ તૈયાર કરી આપશે!",
    liveGenerating: "AI દ્વારા સંપૂર્ણ શુદ્ધતા ટેસ્ટ અને આયુર્વેદિક માહિતી તૈયાર થઈ રહી છે...",
    instantSearchPrompt: "૪૦૦+ શાકભાજી, ફળ, કઠોળ, અનાજ કે ઔષધિમાંથી શોધો:",
  },
  hi: {
    appName: "आहार इन्फो",
    appTagline: "शुद्ध आहार • Shuddh Aahar",
    heroHeadline: "अपने परिवार के लिए शुद्ध, सुरक्षित और पौष्टिक भोजन सुनिश्चित करें",
    heroSubheadline: "FSSAI DART मानकों पर आधारित वैज्ञानिक घरेलू परीक्षण विधियां, प्रयोगशाला मानक और आयुर्वेदिक औषधीय गुण-दोष विश्लेषण।",
    searchPlaceholder: "कोई भी खाद्य पदार्थ खोजें (उदा. गेहूं, करेला, अरहर दाल, आम, अश्वगंधा, दूध, हल्दी)...",
    categoriesTitle: "खाद्य पदार्थों की सभी श्रेणियां",
    categoriesSubtitle: "त्वरित घरेलू परीक्षण विधियां, हानिकारक मिलावट, लैब जांच और संपूर्ण आयुर्वेदिक गुण-दोष जानने के लिए श्रेणी चुनें।",
    allCategories: "सभी खाद्य उत्पाद",
    categories: {
      vegetables: "🥦 ताजी सब्जियां (करेला, लौकी, परवल...)",
      fruits: "🍎 ताजे फल (आम, केला, अनार, पपीता...)",
      herbs_ayurvedic: "🌿 औषधियां (शिलाजीत, अश्वगंधा, गिलोय...)",
      spices: "✨ मसाले (हल्दी, मिर्च, जीरा, हींग...)",
      dairy: "🥛 दूध और डेयरी (गाय का दूध, घी, पनीर...)",
      grains: "🌾 अनाज (गेहूं, बाजरा, ज्वार, चावल...)",
      pulses: "🥣 दालें व दलहन (अरहर, मूंग, चना, उड़द...)",
      oilseeds: "🌱 तिलहन (तिल, सरसों, मूंगफली, अलसी...)",
      oils_ghee: "🫒 तेल और घी (सरसों का तेल, देसी घी...)",
      dry_fruits: "🥜 मेवे (बादाम, काजू, अखरोट, अंजीर...)",
      honey_sugar: "🍯 शहद और गुड़/चीनी",
      beverages: "☕ पेय पदार्थ (चाय, कॉफी, काढ़ा)",
      other: "🧂 अन्य खाद्य उत्पाद (नमक, वर्क, सूजी)",
    },
    filterAll: "सभी सामग्री",
    viewDetails: "परीक्षण व गुण-दोष देखें",
    testAtHome: "घरेलू त्वरित परीक्षण (FSSAI DART)",
    labTestRequired: "प्रयोगशाला परीक्षण (NABL / FSSAI)",
    pureResult: "शुद्ध नमूने का अपेक्षित परिणाम",
    suspiciousResult: "मिलावट का स्पष्ट संकेत",
    whatCanDetect: "यह टेस्ट क्या पकड़ सकता है",
    whatCannotDetect: "यह टेस्ट क्या नहीं पकड़ सकता",
    householdMaterials: "आवश्यक घरेलू सामग्री",
    stepByStep: "चरण-दर-चरण निर्देश",
    safetyPrecautions: "अति आवश्यक सुरक्षा सावधानियां",
    adulterantsFound: "सामान्य मिलावट और जोखिम",
    healthImpact: "स्वास्थ्य पर दुष्प्रभाव",
    labTestingTitle: "पेशेवर प्रयोगशाला (लैब) सत्यापन",
    labEquipNeeded: "आवश्यक लैब उपकरण और रसायन",
    whereToTest: "मान्यता प्राप्त प्रयोगशालाएं",
    estimatedCost: "अनुमानित परीक्षण शुल्क",
    fssaiRef: "FSSAI मानक संदर्भ",
    sampleSubmission: "नमूना कैसे जमा करें",
    aiAdvisorTab: "AI खाद्य व आयुर्वेद विशेषज्ञ",
    imageUploadTab: "फोटो द्वारा जांच",
    directoryTab: "सेटिंग्स",
    safetyBannerTitle: "उपभोक्ताओं के लिए महत्वपूर्ण सुरक्षा सूचना",
    safetyBannerText: "घरेलू परीक्षण केवल प्रारंभिक संकेत देते हैं। कभी भी केवल घरेलू टेस्ट के आधार पर किसी भोजन को '100% शुद्ध' न मानें। कीटनाशक, भारी धातुएं और सूक्ष्म जीवाणु केवल प्रयोगशाला में ही जांचे जा सकते हैं।",
    emergencyHelpline: "आपातकालीन संपर्क नंबर",
    emergencyTitle: "विषाक्त भोजन या फूड पॉइजनिंग का संदेह?",
    emergencySubtitle: "यदि भोजन करने के बाद किसी को गंभीर उल्टी, पेट में ऐंठन, चक्कर आना या सांस लेने में कठिनाई हो:",
    emergencyPoisonCenter: "राष्ट्रीय विष सूचना केंद्र (AIIMS नई दिल्ली): 1800-116-117 (टोल फ्री, 24/7)",
    emergencyFssai: "FSSAI राष्ट्रीय उपभोक्ता हेल्पलाइन: 1800-112-100",
    emergencyDoctorAdvice: "संदिग्ध भोजन और उसके मूल पैकेट को सुरक्षित रखें और तुरंत नजदीकी अस्पताल में डॉक्टर से संपर्क करें।",
    noResultsFound: "यह खाद्य पदार्थ लोकल सूची में नहीं मिला। आप तुरंत लाइव AI ज्ञानकोश से इसकी पूरी जानकारी प्राप्त कर सकते हैं!",
    askAiAboutThis: "इस खाद्य पदार्थ के बारे में AI से पूछें",
    imageUploadTitle: "खाद्य उत्पाद फोटो निरीक्षण",
    imageUploadDesc: "अपने भोजन, मसाले, तेल या सब्जियों की फोटो अपलोड करें। AI अस्वाभाविक रंग, चमक, तलछट या कृत्रिम पकाने के लक्षणों की जांच करेगा।",
    imageUploadDisclaimer: "अति महत्वपूर्ण सुरक्षा चेतावनी: केवल फोटो देखकर किसी भी खाद्य पदार्थ की रासायनिक शुद्धता की पुष्टि नहीं की जा सकती। यह केवल प्राथमिक निरीक्षण में मदद करता है।",
    uploadButtonText: "भोजन का फोटो चुनें",
    analyzingImage: "AI फोटो का निरीक्षण कर रहा है...",
    imageAnalysisResult: "दृश्य निरीक्षण रिपोर्ट",
    aiChatPlaceholder: "हिंदी में पूछें (उदा. दूध में स्टार्च कैसे पहचानें? करेले के फायदे और नुकसान?)...",
    send: "भेजें",
    quickQuestionsTitle: "अक्सर पूछे जाने वाले प्रश्न:",
    quickQuestions: [
      "दूध में डिटर्जेंट या यूरिया की मिलावट कैसे जांचें?",
      "करेले और लौकी के औषधीय गुण-दोष और किसे नहीं खाना चाहिए?",
      "अरहर दाल में केसरी दाल की मिलावट कैसे पकड़ें?",
      "हल्दी में मेटानिल येलो केमिकल रंग की पहचान कैसे करें?",
      "शिलाजीत और अश्वगंधा असली है या नकली, कैसे जांचें?",
      "सरसों के तेल में आर्जिमोन तेल की मिलावट कैसे पकड़ें?",
    ],
    selectFoodToAnalyze: "खाद्य पदार्थ का प्रकार चुनें (वैकल्पिक):",
    testDifficulty: "कठिनाई स्तर",
    duration: "समय",
    close: "बंद करें",
    officialLaboratoriesTitle: "भारत में मान्यता प्राप्त प्रयोगशालाएं (NABL / FSSAI)",
    officialLaboratoriesDesc: "कानूनी और सटीक रासायनिक पुष्टि के लिए FSSAI अधिसूचित या NABL प्रमाणित प्रयोगशाला में नमूना भेजें।",
    consumerComplaintGuide: "FoSCoS पोर्टल पर उपभोक्ता शिकायत कैसे दर्ज करें",
    // Ayurvedic
    ayurvedicTab: "🌿 औषधीय गुण-दोष व लाभ",
    ayurvedicTitle: "आयुर्वेदिक औषधीय गुण-दोष विश्लेषण",
    ayurvedicSubtitle: "चरक संहिता एवं भावप्रकाश निघण्टु के अनुसार रस, गुण, वीर्य, विपाक व त्रिदोष प्रभाव",
    doshaImpact: "त्रिदोष प्रभाव (वात, पित्त, कफ)",
    viryaPotency: "वीर्य (तासीर: शीतल / उष्ण)",
    rasaTaste: "रस (स्वाद)",
    gunaQuality: "गुण (प्रकृति)",
    vipakaMetabolic: "विपाक (पाचन उपरांत रस)",
    healthBenefits: "स्वास्थ्य के मुख्य लाभ",
    sideEffectsAndPrecautions: "हानि, दुष्प्रभाव व सावधानियां",
    whoShouldAvoid: "किसे नहीं खाना चाहिए (निषेध)",
    aiInstantLookup: "लाइव AI खाद्य ज्ञानकोश (४००+ देसी वस्तुएं)",
    aiInstantLookupDesc: "भारत की किसी भी सब्जी, फल, दाल, अनाज, तिलहन या जड़ी-बूटी का नाम लिखें — AI तुरंत शुद्धता टेस्ट + आयुर्वेदिक गुण-दोष बनाकर देगा!",
    liveGenerating: "AI द्वारा संपूर्ण शुद्धता टेस्ट एवं आयुर्वेदिक जानकारी तैयार की जा रही है...",
    instantSearchPrompt: "४००+ सब्जियों, फलों, दालों, अनाज या औषधियों में से चुनें:",
  },
};
