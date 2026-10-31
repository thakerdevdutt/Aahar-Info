import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  AlertTriangle,
  TestTube2,
  Building2,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
  ExternalLink,
  Info,
  ShieldAlert,
  Flame,
  Leaf,
  Heart,
  Ban,
  Check,
} from 'lucide-react';
import { FoodItem, Language } from '../types';
import { translations } from '../data/translations';

interface FoodDetailModalProps {
  food: FoodItem;
  language: Language;
  onClose: () => void;
  onAskAi: (food: FoodItem, initialQuestion?: string) => void;
}

export const FoodDetailModal: React.FC<FoodDetailModalProps> = ({
  food,
  language,
  onClose,
  onAskAi,
}) => {
  const t = translations[language];
  const [activeTab, setActiveTab] = useState<'all-in-one' | 'home-test' | 'ayurvedic' | 'lab-test' | 'risks'>('all-in-one');
  const [selectedTestIndex, setSelectedTestIndex] = useState<number>(0);

  const activeTest = food.homeTests[selectedTestIndex] || food.homeTests[0];
  const health = food.healthDetails;

  // Reusable Ayurvedic & Health Benefits Section
  const renderAyurvedicContent = () => (
    <div className="space-y-4 pt-2">
      <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-amber-50 to-emerald-50 border border-emerald-300 shadow-2xs">
        <div className="flex items-center gap-2 mb-1">
          <Leaf className="w-5 h-5 text-emerald-800" />
          <h3 className="font-bold text-base text-stone-900 font-serif">
            {t.ayurvedicTitle}
          </h3>
        </div>
        <p className="text-xs text-stone-600">
          {t.ayurvedicSubtitle}
        </p>
      </div>

      {/* Ayurvedic Classical Properties Grid */}
      {health?.ayurvedicProps ? (
        <div className="space-y-3">
          <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-300/60 flex items-start gap-2.5">
            <Flame className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block">
                {t.doshaImpact}
              </span>
              <p className="text-sm font-bold text-amber-950 mt-0.5">
                {health.ayurvedicProps.doshaEffect[language] || health.ayurvedicProps.doshaEffect.en}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <span className="text-[10px] font-bold text-stone-500 uppercase block mb-0.5">
                {t.viryaPotency}
              </span>
              <span className="text-xs font-bold text-emerald-900">
                {health.ayurvedicProps.virya[language] || health.ayurvedicProps.virya.en}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <span className="text-[10px] font-bold text-stone-500 uppercase block mb-0.5">
                {t.rasaTaste}
              </span>
              <span className="text-xs font-bold text-stone-800">
                {health.ayurvedicProps.rasa[language] || health.ayurvedicProps.rasa.en}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <span className="text-[10px] font-bold text-stone-500 uppercase block mb-0.5">
                {t.gunaQuality}
              </span>
              <span className="text-xs font-bold text-stone-800">
                {health.ayurvedicProps.guna[language] || health.ayurvedicProps.guna.en}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
              <span className="text-[10px] font-bold text-stone-500 uppercase block mb-0.5">
                {t.vipakaMetabolic}
              </span>
              <span className="text-xs font-bold text-stone-800">
                {health.ayurvedicProps.vipaka[language] || health.ayurvedicProps.vipaka.en}
              </span>
            </div>
          </div>
        </div>
      ) : null}

      {/* Key Health Benefits */}
      {health?.benefits && (
        <div className="space-y-2 pt-1">
          <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-rose-500" />
            <span>{t.healthBenefits}</span>
          </h4>
          <div className="space-y-2">
            {(health.benefits[language] || health.benefits.en).map((benefit, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200/70"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Precautions and Side Effects */}
      {health?.precautionsAndSideEffects && (
        <div className="space-y-2 pt-1">
          <h4 className="text-xs font-bold text-amber-950 uppercase tracking-wider flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>{t.sideEffectsAndPrecautions}</span>
          </h4>
          <div className="space-y-2">
            {(health.precautionsAndSideEffects[language] || health.precautionsAndSideEffects.en).map(
              (item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-2xl bg-amber-50/80 border border-amber-200"
                >
                  <span className="text-amber-600 font-bold shrink-0 mt-0.5">•</span>
                  <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-normal">
                    {item}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      )}

      {/* Who Should Avoid / Contraindications */}
      {health?.whoShouldAvoid && (
        <div className="space-y-2 pt-1">
          <h4 className="text-xs font-bold text-rose-950 uppercase tracking-wider flex items-center gap-1.5">
            <Ban className="w-4 h-4 text-rose-600" />
            <span>{t.whoShouldAvoid}</span>
          </h4>
          <div className="space-y-2">
            {(health.whoShouldAvoid[language] || health.whoShouldAvoid.en).map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-3 rounded-2xl bg-rose-50/80 border border-rose-200"
              >
                <span className="text-rose-600 font-bold shrink-0 mt-0.5">✕</span>
                <p className="text-xs sm:text-sm text-rose-950 leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg sm:max-w-2xl lg:max-w-4xl rounded-t-[32px] sm:rounded-3xl shadow-2xl border-t sm:border border-stone-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Mobile Drag Handle */}
        <div className="sm:hidden w-full pt-2.5 pb-1 bg-gradient-to-r from-emerald-950 via-teal-950 to-emerald-950 flex justify-center">
          <div className="w-12 h-1 rounded-full bg-white/30" />
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white p-4 sm:p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title={t.close}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4 pr-10">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-3xl shrink-0">
              {food.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-200 border border-emerald-400/30">
                  {t.categories[food.categoryId as keyof typeof t.categories] || food.categoryId}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-400/20 text-amber-200 border border-amber-300/30">
                  {food.riskSeverity} Risk
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-serif">
                {food.name[language] || food.name.en}
              </h2>
              {language !== 'en' && (
                <p className="text-xs text-emerald-200/90 font-medium">
                  English: {food.name.en}
                </p>
              )}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="mt-5 flex gap-2 border-b border-white/15 overflow-x-auto no-scrollbar pt-2">
            <button
              onClick={() => setActiveTab('all-in-one')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold transition-all relative shrink-0 flex items-center gap-1.5 ${
                activeTab === 'all-in-one'
                  ? 'text-white border-b-2 border-emerald-400 font-bold'
                  : 'text-emerald-200/70 hover:text-white'
              }`}
            >
              <span>📋</span>
              <span>સંપૂર્ણ વિગત (ટેસ્ટ + ગુણદોષ)</span>
            </button>

            <button
              onClick={() => setActiveTab('home-test')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold transition-all relative shrink-0 flex items-center gap-1.5 ${
                activeTab === 'home-test'
                  ? 'text-white border-b-2 border-emerald-400'
                  : 'text-emerald-200/70 hover:text-white'
              }`}
            >
              <TestTube2 className="w-4 h-4" />
              <span>{t.testAtHome}</span>
            </button>

            <button
              onClick={() => setActiveTab('ayurvedic')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold transition-all relative shrink-0 flex items-center gap-1.5 ${
                activeTab === 'ayurvedic'
                  ? 'text-white border-b-2 border-amber-400 text-amber-300'
                  : 'text-amber-200/80 hover:text-white'
              }`}
            >
              <Leaf className="w-4 h-4 text-amber-400" />
              <span>{t.ayurvedicTab}</span>
            </button>

            <button
              onClick={() => setActiveTab('lab-test')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold transition-all relative shrink-0 flex items-center gap-1.5 ${
                activeTab === 'lab-test'
                  ? 'text-white border-b-2 border-emerald-400'
                  : 'text-emerald-200/70 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>{t.labTestRequired}</span>
            </button>

            <button
              onClick={() => setActiveTab('risks')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-semibold transition-all relative shrink-0 flex items-center gap-1.5 ${
                activeTab === 'risks'
                  ? 'text-white border-b-2 border-emerald-400'
                  : 'text-emerald-200/70 hover:text-white'
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
              <span>{t.adulterantsFound}</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-stone-800">
          {/* TAB 1: ALL-IN-ONE (Home Test + Directly Followed by Ayurvedic Properties & Benefits) */}
          {(activeTab === 'all-in-one' || activeTab === 'home-test') && (
            <div className="space-y-6">
              {/* Test Selector Pills if multiple tests */}
              {food.homeTests && food.homeTests.length > 1 && (
                <div className="flex gap-2 pb-1 border-b border-stone-200 overflow-x-auto">
                  {food.homeTests.map((ht, idx) => (
                    <button
                      key={ht.id}
                      onClick={() => setSelectedTestIndex(idx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                        selectedTestIndex === idx
                          ? 'bg-emerald-700 text-white shadow-xs'
                          : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      Method {idx + 1}: {ht.testName[language] || ht.testName.en}
                    </button>
                  ))}
                </div>
              )}

              {/* Active Test Meta Banner */}
              {activeTest ? (
                <div className="bg-emerald-50/70 rounded-2xl p-4 border border-emerald-100 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                      FSSAI DART Method
                    </span>
                    <h3 className="text-base font-bold text-stone-900">
                      {activeTest.testName[language] || activeTest.testName.en}
                    </h3>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Targeted adulterant:{' '}
                      <span className="font-semibold text-emerald-950">
                        {activeTest.adulterantTargeted[language] || activeTest.adulterantTargeted.en}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-emerald-200 text-emerald-800 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {activeTest.timeRequiredMinutes} min
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-emerald-200 text-emerald-800 font-medium">
                      {activeTest.difficulty}
                    </span>
                  </div>
                </div>
              ) : null}

              {/* Required Materials */}
              {activeTest?.requiredMaterials && (
                <div>
                  <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                    {t.householdMaterials}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(activeTest.requiredMaterials[language] || activeTest.requiredMaterials.en).map(
                      (mat, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-xl bg-stone-100 border border-stone-200 text-stone-800 text-xs font-medium flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          {mat}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Step by Step */}
              {activeTest?.stepByStep && (
                <div>
                  <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
                    {t.stepByStep}
                  </h4>
                  <div className="space-y-2.5">
                    {(activeTest.stepByStep[language] || activeTest.stepByStep.en).map(
                      (step, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-2xl bg-stone-50 border border-stone-200/80"
                        >
                          <span className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                            {step}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Expected Results (Pure vs Suspicious) */}
              {activeTest && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs sm:text-sm mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{t.pureResult}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                      {activeTest.pureSampleResult[language] || activeTest.pureSampleResult.en}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200">
                    <div className="flex items-center gap-2 text-rose-900 font-bold text-xs sm:text-sm mb-1.5">
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>{t.suspiciousResult}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-rose-950 leading-relaxed">
                      {activeTest.adulteratedSampleResult[language] || activeTest.adulteratedSampleResult.en}
                    </p>
                  </div>
                </div>
              )}

              {/* What Test CAN & CANNOT Detect */}
              {activeTest && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <h5 className="text-xs font-bold text-emerald-800 mb-2 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      {t.whatCanDetect}
                    </h5>
                    <ul className="space-y-1 text-xs text-stone-700">
                      {(activeTest.canDetect[language] || activeTest.canDetect.en).map(
                        (item, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>{item}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200">
                    <h5 className="text-xs font-bold text-amber-900 mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      {t.whatCannotDetect}
                    </h5>
                    <ul className="space-y-1 text-xs text-stone-700">
                      {(activeTest.cannotDetect[language] || activeTest.cannotDetect.en).map(
                        (item, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-amber-600 font-bold">✗</span>
                            <span>{item}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              )}

              {/* Safety Precautions */}
              {activeTest?.safetyPrecautions && (
                <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200">
                  <h5 className="text-xs font-bold text-red-900 mb-1.5 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    {t.safetyPrecautions}
                  </h5>
                  <ul className="space-y-1 text-xs text-red-900">
                    {(activeTest.safetyPrecautions[language] || activeTest.safetyPrecautions.en).map(
                      (item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-red-500 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

              {/* SEAMLESSLY EMBEDDED DIRECTLY BELOW TEST: AYURVEDIC PROPERTIES, BENEFITS & SIDE EFFECTS */}
              {activeTab === 'all-in-one' && (
                <div className="pt-4 border-t-2 border-dashed border-emerald-200">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold text-xs mb-2">
                    <Leaf className="w-4 h-4 text-emerald-700" />
                    <span>આ પદાર્થના ઔષધીય ગુણ-દોષ, ફાયદા અને ગેરફાયદા</span>
                  </div>
                  {renderAyurvedicContent()}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: EXCLUSIVELY AYURVEDIC PROPERTIES & HEALTH */}
          {activeTab === 'ayurvedic' && renderAyurvedicContent()}

          {/* TAB 3: LAB TESTING */}
          {activeTab === 'lab-test' && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                  {t.labTestingTitle}
                </span>
                <h3 className="text-base font-bold text-stone-900 mt-0.5">
                  {food.labTesting.requiredTestName[language] || food.labTesting.requiredTestName.en}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                  {food.labTesting.whyLabNeeded[language] || food.labTesting.whyLabNeeded.en}
                </p>
              </div>

              {/* Equipment and Chemicals */}
              <div>
                <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                  {t.labEquipNeeded}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(food.labTesting.equipmentAndChemicals[language] ||
                    food.labTesting.equipmentAndChemicals.en
                  ).map((equip, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 text-xs font-medium"
                    >
                      🔬 {equip}
                    </span>
                  ))}
                </div>
              </div>

              {/* Where to test & Estimated Cost */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wide mb-1">
                    {t.whereToTest}
                  </h4>
                  <ul className="text-xs text-stone-800 space-y-1">
                    {(food.labTesting.recommendedLabTypes[language] ||
                      food.labTesting.recommendedLabTypes.en
                    ).map((lab, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        <span>{lab}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wide mb-1">
                      {t.estimatedCost}
                    </h4>
                    <p className="text-lg font-bold text-emerald-800">
                      {food.labTesting.approxCostINR}
                    </p>
                  </div>
                  <div className="mt-2 pt-2 border-t border-stone-200 text-xs text-stone-500">
                    <span className="font-semibold text-stone-700">{t.fssaiRef}:</span>
                    <p className="font-semibold text-stone-800 mt-0.5">
                      {food.labTesting.fssaiStandardRef}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sample Submission Advice */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
                <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wide mb-1 flex items-center gap-1.5">
                  <ExternalLink className="w-4 h-4 text-blue-700" />
                  {t.sampleSubmission}
                </h4>
                <p className="text-xs sm:text-sm text-blue-900 leading-relaxed font-normal">
                  {food.labTesting.sampleSubmissionAdvice[language] || food.labTesting.sampleSubmissionAdvice.en}
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: COMMON ADULTERANTS & HEALTH IMPACTS */}
          {activeTab === 'risks' && (
            <div className="space-y-4">
              <p className="text-xs text-stone-600">
                {food.overview[language] || food.overview.en}
              </p>

              <div className="space-y-3 pt-1">
                {food.adulterants.map((ad, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-sm text-stone-900">
                        {ad.name[language] || ad.name.en}
                      </h4>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          ad.riskLevel === 'Severe'
                            ? 'bg-rose-100 text-rose-800'
                            : ad.riskLevel === 'High'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {ad.riskLevel} Health Risk
                      </span>
                    </div>

                    <p className="text-xs text-stone-600">
                      {ad.description[language] || ad.description.en}
                    </p>

                    <div className="p-2.5 rounded-xl bg-rose-50/70 border border-rose-100 text-xs text-rose-900 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">{t.healthImpact}: </span>
                        <span>{ad.healthRisks[language] || ad.healthRisks.en}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={() => onAskAi(food, `મને ${food.name.gu || food.name.en} ના શુદ્ધતા ટેસ્ટ અને ઔષધીય ગુણ-દોષ વિશે વધુ જણાવો.`)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 text-emerald-900 hover:bg-emerald-100 border border-emerald-200 text-xs sm:text-sm font-bold transition-all shadow-2xs active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>{t.askAiAboutThis}</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs sm:text-sm font-bold transition-colors"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
