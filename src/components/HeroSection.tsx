import React from 'react';
import { Search, X, AlertTriangle, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroSectionProps {
  language: Language;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectSuggestion: (foodName: string) => void;
  onOpenAiWithPrompt?: (prompt: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  searchQuery,
  setSearchQuery,
  onSelectSuggestion,
}) => {
  const t = translations[language];

  const popularKeywords = [
    { en: 'Milk', gu: 'દૂધ', hi: 'दूध' },
    { en: 'Turmeric', gu: 'હળદર', hi: 'हल्दी' },
    { en: 'Desi Ghee', gu: 'દેશી ઘી', hi: 'देसी घी' },
    { en: 'Honey', gu: 'મધ', hi: 'शहद' },
    { en: 'Mustard Oil', gu: 'સરસવ તેલ', hi: 'सरसों तेल' },
    { en: 'Silver Vark', gu: 'ચાંદી વરખ', hi: 'चांदी का वर्क' },
    { en: 'Black Pepper', gu: 'કાળા મરી', hi: 'काली मिर्च' },
    { en: 'Paneer', gu: 'પનીર', hi: 'पनीर' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-stone-50/40 to-white pt-10 pb-8 border-b border-emerald-100/60">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-amber-100/30 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Verification Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-emerald-900 border border-emerald-200 text-xs font-semibold mb-4 shadow-2xs">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>FSSAI DART Verified Testing Protocols • ભારત સરકાર માન્ય ધોરણો</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.18] max-w-4xl mx-auto font-serif">
          {t.heroHeadline}
        </h1>

        {/* Subheadline */}
        <p className="mt-4 text-base sm:text-lg text-stone-600 max-w-3xl mx-auto font-normal leading-relaxed">
          {t.heroSubheadline}
        </p>

        {/* Search Bar */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-emerald-700">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-12 pr-12 py-4 rounded-2xl bg-white border-2 border-emerald-200/90 shadow-lg shadow-emerald-900/5 text-stone-800 text-base placeholder-stone-400 focus:outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-stone-400 hover:text-stone-700 transition-colors"
                title="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Quick Suggestions Tags */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs">
            <span className="text-stone-500 font-medium mr-1 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Popular:
            </span>
            {popularKeywords.map((item, idx) => {
              const label = item[language] || item.en;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setSearchQuery(label);
                    onSelectSuggestion(label);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-white/90 hover:bg-emerald-50 text-stone-700 hover:text-emerald-900 border border-stone-200/80 hover:border-emerald-300 font-medium transition-all shadow-2xs"
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Essential Safety Banner */}
        <div className="mt-8 max-w-3xl mx-auto text-left rounded-2xl bg-amber-50/90 border border-amber-200 p-4 sm:p-5 shadow-xs">
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-amber-100 text-amber-800 shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-amber-950 flex items-center gap-2">
                <span>{t.safetyBannerTitle}</span>
                <span className="text-[11px] font-normal px-2 py-0.5 rounded bg-amber-200/60 text-amber-900">
                  FSSAI Guideline
                </span>
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-amber-900 leading-relaxed">
                {t.safetyBannerText}
              </p>
            </div>
          </div>
        </div>

        {/* Feature Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-stone-600 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>FSSAI DART Protocols</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>NABL Accredited Labs</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>AI Multilingual Support (EN / GU / HI)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>No Dangerous Kitchen Reagents</span>
          </div>
        </div>
      </div>
    </section>
  );
};
