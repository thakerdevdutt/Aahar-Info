import React from 'react';
import {
  X,
  PhoneCall,
  AlertTriangle,
  HeartPulse,
  ShieldCheck,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface EmergencyModalProps {
  language: Language;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ language, onClose }) => {
  const t = translations[language];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg sm:max-w-xl rounded-t-[32px] sm:rounded-3xl shadow-2xl border-t sm:border border-rose-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Drag handle */}
        <div className="sm:hidden w-full pt-2.5 pb-1 bg-gradient-to-r from-rose-950 to-red-950 flex justify-center">
          <div className="w-12 h-1.2 rounded-full bg-white/30" />
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-rose-800 via-rose-900 to-red-950 p-4 sm:p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title={t.close}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 pr-10">
            <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center text-rose-200 border border-white/20">
              <PhoneCall className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-200 bg-white/10 px-2.5 py-0.5 rounded-full inline-block mb-1">
                24x7 Emergency Protocols
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
                {t.emergencyTitle}
              </h2>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[75vh] text-stone-800">
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            {t.emergencySubtitle}
          </p>

          {/* Emergency Hotlines Box */}
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-700 text-white flex items-center justify-center shrink-0">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-rose-950">
                  National Poison Information Centre (AIIMS, New Delhi)
                </h4>
                <p className="text-base sm:text-lg font-extrabold text-rose-700 tracking-wide">
                  1800-116-117 <span className="text-xs font-semibold text-rose-800">(Toll-Free, 24/7)</span>
                </p>
                <p className="text-xs text-rose-900">
                  Direct emergency toxicological advice from medical specialists for accidental poisoning or acute ingestion.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-emerald-950">
                  FSSAI National Consumer Grievance Helpline
                </h4>
                <p className="text-base sm:text-lg font-extrabold text-emerald-800 tracking-wide">
                  1800-112-100 <span className="text-xs font-semibold text-emerald-800">(Toll-Free)</span>
                </p>
                <p className="text-xs text-emerald-900">
                  For lodging formal complaints against adulterated food vendors or hazardous packaged products.
                </p>
              </div>
            </div>
          </div>

          {/* Immediate Action Checklist */}
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              Immediate First-Aid Dos and Don'ts:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
                <p className="font-bold text-emerald-800 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  DO:
                </p>
                <ul className="space-y-1 text-stone-600">
                  <li>• Preserve sample & original wrapper in clean airtight container.</li>
                  <li>• Note purchase bill, shop location & time of meal.</li>
                  <li>• Keep patient hydrated with clean water or ORS.</li>
                  <li>• Visit the nearest hospital emergency room.</li>
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
                <p className="font-bold text-rose-800 flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5 text-rose-600" />
                  DO NOT:
                </p>
                <ul className="space-y-1 text-stone-600">
                  <li>• Do NOT force vomiting if corrosive chemical is suspected.</li>
                  <li>• Do NOT taste leftover food to "check if it is bad".</li>
                  <li>• Do NOT take random antibiotics without medical advice.</li>
                  <li>• Do NOT discard the original packaging or invoice.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-900 text-white text-xs font-bold transition-colors"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
