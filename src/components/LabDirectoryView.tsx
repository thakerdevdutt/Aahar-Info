import React, { useState } from 'react';
import {
  Building2,
  ExternalLink,
  Phone,
  FileText,
  ShieldCheck,
  CheckCircle2,
  TestTube2,
  HelpCircle,
  Download,
  PhoneCall,
  Settings,
  Sparkles,
} from 'lucide-react';
import { accreditedLabs, complaintProcedure } from '../data/labDirectory';
import { Language } from '../types';
import { translations } from '../data/translations';

interface LabDirectoryViewProps {
  language: Language;
  onOpenEmergency?: () => void;
  onInstallApp?: () => void;
}

export const LabDirectoryView: React.FC<LabDirectoryViewProps> = ({
  language,
  onOpenEmergency,
  onInstallApp,
}) => {
  const t = translations[language];
  const [filterState, setFilterState] = useState<string>('All');

  const states = ['All', 'Gujarat', 'National', 'Karnataka', 'Maharashtra / Kerala', 'Multi-Location'];

  const filteredLabs = filterState === 'All'
    ? accreditedLabs
    : accreditedLabs.filter((lab) => lab.state === filterState);

  const kitchenKitItems = [
    {
      name: { en: 'Tincture Iodine (or Betadine)', gu: 'ટિંચર આયોડિન (અથવા બેટાડિન)', hi: 'टिंचर आयोडीन (या बीटाडीन)' },
      use: { en: 'Detects starch/flour in milk, paneer, mawa, ghee', gu: 'દૂધ, પનીર, માવામાં સ્ટાર્ચ અને લોટ પકડવા', hi: 'दूध, पनीर और मावे में स्टार्च व मैदा की पहचान' },
      available: 'Any medical chemist store (~₹30)',
    },
    {
      name: { en: 'Clear Glass Tumblers / Test Tubes', gu: 'કાચનો પારદર્શક ગ્લાસ / કાચની નળી', hi: 'पारदर्शी कांच का गिलास / परखनली' },
      use: { en: 'For settling and flotation tests (turmeric, chilli, salt, honey)', gu: 'હળદર, મરચું, મીઠું, મધના ફ્લોટેશન ટેસ્ટ માટે', hi: 'हल्दी, मिर्च, नमक और शहद के फैलाव परीक्षण हेतु' },
      available: 'Kitchen glassware',
    },
    {
      name: { en: 'Household Small Magnet', gu: 'નાનો ચુંબક', hi: 'छोटा घरेलू चुंबक' },
      use: { en: 'Detects iron filings in tea leaves and suji/rava', gu: 'ચા અને રવામાં લોખંડની રજકણ શોધવા', hi: 'चाय पत्ती व सूजी में लोहे का बुरादा जांचने के लिए' },
      available: 'Fridge magnet or hardware store',
    },
    {
      name: { en: 'White Filter Paper / Tissue Napkins', gu: 'સફેદ ફિલ્ટર પેપર / ટિશ્યુ પેપર', hi: 'सफेद फिल्टर पेपर या टिश्यू' },
      use: { en: 'Detects synthetic dyes in tea and moisture in honey', gu: 'ચામાં કેમિકલ કલર અને મધમાં ભેજ તપાસવા', hi: 'चाय में कृत्रिम रंग जांचने हेतु' },
      available: 'Stationery shop or kitchen roll',
    },
    {
      name: { en: 'Lemon Juice / Dilute Vinegar', gu: 'લીંબુનો રસ / વિનેગર', hi: 'नींबू का रस / सिरका' },
      use: { en: 'Mild acid test for chalk powder and Metanil yellow', gu: 'ચોક પાવડર અને મેટાનિલ યલો રંગ ચકાસવા', hi: 'चॉक पाउडर और मेटानिल येलो की घरेलू जांच' },
      available: 'Kitchen grocery',
    },
  ];

  return (
    <div className="w-full px-3.5 py-3 space-y-4 overflow-x-hidden">
      {/* Settings Title Header */}
      <div className="flex items-center justify-between pb-1">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-800 text-white flex items-center justify-center">
            <Settings className="w-4 h-4" />
          </div>
          <h1 className="text-lg font-extrabold text-stone-900 font-serif">
            {language === 'gu' ? 'સેટિંગ્સ અને ઉપયોગી સુવિધાઓ' : language === 'hi' ? 'सेटिंग्स एवं सुविधाएं' : 'Settings & Utilities'}
          </h1>
        </div>
      </div>

      {/* Developer Yashvee Thaker Credit Card */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950 via-teal-950 to-stone-900 text-white shadow-md border border-emerald-700/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white flex items-center justify-center font-bold text-xl shadow-inner border border-white/20 shrink-0">
            👨‍💻
          </div>
          <div>
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/30 text-[10px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Application Developer</span>
            </div>
            <h2 className="text-base font-extrabold text-white tracking-wide mt-1">
              Yashvee Thaker - 7878413535
            </h2>
            <p className="text-[11px] text-emerald-200 mt-0.5">
              {language === 'gu'
                ? 'ખાદ્ય શુદ્ધતા ચકાસણી અને આયુર્વેદિક સ્વાસ્થ્ય માહિતી'
                : language === 'hi'
                ? 'खाद्य शुद्धता परीक्षण और आयुर्वेदिक स्वास्थ्य गाइड'
                : 'Food Purity Verification & Ayurvedic Health Guide'}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Utilities: APK Download + SOS Helpline */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* APK Download Button */}
        <button
          onClick={onInstallApp}
          className="p-3.5 rounded-2xl bg-white hover:bg-emerald-50/70 border border-emerald-200 text-left transition-all active:scale-98 shadow-2xs flex flex-col justify-between group cursor-pointer"
        >
          <div className="flex items-center justify-between w-full">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-700 to-teal-800 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <Download className="w-5 h-5 text-emerald-100" />
            </div>
            <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-200">
              APK
            </span>
          </div>
          <div className="mt-2.5">
            <h3 className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-emerald-900">
              {language === 'gu' ? 'APK ડાઉનલોડ' : language === 'hi' ? 'APK डाउनलोड' : 'Download APK'}
            </h3>
            <p className="text-[10px] text-stone-500 mt-0.5 leading-tight">
              {language === 'gu' ? 'મોબાઇલમાં એપ ઇન્સ્ટોલ કરો' : language === 'hi' ? 'मोबाइल में सीधे चलाएं' : 'Install on Mobile'}
            </p>
          </div>
        </button>

        {/* SOS Helpline Button */}
        <button
          onClick={onOpenEmergency}
          className="p-3.5 rounded-2xl bg-white hover:bg-rose-50/70 border border-rose-200 text-left transition-all active:scale-98 shadow-2xs flex flex-col justify-between group cursor-pointer"
        >
          <div className="flex items-center justify-between w-full">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-600 to-red-700 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <PhoneCall className="w-5 h-5 animate-pulse text-white" />
            </div>
            <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-rose-100 text-rose-900 border border-rose-200">
              24/7 SOS
            </span>
          </div>
          <div className="mt-2.5">
            <h3 className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-rose-900">
              {language === 'gu' ? 'કટોકટી હેલ્પલાઇન (SOS)' : language === 'hi' ? 'आपातकालीन हेल्पलाइन' : 'Emergency SOS'}
            </h3>
            <p className="text-[10px] text-stone-500 mt-0.5 leading-tight">
              {language === 'gu' ? 'FSSAI 1914 & AIIMS પોઇઝન' : language === 'hi' ? 'FSSAI 1914 व पॉइजन' : 'FSSAI 1914 & Poison'}
            </p>
          </div>
        </button>
      </div>

      {/* Lab Directory Header */}
      <div className="pt-2 text-center max-w-3xl mx-auto space-y-1.5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-[11px] font-semibold">
          <Building2 className="w-3.5 h-3.5 text-emerald-700" />
          <span>FSSAI & NABL Network • માન્યતા પ્રાપ્ત લેબોરેટરીઝ</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
          {t.officialLaboratoriesTitle}
        </h2>
        <p className="text-xs text-stone-600 leading-relaxed">
          {t.officialLaboratoriesDesc}
        </p>
      </div>

      {/* Section 1: Laboratory Directory */}
      <div className="space-y-4">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-stone-500 uppercase tracking-wider mr-1">
            Region:
          </span>
          {states.map((st) => (
            <button
              key={st}
              onClick={() => setFilterState(st)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filterState === st
                  ? 'bg-emerald-700 text-white shadow-2xs'
                  : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredLabs.map((lab, i) => (
            <div
              key={i}
              className="p-5 rounded-3xl bg-white border border-stone-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {lab.type}
                  </span>
                  <span className="text-xs text-stone-500 font-medium">{lab.state}</span>
                </div>

                <h3 className="font-bold text-sm text-stone-900 line-clamp-2 leading-snug">
                  {lab.name[language] || lab.name.en}
                </h3>
                <p className="text-xs text-stone-500 font-medium mt-0.5">
                  {lab.location[language] || lab.location.en}
                </p>

                <div className="mt-3 p-2.5 rounded-xl bg-stone-50 border border-stone-100 text-xs text-stone-700">
                  <span className="font-bold text-stone-900">Key Testing: </span>
                  <span>{lab.specialization[language] || lab.specialization.en}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600 font-medium">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  {lab.phone}
                </span>

                <a
                  href={lab.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:text-emerald-900 flex items-center gap-1 font-semibold"
                >
                  <span>Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: FoSCoS Grievance Complaint Guide */}
      <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 font-serif">
              {complaintProcedure.title[language] || complaintProcedure.title.en}
            </h2>
            <p className="text-xs text-stone-500">
              Legal procedure under the Food Safety and Standards Act, 2006
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {complaintProcedure.steps.map((st) => (
            <div
              key={st.step}
              className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex items-start gap-3.5"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white font-bold text-sm flex items-center justify-center shrink-0">
                {st.step}
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-stone-900">
                  {st.title[language] || st.title.en}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {st.desc[language] || st.desc.en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Essential Kitchen Rapid Test Kit Checklist */}
      <div className="bg-stone-50 rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <TestTube2 className="w-5 h-5 text-emerald-700" />
          <h2 className="text-lg font-bold text-stone-900 font-serif">
            Essential Kitchen Adulteration Testing Kit (FSSAI DART)
          </h2>
        </div>
        <p className="text-xs text-stone-600">
          You do not need expensive equipment for initial screening. Keep these simple household items ready in your pantry:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
          {kitchenKitItems.map((item, i) => (
            <div
              key={i}
              className="p-3.5 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-1.5"
            >
              <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{item.name[language] || item.name.en}</span>
              </div>
              <p className="text-[11px] text-stone-600 leading-tight">
                {item.use[language] || item.use.en}
              </p>
              <p className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
                {item.available}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
