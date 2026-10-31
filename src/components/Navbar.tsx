import React from 'react';
import { ShieldCheck, PhoneCall, Sparkles, Camera, Building2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: 'browse' | 'ai-chat' | 'image-inspect' | 'labs';
  setActiveTab: (tab: 'browse' | 'ai-chat' | 'image-inspect' | 'labs') => void;
  onOpenEmergency: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  activeTab,
  setActiveTab,
  onOpenEmergency,
}) => {
  const t = translations[language];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <div 
            onClick={() => setActiveTab('browse')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform duration-200">
              <ShieldCheck className="w-7 h-7 text-emerald-100" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-emerald-950 font-serif">
                  {t.appName}
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100/80 text-emerald-800 border border-emerald-200">
                  FSSAI DART
                </span>
              </div>
              <p className="text-xs font-medium text-emerald-700 tracking-wide">
                {t.appTagline}
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => setActiveTab('browse')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                activeTab === 'browse'
                  ? 'bg-emerald-50 text-emerald-900 border border-emerald-200 shadow-2xs'
                  : 'text-stone-600 hover:text-emerald-800 hover:bg-stone-50'
              }`}
            >
              {t.allCategories}
            </button>

            <button
              onClick={() => setActiveTab('ai-chat')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                activeTab === 'ai-chat'
                  ? 'bg-emerald-50 text-emerald-900 border border-emerald-200 shadow-2xs'
                  : 'text-stone-600 hover:text-emerald-800 hover:bg-stone-50'
              }`}
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>{t.aiAdvisorTab}</span>
            </button>

            <button
              onClick={() => setActiveTab('image-inspect')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                activeTab === 'image-inspect'
                  ? 'bg-emerald-50 text-emerald-900 border border-emerald-200 shadow-2xs'
                  : 'text-stone-600 hover:text-emerald-800 hover:bg-stone-50'
              }`}
            >
              <Camera className="w-4 h-4 text-emerald-600" />
              <span>{t.imageUploadTab}</span>
            </button>

            <button
              onClick={() => setActiveTab('labs')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                activeTab === 'labs'
                  ? 'bg-emerald-50 text-emerald-900 border border-emerald-200 shadow-2xs'
                  : 'text-stone-600 hover:text-emerald-800 hover:bg-stone-50'
              }`}
            >
              <Building2 className="w-4 h-4 text-emerald-600" />
              <span>{t.directoryTab}</span>
            </button>
          </nav>

          {/* Right Action Bar: Language + Emergency */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Selector */}
            <div className="flex bg-stone-100 p-1 rounded-xl border border-stone-200 text-xs font-semibold">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1.5 rounded-lg transition-colors ${
                  language === 'en'
                    ? 'bg-white text-emerald-900 shadow-2xs font-bold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="English"
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('gu')}
                className={`px-2.5 py-1.5 rounded-lg transition-colors font-medium ${
                  language === 'gu'
                    ? 'bg-white text-emerald-900 shadow-2xs font-bold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="ગુજરાતી (Gujarati)"
              >
                ગુજરાતી
              </button>
              <button
                onClick={() => onLanguageChange('hi')}
                className={`px-2.5 py-1.5 rounded-lg transition-colors font-medium ${
                  language === 'hi'
                    ? 'bg-white text-emerald-900 shadow-2xs font-bold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="हिंदी (Hindi)"
              >
                हिंदी
              </button>
            </div>

            {/* Emergency Button */}
            <button
              onClick={onOpenEmergency}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 text-xs font-bold transition-all shadow-2xs active:scale-95"
              title="Emergency helpline & poisoning advice"
            >
              <PhoneCall className="w-3.5 h-3.5 animate-pulse text-rose-600" />
              <span className="hidden sm:inline">{t.emergencyHelpline}</span>
            </button>
          </div>
        </div>

        {/* Mobile Sub-Navigation Bar */}
        <div className="flex md:hidden overflow-x-auto py-2.5 gap-2 border-t border-stone-100 no-scrollbar">
          <button
            onClick={() => setActiveTab('browse')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-colors ${
              activeTab === 'browse'
                ? 'bg-emerald-700 text-white shadow-2xs'
                : 'bg-stone-100 text-stone-700'
            }`}
          >
            {t.allCategories}
          </button>
          <button
            onClick={() => setActiveTab('ai-chat')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-colors ${
              activeTab === 'ai-chat'
                ? 'bg-emerald-700 text-white shadow-2xs'
                : 'bg-stone-100 text-stone-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.aiAdvisorTab}</span>
          </button>
          <button
            onClick={() => setActiveTab('image-inspect')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-colors ${
              activeTab === 'image-inspect'
                ? 'bg-emerald-700 text-white shadow-2xs'
                : 'bg-stone-100 text-stone-700'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>{t.imageUploadTab}</span>
          </button>
          <button
            onClick={() => setActiveTab('labs')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-colors ${
              activeTab === 'labs'
                ? 'bg-emerald-700 text-white shadow-2xs'
                : 'bg-stone-100 text-stone-700'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>{t.directoryTab}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
