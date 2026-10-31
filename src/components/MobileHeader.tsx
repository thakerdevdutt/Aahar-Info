import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface MobileHeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenEmergency?: () => void;
  onInstallApp?: () => void;
  isInstallable?: boolean;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  language,
  onLanguageChange,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-2xs safe-area-top">
      <div className="max-w-md mx-auto px-4 py-2.5 flex items-center justify-between gap-2">
        {/* Brand: Just "આહાર ઇન્ફો" */}
        <div className="flex items-center gap-2.5 select-none">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white shadow-xs">
            <ShieldCheck className="w-5 h-5 text-emerald-100" />
          </div>
          <h1 className="font-extrabold text-lg leading-none text-emerald-950 font-serif tracking-tight">
            {language === 'gu' ? 'આહાર ઇન્ફો' : language === 'hi' ? 'आहार इन्फो' : 'Aahar Info'}
          </h1>
        </div>

        {/* Right Actions: Clean Language Selector */}
        <div className="flex items-center gap-1 bg-stone-100 p-0.5 rounded-lg border border-stone-200 text-[11px] font-semibold">
          <button
            onClick={() => onLanguageChange('gu')}
            className={`px-2 py-1 rounded-md transition-all ${
              language === 'gu'
                ? 'bg-emerald-800 text-white font-bold shadow-2xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            ગુજ
          </button>
          <button
            onClick={() => onLanguageChange('hi')}
            className={`px-2 py-1 rounded-md transition-all ${
              language === 'hi'
                ? 'bg-emerald-800 text-white font-bold shadow-2xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            हिં
          </button>
          <button
            onClick={() => onLanguageChange('en')}
            className={`px-2 py-1 rounded-md transition-all ${
              language === 'en'
                ? 'bg-emerald-800 text-white font-bold shadow-2xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};
