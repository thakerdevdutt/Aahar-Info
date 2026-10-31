import { HealthBenefitsAndRisks } from '../types';

export const ayurvedicKnowledgeMap: Record<string, HealthBenefitsAndRisks> = {
  milk: {
    ayurvedicProps: {
      rasa: { en: 'Madhura (Sweet)', gu: 'મધુર (ગળ્યો રસ)', hi: 'मधुर (मीठा)' },
      guna: { en: 'Guru (Heavy), Snigdha (Unctuous)', gu: 'ગુરુ (પચવામાં ભારે), સ્નિગ્ધ (ચિકણું)', hi: 'गुरु, स्निग्ध' },
      virya: { en: 'Sheeta (Cooling)', gu: 'શીતળ (ઠંડક આપનાર)', hi: 'शीतल (ठंडा)' },
      vipaka: { en: 'Madhura (Sweet post-digestive)', gu: 'મધુર વિપાક', hi: 'मधुर विपाक' },
      doshaEffect: { en: 'Pacifies Vata & Pitta, Increases Kapha', gu: 'વાત અને પિત્ત શામક, કફ વર્ધક', hi: 'वात और पित्त शामक, कफ वर्धक' },
    },
    benefits: {
      en: ['Nourishes all seven body tissues (Sapta Dhatus)', 'Enhances Ojas (vital immunity)', 'Calms nervous system and promotes sound sleep', 'Natural calcium & high biological value protein'],
      gu: ['શરીરની સાતેય ધાતુઓને પુષ્ટિ આપે છે', 'ઓજસ અને જીવનશક્તિ (રોગપ્રતિકારકતા) વધારે છે', 'અનિદ્રા દૂર કરી મગજને શાંત કરે છે', 'હાડકાં અને દાંત માટે કેલ્શિયમનો સર્વોત્તમ કુદરતી સ્ત્રોત'],
      hi: ['सातों धातुओं का पोषण करता है', 'ओजस और रोग प्रतिरोधक क्षमता बढ़ाता है', 'अनिद्रा दूर कर गहरी नींद लाता है', 'कैल्शियम और उत्तम प्रोटीन का प्राकृतिक स्रोत'],
    },
    precautionsAndSideEffects: {
      en: ['Always boil before consuming', 'Do not consume cold refrigerated milk directly at night', 'Excessive intake during acute cough or congestion worsens phlegm'],
      gu: ['કાચું દૂધ ક્યારેય ન પીવું, હંમેશા ઉકાળીને વાપરવું', 'રાત્રે ફ્રિજનું ખૂબ ઠંડું દૂધ ન પીવું', 'વધુ પડતી ખાંસી કે શરદી હોય ત્યારે દૂધ ઓછું લેવું'],
      hi: ['कच्चा दूध न पिएं, उबालकर ही लें', 'रात में ज्यादा ठंडा दूध न पिएं', 'कफ व खांसी की स्थिति में सीमित सेवन करें'],
    },
    whoShouldAvoid: {
      en: ['Lactose intolerant individuals', 'Severe chronic Kapha congestion / respiratory phlegm', 'People with Mandagni (sluggish digestive fire)'],
      gu: ['લેક્ટોઝ ઈન્ટોલરન્સ વાળા દર્દીઓ', 'અતિશય કફ અને સાયનસથી પીડાતા લોકો', 'મંદાગ્નિ (નબળી પાચન શક્તિ) ધરાવતી વ્યક્તિઓ'],
      hi: ['लैक्टोज इनटोलरेंट व्यक्ति', 'गंभीर कफ और साइनस के मरीज', 'कमजोर पाचन अग्नि वाले लोग'],
    },
  },

  ghee: {
    ayurvedicProps: {
      rasa: { en: 'Madhura (Sweet)', gu: 'મધુર રસ', hi: 'मधुर रस' },
      guna: { en: 'Snigdha (Smooth), Guru (Nourishing), Soumya', gu: 'સ્નિગ્ધ, ગુરુ, સૌમ્ય', hi: 'स्निग्ध, गुरु' },
      virya: { en: 'Sheeta (Cooling)', gu: 'શીતળ (ઠંડી તાસીર)', hi: 'शीतल' },
      vipaka: { en: 'Madhura', gu: 'મધુર વિપાક', hi: 'मधुर विपाक' },
      doshaEffect: { en: 'Supreme Vata & Pitta pacifier; does not aggravate Kapha in moderate doses', gu: 'વાત અને પિત્તનું સર્વોત્તમ શામક (યોગ્ય માત્રામાં કફ વધારતું નથી)', hi: 'वात और पित्त का श्रेष्ठ शामक' },
    },
    benefits: {
      en: ['Medhya (boosts intellect, memory, and cognitive focus)', 'Deepana (kindles digestive fire without increasing acidity)', 'Detoxifying (Visha-hara) and enhances longevity', 'Nourishes joint lubrication and gut microbiome'],
      gu: ['બુદ્ધિ, યાદશક્તિ અને એકાગ્રતા વધારે છે (મેધ્ય રસાયણ)', 'પાચન અગ્નિ પ્રદીપ્ત કરે છે પરંતુ એસિડિટી કરતું નથી', 'શરીરમાંથી ઝેરી તત્વો (ટોક્સિન્સ) બહાર કાઢે છે', 'સાંધામાં ગ્રીસિંગ (લ્યુબ્રિકેશન) જાળવે છે અને આંખોનું તેજ વધારે છે'],
      hi: ['बुद्धि और स्मरण शक्ति बढ़ाता है (मेध्य)', 'पाचन अग्नि को बढ़ाता है बिना पित्त भड़काए', 'जोड़ों में लचीलापन और आंखों की रोशनी बढ़ाता है', 'दीर्घायु और ओजस प्रदान करता है'],
    },
    precautionsAndSideEffects: {
      en: ['Do not consume when not hungry', 'Avoid reheating ghee multiple times at smoking temperatures', 'Never mix equal proportions of honey and ghee by weight (toxic in Ayurveda)'],
      gu: ['ભૂખ ન લાગી હોય ત્યારે ઘી ન ખાવું', 'ઘીને વારંવાર ખૂબ ઊંચા તાપમાને ન બાળવું', 'મધ અને ઘીનું સરખા વજનમાં મિશ્રણ ક્યારેય ન કરવું (આયુર્વેદમાં વિષ સમાન છે)'],
      hi: ['भूख न होने पर सेवन न करें', 'घी और शहद को समान मात्रा में कभी न मिलाएं', 'बार-बार तेज आंच पर न जलाएं'],
    },
    whoShouldAvoid: {
      en: ['Acute jaundice / severe hepatitis', 'Advanced fatty liver grade 2/3', 'Morbid obesity without active physical exertion'],
      gu: ['કમળો કે લીવરની તીવ્ર સોજાવાળી બીમારી ધરાવતા દર્દીઓ', 'ફેટી લિવર ગ્રેડ ૨-૩ ના દર્દીઓએ ખૂબ ઓછી માત્રામાં લેવું', 'કોઈપણ શારીરિક કસરત ન કરતા અતિ સ્થૂળ લોકો'],
      hi: ['तीव्र पीलिया या हेपेटाइटिस', 'गंभीर फैटी लीवर के मरीज', 'अत्यधिक मोटापे से ग्रस्त लोग'],
    },
  },

  turmeric: {
    ayurvedicProps: {
      rasa: { en: 'Tikta (Bitter), Katu (Pungent)', gu: 'તીક્ત (કડવો) અને કટુ (તીખો)', hi: 'तिक्त और कटु' },
      guna: { en: 'Laghu (Light), Ruksha (Dry)', gu: 'લઘુ (હલકું), રૂક્ષ (સૂકું)', hi: 'लघु, रुक्ष' },
      virya: { en: 'Ushna (Heating)', gu: 'ઉષ્ણ (ગરમ તાસીર)', hi: 'उष्ण (गर्म)' },
      vipaka: { en: 'Katu', gu: 'કટુ વિપાક', hi: 'कटु' },
      doshaEffect: { en: 'Balances all three Doshas (especially pacifies Kapha and Vata; Pitta balancing in moderate use)', gu: 'કફ અને વાત શામક, રક્ત દોષ નાશક', hi: 'कफ और वात शामक, रक्त शोधक' },
    },
    benefits: {
      en: ['Potent natural anti-inflammatory & antioxidant', 'Raktashodhaka (cleanses blood and enhances skin complexion)', 'Natural antibacterial and wound healer', 'Protects liver and supports cardiovascular resilience'],
      gu: ['શ્રેષ્ઠ કુદરતી એન્ટિબાયોટિક અને એન્ટી-ઇન્ફ્લેમેટરી', 'લોહી શુદ્ધ કરે છે અને ચામડીના રોગો મટાડે છે', 'રોગપ્રતિકારક શક્તિ વધારે છે અને કફનો નાશ કરે છે', 'લીવરને સુરક્ષિત રાખે છે અને સાંધાનો દુખાવો મટાડે છે'],
      hi: ['शक्तिशाली प्राकृतिक एंटीबायोटिक व रक्तशोधक', 'इम्यूनिटी बढ़ाता है और संक्रमण से बचाता है', 'जोड़ों का दर्द और सूजन कम करता है', 'लीवर को डिटॉक्स करता है'],
    },
    precautionsAndSideEffects: {
      en: ['Excessive raw intake can cause stomach heat and loose bowels', 'Consume with healthy fats (ghee/milk) and black pepper for maximum absorption'],
      gu: ['વધારે પડતી માત્રામાં લેવાથી પિત્ત વધે અને પેટમાં બળતરા થાય', 'હંમેશા દૂધ, ઘી અથવા કાળા મરી સાથે લેવાથી ઉત્તમ શોષણ થાય છે'],
      hi: ['अत्यधिक मात्रा से पेट में जलन हो सकती है', 'दूध या घी के साथ लेना सर्वश्रेष्ठ है'],
    },
    whoShouldAvoid: {
      en: ['Active gallstones / biliary duct obstruction', 'Patients on blood thinning medications (Warfarin)', 'Severe bleeding disorders'],
      gu: ['પિત્તાશયની પથરી (Gallstones) વાળા દર્દીઓ', 'લોહી પાતળું કરવાની દવા લેતા દર્દીઓ', 'અતિશય રક્તસ્ત્રાવની તકલીફ વાળા લોકો'],
      hi: ['पित्ताशय की पथरी के मरीज', 'खून पतला करने की दवा लेने वाले'],
    },
  },

  honey: {
    ayurvedicProps: {
      rasa: { en: 'Madhura (Sweet), Kashaya (Astringent)', gu: 'મધુર અને કષાય (તુરો રસ)', hi: 'मधुर व कषाय' },
      guna: { en: 'Laghu (Light), Ruksha (Dry), Chedana (Scraping)', gu: 'લઘુ (હલકું), રૂક્ષ, છેદન (ચરબી કાપનાર)', hi: 'लघु, रुक्ष, छेदन' },
      virya: { en: 'Sheeta (Cooling in primary nature)', gu: 'શીતળ (પરંતુ કફ નાશક)', hi: 'शीतल' },
      vipaka: { en: 'Katu (Pungent post-digestive)', gu: 'કટુ વિપાક', hi: 'कटु' },
      doshaEffect: { en: 'Pacifies Kapha & Pitta; supreme Yogavahi (carrier substance)', gu: 'કફ અને પિત્ત શામક, ઉત્તમ યોગવાહી (ઔષધિ વાહક)', hi: 'कफ-पित्त शामक, योगवाही' },
    },
    benefits: {
      en: ['Lekhana (scrapes excess fat and supports healthy weight loss)', 'Relieves chronic dry and wet cough', 'Accelerates ulcer and skin wound regeneration', 'Strengthens vocal cords and heart muscles'],
      gu: ['ચરબી કાપીને વજન ઘટાડવામાં સહાયક (લેખન ગુણ)', 'જૂની ખાંસી, ગળાની ખારાશ અને કફ મટાડે છે', 'ઘા અને ચાંદાં ઝડપથી રુઝવે છે', 'સ્વર સારો કરે છે અને હૃદયને બળ આપે છે'],
      hi: ['अतिरिक्त चर्बी घटाने में सहायक (छेदन गुण)', 'खांसी और गले की खराश में रामबाण', 'घाव जल्दी भरता है', 'आवाज साफ करता है'],
    },
    precautionsAndSideEffects: {
      en: ['NEVER heat honey or cook with boiling liquids (creates Ama / toxic sticky metabolites)', 'Never mix with equal ratio of ghee'],
      gu: ['મધને ક્યારેય ગરમ ન કરવું કે ઉકળતા પાણી/ચામાં ન નાખવું (આયુર્વેદ અનુસાર ઝેર બને છે)', 'સરખી માત્રામાં ઘી સાથે ક્યારેય ન લેવું'],
      hi: ['शहद को कभी भी गर्म न करें (विषाक्त बनता है)', 'घी के साथ बराबर मात्रा में न लें'],
    },
    whoShouldAvoid: {
      en: ['Infants under 12 months (risk of infantile botulism)', 'Uncontrolled diabetic patients without medical titration'],
      gu: ['૧ વર્ષથી નાનાં બાળકોને ન આપવું (બોટ્યુલિઝમનું જોખમ)', 'અનિયંત્રિત ડાયાબિટીસ ધરાવતા દર્દીઓએ પરેજી રાખવી'],
      hi: ['1 वर्ष से छोटे बच्चे (बोटुलिज़्म का खतरा)', 'अनियंत्रित डायबिटीज के मरीज'],
    },
  },

  mustard_oil: {
    ayurvedicProps: {
      rasa: { en: 'Katu (Pungent), Tikta (Bitter)', gu: 'કટુ (તીખો) અને તીક્ત (કડવો)', hi: 'कटु और तिक्त' },
      guna: { en: 'Tikshna (Sharp), Laghu (Light)', gu: 'તીક્ષ્ણ, લઘુ, સૂક્ષ્મ', hi: 'तीक्ष्ण, लघु' },
      virya: { en: 'Ushna (Hot)', gu: 'ઉષ્ણ (ગરમ તાસીર)', hi: 'उष्ण' },
      vipaka: { en: 'Katu', gu: 'કટુ વિપાક', hi: 'कटु' },
      doshaEffect: { en: 'Pacifies Kapha and Vata; sharply increases Pitta', gu: 'કફ અને વાત શામક, પિત્ત વર્ધક', hi: 'कफ और वात शामક, पित्त वर्धक' },
    },
    benefits: {
      en: ['Stimulates digestion and appetite', 'Exceptional massage medium for arthritic joints and cold limbs', 'Natural antifungal and antimicrobial protection for hair & skin', 'Rich in heart-friendly MUFA fats'],
      gu: ['ભૂખ અને પાચન શક્તિ વધારે છે', 'સાંધાના વા, સોજા અને સ્નાયુના દુખાવામાં માલિશ માટે શ્રેષ્ઠ', 'ચામડી અને વાળના ફંગલ ઇન્ફેક્શન સામે રક્ષણ', 'હૃદય માટે ગુણકારી મોનોઅનસેચ્યુરેટેડ ફેટ'],
      hi: ['पाचन व भूख बढ़ाता है', 'जोड़ों के दर्द में मालिश के लिए सर्वश्रेष्ठ तेल', 'त्वचा व बालों के लिए एंटीफंगल गुण', 'हृदय के लिए लाभकारी फैट्स'],
    },
    precautionsAndSideEffects: {
      en: ['Raw consumption in high amounts irritates mucosal lining', 'Argemone adulteration causes epidemic dropsy—insist on cold pressed purity'],
      gu: ['વધારે પડતું ખાવાથી પિત્ત વધે અને એસિડિટી થાય', 'આર્જિમોનની ભેળસેળથી ડ્રોપ્સી રોગ થાય છે માટે કચ્છી ઘાણી શુદ્ધ તેલ જ વાપરવું'],
      hi: ['अधिक सेवन से पित्त भड़क सकता है', 'आर्जिमोन मिलावट से ड्रॉप्सी का खतरा'],
    },
    whoShouldAvoid: {
      en: ['People suffering from severe hyperacidity, gastritis, or peptic ulcers', 'Excessive Pitta heat constitutions'],
      gu: ['તીવ્ર એસિડિટી, પેટમાં અલ્સર કે ચાંદાં વાળા લોકો', 'અતિશય ગરમ પિત્ત પ્રકૃતિ ધરાવતા દર્દીઓ'],
      hi: ['गंभीर एसिडिटी या पेट में अल्सर वाले', 'अत्यधिक पित्त प्रकृति वाले लोग'],
    },
  },

  ashwagandha: {
    ayurvedicProps: {
      rasa: { en: 'Tikta (Bitter), Kashaya (Astringent), Madhura (Sweet)', gu: 'તીક્ત, કષાય અને મધુર', hi: 'तिक्त, कषाय, मधुर' },
      guna: { en: 'Guru (Heavy), Snigdha (Unctuous)', gu: 'ગુરુ, સ્નિગ્ધ, બળ્ય', hi: 'गुरु, स्निग्ध' },
      virya: { en: 'Ushna (Heating)', gu: 'ઉષ્ણ (ગરમ તાસીર)', hi: 'उष्ण' },
      vipaka: { en: 'Madhura', gu: 'મધુર વિપાક', hi: 'मधुर' },
      doshaEffect: { en: 'Potent Vata and Kapha pacifier; Balya and Rasayana', gu: 'વાત અને કફ શામક, ઉત્તમ રસાયણ અને બળવર્ધક', hi: 'वात और कफ शामક, परम रसायन' },
    },
    benefits: {
      en: ['Relieves chronic stress, anxiety, and lowers cortisol', 'Rejuvenates nervous system and promotes restorative sleep', 'Increases muscular strength, stamina, and vitality', 'Supports thyroid and hormonal harmony'],
      gu: ['માનસિક તણાવ, ચિંતા અને ડીપ્રેશન દૂર કરે છે', 'શારીરિક નબળાઈ મટાડી ઘોડા જેવી તાકાત આપે છે (અશ્વગંધા)', 'અનિદ્રા મટાડી ગાઢ ઊંઘ લાવે છે', 'સાંધાના દુખાવા અને વાત રોગમાં અક્સીર'],
      hi: ['तनाव और चिंता दूर करता है', 'शारीरिक कमजोरी और थकान मिटाता है', 'गहरी नींद लाता है और दिमाग तेज करता है', 'जोड़ों के दर्द व वात रोगों में लाभकारी'],
    },
    precautionsAndSideEffects: {
      en: ['Take with warm milk or ghee to buffer heat', 'Excessive doses without exercise may cause digestive heaviness'],
      gu: ['ગરમ તાસીર હોવાથી દૂધ કે ઘી સાથે જ લેવું', 'વગર કસરતે વધુ લેવાથી ભારેપણું લાગે'],
      hi: ['दूध या घी के साथ लें ताकि गर्मी न करे'],
    },
    whoShouldAvoid: {
      en: ['Pregnant women (uterine stimulants)', 'People with acute gastritis or hyperthyroidism without supervision'],
      gu: ['ગર્ભવતી મહિલાઓએ ન લેવું', 'અતિશય પિત્ત, ગરમી કે અલ્સર ધરાવતા લોકો'],
      hi: ['गर्भवती महिलाएं', 'अत्यधिक एसिडिटी व अल्सर के मरीज'],
    },
  },

  shilajit: {
    ayurvedicProps: {
      rasa: { en: 'Tikta, Katu, Kashaya, Lavana', gu: 'તીક્ત, કટુ, કષાય અને લવણ રસ', hi: 'तिक्त, कटु, कषाय' },
      guna: { en: 'Guru, Ruksha, Chedi', gu: 'ગુરુ, રૂક્ષ, છેદન', hi: 'गुरु, रुक्ष' },
      virya: { en: 'Samashitoshna (Mildly Heating)', gu: 'સમશીતોષ્ણ (જરા ઉષ્ણ)', hi: 'समशीतोष्ण' },
      vipaka: { en: 'Katu', gu: 'કટુ વિપાક', hi: 'कटु' },
      doshaEffect: { en: 'Tridosha balancing, especially destroys stubborn Kapha and Vata', gu: 'ત્રિદોષ શામક, ખાસ કરીને કફ અને વાત નાશક', hi: 'त्रिदोष शामક, कफ-वात नाशक' },
    },
    benefits: {
      en: ['Fulvic acid powerhouse: enhances mitochondrial cellular energy', 'Reverses fatigue, enhances stamina, and supports anti-aging', 'Supports healthy testosterone and mineral absorption', 'Assists in urinary and diabetes management (Pramehahara)'],
      gu: ['શરીરના કોષોને ત્વરિત ઉર્જા અને સ્ટેમિના આપે છે', 'થાક, અશક્તિ અને ઘડપણના લક્ષણો દૂર કરે છે (રસાયણ)', 'ડાયાબિટીસ અને પેશાબના રોગોમાં અત્યંત ગુણકારી', 'હાડકાં અને સ્નાયુઓને મજબૂત બનાવે છે'],
      hi: ['सेल्युलर एनर्जी और स्टैमिना बढ़ाता है', 'थकान दूर करता है और एंटी-एजिंग गुण रखता है', 'डायबिटीज व यूरिनरी विकारों में लाभकारी'],
    },
    precautionsAndSideEffects: {
      en: ['Raw, unpurified Shilajit contains hazardous heavy metals—only use purified Shodhita Shilajit', 'Stay hydrated'],
      gu: ['અશુદ્ધ શિલાજીતમાં ઝેરી હેવી મેટલ્સ હોય છે; હંમેશા લેબ-ટેસ્ટેડ શુદ્ધ શિલાજીત જ લેવું', 'પૂરતું પાણી પીવું'],
      hi: ['कच्चा शिलाजीत न लें, शोधित शुद्ध ही उपयोग करें'],
    },
    whoShouldAvoid: {
      en: ['High uric acid / gout (increases iron absorption)', 'Pregnant or nursing mothers'],
      gu: ['યુરિક એસિડ કે ગાઉટ વાળા દર્દીઓ', 'ગર્ભવતી કે સ્તનપાન કરાવતી માતાઓ'],
      hi: ['यूरिक एसिड या गाउट के मरीज', 'गर्भवती महिलाएं'],
    },
  },

  triphala: {
    ayurvedicProps: {
      rasa: { en: 'Pancha-rasa (Contains 5 tastes except salty)', gu: 'પંચરસ (મીઠા સિવાયના પાંચેય રસ)', hi: 'पंचरस' },
      guna: { en: 'Laghu (Light), Ruksha (Dry)', gu: 'લઘુ (હલકું), રૂક્ષ', hi: 'लघु, रुक्ष' },
      virya: { en: 'Anushnasheeta (Balanced potency)', gu: 'સમશીતોષ્ણ (ન ગરમ ન ઠંડું)', hi: 'समशीतोष्ण' },
      vipaka: { en: 'Madhura', gu: 'મધુર વિપાક', hi: 'मधुर' },
      doshaEffect: { en: 'Master balancer of Vata, Pitta, and Kapha', gu: 'ત્રણેય દોષો (વાત, પિત્ત, કફ) નું પૂર્ણ સંતુલનકર્તા', hi: 'तीनों दोषों का संतुलनकर्ता' },
    },
    benefits: {
      en: ['Gentle colon cleanser without causing bowel dependency', 'Chakshushya (profound tonic for eyesight preservation)', 'Rich in bioavailable Vitamin C from Amla', 'Detoxifies gut, liver, and skin tissues'],
      gu: ['આંતરડા સાફ કરી જૂની કબજિયાત જડમૂળથી મટાડે છે', 'આંખોનું તેજ વધારે છે (ચક્ષુષ્ય રસાયણ)', 'આમળાંને કારણે ભરપૂર કુદરતી વિટામિન C પૂરું પાડે છે', 'લીવર અને ચામડીના રોગોમાં લાભકારી'],
      hi: ['कब्ज दूर कर पेट साफ करता है', 'आंखों की रोशनी के लिए उत्तम (चक्षुष्य)', 'प्राकृतिक विटामिन C से भरपूर', 'शरीर से टॉक्सिन्स बाहर निकालता है'],
    },
    precautionsAndSideEffects: {
      en: ['Do not take during acute watery diarrhea or dysentery', 'Take with warm water at bedtime'],
      gu: ['ઝાડા કે મરડો થયો હોય ત્યારે ન લેવું', 'રાત્રે સૂતી વખતે નવશેકા ગરમ પાણી સાથે લેવું'],
      hi: ['दस्त या पेचिश में न लें', 'रात को गुनगुने पानी से लें'],
    },
    whoShouldAvoid: {
      en: ['Pregnancy (stimulates downward peristalsis)', 'Severe dehydration'],
      gu: ['ગર્ભાવસ્થા દરમિયાન ન લેવું', 'અતિશય ડિહાઇડ્રેશન થયેલ દર્દીઓ'],
      hi: ['गर्भावस्था के दौरान', 'अत्यधिक डिहाइड्रेशन में'],
    },
  },

  mango: {
    ayurvedicProps: {
      rasa: { en: 'Ripe: Madhura; Raw: Amla, Kashaya', gu: 'પાકી કેરી: મધુર; કાચી કેરી: અમ્લ (ખાટો), કષાય', hi: 'पका: मधुर; कच्चा: अम्ल' },
      guna: { en: 'Guru, Snigdha (Ripe)', gu: 'ગુરુ, સ્નિગ્ધ (પાકી કેરી)', hi: 'गुरु, स्निग्ध' },
      virya: { en: 'Ripe: Sheeta (Cooling); Raw: Ushna (Heating)', gu: 'પાકી કેરી: શીતળ; કાચી કેરી: ઉષ્ણ', hi: 'पका: शीतल; कच्चा: उष्ण' },
      vipaka: { en: 'Madhura (Ripe)', gu: 'મધુર વિપાક', hi: 'मधुर' },
      doshaEffect: { en: 'Ripe: Pacifies Vata & Pitta, Increases Kapha; Raw: Aggravates Pitta & Rakta', gu: 'પાકી કેરી વાત-પિત્ત શામક અને બળવર્ધક; કાચી કેરી પિત્ત વધારનાર', hi: 'पका आम वात-पित्त शामक; कच्चा पित्त वर्धक' },
    },
    benefits: {
      en: ['High in Vitamin A, protecting ocular retina and vision', 'Provides enzymes that facilitate digestion', 'Boosts cellular energy and weight gain in frail individuals', 'Natural electrolytes during hot summers'],
      gu: ['વિટામિન A થી ભરપૂર, આંખોની રોશની જાળવે છે', 'પાચન ઉત્સેચકો પૂરા પાડી ભૂખ વધારે છે', 'દૂબળા-પાતળા લોકોને વજન અને તાકાત વધારવામાં મદદરૂપ', 'ગરમીમાં શરીરને ઉર્જા આપે છે'],
      hi: ['विटामिन A से भरपूर, आंखों के लिए वरदान', 'पाचन सुधारता है और शक्ति बढ़ाता है', 'कमजोरी दूर कर वजन बढ़ाने में सहायक'],
    },
    precautionsAndSideEffects: {
      en: ['Always soak mangoes in water for 1-2 hours to remove surface latex and field heat', 'Artificially ripened carbide mangoes cause oral ulcers and gut burns'],
      gu: ['કેરી ખાતા પહેલાં ૧-૨ કલાક પાણીમાં પલાળી રાખવી જેથી તેની ગરમી દૂર થાય', 'કાર્બાઇડથી પકવેલી કેરીથી મોંમાં ચાંદાં પડે છે માટે કુદરતી પાકેલી જ ખાવી'],
      hi: ['खाने से पहले 1-2 घंटे पानी में भिगोएं', 'कार्बाइड से पके आमों से बचें'],
    },
    whoShouldAvoid: {
      en: ['Uncontrolled diabetes (high glycemic spike)', 'Severe acute skin furuncles/boils'],
      gu: ['અનિયંત્રિત ડાયાબિટીસ વાળા દર્દીઓએ ઓછી ખાવી', 'શરીર પર ગુમડાં કે ફોડલીઓ થઈ હોય ત્યારે'],
      hi: ['अनियंत्रित डायबिटीज के मरीज', 'गंभीर फोड़े-फुंसी होने पर'],
    },
  },

  watermelon: {
    ayurvedicProps: {
      rasa: { en: 'Madhura (Sweet)', gu: 'મધુર (મીઠો રસ)', hi: 'मधुर' },
      guna: { en: 'Laghu (Light), Snigdha', gu: 'લઘુ, સ્નિગ્ધ, જલીય', hi: 'लघु, स्निग्ध' },
      virya: { en: 'Ati-Sheeta (Extremely Cooling)', gu: 'અતિ શીતળ (ખૂબ ઠંડી તાસીર)', hi: 'अति शीतल' },
      vipaka: { en: 'Madhura', gu: 'મધુર વિપાક', hi: 'मधुर' },
      doshaEffect: { en: 'Subdues intense Pitta, quenches thirst (Trishna), relieves burning sensation (Daha)', gu: 'તીવ્ર પિત્ત અને દાહ (બળતરા) શામક, તરસ છીપાવનાર', hi: 'पित्त व जलन शामक' },
    },
    benefits: {
      en: ['92% water content prevents summer heatstroke and dehydration', 'Flushes kidneys and supports urinary tract cleanliness', 'Rich in lycopene protecting cardiovascular cells', 'Calms inner body temperature during scorching heat'],
      gu: ['ઉનાળામાં લૂ અને ડિહાઇડ્રેશનથી સંપૂર્ણ રક્ષણ આપે છે', 'પેશાબની બળતરા મટાડે છે અને કિડની સાફ કરે છે (મૂત્રલ)', 'લાયકોપીન અને એન્ટીઓકિસડન્ટથી ભરપૂર', 'શરીરની આંતરિક ગરમી શાંત કરે છે'],
      hi: ['डिहाइड्रेशन और लू से बचाता है', 'किडनी को डिटॉक्स करता है व पेशाब की जलन मिटाता है', 'शरीर को ठंडक देता है'],
    },
    precautionsAndSideEffects: {
      en: ['Never drink water immediately after eating watermelon (induces diarrhea)', 'Do not consume cold watermelon at night'],
      gu: ['તરબૂચ ખાધા પછી તરત પાણી ન પીવું (ઝાડા કે અપચો થઈ શકે)', 'રાત્રે તરબૂચ ક્યારેય ન ખાવું'],
      hi: ['तरबूज खाने के तुरंत बाद पानी न पिएं', 'रात में न खाएं'],
    },
    whoShouldAvoid: {
      en: ['People suffering from asthma, sinus, or productive cold cough', 'Severe digestive Mandagni'],
      gu: ['અસ્થમા, કફ, સાયનસ અને શરદી વાળા દર્દીઓ', 'અપચો અને મંદાગ્નિ વાળી વ્યક્તિઓ'],
      hi: ['अस्थमा, खांसी और जुकाम के मरीज'],
    },
  },

  banana: {
    ayurvedicProps: {
      rasa: { en: 'Madhura (Sweet), Kashaya (Astringent)', gu: 'મધુર અને કષાય રસ', hi: 'मधुर व कषाय' },
      guna: { en: 'Guru (Heavy), Snigdha (Unctuous)', gu: 'ગુરુ (ભારે), સ્નિગ્ધ', hi: 'गुरु, स्निग्ध' },
      virya: { en: 'Sheeta (Cooling)', gu: 'શીતળ (ઠંડક આપનાર)', hi: 'शीतल' },
      vipaka: { en: 'Madhura', gu: 'મધુર વિપાક', hi: 'मधुर' },
      doshaEffect: { en: 'Pacifies Vata & Pitta, Increases Kapha; enhances bodily strength (Mamsavardhaka)', gu: 'વાત અને પિત્ત શામક, કફ વર્ધક, માંસપેશીઓ મજબૂત કરનાર', hi: 'वात-पित्त शामक, कफ वर्धक' },
    },
    benefits: {
      en: ['Exceptional potassium source preventing muscle cramping', 'Creates a protective alkaline coating over stomach lining (relieves acidity)', 'Provides instant sustained workout energy', 'Supports healthy gut microflora with pectin'],
      gu: ['પોટેશિયમથી ભરપૂર, સ્નાયુઓની નબળાઈ અને ક્રેમ્પ્સ અટકાવે છે', 'પેટમાં એસિડિટી અને બળતરા સામે રક્ષણાત્મક સ્તર બનાવે છે', 'ત્વરિત કુદરતી ઉર્જા આપે છે', 'પાચનતંત્રના સારા બેક્ટેરિયા વધારે છે'],
      hi: ['पोटेशियम से भरपूर, कमजोरी दूर करता है', 'एसिडिटी में तुरंत राहत देता है', 'तुरंत ऊर्जा प्रदान करता है'],
    },
    precautionsAndSideEffects: {
      en: ['Avoid eating raw unripe bananas in large amounts (causes constipation)', 'Do not eat chilled bananas during cold season or late evenings'],
      gu: ['કાચાં કેળાં વધારે ખાવાથી કબજિયાત થાય; પાકાં જ ખાવાં', 'સાંજે કે રાત્રે કેળાં ન ખાવાં'],
      hi: ['रात में या सर्दी-खांसी में न खाएं'],
    },
    whoShouldAvoid: {
      en: ['Chronic bronchitis / active wheezing', 'Patients with hyperkalemia or advanced renal filtration impairment'],
      gu: ['દમ, શ્વાસ અને જૂની ખાંસી વાળા દર્દીઓ', 'હાઈ પોટેશિયમ કે ક્રોનિક કિડનીના દર્દીઓ'],
      hi: ['दमा और कफ के मरीज', 'किडनी रोग (हाई पोटेशियम वाले)'],
    },
  },

  pointed_gourd: {
    ayurvedicProps: {
      rasa: { en: 'Tikta (Bitter), Madhura (Sweet)', gu: 'તીક્ત (કડવો) અને મધુર', hi: 'तिक्त, मधुर' },
      guna: { en: 'Laghu (Light to digest), Snigdha', gu: 'લઘુ (હલકું), સ્નિગ્ધ', hi: 'लघु, स्निग्ध' },
      virya: { en: 'Ushna (Mildly warming)', gu: 'ઉષ્ણ (કફ-પિત્ત શામક)', hi: 'उष्ण' },
      vipaka: { en: 'Katu', gu: 'કટુ વિપાક', hi: 'कटु' },
      doshaEffect: { en: 'Patola is revered as one of the best vegetables: Kapha-Pitta pacifying, Raktashodhaka', gu: 'પરવળ (પટોલ) શાકભાજીમાં શ્રેષ્ઠ ઔષધ છે: કફ-પિત્ત શામક, રક્તશુદ્ધિકારક', hi: 'कफ-पित्त शामक, रक्तशोधक' },
    },
    benefits: {
      en: ['Charaka Samhita prescribes Patola for liver detoxification and skin disorders', 'Purifies blood and clears stubborn boils and acne', 'Promotes digestive enzymes without bloating', 'Supports blood sugar and weight control'],
      gu: ['ચરકસંહિતા અનુસાર લીવર અને ચામડીના રોગો માટે સર્વોત્તમ શાકભાજી', 'લોહી શુદ્ધ કરે છે અને ખીલ-ધાબળા મટાડે છે', 'ગેસ કર્યા વગર પાચન સુધારે છે', 'ડાયાબિટીસ અને વજન નિયંત્રણમાં ઉત્તમ'],
      hi: ['लीवर को डिटॉक्स करता है', 'खून साफ करता है और चर्म रोगों में लाभकारी', 'पाचन के लिए अत्यंत हल्का व उत्तम'],
    },
    precautionsAndSideEffects: {
      en: ['Beware of artificial malachite green or copper dye used to make parwal shiny green', 'Cook with mild spices'],
      gu: ['પરવળને લીલાં રાખવા કેમિકલ રંગ (કોપર સલ્ફેટ) ચોપડવામાં આવે છે, ધોઈને જ વાપરવાં'],
      hi: ['नकली हरे रंग (केमिकल) से रंगे परवल से बचें'],
    },
    whoShouldAvoid: {
      en: ['Safe for almost all constitutions; eat cooked rather than raw'],
      gu: ['દરેક માટે અત્યંત પથ્ય અને ગુણકારી શાકભાજી છે; કોઈ નિષેધ નથી'],
      hi: ['सभी के लिए पथ्य व सुरक्षित'],
    },
  },

  toor_dal: {
    ayurvedicProps: {
      rasa: { en: 'Kashaya (Astringent), Madhura (Sweet)', gu: 'કષાય (તુરો) અને મધુર રસ', hi: 'कषाय और मधुर' },
      guna: { en: 'Laghu (Light), Ruksha (Dry), Grahi', gu: 'લઘુ, રૂક્ષ, ગ્રાહી', hi: 'लघु, रुक्ष' },
      virya: { en: 'Sheeta (Cooling)', gu: 'શીતળ (ઠંડી તાસીર)', hi: 'शीतल' },
      vipaka: { en: 'Katu', gu: 'કટુ વિપાક', hi: 'कटु' },
      doshaEffect: { en: 'Pacifies Pitta and Kapha, but increases Vata (can cause gas if unseasoned)', gu: 'પિત્ત અને કફ શામક, પરંતુ વાત વર્ધક (હિંગ-ઘી વગર ગેસ કરે)', hi: 'पित्त-कफ शामક, वात वर्धक' },
    },
    benefits: {
      en: ['Dense source of plant protein and dietary fiber', 'Abundant folic acid supporting red blood cell formation', 'Maintains muscle mass and repair', 'Supports stable metabolic satiety'],
      gu: ['શ્રેષ્ઠ વનસ્પતિ પ્રોટીન અને ફાઈબરનો સ્ત્રોત', 'ફોલિક એસિડ અને આયર્નથી ભરપૂર, રક્તકણો વધારે છે', 'સ્નાયુઓને પુષ્ટિ આપે છે', 'રોજિંદા આહારનું મુખ્ય પૌષ્ટિક કઠોળ'],
      hi: ['प्रोटीन और फाइबर का मुख्य स्रोत', 'खून बढ़ाने और कमजोरी दूर करने में सहायक', 'दैनिक आहार की श्रेष्ठ दाल'],
    },
    precautionsAndSideEffects: {
      en: ['Always temper with Hing (asafoetida), Jeera, and Ghee to neutralize Vata gas', 'Beware of polished Kesari dal (Lathyrus) adulteration which causes paralysis'],
      gu: ['હંમેશા હિંગ, જીરું અને ઘીનો વઘાર કરીને જ રાંધવી જેથી ગેસ ન થાય', 'કેસરી દાળની ભેળસેળથી લકવા (લેથાયરિઝમ) નું જોખમ રહે છે'],
      hi: ['गैस न बने इसलिए हींग व जीरे का छौंक जरूर लगाएं', 'केसरी दाल की मिलावट से बचें'],
    },
    whoShouldAvoid: {
      en: ['High uric acid / gout patients (elevates purines)', 'Severe chronic flatulence without digestive spices'],
      gu: ['યુરિક એસિડ અને સંધિવા (Gout) વાળા દર્દીઓએ ઓછી ખાવી', 'અતિશય ગેસ-વાયુની તકલીફ વાળા લોકો'],
      hi: ['यूरिक एसिड व गठिया के मरीज'],
    },
  },

  rice: {
    ayurvedicProps: {
      rasa: { en: 'Madhura (Sweet)', gu: 'મધુર (ગળ્યો રસ)', hi: 'मधुर' },
      guna: { en: 'Laghu (when aged 1 year), Snigdha', gu: 'લઘુ (જૂના ચોખા), સ્નિગ્ધ', hi: 'लघु (पुराना चावल), स्निग्ध' },
      virya: { en: 'Sheeta (Cooling)', gu: 'શીતળ (ઠંડક આપનાર)', hi: 'शीतल' },
      vipaka: { en: 'Madhura', gu: 'મધુર વિપાક', hi: 'मधુર' },
      doshaEffect: { en: 'Pacifies Vata & Pitta; balances bodily fluids (Tridoshahara when aged 1 year)', gu: 'વાત અને પિત્ત શામક, સુપાચ્ય (જૂના ચોખા ત્રિદોષ શામક)', hi: 'वात और पित्त शामक' },
    },
    benefits: {
      en: ['Gentlest staple for stomach lining, easily digested', 'Rice kanji (Peya) restores digestive fire after fever and illness', 'Hypoallergenic source of clean complex carbohydrates', 'Moong-rice Khichdi is revered as supreme Ayurvedic healing meal'],
      gu: ['પેટ માટે સૌથી હળવો અને સુપાચ્ય આહાર', 'તાવ કે માંદગી પછી મગની દાળ અને ચોખાની ખીચડી શ્રેષ્ઠ ઔષધિ છે', 'શરીરને તાત્કાલિક સ્વચ્છ ઉર્જા પૂરી પાડે છે', 'એસિડિટી અને બળતરા શાંત કરે છે'],
      hi: ['पेट के लिए सबसे सुपाच्य और हल्का अनाज', 'मूंग दाल और चावल की खिचड़ी सर्वोत्तम आहार है', 'एसिडिटी व पेट की जलन शांत करता है'],
    },
    precautionsAndSideEffects: {
      en: ['Newly harvested rice is heavy and Kapha-forming; 1-year aged rice is light and medicinal', 'Ultra-polished white rice strips Vitamin B1 (thiamine)'],
      gu: ['નવા ચોખા પચવામાં ભારે અને કફ કરનાર હોય છે; ૧ વર્ષ જૂના ચોખા જ ઉત્તમ છે', 'વધારે પોલિશ કરેલા ચોખામાં વિટામિન B1 નષ્ટ થઈ જાય છે'],
      hi: ['पुराना चावल पचने में हल्का होता है', 'ज्यादा पॉलिश वाले चावल के पोषक तत्व नष्ट हो जाते हैं'],
    },
    whoShouldAvoid: {
      en: ['Severe uncontrolled diabetes (high glycemic index in white rice)', 'Severe metabolic obesity (prefer brown or hand-pounded rice)'],
      gu: ['અનિયંત્રિત ડાયાબિટીસ વાળા દર્દીઓએ ઓછો ખાવો અથવા બ્રાઉન રાઈસ વાપરવા', 'સ્થૂળતા વાળા લોકોએ ઓછો લેવો'],
      hi: ['अनियंत्रित डायबिटीज वाले सीमित मात्रा में लें'],
    },
  },

  tea_leaves: {
    ayurvedicProps: {
      rasa: { en: 'Kashaya (Astringent), Tikta (Bitter)', gu: 'કષાય (તુરો) અને તીક્ત (કડવો)', hi: 'कषाय और तिक्त' },
      guna: { en: 'Laghu (Light), Ruksha (Drying)', gu: 'લઘુ, રૂક્ષ', hi: 'लघु, रुक्ष' },
      virya: { en: 'Ushna (Heating)', gu: 'ઉષ્ણ (ગરમ તાસીર)', hi: 'उष्ण' },
      vipaka: { en: 'Katu', gu: 'કટુ વિપાક', hi: 'कटु' },
      doshaEffect: { en: 'Reduces Kapha temporarily; aggravates Pitta and Vata with excessive intake', gu: 'કફ શામક, પરંતુ વધુ પીવાથી પિત્ત અને વાત વર્ધક', hi: 'कफ शामક, पित्त-वात वर्धक' },
    },
    benefits: {
      en: ['Contains polyphenol antioxidants fighting oxidative stress', 'Enhances mental alertness and dispels drowsiness', 'Stimulates gentle thermogenesis'],
      gu: ['પોલીફીનોલ એન્ટીઓકિસડન્ટથી ભરપૂર', 'તાજગી લાવે છે અને સુસ્તી-ઊંઘ દૂર કરે છે', 'માનસિક સતર્કતા વધારે છે'],
      hi: ['एंटीऑक्सीडेंट्स से भरपूर', 'आलस्य दूर कर चुस्ती लाता है'],
    },
    precautionsAndSideEffects: {
      en: ['Never drink strong tea on an empty stomach (causes acid erosion)', 'Do not consume more than 2-3 small cups daily', 'Avoid reheating old brewed tea'],
      gu: ['ખાલી પેટે ક્યારેય ચા ન પીવી (એસિડિટી અને અલ્સર થાય છે)', 'દિવસમાં ૨-૩ કપથી વધુ ન પીવી', 'ઉકાળીને રાખેલી વાસી ચા ફરી ગરમ કરીને ન પીવી'],
      hi: ['खाली पेट चाय कभी न पिएं (एसिडिटी होती है)', 'दिन में 2 कप से ज्यादा न पिएं'],
    },
    whoShouldAvoid: {
      en: ['People with chronic insomnia, peptic ulcers, hyperacidity, and iron-deficiency anemia'],
      gu: ['અનિદ્રા, જૂની એસિડિટી, પેટમાં અલ્સર અને એનિમિયા (લોહીની કમી) વાળા લોકો'],
      hi: ['अनिद्रा, एसिडिटी, अल्सर और खून की कमी वाले'],
    },
  },
};
