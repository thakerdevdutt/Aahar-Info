import React from 'react';
import { X, Smartphone, Download, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface ApkDownloadModalProps {
  language: Language;
  onClose: () => void;
  deferredPrompt?: any;
}

export const ApkDownloadModal: React.FC<ApkDownloadModalProps> = ({
  language,
  onClose,
  deferredPrompt,
}) => {
  const appUrl = window.location.origin;

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === 'accepted') {
        console.log('User accepted app install');
      }
      onClose();
    } else {
      alert(
        language === 'gu'
          ? 'તમારા બ્રાઉઝરમાં ઉપર જમણી બાજુના ૩ ટપકાં (Menu) પર ક્લિક કરી "Add to Home screen" (હોમ સ્ક્રીન પર ઉમેરો) પસંદ કરો.'
          : 'Please tap the 3 dots in your mobile browser menu and select "Add to Home screen".'
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-t-[32px] sm:rounded-3xl shadow-2xl border-t sm:border border-stone-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-900 to-teal-950 text-white p-5 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl">
              📱
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-serif">
                {language === 'gu' ? 'મોબાઇલમાં એપ / APK ઇન્સ્ટોલ કરો' : 'Install Mobile App / APK'}
              </h3>
              <p className="text-xs text-emerald-200">
                Food Purity Checker • શુદ્ધ આહાર
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4 text-stone-800 text-xs sm:text-sm">
          {/* Option 1: Direct 1-Click Install */}
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shrink-0">
                ૧
              </span>
              <h4 className="font-bold text-emerald-950 text-sm">
                {language === 'gu' ? 'મોબાઇલમાં સીધી એપ બનાવો (PWA - સૌથી સરળ)' : 'Direct Mobile Install'}
              </h4>
            </div>
            <p className="text-xs text-emerald-900 leading-relaxed">
              {language === 'gu'
                ? 'કોઈપણ APK ડાઉનલોડ કર્યા વગર ૧ ક્લિકમાં તમારા ફોનની હોમ સ્ક્રીન પર એપ આઇકન સાથે ઇન્સ્ટોલ કરો.'
                : 'Install directly on your phone home screen with full app experience.'}
            </p>
            <button
              onClick={handleInstallClick}
              className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all"
            >
              <Smartphone className="w-4 h-4" />
              <span>{language === 'gu' ? 'મોબાઇલમાં ઇન્સ્ટોલ કરો' : 'Install on Mobile'}</span>
            </button>
          </div>

          {/* Option 2: PWABuilder for standalone .APK file */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stone-700 text-white flex items-center justify-center font-bold text-xs shrink-0">
                ૨
              </span>
              <h4 className="font-bold text-stone-900 text-sm">
                {language === 'gu' ? '.APK ફાઇલ ડાઉનલોડ કરવી હોય તો' : 'Download Standalone .APK File'}
              </h4>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              {language === 'gu'
                ? 'PWABuilder દ્વારા ૧ મિનિટમાં તમારા પ્રોજેક્ટની અધિકૃત એન્ડ્રોઇડ APK બનાવી શકાય છે.'
                : 'Generate a signed .apk file using Microsoft PWABuilder in 1 minute.'}
            </p>
            <a
              href={`https://www.pwabuilder.com?url=${encodeURIComponent(appUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-stone-800 hover:bg-stone-900 text-white font-bold text-xs shadow-sm transition-all"
            >
              <Download className="w-4 h-4" />
              <span>{language === 'gu' ? 'PWABuilder થી APK જનરેટ કરો' : 'Generate APK via PWABuilder'}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Chrome Manual Steps */}
          <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-[11px] leading-relaxed">
            <p className="font-bold mb-1">
              {language === 'gu' ? '💡 ક્રોમ બ્રાઉઝર મેન્યુઅલ રીત:' : 'Chrome browser manual method:'}
            </p>
            <p>
              {language === 'gu'
                ? 'મોબાઇલ ક્રોમ બ્રાઉઝરમાં ઉપર જમણી બાજુ ⋮ (3 ટપકાં) પર ક્લિક કરી "Add to Home screen" (હોમ સ્ક્રીન પર ઉમેરો) દબાવો.'
                : 'In Chrome, tap the 3 vertical dots at top-right and select "Add to Home screen".'}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stone-300 hover:bg-stone-400 text-stone-800 text-xs font-bold transition-colors"
          >
            {language === 'gu' ? 'બંધ કરો' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
