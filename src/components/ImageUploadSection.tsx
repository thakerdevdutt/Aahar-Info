import React, { useState, useRef } from 'react';
import {
  Upload,
  Camera,
  Image as ImageIcon,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
  X,
  RefreshCw,
  Info,
  ShieldAlert,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ImageUploadSectionProps {
  language: Language;
}

export const ImageUploadSection: React.FC<ImageUploadSectionProps> = ({ language }) => {
  const t = translations[language];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [foodName, setFoodName] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  // Preset sample examples so user can test right away
  const sampleScenarios = [
    {
      title: 'Turmeric Powder (Haldi)',
      food: 'Turmeric Powder (હળદર)',
      desc: 'Bright golden powder with suspected Metanil yellow dye',
    },
    {
      title: 'Apples Surface',
      food: 'Apples (સફરજન)',
      desc: 'Red apple skin with artificial wax coating polish',
    },
    {
      title: 'Mustard Oil (Sarson)',
      food: 'Mustard Oil (સરસવ તેલ)',
      desc: 'Yellow cooking oil suspected of Argemone seed oil blend',
    },
    {
      title: 'Milk Sample',
      food: 'Fresh Milk (દૂધ)',
      desc: 'Liquid milk with abnormal persistent lather/foam',
    },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please select a valid image file (JPEG, PNG, WEBP).');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setErrorMsg('Image size exceeds 10MB limit. Please choose a smaller photo.');
      return;
    }

    setErrorMsg(null);
    setAnalysisResult(null);

    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    setErrorMsg(null);
    setAnalysisResult(null);

    try {
      const res = await fetch('/api/analyze-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageBase64: selectedImage,
          mimeType: 'image/jpeg',
          foodName: foodName.trim(),
          language,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to inspect image');
      }

      setAnalysisResult(data.analysis || 'No visual anomalies reported.');
    } catch (err: any) {
      console.error('Image analysis error:', err);
      setErrorMsg(err.message || 'Error occurred during visual inspection.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setSelectedImage(null);
    setAnalysisResult(null);
    setErrorMsg(null);
    setFoodName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full px-3.5 py-3 overflow-x-hidden">
      <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 p-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-300 border border-white/20">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
                {t.imageUploadTitle}
              </h2>
              <p className="text-xs sm:text-sm text-emerald-200/80 mt-0.5">
                {t.imageUploadDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Mandatory Safety Notice */}
        <div className="bg-amber-50 p-4 border-b border-amber-200 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-950 font-medium leading-relaxed">
            <strong className="font-bold">CRITICAL SAFETY NOTICE: </strong>
            {t.imageUploadDisclaimer}
          </p>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-6">
          {/* Upload Box / Preview */}
          {!selectedImage ? (
            <div className="space-y-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <input
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileChange}
                className="hidden"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => cameraInputRef.current?.click()}
                  className="p-5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm flex flex-col items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <span>{language === 'gu' ? '📸 કેમેરાથી ફોટો પાડો' : language === 'hi' ? '📸 कैमरे से फोटो खींचें' : '📸 Take Camera Photo'}</span>
                  <span className="text-[11px] font-normal text-emerald-200">
                    {language === 'gu' ? 'મોબાઇલ કેમેરાથી સીધો સ્કેન' : 'Live back-camera snap'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="p-5 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-sm flex flex-col items-center justify-center gap-2 border border-stone-300 active:scale-98 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center">
                    <Upload className="w-6 h-6 text-stone-700" />
                  </div>
                  <span>{language === 'gu' ? '📁 ગેલેરીમાંથી અપલોડ કરો' : language === 'hi' ? '📁 गैलरी से फोटो चुनें' : '📁 Upload from Gallery'}</span>
                  <span className="text-[11px] font-normal text-stone-500">
                    {language === 'gu' ? 'JPG, PNG, WEBP ફાઈલ' : 'Device photo gallery'}
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Image Preview Card */}
              <div className="relative rounded-3xl overflow-hidden border border-stone-200 bg-stone-900/5 max-h-[380px] flex items-center justify-center">
                <img
                  src={selectedImage}
                  alt="Uploaded food sample"
                  className="max-h-[360px] w-auto object-contain rounded-2xl mx-auto p-2"
                />
                <button
                  onClick={handleReset}
                  className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white transition-colors"
                  title="Remove image"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Food Name Specifier */}
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-stone-600 mb-1">
                    {t.selectFoodToAnalyze}
                  </label>
                  <input
                    type="text"
                    value={foodName}
                    onChange={(e) => setFoodName(e.target.value)}
                    placeholder="e.g. Turmeric, Milk, Mustard Oil, Apples..."
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <div className="sm:self-end">
                  <button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 disabled:bg-stone-300 text-white text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-xs"
                  >
                    {isAnalyzing ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>{t.analyzingImage}</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-amber-300" />
                        <span>Analyze Visual Quality</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {errorMsg && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 text-xs flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Analysis Report Output */}
          {analysisResult && (
            <div className="mt-6 rounded-3xl bg-emerald-50/50 border border-emerald-200 p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-200/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                  <h3 className="font-bold text-base text-emerald-950 font-serif">
                    {t.imageAnalysisResult}
                  </h3>
                </div>
                <button
                  onClick={handleReset}
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-900"
                >
                  Inspect another photo
                </button>
              </div>

              <div className="prose prose-sm max-w-none text-stone-800 text-xs sm:text-sm whitespace-pre-line leading-relaxed">
                {analysisResult}
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-emerald-200 text-xs text-stone-600 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  Remember: This visual report inspects topical optical features only. To confirm chemical purity or detect invisible hazards, perform the recommended FSSAI DART home test or submit a sample to an accredited NABL laboratory.
                </span>
              </div>
            </div>
          )}

          {/* Preset Sample Prompting Buttons */}
          {!selectedImage && (
            <div className="pt-2 border-t border-stone-100">
              <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                Sample Foods for Visual Assessment:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {sampleScenarios.map((sc, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setFoodName(sc.food);
                      fileInputRef.current?.click();
                    }}
                    className="p-3 rounded-2xl border border-stone-200 hover:border-emerald-400 bg-stone-50/60 hover:bg-emerald-50/50 cursor-pointer transition-all flex items-start gap-3 text-left"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white border border-stone-200 flex items-center justify-center shrink-0 text-emerald-700">
                      <ImageIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-stone-800">{sc.title}</p>
                      <p className="text-[11px] text-stone-500 leading-tight mt-0.5">{sc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
