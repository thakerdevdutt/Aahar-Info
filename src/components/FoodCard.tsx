import React from 'react';
import { ShieldAlert, ArrowRight, Sparkles, TestTube2, AlertCircle } from 'lucide-react';
import { FoodItem, Language } from '../types';
import { translations } from '../data/translations';

interface FoodCardProps {
  food: FoodItem;
  language: Language;
  onSelect: (food: FoodItem) => void;
  onAskAi: (food: FoodItem) => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({
  food,
  language,
  onSelect,
  onAskAi,
}) => {
  const t = translations[language];

  const getSeverityStyle = (severity: 'Critical' | 'High' | 'Medium') => {
    switch (severity) {
      case 'Critical':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'High':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Medium':
        return 'bg-blue-50 text-blue-800 border-blue-200';
      default:
        return 'bg-stone-50 text-stone-700 border-stone-200';
    }
  };

  const getCategoryLabel = (cat: string) => {
    return t.categories[cat as keyof typeof t.categories] || cat;
  };

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 hover:border-emerald-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div className="p-5 sm:p-6">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-100">
            {getCategoryLabel(food.categoryId)}
          </span>

          <span
            className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border flex items-center gap-1 ${getSeverityStyle(
              food.riskSeverity
            )}`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>
              {food.riskSeverity === 'Critical'
                ? 'High Toxic Risk'
                : food.riskSeverity === 'High'
                ? 'Frequent Adulteration'
                : 'Commercial Dilution'}
            </span>
          </span>
        </div>

        {/* Title & Icon */}
        <div className="flex items-start gap-3.5 mb-3">
          <div className="w-12 h-12 rounded-2xl bg-stone-100/80 group-hover:bg-emerald-50 text-2xl flex items-center justify-center shrink-0 border border-stone-200 group-hover:border-emerald-200 transition-colors">
            {food.icon}
          </div>
          <div>
            <h3 className="font-bold text-lg text-stone-900 group-hover:text-emerald-950 transition-colors leading-snug">
              {food.name[language] || food.name.en}
            </h3>
            {language !== 'en' && (
              <p className="text-xs text-stone-500 font-medium">
                {food.name.en}
              </p>
            )}
          </div>
        </div>

        {/* Overview Subtitle */}
        <p className="text-xs text-stone-600 line-clamp-2 mb-4 leading-relaxed">
          {food.subtitle[language] || food.subtitle.en}
        </p>

        {/* Key Adulterants Pills */}
        <div className="mb-4">
          <p className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <AlertCircle className="w-3 h-3 text-stone-400" />
            {t.adulterantsFound}:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {food.adulterants.slice(0, 3).map((ad, i) => (
              <span
                key={i}
                className="text-xs px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 font-medium border border-stone-200/60"
              >
                {ad.name[language] || ad.name.en}
              </span>
            ))}
            {food.adulterants.length > 3 && (
              <span className="text-xs px-1.5 py-0.5 text-stone-500 font-medium">
                +{food.adulterants.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Rapid Test Count */}
        <div className="flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50/70 px-3 py-2 rounded-xl border border-emerald-100/80">
          <TestTube2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="font-medium">
            {food.homeTests.length} verified household test{food.homeTests.length > 1 ? 's' : ''} available
          </span>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-5 py-3.5 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between gap-2">
        <button
          onClick={() => onAskAi(food)}
          className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-emerald-50 transition-colors"
          title="Ask AI questions about this food"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Ask AI</span>
        </button>

        <button
          onClick={() => onSelect(food)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-xs group-hover:translate-x-0.5"
        >
          <span>{t.viewDetails}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
