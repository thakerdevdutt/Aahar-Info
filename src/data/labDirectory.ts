import { LocalizedString } from '../types';

export interface LabCenter {
  name: LocalizedString;
  location: LocalizedString;
  state: string;
  type: 'Government Referral' | 'NABL Accredited' | 'State FDCA' | 'Research Institute';
  specialization: LocalizedString;
  phone: string;
  website: string;
}

export const accreditedLabs: LabCenter[] = [
  {
    name: {
      en: 'CALF - Centre for Analysis & Learning in Livestock and Food (NDDB)',
      gu: 'CALF લેબોરેટરી - રાષ્ટ્રીય ડેરી વિકાસ બોર્ડ (NDDB)',
      hi: 'सीएएलएफ (CALF) - राष्ट्रीय डेयरी विकास बोर्ड (NDDB)',
    },
    location: {
      en: 'Anand, Gujarat',
      gu: 'આણંદ, ગુજરાત',
      hi: 'आणंद, गुजरात',
    },
    state: 'Gujarat',
    type: 'NABL Accredited',
    specialization: {
      en: 'Milk, Desi Ghee (RM Value, Fatty acids), Honey (C3/C4 NMR & EA-IRMS), Edible Oils',
      gu: 'દૂધ, ઘી (RM વેલ્યુ), મધ (NMR અને EA-IRMS ટેસ્ટ), ખાદ્ય તેલ',
      hi: 'दूध, देसी घी (आरएम वैल्यू), शहद (एनएमआर टेस्ट), खाद्य तेल',
    },
    phone: '+91-2692-260148 / 260149',
    website: 'https://www.nddb.coop/services/calf',
  },
  {
    name: {
      en: 'Food & Drugs Laboratory, Food and Drug Control Administration (FDCA)',
      gu: 'ફૂડ એન્ડ ડ્રગ્સ લેબોરેટરી (FDCA ગુજરાત સરકાર)',
      hi: 'खाद्य एवं औषधि प्रयोगशाला (FDCA गुजरात सरकार)',
    },
    location: {
      en: 'Vadodara, Gujarat',
      gu: 'વડોદરા, ગુજરાત',
      hi: 'वडोदरा, गुजरात',
    },
    state: 'Gujarat',
    type: 'State FDCA',
    specialization: {
      en: 'State statutory testing for spices, sweets, dairy, adulteration enforcement samples',
      gu: 'રાજ્ય કાનૂની નમૂના પરીક્ષણ - મસાલા, દૂધ, તેલ, મીઠાઈ',
      hi: 'राज्य वैधानिक परीक्षण - मसाले, दूध, तेल, मिलावटी खाद्य नमूने',
    },
    phone: '+91-265-2782012',
    website: 'https://fdca.gujarat.gov.in',
  },
  {
    name: {
      en: 'National Food Laboratory (NFL), FSSAI',
      gu: 'નેશનલ ફૂડ લેબોરેટરી (NFL), FSSAI',
      hi: 'राष्ट्रीय खाद्य प्रयोगशाला (NFL), FSSAI',
    },
    location: {
      en: 'Ghaziabad, NCR / Kolkata, West Bengal',
      gu: 'ગાઝિયાબાદ (દિલ્હી NCR) / કોલકાતા (પશ્ચિમ બંગાળ)',
      hi: 'गाजियाबाद (दिल्ली NCR) / कोलकाता (पश्चिम बंगाल)',
    },
    state: 'National',
    type: 'Government Referral',
    specialization: {
      en: 'Apex referral laboratory for dispute testing, import clearances, heavy metals, pesticide residues',
      gu: 'FSSAI ની સર્વોચ્ચ રેફરલ લેબ - ભારે ધાતુઓ, જંતુનાશકો, કાનૂની વિવાદ નમૂના',
      hi: 'सर्वोच्च रेफरल प्रयोगशाला - भारी धातुएं, कीटनाशक अवशेष, कानूनी विवाद नमूने',
    },
    phone: '1800-112-100',
    website: 'https://www.fssai.gov.in',
  },
  {
    name: {
      en: 'CSIR - Central Food Technological Research Institute (CFTRI)',
      gu: 'CSIR - સેન્ટ્રલ ફૂડ ટેકનોલોજીકલ રિસર્ચ ઇન્સ્ટિટ્યૂટ (CFTRI)',
      hi: 'सीएसआईआर - केंद्रीय खाद्य प्रौद्योगिकी अनुसंधान संस्थान (CFTRI)',
    },
    location: {
      en: 'Mysuru, Karnataka',
      gu: 'મૈસૂર, કર્ણાટક',
      hi: 'मैसूर, कर्नाटक',
    },
    state: 'Karnataka',
    type: 'Research Institute',
    specialization: {
      en: 'Pesticide multi-residue, food contaminants, sensory analysis, authenticity fingerprinting',
      gu: 'જંતુનાશક દવાઓ, અદ્યતન રાસાયણિક તપાસ, ઓર્ગેનિક પ્રમાણિકતા',
      hi: 'कीटनाशक अवशेष, खाद्य संदूषक, प्रामाणिकता परीक्षण',
    },
    phone: '+91-821-2515910',
    website: 'https://www.cftri.res.in',
  },
  {
    name: {
      en: 'Spices Board Quality Evaluation Laboratory',
      gu: 'સ્પાઈસીસ બોર્ડ ગુણવત્તા મૂલ્યાંકન પ્રયોગશાળા',
      hi: 'मसाला बोर्ड गुणवत्ता मूल्यांकन प्रयोगशाला',
    },
    location: {
      en: 'Navi Mumbai, Maharashtra & Cochin, Kerala',
      gu: 'નવી મુંબઈ (મહારાષ્ટ્ર) અને કોચીન (કેરળ)',
      hi: 'नवी मुंबई (महाराष्ट्र) और कोचीन (केरल)',
    },
    state: 'Maharashtra / Kerala',
    type: 'NABL Accredited',
    specialization: {
      en: 'Turmeric lead chromate, Sudan dyes I-IV in chillies, Aflatoxins in spices, Ethylene Oxide',
      gu: 'હળદરમાં સીસું (લીડ), મરચાંમાં સુદાન કલર, મસાલામાં એફ્લાટોક્સિન ફૂગ',
      hi: 'हल्दी में लेड क्रोमेट, मिर्च में सूडान डाई, मसालों में एफ्लाटॉक्सिन',
    },
    phone: '+91-22-27787200',
    website: 'https://www.indianspices.com',
  },
  {
    name: {
      en: 'Eurofins Analytical Services India Pvt. Ltd.',
      gu: 'યુરોફિન્સ એનાલિટિકલ સર્વિસીસ ઇન્ડિયા',
      hi: 'यूरोफिन्स एनालिटिकल सर्विसेज इंडिया',
    },
    location: {
      en: 'Bengaluru / Ahmedabad / Delhi NCR',
      gu: 'અમદાવાદ / બેંગલોર / દિલ્હી NCR',
      hi: 'अहमदाबाद / बेंगलुरु / दिल्ली NCR',
    },
    state: 'Multi-Location',
    type: 'NABL Accredited',
    specialization: {
      en: 'NMR profiling for honey, antibiotic residues, micro-toxins, global export compliance',
      gu: 'મધ માટે NMR ટેસ્ટ, એન્ટિબાયોટિક્સ અને માઇક્રોટોક્સિન્સ',
      hi: 'शहद के लिए एनएमआर, एंटीबायोटिक्स, माइक्रो-टॉक्सिन परीक्षण',
    },
    phone: '+91-80-67223300',
    website: 'https://www.eurofins.in',
  },
];

export const complaintProcedure = {
  title: {
    en: 'How to File a Food Adulteration Complaint on FSSAI FoSCoS',
    gu: 'FSSAI FoSCoS પોર્ટલ પર ભેળસેળ સામે ફરિયાદ કેવી રીતે નોંધાવવી',
    hi: 'FSSAI FoSCoS पोर्टल पर मिलावट के खिलाफ शिकायत कैसे दर्ज करें',
  },
  steps: [
    {
      step: 1,
      title: {
        en: 'Preserve the Evidence & Receipt',
        gu: 'પુરાવા અને બિલ સાચવી રાખો',
        hi: 'सबूत और बिल सुरक्षित रखें',
      },
      desc: {
        en: 'Keep the original retail cash memo/tax invoice, food packaging with batch number, manufacturing date, and expiry date. Store unopened or remaining food in clean airtight packaging.',
        gu: 'દુકાનદારનું બિલ, બેચ નંબર અને ઉત્પાદન તારીખ વાળું પેકિંગ અને વધેલો ખોરાક કાચ કે સ્વચ્છ પ્લાસ્ટિકમાં સીલ કરી રાખો.',
        hi: 'दुकानदार का बिल, बैच नंबर व एक्सपायरी वाला मूल पैकेट और बचा हुआ भोजन सीलबंद डिब्बे में रखें।',
      },
    },
    {
      step: 2,
      title: {
        en: 'Access the FSSAI Consumer Portal',
        gu: 'FSSAI કન્ઝ્યુમર પોર્ટલ (FoSCoS) ખોલો',
        hi: 'FSSAI उपभोक्ता पोर्टल (FoSCoS) खोलें',
      },
      desc: {
        en: 'Visit https://foscos.fssai.gov.in or download the "Food Safety Connect" Mobile App (Android & iOS).',
        gu: 'https://foscos.fssai.gov.in વેબસાઈટની મુલાકાત લો અથવા "Food Safety Connect" મોબાઈલ એપ ડાઉનલોડ કરો.',
        hi: 'वेबसाइट https://foscos.fssai.gov.in पर जाएं या "Food Safety Connect" ऐप डाउनलोड करें।',
      },
    },
    {
      step: 3,
      title: {
        en: 'Submit Grievance Details',
        gu: 'ફરિયાદની વિગતો અને ફોટા અપલોડ કરો',
        hi: 'शिकायत का विवरण व फोटो अपलोड करें',
      },
      desc: {
        en: 'Select "Consumer Grievance", enter the store/brand address, FSSAI license number (printed on packet), describe suspected adulteration, and upload photos of invoice and product.',
        gu: '"Consumer Grievance" પસંદ કરો, દુકાનનું સરનામું, પેકેટ પર છાપેલો FSSAI લાઇસન્સ નંબર, શંકાસ્પદ ભેળસેળની વિગતો અને ફોટા અપલોડ કરો.',
        hi: '"Consumer Grievance" चुनें, दुकान का पता, FSSAI लाइसेंस नंबर, मिलावट की जानकारी और तस्वीरें अपलोड करें।',
      },
    },
    {
      step: 4,
      title: {
        en: 'Designated Officer Inspection',
        gu: 'ફૂડ સેફ્ટી ઓફિસર દ્વારા તપાસ અને દરોડા',
        hi: 'खाद्य सुरक्षा अधिकारी द्वारा निरीक्षण व जांच',
      },
      desc: {
        en: 'A designated Food Safety Officer (FSO) is legally mandated to inspect the vendor premises, seize statutory samples, and send them to the State Food Laboratory under the FSS Act 2006.',
        gu: 'ફૂડ સેફ્ટી ઓફિસર દુકાન કે ફેક્ટરીની મુલાકાત લઈને કાનૂની નમૂના સીલ કરી સ્ટેટ ફૂડ લેબોરેટરીમાં મોકલશે.',
        hi: 'खाद्य सुरक्षा अधिकारी विक्रेता की दुकान का औचक निरीक्षण कर नमूने जब्त करेगा और सरकारी लैब में जांच हेतु भेजेगा।',
      },
    },
  ],
};
