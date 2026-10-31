import { FoodItem } from '../types';

export const extraFoodItems: FoodItem[] = [
  // --- GRAINS (અનાજ) ---
  {
    id: 'wheat',
    categoryId: 'grains',
    name: {
      en: 'Whole Wheat & Atta',
      gu: 'આખા ઘઉં અને ઘઉંનો લોટ',
      hi: 'गेहूं और गेहूं का आटा',
    },
    subtitle: {
      en: 'Daily staple susceptible to maida mixing, chalk powder, and fungal ergot contamination',
      gu: 'મેંદો, ચોક પાવડર અને અર્ગટ ફૂગની ભેળસેળથી દૂષિત થતો રોજિંદો આહાર',
      hi: 'मैदा, चॉक पाउडर और अरगट फंगस की मिलावट का शिकार होने वाला मुख्य अनाज',
    },
    alternateNames: ['wheat', 'atta', 'gehu', 'ghav', 'ghau', 'ઘઉં', 'લોટ', 'गेहूं', 'आटा'],
    icon: '🌾',
    riskSeverity: 'High',
    overview: {
      en: 'Wheat flour is widely used for rotis and bread. Adulterants include cheap maida, chalk, boric acid, and dangerous poisonous fungus (Ergot).',
      gu: 'ઘઉંના લોટમાં વજન વધારવા માટે ચોક પાવડર, સસ્તો મેંદો અને અર્ગટ નામની ઝેરી કાળી ફૂગની ભેળસેળ જોવા મળે છે.',
      hi: 'गेहूं के आटे में वजन बढ़ाने के लिए चॉक पाउडर और मैदा मिलाया जाता है, साथ ही इसमें अरगट नामक जहरीला फंगस भी हो सकता है।',
    },
    adulterants: [
      {
        name: { en: 'Chalk Powder & Boric Acid', gu: 'ચોક પાવડર અને બોરિક એસિડ', hi: 'चॉक पाउडर और बोरिक एसिड' },
        riskLevel: 'High',
        description: {
          en: 'Added to increase weight and whiteness of the flour.',
          gu: 'લોટનું વજન અને સફેદાઈ વધારવા માટે ઉમેરાય છે.',
          hi: 'आटे का वजन और सफेदी बढ़ाने के लिए मिलाया जाता है।',
        },
        healthRisks: {
          en: 'Kidney stones, stomach cramps, digestive inflammation.',
          gu: 'પથરી, પેટમાં ચૂંક અને પાચનતંત્રમાં ચાંદાં પડવાનું જોખમ.',
          hi: 'गुर्दे की पथरी, पेट में ऐंठन और पाचन तंत्र की क्षति।',
        },
      },
      {
        name: { en: 'Ergot Grains (Poisonous Fungus)', gu: 'અર્ગટ ઝેરી ફૂગવાળા દાણા', hi: 'अरगट फंगस वाले दाने' },
        riskLevel: 'Severe',
        description: {
          en: 'Fungus Claviceps purpurea producing dangerous alkaloid toxins resembling black rye/wheat.',
          gu: 'ઘઉંમાં ભળી જતી કાળી ઝેરી ફૂગ જે ગંભીર ઝેરી રસાયણો પેદા કરે છે.',
          hi: 'गेहूं में मिलने वाला काला जहरीला फंगस जो टॉक्सिन्स पैदा करता है।',
        },
        healthRisks: {
          en: 'Ergotism, nausea, gangrene of limbs, hallucinations.',
          gu: 'અર્ગોટિઝમ, ઉલટી, હાથ-પગમાં લોહી ગંઠાઈ જવું (ગેંગરીન).',
          hi: 'गंभीर फूड पॉइजनिंग, उल्टी और अंगों में सुन्नता।',
        },
      },
    ],
    homeTests: [
      {
        id: 'wheat-chalk-acid-test',
        testName: {
          en: 'Dilute Acid / Lemon Effervescence Test for Chalk',
          gu: 'લીંબુના રસથી ચોક પાવડરની ચકાસણી',
          hi: 'नींबू के रस या सिरके से चॉक की जांच',
        },
        adulterantTargeted: {
          en: 'Chalk powder / Calcium carbonate',
          gu: 'ચોક પાવડર (કેલ્શિયમ કાર્બોનેટ)',
          hi: 'चॉक पाउडर',
        },
        difficulty: 'Easy',
        timeRequiredMinutes: 2,
        requiredMaterials: {
          en: ['1 tsp wheat flour', '1 lemon / vinegar', 'Test tube or small clear glass'],
          gu: ['૧ ચમચી ઘઉંનો લોટ', '૧ લીંબુનો રસ અથવા વિનેગર', 'કાચનો ગ્લાસ'],
          hi: ['१ चम्मच गेहूं का आटा', '१ नींबू का रस या सिरका', 'कांच का गिलास'],
        },
        stepByStep: {
          en: [
            'Take 1 teaspoon of flour in a transparent glass.',
            'Add 2 tablespoons of water and mix well into a thin slurry.',
            'Squeeze half a fresh lemon or add 1 teaspoon of vinegar into the mixture.',
            'Observe carefully for any vigorous fizzing or bubbling.',
          ],
          gu: [
            'કાચના ગ્લાસમાં ૧ ચમચી ઘઉંનો લોટ લો.',
            'તેમાં ૨ ચમચી પાણી નાખી પાતળું મિશ્રણ બનાવો.',
            'હવે તેમાં અડધા લીંબુનો રસ અથવા ૧ ચમચી વિનેગર ઉમેરો.',
            'જો પરપોટા કે ફીણ વળે તો ધ્યાનથી જુઓ.',
          ],
          hi: [
            'कांच के गिलास में १ चम्मच आटा लें।',
            '२ चम्मच पानी मिलाकर पतला घोल बनाएं।',
            'इसमें आधा नींबू निचोड़ें या सिरका डालें।',
            'यदि झाग या बुदबुदाहट उठे तो ध्यान से देखें।',
          ],
        },
        pureSampleResult: {
          en: 'Pure wheat flour mixes quietly without vigorous effervescence or gas bubbles.',
          gu: 'શુદ્ધ ઘઉંના લોટમાં કોઈ ફીણ કે પરપોટા નીકળતા નથી, તે શાંત રહે છે.',
          hi: 'शुद्ध आटे में कोई झाग या बुलबुले नहीं उठते।',
        },
        adulteratedSampleResult: {
          en: 'Rapid effervescence with CO2 bubbling confirms presence of chalk powder or calcium carbonate.',
          gu: 'તીવ્ર પરપોટા અને સોડા જેવું ફીણ વળે તો ચોક પાવડરની ભેળસેળ સાબિત થાય છે.',
          hi: 'तेज झाग और बुलबुले उठना चॉक पाउडर की मिलावट दर्शाता है।',
        },
        canDetect: {
          en: ['Chalk powder', 'Excessive calcium carbonate fillers'],
          gu: ['ચોક પાવડર', 'કેલ્શિયમ કાર્બોનેટ'],
          hi: ['चॉक पाउडर की मिलावट'],
        },
        cannotDetect: {
          en: ['Pesticide residues', 'Heavy metals', 'Maida proportion'],
          gu: ['જંતુનાશક દવાઓ', 'મેંદાનું પ્રમાણ'],
          hi: ['कीटनाशक और मैदा का अनुपात'],
        },
        safetyPrecautions: {
          en: ['Safe home test with safe kitchen ingredients.'],
          gu: ['ઘરગથ્થુ સલામત ટેસ્ટ.'],
          hi: ['सुरक्षित घरेलू टेस्ट।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'Total Ash & Acid Insoluble Ash Determination (IS 1155) and Gluten Assay',
        gu: 'એસિડ ઇનસોલ્યુબલ એશ અને ગ્લુટેન વિશ્લેષણ',
        hi: 'टोटल ऐश और ग्लूटेन टेस्ट',
      },
      whyLabNeeded: {
        en: 'FSSAI limits total ash in atta to maximum 2.0% and acid-insoluble ash to maximum 0.15% (dry weight).',
        gu: 'FSSAI ધોરણ મુજબ ઘઉંના લોટમાં એસિડ અદ્રાવ્ય રાખ ૦.૧૫% થી વધુ ન હોવી જોઈએ.',
        hi: 'FSSAI मानक के अनुसार आटे में राख ०.१५% से अधिक नहीं होनी चाहिए।',
      },
      equipmentAndChemicals: {
        en: ['Muffle furnace (550°C)', 'Dilute Hydrochloric acid', 'Kjeldahl digestion apparatus'],
        gu: ['મફલ ભઠ્ઠી (૫૫૦°C)', 'હાઇડ્રોક્લોરિક એસિડ'],
        hi: ['मफल फर्नेस', 'हाइड्रोक्लोरिक एसिड'],
      },
      recommendedLabTypes: {
        en: ['NABL Accredited Cereals & Grains Laboratory', 'FSSAI Referral Food Lab'],
        gu: ['NABL માન્ય ફૂડ લેબોરેટરી'],
        hi: ['NABL प्रमाणित अनाज परीक्षण लैब'],
      },
      approxCostINR: '₹800 – ₹1,500',
      fssaiStandardRef: 'FSS (Food Products Standards) Regulations 2011 – Regulation 2.4.1: Wheat Flour (Atta).',
      sampleSubmissionAdvice: {
        en: 'Send 500g in moisture-proof sealed zip pouch.',
        gu: '૫૦૦ ગ્રામ લોટ સીલબંધ એરટાઈટ પાઉચમાં મોકલો.',
        hi: '५०० ग्राम आटा एयरटाइट पैकेट में भेजें।',
      },
    },
    healthDetails: {
      ayurvedicProps: {
        rasa: { en: 'Madhura (Sweet)', gu: 'મધુર (ગળ્યો રસ)', hi: 'मधुर रस' },
        guna: { en: 'Guru (Heavy to digest), Snigdha (Unctuous)', gu: 'ગુરુ (ભારે), સ્નિગ્ધ, સંધાનકારક', hi: 'गुरु, स्निग्ध' },
        virya: { en: 'Sheeta (Cooling)', gu: 'શીતળ (ઠંડી તાસીર)', hi: 'शीतल' },
        vipaka: { en: 'Madhura', gu: 'મધુર વિપાક', hi: 'मधुर' },
        doshaEffect: { en: 'Pacifies Vata & Pitta, Increases Kapha; promotes bodily stability (Sthairya)', gu: 'વાત અને પિત્ત શામક, કફ વર્ધક, શરીરને પુષ્ટિ આપનાર', hi: 'वात और पित्त शामक, कफ वर्धक' },
      },
      benefits: {
        en: ['Sandhanakrita (promotes union of fractured tissues and wounds)', 'Supreme nourishing grain for stamina and vitality', 'Natural fiber aids smooth digestion when whole wheat bran is retained', 'Rich in B vitamins and magnesium'],
        gu: ['હાડકાં અને સ્નાયુઓને જોડનાર (સંધાનકારક રસાયણ)', 'શરીરને તાકાત અને ટકાઉ ઉર્જા આપે છે', 'થૂલું (બ્રાન) સાથે ખાવાથી પાચન ઉત્તમ રહે છે', 'વિટામિન B અને મેગ્નેશિયમથી ભરપૂર'],
        hi: ['शरीर को बल व स्थिरता प्रदान करता है', 'हड्डियों और मांसपेशियों को मजबूती देता है', 'फाइबर पाचन तंत्र को स्वस्थ रखता है'],
      },
      precautionsAndSideEffects: {
        en: ['Never discard the bran (Chokar) while sifting', 'Excessive consumption without physical exertion leads to weight gain and lethargy'],
        gu: ['લોટ ચાળતી વખતે થૂલું (ચોકર) ક્યારેય ફેંકી ન દેવું', 'કસરત કર્યા વગર વધુ પડતી રોટલી ખાવાથી વજન અને કફ વધે છે'],
        hi: ['आटे का चोकर कभी न छानकर फेंकें', 'बिना शारीरिक परिश्रम के अधिक सेवन से मोटापा बढ़ता है'],
      },
      whoShouldAvoid: {
        en: ['Celiac disease and gluten sensitive enteropathy patients', 'Individuals with severe wheat allergy'],
        gu: ['સિલિયાક રોગ (ગ્લુટેન એલર્જી) ધરાવતા દર્દીઓ', 'ઘઉંની એલર્જી ધરાવતા લોકો'],
        hi: ['सीलिएक रोग (ग्लूटेन एलर्जी) के मरीज'],
      },
    },
  },

  // --- BAJRA (બાજરી - GRAINS) ---
  {
    id: 'bajra',
    categoryId: 'grains',
    name: {
      en: 'Pearl Millet (Bajra)',
      gu: 'બાજરી (બાજરો)',
      hi: 'बाजरा',
    },
    subtitle: {
      en: 'Winter superfood cereal vulnerable to ergot fungus and chalky sand mixing',
      gu: 'શિયાળાનો ઉત્તમ પૌષ્ટિક આહાર, ઝેરી ફૂગ અને ધૂળ-માટીની ભેળસેળથી સાવધાન',
      hi: 'सर्दियों का पौष्टिक अनाज, फंगस और रेत की मिलावट से सावधान',
    },
    alternateNames: ['bajra', 'bajri', 'pearl millet', 'બાજરી', 'બાજરો', 'રોટલો', 'बाजरा'],
    icon: '🌾',
    riskSeverity: 'Medium',
    overview: {
      en: 'Bajra is naturally gluten-free and packed with iron. Key adulteration risks include ergot fungal toxicity and old rancid oxidation.',
      gu: 'બાજરી ગ્લુટેન-મુક્ત અને આયર્નથી ભરપૂર છે. તેમાં અર્ગટ ઝેરી ફૂગ અને જૂના વાસી દાણાની ભેળસેળ થઈ શકે છે.',
      hi: 'बाजरा आयरन और फाइबर से भरपूर है। इसमें फंगस और खराब दानों की मिलावट हो सकती है।',
    },
    adulterants: [
      {
        name: { en: 'Ergot Fungus Infested Seeds', gu: 'અર્ગટ ફૂગવાળા કાળા દાણા', hi: 'अरगट फंगस युक्त दाने' },
        riskLevel: 'Severe',
        description: {
          en: 'Infected black hard sclerotia grains containing ergot alkaloids.',
          gu: 'ફૂગથી બગડેલા કાળા સખત દાણા જેમાં ઝેરી આલ્કલોઇડ્સ હોય છે.',
          hi: 'फंगस लगे काले दाने जो जहरीले होते हैं।',
        },
        healthRisks: {
          en: 'Abdominal cramps, burning sensation, miscarriage risk.',
          gu: 'પેટમાં ભયંકર દુખાવો, ઝાડા અને સગર્ભાવસ્થામાં કસુવાવડનું જોખમ.',
          hi: 'पेट में दर्द, जलन और फूड पॉइजनिंग।',
        },
      },
    ],
    homeTests: [
      {
        id: 'bajra-salt-water-float',
        testName: {
          en: '20% Salt Water Floatation Test for Ergot Grains',
          gu: 'મીઠાવાળા પાણીમાં અર્ગટ ફૂગની ચકાસણી',
          hi: 'नमक के पानी में तैरने की जांच',
        },
        adulterantTargeted: {
          en: 'Lightweight ergot infested fungal bajra seeds',
          gu: 'ફૂગવાળા હલકા ઝેરી દાણા',
          hi: 'फंगस लगे हल्के दाने',
        },
        difficulty: 'Easy',
        timeRequiredMinutes: 3,
        requiredMaterials: {
          en: ['1 glass water', '2 tbsp edible salt', '50g bajra grains'],
          gu: ['૧ ગ્લાસ પાણી', '૨ ચમચી મીઠું', '૫૦ ગ્રામ બાજરીના દાણા'],
          hi: ['१ गिलास पानी', '२ चम्मच नमक', '५० ग्राम बाजरा'],
        },
        stepByStep: {
          en: [
            'Dissolve 2 tablespoons of salt in a glass of water to prepare a 20% saline solution.',
            'Drop the bajra grains into the salt solution.',
            'Stir gently and wait for 1 minute.',
            'Observe which grains settle at the bottom and which float to the top.',
          ],
          gu: [
            'એક ગ્લાસ પાણીમાં ૨ ચમચી મીઠું ઓગાળી ૨૦% સોલ્યુશન બનાવો.',
            'તેમાં બાજરીના દાણા નાખો.',
            '૧ મિનિટ હલાવીને સ્થિર થવા દો.',
            'જુઓ કયા દાણા તળિયે બેસે છે અને કયા તરે છે.',
          ],
          hi: [
            'एक गिलास पानी में २ चम्मच नमक घोलें।',
            'इसमें बाजरे के दाने डालें।',
            '१ मिनट प्रतीक्षा करें।',
            'देखें कौन से दाने नीचे बैठते हैं और कौन से तैरते हैं।',
          ],
        },
        pureSampleResult: {
          en: 'Sound, heavy, healthy bajra grains sink completely to the bottom of the saline glass.',
          gu: 'તંદુરસ્ત અને શુદ્ધ બાજરીના દાણા વજનદાર હોવાથી તળિયે બેસી જાય છે.',
          hi: 'स्वस्थ व भारी दाने नीचे तली में बैठ जाते हैं।',
        },
        adulteratedSampleResult: {
          en: 'Ergot fungal infected and hollow grains float on the surface of the salt water.',
          gu: 'ઝેરી ફૂગવાળા પોચા અને કાળા દાણા પાણીની સપાટી પર તરવા લાગે છે. તેને તરત ફેંકી દો.',
          hi: 'फंगस लगे खराब दाने पानी की सतह पर तैरने लगते हैं।',
        },
        canDetect: {
          en: ['Ergot infested seeds', 'Hollow and damaged grains'],
          gu: ['ઝેરી અર્ગટ ફૂગવાળા દાણા', 'પોચા દાણા'],
          hi: ['फंगस वाले दाने'],
        },
        cannotDetect: {
          en: ['Pesticide residue', 'Chemical dusts'],
          gu: ['જંતુનાશક દવાઓ'],
          hi: ['कीटनाशक'],
        },
        safetyPrecautions: {
          en: ['Discard any floating grains immediately; do not consume.'],
          gu: ['તરતા દાણાને તાત્કાલિક ફેંકી દો; ક્યારેય ન ખાવ.'],
          hi: ['तैरने वाले दानों को फेंक दें।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'Microscopic Spore Identification & Ergot Alkaloid TLC (FSSAI)',
        gu: 'માઇક્રોસ્કોપિક અર્ગટ ટેસ્ટ',
        hi: 'माइक्रोस्कोपिक फंगस जांच',
      },
      whyLabNeeded: {
        en: 'FSSAI mandates zero tolerance for ergot sclerotia (maximum 0.05% by count).',
        gu: 'FSSAI નિયમ મુજબ અર્ગટ ફૂગ ૦.૦૫% થી વધુ ન હોવી જોઈએ.',
        hi: 'FSSAI के अनुसार ०.०५% से अधिक फंगस अमान्य है।',
      },
      equipmentAndChemicals: {
        en: ['Stereomicroscope', 'Thin Layer Chromatography (TLC)'],
        gu: ['માઇક્રોસ્કોપ', 'TLC ઉપકરણ'],
        hi: ['माइक्रोस्कोप'],
      },
      recommendedLabTypes: {
        en: ['NABL Grain Testing Facility', 'State Food Laboratory'],
        gu: ['રાજ્ય ખાદ્ય પ્રયોગશાળા'],
        hi: ['राज्य खाद्य प्रयोगशाला'],
      },
      approxCostINR: '₹700 – ₹1,200',
      fssaiStandardRef: 'FSS (Food Products Standards) Regulations – Bajra whole.',
      sampleSubmissionAdvice: {
        en: 'Submit 250g in sealed bag.',
        gu: '૨૫૦ ગ્રામ નમૂનો સીલબંધ બેગમાં મોકલો.',
        hi: '२५० ग्राम बाजरा भेजें।',
      },
    },
    healthDetails: {
      ayurvedicProps: {
        rasa: { en: 'Madhura (Sweet), Kashaya (Astringent)', gu: 'મધુર અને કષાય રસ', hi: 'मधुर व कषाय' },
        guna: { en: 'Ruksha (Dry), Guru (Heavy)', gu: 'રૂક્ષ (સૂકું), ગુરુ (ભારે)', hi: 'रुक्ष, गुरु' },
        virya: { en: 'Ushna (Heating)', gu: 'ઉષ્ણ (ગરમ તાસીર)', hi: 'उष्ण (गर्म)' },
        vipaka: { en: 'Katu', gu: 'કટુ વિપાક', hi: 'कटु' },
        doshaEffect: { en: 'Pacifies Kapha and Vata; Balances winter chill; increases Pitta in excess', gu: 'કફ શામક, શિયાળાની ઠંડી સામે રક્ષણ આપનાર, પિત્ત વધારનાર', hi: 'कफ शामक, शरीर को गर्मी देने वाला' },
      },
      benefits: {
        en: ['Rich in natural plant iron, effectively preventing anemia', 'High magnesium supports heart rate regulation and blood pressure', 'Slow burning complex carbs stabilize diabetic insulin response', 'Gluten free cereal ideal for winter vitality'],
        gu: ['કુદરતી આયર્નનો ભંડાર, એનિમિયા (લોહીની કમી) દૂર કરે છે', 'મેગ્નેશિયમથી ભરપૂર, હૃદય અને બ્લડ પ્રેશર માટે ઉત્તમ', 'ડાયાબિટીસમાં બ્લડ સુગર ધીમે વધારે છે', 'શિયાળામાં શરીરને અંદરથી હૂંફ અને બળ આપે છે'],
        hi: ['आयरन से भरपूर, खून की कमी दूर करता है', 'सर्दियों में शरीर को ऊर्जा व गर्मी देता है', 'डायबिटीज के मरीजों के लिए गुणकारी'],
      },
      precautionsAndSideEffects: {
        en: ['Being heating in nature, consume with Ghee, butter, or Chaas (buttermilk)', 'Avoid eating in peak scorching summers'],
        gu: ['ગરમ તાસીર હોવાથી હંમેશા ઘી, માખણ કે છાશ સાથે જ ખાવી', 'કઠણ ઉનાળાની કાળઝાળ ગરમીમાં ઓછી ખાવી'],
        hi: ['हमेशा घी, मक्खन या छाछ के साथ खाएं', 'कड़क गर्मियों में कम सेवन करें'],
      },
      whoShouldAvoid: {
        en: ['People suffering from severe thyroid nodules/hypothyroidism (goitrogens) should limit raw flour intake', 'Intense Pitta bleeding disorders'],
        gu: ['ગંભીર થાઈરોઈડ વાળા દર્દીઓએ ઓછી ખાવી', 'અતિશય પિત્ત અને ગરમીની તકલીફ વાળા લોકો'],
        hi: ['थायरॉयड के मरीज सीमित मात्रा में लें'],
      },
    },
  },

  // --- BITTER GOURD (કારેલાં - VEGETABLES) ---
  {
    id: 'karela',
    categoryId: 'vegetables',
    name: {
      en: 'Bitter Gourd (Karela)',
      gu: 'કારેલાં',
      hi: 'करेला',
    },
    subtitle: {
      en: 'Medicinal diabetic vegetable prone to copper sulfate dye and hazardous pesticide residue',
      gu: 'ડાયાબિટીસ માટે અમૃત સમાન ઔષધીય શાક, લીલા કેમિકલ રંગ અને જંતુનાશકોથી સાવધાન',
      hi: 'डायबिटीज के लिए गुणकारी सब्जी, रासायनिक हरे रंग व कीटनाशकों से सावधान',
    },
    alternateNames: ['karela', 'bitter gourd', 'karvellaka', 'કારેલાં', 'કારેલું', 'करेला'],
    icon: '🥒',
    riskSeverity: 'High',
    overview: {
      en: 'Karela is revered in Ayurveda for diabetes and blood purification. Vendors frequently dip fading bitter gourds in copper sulfate or malachite green to impart unnatural fresh green sheen.',
      gu: 'કારેલાં ડાયાબિટીસ અને રક્તશુદ્ધિ માટે અતિ ગુણકારી છે, પરંતુ વેપારીઓ તેને તાજાં-લીલાં બતાવવા કોપર સલ્ફેટ (મોરથૂથુ) કે લીલા કેમિકલ રંગમાં બોળે છે.',
      hi: 'करेले को ताजा व हरा दिखाने के लिए कॉपर सल्फेट (नीला थोथा) या रासायनिक हरे रंग में डुबोया जाता है।',
    },
    adulterants: [
      {
        name: { en: 'Malachite Green & Copper Sulphate', gu: 'મોરથૂથુ (કોપર સલ્ફેટ) અને લીલો રંગ', hi: 'कॉपर सल्फेट और मैलाकाइट ग्रीन' },
        riskLevel: 'Severe',
        description: {
          en: 'Industrial chemical dyes sprayed to restore bright glossy emerald green color on old wilting bitter gourds.',
          gu: 'જૂનાં કારેલાંને ચમકદાર લીલાં રાખવા ઝેરી લીલો કેમિકલ રંગ લગાવવામાં આવે છે.',
          hi: 'पुराने मुरझाए करेलों को चमकीला हरा बनाने के लिए प्रयुक्त जहरीला रंग।',
        },
        healthRisks: {
          en: 'Carcinogenic, severe liver damage, heavy metal toxicity.',
          gu: 'કેન્સરનું જોખમ, લીવર અને કિડનીને ગંભીર નુકસાન.',
          hi: 'लीवर और किडनी को गंभीर नुकसान, कैंसर का खतरा।',
        },
      },
    ],
    homeTests: [
      {
        id: 'karela-cotton-oil-test',
        testName: {
          en: 'Liquid Paraffin / Oil Rub Test for Chemical Green Dye',
          gu: 'રૂ અને તેલથી કેમિકલ લીલા રંગની ચકાસણી',
          hi: 'रुई और तेल से कृत्रिम रंग की पहचान',
        },
        adulterantTargeted: {
          en: 'Surface malachite green or copper dye',
          gu: 'કારેલાં પર લગાવેલો કૃત્રિમ લીલો રંગ',
          hi: 'करेले पर लगा केमिकल हरा रंग',
        },
        difficulty: 'Easy',
        timeRequiredMinutes: 2,
        requiredMaterials: {
          en: ['Small cotton ball', 'Few drops coconut oil or edible oil', '1 bitter gourd'],
          gu: ['રૂનું પૂમડું', 'થોડાં ટીપાં તેલ', '૧ કારેલું'],
          hi: ['रुई का टुकड़ा', 'थोड़ा सा तेल', '१ करेला'],
        },
        stepByStep: {
          en: [
            'Moisten a clean cotton ball with 3-4 drops of cooking oil or liquid paraffin.',
            'Firmly rub the cotton across the outer ridged green surface of the bitter gourd for 15 seconds.',
            'Inspect the cotton ball under bright light.',
          ],
          gu: [
            'રૂના પૂમડા પર ૩-૪ ટીપાં ખાદ્ય તેલ લગાવો.',
            'કારેલાંની બહારની લીલી ખાંચો પર ૧૫ સેકન્ડ સુધી રૂને ઘસો.',
            'રૂ પર રંગ લાગ્યો છે કે નહીં તે અજવાળામાં જુઓ.',
          ],
          hi: [
            'रुई पर तेल की कुछ बूंदें लगाएं।',
            'करेले की बाहरी हरी सतह पर १५ सेकंड तक रगड़ें।',
            'रुई को रोशनी में देखें।',
          ],
        },
        pureSampleResult: {
          en: 'The cotton remains virtually white or shows faint natural dust; no bright green color transfers.',
          gu: 'શુદ્ધ કારેલાં પરથી રૂ પર કોઈ લીલો રંગ ચોંટતો નથી, રૂ સફેદ જ રહે છે.',
          hi: 'रुई सफेद रहती है, कोई कृत्रिम रंग नहीं छूटता।',
        },
        adulteratedSampleResult: {
          en: 'The cotton immediately turns bright emerald green, confirming toxic artificial chemical dye.',
          gu: 'રૂ તરત જ ચમકદાર લીલું થઈ જાય તો ઝેરી કેમિકલ રંગ લગાવ્યો હોવાની ખાતરી થાય છે.',
          hi: 'रुई तुरंत हरी हो जाती है, जो केमिकल रंग की मिलावट दर्शाता है।',
        },
        canDetect: {
          en: ['Surface green color dyes', 'Malachite green'],
          gu: ['કૃત્રિમ લીલો રંગ'],
          hi: ['नकली हरा रंग'],
        },
        cannotDetect: {
          en: ['Systemic absorbed pesticides inside flesh'],
          gu: ['અંદર ઉતરેલાં જંતુનાશકો'],
          hi: ['भीतर तक घुसे कीटनाशक'],
        },
        safetyPrecautions: {
          en: ['Wash all gourds thoroughly in warm saltwater before cooking.'],
          gu: ['રાંધતા પહેલાં કારેલાંને મીઠાવાળા ગરમ પાણીમાં ૧૦ મિનિટ પલાળી ધોવાં.'],
          hi: ['पकाने से पहले नमक वाले गुनगुने पानी में धोएं।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'Spectrophotometric Malachite Green Assay & ICP-MS for Copper',
        gu: 'સ્પેક્ટ્રોફોટોમેટ્રિક અને કોપર ટેસ્ટ',
        hi: 'कॉपर व मैलाकाइट ग्रीन लैब टेस्ट',
      },
      whyLabNeeded: {
        en: 'FSSAI completely bans all non-permitted artificial dyes on fresh vegetables.',
        gu: 'FSSAI નિયમ મુજબ તાજી શાકભાજી પર કોઈપણ કૃત્રિમ રંગ લગાવવો ગેરકાયદેસર છે.',
        hi: 'FSSAI के अनुसार ताजी सब्जियों पर कृत्रिम रंग पूर्णतः प्रतिबंधित है।',
      },
      equipmentAndChemicals: {
        en: ['UV-Vis Spectrophotometer', 'Atomic Absorption Spectrometer (AAS)'],
        gu: ['સ્પેક્ટ્રોફોટોમીટર', 'AAS ઉપકરણ'],
        hi: ['स्पेक्ट्रोफोटोमीटर'],
      },
      recommendedLabTypes: {
        en: ['FSSAI Notified Food Testing Lab', 'NABL Accredited Residue Lab'],
        gu: ['NABL માન્ય લેબ'],
        hi: ['NABL मान्यता प्राप्त लैब'],
      },
      approxCostINR: '₹1,500 – ₹2,500',
      fssaiStandardRef: 'FSS (Prohibition and Restrictions on Sales) Regulations – Fresh vegetables.',
      sampleSubmissionAdvice: {
        en: 'Submit 500g unwashed raw sample in paper bag.',
        gu: '૫૦૦ ગ્રામ કારેલાં કાગળની થેલીમાં મોકલો.',
        hi: '५०० ग्राम करेले भेजें।',
      },
    },
    healthDetails: {
      ayurvedicProps: {
        rasa: { en: 'Tikta (Bitter), Katu (Pungent)', gu: 'તીક્ત (અત્યંત કડવો રસ) અને કટુ', hi: 'तिक्त और कटु' },
        guna: { en: 'Laghu (Light), Ruksha (Dry)', gu: 'લઘુ (હલકું), રૂક્ષ', hi: 'लघु, रुक्ष' },
        virya: { en: 'Ushna (Mildly Heating)', gu: 'ઉષ્ણ (ગરમ તાસીર)', hi: 'उष्ण' },
        vipaka: { en: 'Katu', gu: 'કટુ વિપાક', hi: 'कटु' },
        doshaEffect: { en: 'Supreme pacifier of Kapha and Pitta; clears deep Ama toxins; Raktashodhaka', gu: 'કફ અને પિત્તનું સર્વોત્તમ શામક, લોહી શુદ્ધ કરનાર, વાત વર્ધક', hi: 'कफ-पित्त शामक, रक्तशोधक' },
      },
      benefits: {
        en: ['Contains Charantin and polypeptide-p functioning like plant insulin for blood sugar', 'Deeply cleanses congested liver and stimulates bile secretion', 'Clears chronic acne, eczema, and skin eruptions', 'Kills intestinal worms and parasites (Krimihara)'],
        gu: ['કુદરતી પ્લાન્ટ-ઈન્સ્યુલિન (ચરેન્ટિન) ધરાવે છે જે ડાયાબિટીસમાં બ્લડ સુગર નિયંત્રિત રાખે છે', 'લીવરને સાફ કરી કમળો અને ફેટી લિવર અટકાવે છે', 'લોહી શુદ્ધ કરી ખીલ, સોરાયસીસ અને ચામડીના રોગો મટાડે છે', 'પેટના કૃમિનો નાશ કરે છે'],
        hi: ['डायबिटीज में ब्लड शुगर नियंत्रित करता है', 'लीवर को डिटॉक्स करता है', 'खून साफ कर त्वचा के रोग व कील-मुंहासे मिटाता है', 'पेट के कीड़े मारता है'],
      },
      precautionsAndSideEffects: {
        en: ['Overconsumption of raw bitter gourd juice can trigger severe hypoglycemia and stomach cramps', 'Always cook with healthy spices and oil'],
        gu: ['કારેલાંનો કાચો રસ વધારે પીવાથી સુગર અચાનક ઘટી જઈ શકે છે અને પેટમાં ચૂંક આવી શકે છે', 'હંમેશા યોગ્ય વઘાર સાથે રાંધીને ખાવું'],
        hi: ['ज्यादा कच्चा जूस पीने से ब्लड शुगर अचानक कम हो सकता है'],
      },
      whoShouldAvoid: {
        en: ['Pregnant women (contains compounds inducing uterine contractions and bleeding)', 'Patients prone to frequent hypoglycemia'],
        gu: ['ગર્ભવતી મહિલાઓએ કારેલાંનો કાચો રસ ન પીવો (ગર્ભાશયનું સંકોચન કરે છે)', 'સુગર લો (હાઈપોગ્લાયકેમિઆ) થઈ જતી હોય તેવા દર્દીઓ'],
        hi: ['गर्भवती महिलाएं (हानिकारक हो सकता है)', 'लो-शुगर के मरीज'],
      },
    },
  },

  // --- MOONG DAL (મગ - PULSES) ---
  {
    id: 'moong',
    categoryId: 'pulses',
    name: {
      en: 'Green Gram & Moong Dal',
      gu: 'આખા મગ અને મગની દાળ',
      hi: 'साबुत मूंग और मूंग दाल',
    },
    subtitle: {
      en: 'Ayurvedic king of pulses, gentle on digestion; prone to artificial green polish dye',
      gu: 'કઠોળમાં સર્વોત્તમ અને અમૃત સમાન પથ્ય આહાર, કેમિકલ લીલા પોલિશથી સાવધાન',
      hi: 'दालों में सर्वश्रेष्ठ व सुपाच्य, कृत्रिम हरे रंग की पॉलिश से सावधान',
    },
    alternateNames: ['moong', 'mung', 'green gram', 'moong dal', 'મગ', 'મગની દાળ', 'मूंग', 'मूंग दाल'],
    icon: '🥣',
    riskSeverity: 'Medium',
    overview: {
      en: 'Moong is hailed as the supreme pulse in Charaka Samhita. Malpractices include dyeing dull old moong with synthetic green color or mineral oil polishing.',
      gu: 'ચરકસંહિતા અનુસાર મગ બધા જ કઠોળમાં સૌથી ઉત્તમ છે. વેપારીઓ જૂના મગને ચમકાવવા લીલો કેમિકલ રંગ કે પોલિશ લગાવે છે.',
      hi: 'मूंग सभी दालों में सबसे हल्की और स्वास्थ्यवर्धक है। इसमें हरे रंग व तेल की पॉलिश की जाती है।',
    },
    adulterants: [
      {
        name: { en: 'Malachite Green & Synthetic Dyes', gu: 'લીલો કેમિકલ કલર અને પોલિશ', hi: 'मैलाकाइट ग्रीन और केमिकल पॉलिश' },
        riskLevel: 'High',
        description: {
          en: 'Used to dye faded or pest-damaged whole moong a vibrant fresh green.',
          gu: 'જૂના કે બગડેલા મગને નવા જેવા બતાવવા લીલો રંગ લગાવાય છે.',
          hi: 'दाल को चमकाने के लिए जहरीला रंग लगाया जाता है।',
        },
        healthRisks: {
          en: 'Gastrointestinal upset, toxic build-up in liver tissues.',
          gu: 'પેટમાં ગરબડ અને લીવરને નુકસાન.',
          hi: 'पाचन विकार और लीवर की समस्या।',
        },
      },
    ],
    homeTests: [
      {
        id: 'moong-warm-water-test',
        testName: {
          en: 'Warm Water Color Extraction Test',
          gu: 'ગરમ પાણીમાં લીલા રંગની ચકાસણી',
          hi: 'गुनगुने पानी में रंग की जांच',
        },
        adulterantTargeted: {
          en: 'Artificial water-soluble green dye on whole moong',
          gu: 'મગ પર ચડાવેલો કૃત્રિમ લીલો રંગ',
          hi: 'मूंग पर लगा केमिकल हरा रंग',
        },
        difficulty: 'Easy',
        timeRequiredMinutes: 3,
        requiredMaterials: {
          en: ['Half cup warm water', '2 tbsp whole green moong'],
          gu: ['અડધો કપ નવશેકું ગરમ પાણી', '૨ ચમચી મગ'],
          hi: ['आधा कप गुनगुना पानी', '२ चम्मच मूंग'],
        },
        stepByStep: {
          en: [
            'Place 2 tablespoons of moong in a clear transparent glass.',
            'Pour warm water over the moong and stir vigorously for 1 minute.',
            'Let it settle for 2 minutes and observe the color of the water.',
          ],
          gu: [
            'કાચના ગ્લાસમાં ૨ ચમચી મગ લો.',
            'તેમાં થોડું નવશેકું ગરમ પાણી ઉમેરી ૧ મિનિટ હલાવો.',
            '૨ મિનિટ પછી પાણીનો રંગ જુઓ.',
          ],
          hi: [
            'कांच के गिलास में मूंग लें।',
            'गुनगुना पानी डालकर १ मिनट हिलाएं।',
            'पानी का रंग देखें।',
          ],
        },
        pureSampleResult: {
          en: 'Water stays clear or shows only faint natural brownish-green hue; grains remain naturally matte.',
          gu: 'પાણી એકદમ સ્વચ્છ રહે છે અથવા સામાન્ય કુદરતી રંગ પકડે છે.',
          hi: 'पानी साफ रहता है, कोई तेज हरा रंग नहीं छोड़ता।',
        },
        adulteratedSampleResult: {
          en: 'Water immediately discolors into an intense chemical emerald green tint.',
          gu: 'પાણી તરત જ ચમકદાર લીલા રંગનું થઈ જાય તો કેમિકલ કલરની ભેળસેળ સાબિત થાય છે.',
          hi: 'पानी तुरंत गहरा हरा हो जाता है।',
        },
        canDetect: {
          en: ['Water-soluble chemical green dye'],
          gu: ['પાણીમાં ઓગળતો લીલો રંગ'],
          hi: ['घुलनशील हरा रंग'],
        },
        cannotDetect: {
          en: ['Pesticide residues inside the pulse'],
          gu: ['જંતુનાશક દવાઓ'],
          hi: ['कीटनाशक'],
        },
        safetyPrecautions: {
          en: ['Always wash lentils 2-3 times thoroughly before pressure cooking.'],
          gu: ['રાંધતા પહેલાં મગ કે દાળને ૨-૩ વાર ચોખ્ખા પાણીથી ધોવાં.'],
          hi: ['पकाने से पहले २-३ बार धोएं।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'Synthetic Color Identification by TLC & Moisture/Purity Assay',
        gu: 'TLC દ્વારા સિન્થેટિક રંગ પરીક્ષણ',
        hi: 'TLC विधि से रंग जांच',
      },
      whyLabNeeded: {
        en: 'FSSAI strictly bans any artificial coloring matters on pulses.',
        gu: 'FSSAI નિયમ મુજબ કઠોળ પર કોઈપણ કૃત્રિમ રંગ લગાવી શકાતો નથી.',
        hi: 'FSSAI के अनुसार दालों पर कृत्रिम रंग पूरी तरह प्रतिबंधित है।',
      },
      equipmentAndChemicals: {
        en: ['TLC Silica gel plates', 'Solvent extraction systems'],
        gu: ['TLC સિસ્ટમ'],
        hi: ['TLC प्लेट्स'],
      },
      recommendedLabTypes: {
        en: ['NABL Accredited Food & Agriculture Testing Lab'],
        gu: ['NABL માન્ય કૃષિ લેબ'],
        hi: ['NABL मान्यता प्राप्त लैब'],
      },
      approxCostINR: '₹800 – ₹1,400',
      fssaiStandardRef: 'FSS (Food Products Standards) Regulations – Pulses.',
      sampleSubmissionAdvice: {
        en: 'Submit 250g in sealed container.',
        gu: '૨૫૦ ગ્રામ મગ સીલબંધ પેકેટમાં મોકલો.',
        hi: '२५० ग्राम मूंग भेजें।',
      },
    },
    healthDetails: {
      ayurvedicProps: {
        rasa: { en: 'Kashaya (Astringent), Madhura (Sweet)', gu: 'કષાય (તુરો) અને મધુર રસ', hi: 'कषाय और मधुर' },
        guna: { en: 'Laghu (Extremely Light to digest), Ruksha (Dry)', gu: 'લઘુ (સૌથી સુપાચ્ય), રૂક્ષ', hi: 'लघु (अत्यंत सुपाच्य), रुक्ष' },
        virya: { en: 'Sheeta (Cooling)', gu: 'શીતળ (ઠંડક આપનાર)', hi: 'शीतल' },
        vipaka: { en: 'Katu', gu: 'કટુ વિપાક', hi: 'कटु' },
        doshaEffect: { en: 'Tridosha balancing; does NOT aggravate Vata like other heavy pulses; Pitta & Kapha pacifier', gu: 'ત્રણેય દોષોનું સંતુલનકર્તા (અન્ય કઠોળની જેમ ગેસ કરતું નથી), પિત્ત-કફ શામક', hi: 'त्रिदोष शामक (गैस नहीं बनाता), पित्त-कफ शामक' },
      },
      benefits: {
        en: ['Ayurvedic Pathya (ideal daily diet during illness, convalescence, or fever)', 'Lightest plant protein, does not cause bloating or flatulence', 'Chakshushya (protects eyesight and reduces ocular inflammation)', 'Rich in bioavailable folate, iron, and potassium'],
        gu: ['બીમારી, તાવ કે પાચન ખરાબ હોય ત્યારે શ્રેષ્ઠ પથ્ય આહાર', 'ગેસ કે આફરો કર્યા વગર શ્રેષ્ઠ પ્રોટીન પૂરું પાડે છે', 'આંખો માટે હિતકારી છે (ચક્ષુષ્ય)', 'શરીરમાંથી વધારાની ગરમી શાંત કરે છે'],
        hi: ['बीमारी या बुखार के बाद सबसे उत्तम सुपाच्य भोजन', 'गैस बनाए बिना प्रोटीन देता है', 'आंखों की रोशनी के लिए उत्तम'],
      },
      precautionsAndSideEffects: {
        en: ['Extremely safe; cook with cumin, ginger, and ghee for maximum nourishment'],
        gu: ['અત્યંત નિર્દોષ આહાર છે; જીરું, આદુ અને ઘીનો વઘાર કરવો ઉત્તમ'],
        hi: ['अत्यंत सुरक्षित व हल्का आहार'],
      },
      whoShouldAvoid: {
        en: ['Suitable for all age groups from 6-month infants to elderly individuals'],
        gu: ['નાના બાળકથી લઈ વૃદ્ધો સુધી તમામ માટે અમૃત સમાન છે; કોઈ નિષેધ નથી'],
        hi: ['सभी के लिए पूर्णतः सुरक्षित व लाभदायक'],
      },
    },
  },

  // --- SESAME SEEDS (તલ - OILSEEDS) ---
  {
    id: 'sesame',
    categoryId: 'oilseeds',
    name: {
      en: 'White & Black Sesame Seeds (Til)',
      gu: 'સફેદ અને કાળા તલ',
      hi: 'सफेद और काले तिल',
    },
    subtitle: {
      en: 'Calcium-dense winter oilseed; vulnerable to chemical bleaching and black dye coating',
      gu: 'શિયાળાનું કેલ્શિયમથી ભરપૂર તેલીબિયાં, કેમિકલ બ્લીચિંગ અને નકલી કાળા રંગથી સાવધાન',
      hi: 'कैल्शियम से भरपूर तिलहन, रासायनिक ब्लीचिंग और काले रंग से सावधान',
    },
    alternateNames: ['sesame', 'til', 'gingelly', 'white til', 'black til', 'તલ', 'કાળા તલ', 'સફેદ તલ', 'તિલ'],
    icon: '🌱',
    riskSeverity: 'Medium',
    overview: {
      en: 'Sesame is prized for its high calcium and oleic acid content. White sesame is often bleached with sulfur or hydrogen peroxide, while cheap seeds are artificially dyed black.',
      gu: 'તલમાં દૂધ કરતાં પણ અનેક ગણું કેલ્શિયમ હોય છે. સફેદ તલને વધુ ઉજળા કરવા સલ્ફર બ્લીચિંગ કરાય છે અને કાળા તલ પર નકલી કાળો રંગ ચડાવાય છે.',
      hi: 'सफेद तिल को चमकाने के लिए सल्फर से ब्लीच किया जाता है और काले तिल पर केमिकल रंग चढ़ाया जाता है।',
    },
    adulterants: [
      {
        name: { en: 'Chemical Bleaching (Sulfur / Peroxide)', gu: 'સલ્ફર અને કેમિકલ બ્લીચિંગ', hi: 'सल्फर ब्लीचिंग' },
        riskLevel: 'Moderate',
        description: {
          en: 'Used to bleach brown unhulled sesame into pure sparkling white seeds.',
          gu: 'તલને અકુદરતી સફેદ બનાવવા કેમિકલ બ્લીચિંગ કરવામાં આવે છે.',
          hi: 'तिल को कृत्रिम रूप से सफेद करने के लिए प्रयुक्त केमिकल।',
        },
        healthRisks: {
          en: 'Throat irritation, respiratory allergies, asthmatic triggers.',
          gu: 'ગળામાં બળતરા, અસ્થમા અને એલર્જીનું જોખમ.',
          hi: 'सांस की एलर्जी और गले में जलन।',
        },
      },
    ],
    homeTests: [
      {
        id: 'sesame-water-rub-test',
        testName: {
          en: 'White Paper Rub & Water Soak Test for Black Til',
          gu: 'સફેદ કાગળ પર ઘસીને કાળા રંગની ચકાસણી',
          hi: 'सफेद कागज पर रगड़कर रंग की जांच',
        },
        adulterantTargeted: {
          en: 'Artificial black carbon or dye on sesame seeds',
          gu: 'કાળા તલ પર લગાવેલો કૃત્રિમ કાળો રંગ',
          hi: 'काले तिल पर लगा नकली रंग',
        },
        difficulty: 'Easy',
        timeRequiredMinutes: 2,
        requiredMaterials: {
          en: ['Plain white paper', '1 tsp black sesame seeds', 'Few drops water'],
          gu: ['સફેદ કાગળ', '૧ ચમચી કાળા તલ', 'પાણી'],
          hi: ['सफेद कागज', '१ चम्मच काले तिल', 'पानी'],
        },
        stepByStep: {
          en: [
            'Moisten a pinch of black sesame seeds with 2 drops of water.',
            'Firmly press and drag the wet seeds across a white sheet of paper using your thumb.',
            'Observe if black ink lines stain the paper.',
          ],
          gu: [
            'કાળા તલ પર ૨ ટીપાં પાણી નાખી ભીના કરો.',
            'તેને સફેદ કાગળ પર અંગૂઠા વડે જોરથી ઘસો.',
            'કાગળ પર કાળી શાહી જેવો રંગ લાગે છે કે નહીં તે જુઓ.',
          ],
          hi: [
            'काले तिल पर पानी की बूंदें डालें।',
            'सफेद कागज पर अंगूठे से रगड़ें।',
            'काले रंग का निशान देखें।',
          ],
        },
        pureSampleResult: {
          en: 'Pure natural black sesame leaves only oily smudge or faint grey mark; no black ink stains.',
          gu: 'અસલી કાળા તલમાંથી માત્ર તેલનો ડાઘ પડે છે, કાળી શાહી જેવો રંગ લાગતો નથી.',
          hi: 'असली काले तिल से केवल तेल का धब्बा बनता है, कोई काला रंग नहीं छूटता।',
        },
        adulteratedSampleResult: {
          en: 'Stains the paper with dark ink lines, proving coal-tar or carbon black dye coating.',
          gu: 'કાગળ પર કાળી શાહીના ઘાટા લિસોટા પડે તો નકલી રંગ ચોપડાયો છે.',
          hi: 'कागज पर स्याही जैसी काली लकीरें बन जाती हैं।',
        },
        canDetect: {
          en: ['Artificial black dye coating on sesame'],
          gu: ['કૃત્રિમ કાળો કલર'],
          hi: ['नकली काला रंग'],
        },
        cannotDetect: {
          en: ['Fungicides or moisture level'],
          gu: ['આંતરિક ભેજ'],
          hi: ['अंदरूनी रसायन'],
        },
        safetyPrecautions: {
          en: ['Simple, safe household test.'],
          gu: ['સલામત ઘરગથ્થુ ટેસ્ટ.'],
          hi: ['सुरक्षित घरेलू टेस्ट।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'Sulfur Dioxide Residual Assay & Gas Chromatography for Sesame Oil Purity',
        gu: 'સલ્ફર ડાયોક્સાઇડ અને ઓઇલ કન્ટેન્ટ ટેસ્ટ',
        hi: 'सल्फर डाइऑक्साइड परीक्षण',
      },
      whyLabNeeded: {
        en: 'FSSAI limits sulfur dioxide residues in bleached food grains to permitted safe threshold.',
        gu: 'FSSAI ધોરણ મુજબ બ્લીચિંગ રસાયણો મર્યાદાથી વધુ ન હોવા જોઈએ.',
        hi: 'FSSAI मानकों के अनुसार ब्लीचिंग केमिकल की सीमा तय है।',
      },
      equipmentAndChemicals: {
        en: ['Monier-Williams distillation apparatus', 'Soxhlet oil extractor'],
        gu: ['ડિસ્ટિલેશન ઉપકરણ', 'ઓઇલ એક્સટ્રેક્ટર'],
        hi: ['डिस्टिलेशन उपकरण'],
      },
      recommendedLabTypes: {
        en: ['NABL Accredited Oilseeds Testing Laboratory'],
        gu: ['NABL માન્ય તેલીબિયાં લેબ'],
        hi: ['NABL प्रमाणित तिलहन लैब'],
      },
      approxCostINR: '₹1,000 – ₹1,800',
      fssaiStandardRef: 'FSS (Food Products Standards) – Sesame (Til) seeds.',
      sampleSubmissionAdvice: {
        en: 'Send 200g in moisture-resistant pouch.',
        gu: '૨૦૦ ગ્રામ તલ સીલબંધ પાઉચમાં મોકલો.',
        hi: '२०० ग्राम तिल भेजें।',
      },
    },
    healthDetails: {
      ayurvedicProps: {
        rasa: { en: 'Madhura (Sweet), Tikta, Kashaya, Katu', gu: 'મધુર, તીક્ત, કષાય અને કટુ (ચાર રસ ધરાવે છે)', hi: 'मधुर, तिक्त, कषाय, कटु' },
        guna: { en: 'Guru (Heavy), Snigdha (Unctuous), Sukshma (Penetrating)', gu: 'ગુરુ, સ્નિગ્ધ, સૂક્ષ્મ (ઊંડે સુધી ઉતરનાર)', hi: 'गुरु, स्निग्ध, सूक्ष्म' },
        virya: { en: 'Ushna (Heating)', gu: 'ઉષ્ણ (ગરમ તાસીર)', hi: 'उष्ण (गर्म)' },
        vipaka: { en: 'Madhura', gu: 'મધુર વિપાક', hi: 'मधुर' },
        doshaEffect: { en: 'Master Vata pacifier (Vata-hara); Increases Kapha and Pitta in excess', gu: 'વાત રોગનું સર્વોત્તમ શામક (વાતનાશક), કફ-પિત્ત વધારનાર', hi: 'वात दोष का परम शामक' },
      },
      benefits: {
        en: ['Dantya and Asthya (supreme natural calcium for teeth and bone density)', 'Keshya (nourishes hair roots, prevents premature graying)', 'Nourishes dry skin and relieves joint stiffness in winter', 'Black sesame (Kala Til) possesses superior medicinal potency than white til'],
        gu: ['દાંત અને હાડકાં માટે કેલ્શિયમનો કુદરતી ભંડાર (અસ્થિ અને દાંત મજબૂત કરે છે)', 'વાળ ખરતા અટકાવે છે અને અકાળે સફેદ થવા દેતું નથી (કેશ્ય)', 'શિયાળામાં સાંધાના દુખાવા અને શુષ્ક ચામડીમાં રાહત આપે છે', 'કાળા તલમાં સફેદ તલ કરતાં પણ વધુ ઔષધીય ગુણો રહેલા છે'],
        hi: ['दांतों और हड्डियों को फौलादी मजबूती देता है', 'बालों को असमय सफेद होने से रोकता है', 'सर्दियों में जोड़ों के दर्द में अत्यंत लाभकारी'],
      },
      precautionsAndSideEffects: {
        en: ['Being hot and heavy, avoid consuming in peak summer', 'People with severe bleeding piles should take in moderation'],
        gu: ['ગરમ તાસીર હોવાથી કાળઝાળ ઉનાળામાં ઓછા ખાવા', 'હરસ-મસા કે વધારે રક્તસ્ત્રાવ વાળાએ સાચવીને લેવા'],
        hi: ['गर्मियों में कम खाएं', 'खूनी बवासीर में सीमित सेवन करें'],
      },
      whoShouldAvoid: {
        en: ['Severe hyperacidity / bleeding disorders', 'Excessive bodily heat (Ushna Prakriti)'],
        gu: ['અતિશય ગરમ પિત્ત પ્રકૃતિ અને રક્તસ્ત્રાવ ધરાવતા દર્દીઓ'],
        hi: ['अत्यधिक पित्त व गर्मी वाले लोग'],
      },
    },
  },

  // --- ALMONDS (બદામ - DRY FRUITS) ---
  {
    id: 'almonds',
    categoryId: 'dry_fruits',
    name: {
      en: 'Almonds (Badam - Mamra & California)',
      gu: 'બદામ (મામરા અને કાશ્મીરી બદામ)',
      hi: 'बादाम (मामरा व कैलिफोर्निया बादाम)',
    },
    subtitle: {
      en: 'Premium dry fruit susceptible to bitter apricot kernel mixing and chemical polishing',
      gu: 'મગજ અને આંખો માટે શ્રેષ્ઠ સુકોમેવો, કડવી બદામ/જર્દાળુના બીજ અને કેમિકલ પોલિશથી સાવધાન',
      hi: 'दिमाग के लिए श्रेष्ठ मेवा, कड़वे बादाम व पॉलिश की मिलावट से सावधान',
    },
    alternateNames: ['almond', 'badam', 'mamra', 'california almond', 'બદામ', 'મામરા બદામ', 'કાશ્મીરી બદામ', 'बादाम'],
    icon: '🥜',
    riskSeverity: 'Medium',
    overview: {
      en: 'Almonds are rich in Vitamin E and brain-nourishing fats. Malpractices include mixing bitter apricot kernels (which contain toxic cyanide) and applying synthetic sheen oils.',
      gu: 'બદામ વિટામિન E અને યાદશક્તિ વધારનાર તેલથી ભરપૂર છે. વેપારીઓ તેમાં સસ્તી કડવી જરદાળુની મીંજ (જેમાં ઝેરી સાયનાઈડ હોય છે) ભેળવે છે.',
      hi: 'बादाम में खुबानी के कड़वे बीज मिलाए जाते हैं जिनमें जहरीला सायनाइड हो सकता है।',
    },
    adulterants: [
      {
        name: { en: 'Bitter Apricot Kernels (Toxic Amygdalin)', gu: 'કડવી જરદાળુની મીંજ (ઝેરી સાયનાઈડ)', hi: 'कड़वी खुबानी के बीज' },
        riskLevel: 'Severe',
        description: {
          en: 'Wild bitter apricot kernels resembling small Mamra almonds containing amygdalin which releases hydrogen cyanide upon digestion.',
          gu: 'બદામ જેવા દેખાતા કડવા બીજ જે પેટમાં જઈને ઝેરી સાયનાઈડ બનાવે છે.',
          hi: 'कड़वे बीज जो पचने पर जहरीला सायनाइड छोड़ते हैं।',
        },
        healthRisks: {
          en: 'Cyanide poisoning, nausea, dizziness, breathing difficulty.',
          gu: 'ઝેરી અસર, ઉલટી, ચક્કર આવવા અને શ્વાસ લેવામાં તકલીફ.',
          hi: 'विषाक्तता, सिरदर्द, चक्कर और सांस लेने में कठिनाई।',
        },
      },
    ],
    homeTests: [
      {
        id: 'almond-water-soak-peel-test',
        testName: {
          en: 'Water Soak, Peel, and Nibble Inspection',
          gu: 'પાણીમાં પલાળીને છાલ ઉતારી સ્વાદ ચકાસણી',
          hi: 'पानी में भिगोकर छिलका उतारने की जांच',
        },
        adulterantTargeted: {
          en: 'Bitter toxic kernels and mineral oil polished almonds',
          gu: 'કડવી ઝેરી મીંજ અને કેમિકલ પોલિશ',
          hi: 'कड़वे जहरीले बीज और पॉलिश',
        },
        difficulty: 'Easy',
        timeRequiredMinutes: 5,
        requiredMaterials: {
          en: ['5-6 almonds', 'Half cup drinking water'],
          gu: ['૫-૬ બદામ', 'અડધો કપ પાણી'],
          hi: ['५-६ बादाम', 'आधा कप पानी'],
        },
        stepByStep: {
          en: [
            'Soak almonds in plain water for 4-6 hours.',
            'Peel off the brown outer skin by gently pinching between fingers.',
            'Examine the inner kernel: pure almonds peel smoothly and reveal ivory white flesh.',
            'Break a tiny crumb and taste: if intensely bitter with strong marzipan cyanide odor, spit immediately.',
          ],
          gu: [
            'બદામને ૪-૬ કલાક સાદા પાણીમાં પલાળો.',
            'આંગળી વડે દબાવીને બદામની કથ્થઈ છાલ ઉતારો.',
            'અસલી બદામની છાલ સરળતાથી ઉતરી જાય છે અને અંદરથી સફેદ માખણ જેવી નીકળે છે.',
            'જો સ્વાદમાં સખત કડવી લાગે તો તરત થૂંકી નાખો (તે જરદાળુની ઝેરી મીંજ છે).',
          ],
          hi: [
            'बादाम को ४-६ घंटे पानी में भिगोएं।',
            'छिलका उतारकर देखें: असली बादाम का छिलका आसानी से उतरता है।',
            'यदि चखने पर अत्यधिक कड़वा लगे तो तुरंत थूक दें।',
          ],
        },
        pureSampleResult: {
          en: 'Smooth sweet nutty taste, ivory kernel with natural oiliness; skin peels effortlessly after soaking.',
          gu: 'મીઠો, સ્વાદિષ્ટ અને તેલયુક્ત સ્વાદ; પલાળ્યા પછી છાલ સરળતાથી ઉતરી જાય છે.',
          hi: 'मीठा व स्वादिष्ट स्वाद, भीगने पर छिलका आसानी से अलग होना।',
        },
        adulteratedSampleResult: {
          en: 'Sharp bitter chemical taste indicates toxic wild apricot kernel adulteration.',
          gu: 'સખત કડવો સ્વાદ કડવી જરદાળુની ઝેરી મીંજ હોવાનું દર્શાવે છે.',
          hi: 'तीखा कड़वा स्वाद मिलावट का संकेत है।',
        },
        canDetect: {
          en: ['Bitter toxic kernels', 'Polishing residues on skin'],
          gu: ['કડવી ઝેરી બદામ'],
          hi: ['कड़वे जहरीले बादाम'],
        },
        cannotDetect: {
          en: ['Aflatoxin molds without lab screening'],
          gu: ['અદ્રશ્ય એફ્લાટોક્સિન ફૂગ'],
          hi: ['अदृश्य फंगस'],
        },
        safetyPrecautions: {
          en: ['Never swallow bitter kernels. Always consume soaked and peeled almonds.'],
          gu: ['કડવી બદામ ક્યારેય ગળી ન જવી. બદામ હંમેશા પલાળીને છાલ ઉતારીને જ ખાવી.'],
          hi: ['कड़वे बादाम कभी न खाएं। हमेशा भिगोकर छिलका उतारकर खाएं।'],
        },
      },
    ],
    labTesting: {
      requiredTestName: {
        en: 'Aflatoxin HPLC-FLD Testing & Cyanogenic Glycosides Assay',
        gu: 'એફ્લાટોક્સિન અને સાયનાઈડ લેબ ટેસ્ટ',
        hi: 'एफ्लाटॉक्सिन व सायनाइड टेस्ट',
      },
      whyLabNeeded: {
        en: 'FSSAI limits total aflatoxin in tree nuts to maximum 15 ppb.',
        gu: 'FSSAI નિયમ મુજબ બદામમાં ફૂગનું ઝેર ૧૫ ppb થી વધુ ન હોવું જોઈએ.',
        hi: 'FSSAI के अनुसार एफ्लाटॉक्सिन १५ ppb से अधिक नहीं होना चाहिए।',
      },
      equipmentAndChemicals: {
        en: ['HPLC with Fluorescence detector', 'Immunoaffinity columns'],
        gu: ['HPLC સિસ્ટમ'],
        hi: ['HPLC उपकरण'],
      },
      recommendedLabTypes: {
        en: ['NABL Accredited Nut & Food Testing Laboratory'],
        gu: ['NABL પ્રમાણિત લેબ'],
        hi: ['NABL प्रमाणित लैब'],
      },
      approxCostINR: '₹2,000 – ₹3,500',
      fssaiStandardRef: 'FSS (Contaminants, Toxins and Residues) Regulations – Tree nuts.',
      sampleSubmissionAdvice: {
        en: 'Submit 250g in vacuum-sealed bag.',
        gu: '૨૫૦ ગ્રામ બદામ વેક્યૂમ પેકેટમાં મોકલો.',
        hi: '२५० ग्राम बादाम भेजें।',
      },
    },
    healthDetails: {
      ayurvedicProps: {
        rasa: { en: 'Madhura (Sweet)', gu: 'મધુર (ગળ્યો રસ)', hi: 'मधुर रस' },
        guna: { en: 'Guru (Heavy), Snigdha (Unctuous)', gu: 'ગુરુ (ભારે), સ્નિગ્ધ, મેધ્ય', hi: 'गुरु, स्निग्ध, मेध्य' },
        virya: { en: 'Ushna (Heating in raw unsoaked state; balanced when soaked & peeled)', gu: 'ઉષ્ણ (પલાળીને છાલ ઉતારવાથી સમશીતોષ્ણ બને છે)', hi: 'उष्ण (भिगोने पर शांत)' },
        vipaka: { en: 'Madhura', gu: 'મધુર વિપાક', hi: 'मधुर' },
        doshaEffect: { en: 'Pacifies Vata; Increases Kapha and Pitta if consumed unsoaked with dry skin', gu: 'વાત શામક, મેધ્ય (બુદ્ધિવર્ધક), છાલ વગર પિત્ત-વાત સંતુલક', hi: 'वात शामक, बुद्धि बढ़ाने वाला' },
      },
      benefits: {
        en: ['Medhya Rasayana (supreme brain tonic enhancing memory and focus)', 'Rich in alpha-tocopherol Vitamin E nourishing skin and cardiovascular health', 'Strengthens ocular nerves and relieves mental fatigue', 'High natural mono-unsaturated fats supporting healthy cholesterol'],
        gu: ['મગજ, બુદ્ધિ અને યાદશક્તિ તેજ કરનાર સર્વોત્તમ મેધ્ય રસાયણ', 'વિટામિન E થી ભરપૂર, ચામડી ચમકદાર બનાવે છે અને હૃદયને સ્વસ્થ રાખે છે', 'આંખોના સ્નાયુઓને પોષણ આપે છે', 'શરીરની નબળાઈ દૂર કરી બળ વધારે છે'],
        hi: ['याददाश्त और एकाग्रता बढ़ाने वाला श्रेष्ठ मस्तिष्क टॉनिक', 'विटामिन E से भरपूर, त्वचा और दिल के लिए लाभकारी', 'शारीरिक कमजोरी दूर कर ताकत देता है'],
      },
      precautionsAndSideEffects: {
        en: ['Always soak overnight and PEEL off the brown skin (skin contains tannin enzyme inhibitors that impede digestion)', 'Do not consume more than 5-8 almonds daily'],
        gu: ['હંમેશા રાત્રે પલાળીને સવારે છાલ ઉતારીને જ ખાવી (છાલમાં ટેનિન હોવાથી પાચન બગાડે છે)', 'રોજ ૫ થી ૮ બદામથી વધારે ન ખાવી'],
        hi: ['हमेशा रात को भिगोकर सुबह छिलका उतारकर ही खाएं', 'दिन में ५-८ से ज्यादा न खाएं'],
      },
      whoShouldAvoid: {
        en: ['Severe tree nut allergic patients', 'Acute diarrhea / weak digestive fire'],
        gu: ['બદામની એલર્જી ધરાવતા લોકો', 'અતિશય અપચો કે ઝાડા થયા હોય ત્યારે'],
        hi: ['नट्स की एलर्जी वाले मरीज'],
      },
    },
  },
];
