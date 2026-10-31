/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  ShieldCheck,
  Search,
  Sparkles,
  Camera,
  Building2,
  PhoneCall,
  AlertTriangle,
  TestTube2,
  X,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  ShieldAlert,
  Leaf,
  Loader2,
  ListFilter,
  CheckCircle2,
  LayoutGrid,
  SlidersHorizontal,
} from 'lucide-react';
import { foodDatabase } from './data/foodDatabase';
import { indianFoodCatalog, CatalogItem } from './data/indianFoodCatalog';
import { FoodCategory, FoodItem, Language } from './types';
import { translations } from './data/translations';
import { MobileHeader } from './components/MobileHeader';
import { MobileBottomNav } from './components/MobileBottomNav';
import { FoodDetailModal } from './components/FoodDetailModal';
import { AIChatSection } from './components/AIChatSection';
import { ImageUploadSection } from './components/ImageUploadSection';
import { LabDirectoryView } from './components/LabDirectoryView';
import { EmergencyModal } from './components/EmergencyModal';
import { ApkDownloadModal } from './components/ApkDownloadModal';

export default function App() {
  // Default to Gujarati as requested by user
  const [language, setLanguage] = useState<Language>('gu');
  const [activeTab, setActiveTab] = useState<'browse' | 'ai-chat' | 'image-inspect' | 'labs'>('browse');
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState<boolean>(false);
  const [isApkModalOpen, setIsApkModalOpen] = useState<boolean>(false);
  const [aiInitialQuestion, setAiInitialQuestion] = useState<string>('');
  const [isLookingUp, setIsLookingUp] = useState<boolean>(false);
  const [lookupTargetName, setLookupTargetName] = useState<string>('');
  const [lookupError, setLookupError] = useState<string>('');
  const [isGridView, setIsGridView] = useState<boolean>(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  const categoryScrollRef = useRef<HTMLDivElement>(null);

  const t = translations[language];

  // Capture PWA install prompt
  useEffect(() => {
    const handleBeforeInstall = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  // Scroll categories left or right for PC / desktop users
  const scrollCategories = (direction: 'left' | 'right') => {
    if (categoryScrollRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      categoryScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Complete list of ALL 13 categories - keeping everything, never removing
  const categoriesList: Array<{
    id: FoodCategory;
    icon: string;
    shortGu: string;
    shortHi: string;
    shortEn: string;
  }> = [
    { id: 'vegetables', icon: '🥦', shortGu: 'શાકભાજી', shortHi: 'સબ્જિયાં', shortEn: 'Vegetables' },
    { id: 'fruits', icon: '🍎', shortGu: 'તાજા ફળો', shortHi: 'તાજે ફલ', shortEn: 'Fruits' },
    { id: 'herbs_ayurvedic', icon: '🌿', shortGu: 'ઔષધિઓ', shortHi: 'ઔષધિયાં', shortEn: 'Herbs' },
    { id: 'spices', icon: '✨', shortGu: 'મસાલા', shortHi: 'મસાલે', shortEn: 'Spices' },
    { id: 'grains', icon: '🌾', shortGu: 'અનાજ', shortHi: 'અનાજ', shortEn: 'Grains' },
    { id: 'pulses', icon: '🥣', shortGu: 'કઠોળ', shortHi: 'દાલें', shortEn: 'Pulses' },
    { id: 'oilseeds', icon: '🌱', shortGu: 'તેલીબિયાં', shortHi: 'તિલહન', shortEn: 'Oilseeds' },
    { id: 'dairy', icon: '🥛', shortGu: 'દૂધ-ડેરી', shortHi: 'દૂધ-ડેયરી', shortEn: 'Dairy' },
    { id: 'oils_ghee', icon: '🫒', shortGu: 'તેલ-ઘી', shortHi: 'તેલ-ઘી', shortEn: 'Oils & Ghee' },
    { id: 'dry_fruits', icon: '🥜', shortGu: 'સુકામેવા', shortHi: 'મેવે', shortEn: 'Dry Fruits' },
    { id: 'honey_sugar', icon: '🍯', shortGu: 'મધ-ગોળ', shortHi: 'શહદ-ગુડ', shortEn: 'Honey' },
    { id: 'beverages', icon: '☕', shortGu: 'ચા-કોફી', shortHi: 'પેય પદાર્થ', shortEn: 'Beverages' },
    { id: 'other', icon: '🧂', shortGu: 'અન્ય પદાર્થો', shortHi: 'અન્ય ઉત્પાદ', shortEn: 'Other' },
  ];

  // Quick popular search keywords
  const popularKeywords = [
    { en: 'Milk', gu: 'દૂધ', hi: 'दूध' },
    { en: 'Ghee', gu: 'દેશી ઘી', hi: 'देसी घी' },
    { en: 'Karela', gu: 'કારેલાં', hi: 'करेला' },
    { en: 'Dudhi', gu: 'દૂધી', hi: 'लौकी' },
    { en: 'Wheat', gu: 'ઘઉં', hi: 'गेहूं' },
    { en: 'Bajra', gu: 'બાજરી', hi: 'बाजरा' },
    { en: 'Toor Dal', gu: 'તુવેર દાળ', hi: 'अरहर दाल' },
    { en: 'Moong', gu: 'મગ', hi: 'मूंग' },
    { en: 'Turmeric', gu: 'હળદર', hi: 'हल्दी' },
    { en: 'Sesame', gu: 'તલ', hi: 'तिल' },
    { en: 'Almond', gu: 'બદામ', hi: 'बादाम' },
    { en: 'Mango', gu: 'કેરી', hi: 'आम' },
    { en: 'Shilajit', gu: 'શિલાજીત', hi: 'शिलाजीत' },
    { en: 'Ashwagandha', gu: 'અશ્વગંધા', hi: 'अश्वगंधा' },
    { en: 'Triphala', gu: 'ત્રિફળા', hi: 'त्रिफला' },
  ];

  // Instant Select or AI Lookup Function
  const handleSelectOrLookup = async (queryName: string) => {
    if (!queryName || queryName.trim().length === 0) return;
    const q = queryName.toLowerCase().trim();

    // 1. Check in local preloaded foodDatabase
    const found = foodDatabase.find((item) => {
      return (
        item.id.toLowerCase() === q ||
        item.name.gu.toLowerCase().includes(q) ||
        item.name.en.toLowerCase().includes(q) ||
        item.name.hi.toLowerCase().includes(q) ||
        item.alternateNames.some((alt) => alt.toLowerCase().includes(q))
      );
    });

    if (found) {
      setSelectedFood(found);
      return;
    }

    // 2. If not found in preloaded list, trigger real-time AI Encyclopedia generator!
    setIsLookingUp(true);
    setLookupTargetName(queryName);
    setLookupError('');

    try {
      const res = await fetch('/api/lookup-food', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: queryName, language }),
      });

      const data = await res.json();
      if (res.ok && data.item) {
        setSelectedFood(data.item);
      } else {
        setLookupError(data.error || 'આ પદાર્થની માહિતી લાવવામાં સમસ્યા આવી. કૃપા કરીને ફરી પ્રયાસ કરો.');
      }
    } catch (err: any) {
      console.error('Lookup error:', err);
      setLookupError('સર્વર સાથે સંપર્ક થઈ શક્યો નથી. કૃપા કરીને ફરી પ્રયાસ કરો.');
    } finally {
      setIsLookingUp(false);
      setLookupTargetName('');
    }
  };

  // Filtered foods matching category and search query from local database
  const filteredFoods = useMemo(() => {
    return foodDatabase.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.categoryId === selectedCategory;

      if (!searchQuery.trim()) {
        return matchesCategory;
      }

      const q = searchQuery.toLowerCase().trim();

      const nameMatch =
        item.name.en.toLowerCase().includes(q) ||
        item.name.gu.toLowerCase().includes(q) ||
        item.name.hi.toLowerCase().includes(q);

      const altMatch = item.alternateNames.some((alt) =>
        alt.toLowerCase().includes(q)
      );

      const adulterantMatch = item.adulterants.some(
        (ad) =>
          ad.name.en.toLowerCase().includes(q) ||
          ad.name.gu.toLowerCase().includes(q) ||
          ad.name.hi.toLowerCase().includes(q)
      );

      return matchesCategory && (nameMatch || altMatch || adulterantMatch);
    });
  }, [selectedCategory, searchQuery]);

  // Catalog items for the selected category
  const activeCatalogItems: CatalogItem[] = useMemo(() => {
    if (selectedCategory === 'all') {
      const allItems: CatalogItem[] = [];
      Object.keys(indianFoodCatalog).forEach((catKey) => {
        const catItems = indianFoodCatalog[catKey as FoodCategory] || [];
        allItems.push(...catItems.slice(0, 4));
      });
      return allItems;
    }
    return indianFoodCatalog[selectedCategory] || [];
  }, [selectedCategory]);

  const handleAskAiAboutFood = (food: FoodItem, customQuestion?: string) => {
    const question =
      customQuestion ||
      (language === 'gu'
        ? `${food.name.gu} માં થતી ભેળસેળ કેવી રીતે પકડવી અને તેના આયુર્વેદિક ગુણ-દોષ શું છે?`
        : language === 'hi'
        ? `${food.name.hi} में मिलावट की जांच और इसके आयुर्वेदिक गुण-दोष क्या हैं?`
        : `How can I detect adulteration in ${food.name.en} and what are its Ayurvedic properties?`);

    setAiInitialQuestion(question);
    setActiveTab('ai-chat');
  };

  return (
    <div className="min-h-screen bg-[#F8FAF6] flex justify-center overflow-x-hidden w-full">
      {/* Mobile App Shell Container */}
      <div className="w-full max-w-[440px] bg-[#F8FAF6] min-h-screen flex flex-col relative pb-24 overflow-x-hidden">
        {/* Mobile Header Bar */}
        <MobileHeader
          language={language}
          onLanguageChange={setLanguage}
          onOpenEmergency={() => setIsEmergencyOpen(true)}
          onInstallApp={() => setIsApkModalOpen(true)}
        />

        {/* Tab 1: Home / Browse */}
        {activeTab === 'browse' && (
          <div className="flex-1 space-y-4 pb-6">
            {/* Mobile Hero & Search Card */}
            <div className="px-3.5 pt-3">
              <div className="rounded-2xl bg-gradient-to-br from-emerald-800 via-teal-900 to-emerald-950 text-white p-4 shadow-md relative overflow-hidden">
                <div className="relative z-10 space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-emerald-200 text-[10px] font-semibold border border-white/20">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                    <span>FSSAI DART માન્ય • ચરકસંહિતા આયુર્વેદ</span>
                  </div>

                  <h2 className="text-lg font-extrabold font-serif leading-snug">
                    {language === 'gu'
                      ? 'શુદ્ધ આહાર અને આયુર્વેદિક સ્વાસ્થ્ય'
                      : language === 'hi'
                      ? 'शुद्ध आहार और आयुर्वेदिक स्वास्थ्य'
                      : 'Pure Food & Ayurvedic Health'}
                  </h2>

                  <p className="text-[11px] text-emerald-100/90 leading-tight">
                    {language === 'gu'
                      ? 'શાકભાજી, ફળો, ઔષધિઓ, અનાજ, કઠોળ, તેલ-ઘી અને મસાલાની શુદ્ધતા ચકાસો.'
                      : language === 'hi'
                      ? 'सब्जियों, फलों, दालों, अनाज, तेल-घी और मसालों की शुद्धता जांचें।'
                      : 'Test adulterants in vegetables, fruits, herbs, grains, pulses, and spices.'}
                  </p>

                  {/* Search Bar */}
                  <div className="pt-1">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-3 text-emerald-800" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && searchQuery.trim()) {
                            handleSelectOrLookup(searchQuery.trim());
                          }
                        }}
                        placeholder={
                          language === 'gu'
                            ? 'કોઈપણ ખોરાક લખો (દા.ત. કારેલાં, ઘઉં, તુવેર, દૂધ, કેરી)...'
                            : language === 'hi'
                            ? 'कोई भी भोजन लिखें (उदा. करेला, गेहूं, अरहर दाल, दूध)...'
                            : 'Type any food (e.g. Karela, Wheat, Milk)...'
                        }
                        className="w-full pl-9 pr-16 py-2.5 rounded-xl bg-white text-stone-900 text-xs font-medium placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => setSearchQuery('')}
                          className="absolute right-10 top-2.5 text-stone-400 hover:text-stone-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => handleSelectOrLookup(searchQuery)}
                        disabled={!searchQuery.trim()}
                        className="absolute right-1 top-1 px-2.5 py-1.5 rounded-lg bg-emerald-700 text-white text-[10px] font-bold disabled:opacity-50"
                      >
                        શોધો
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Popular Keyword Chips Carousel */}
            <div className="px-3.5">
              <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                {popularKeywords.map((kw, i) => {
                  const label = kw[language] || kw.en;
                  return (
                    <button
                      key={i}
                      onClick={() => handleSelectOrLookup(label)}
                      className="px-2.5 py-1 rounded-full bg-white border border-emerald-200/80 text-[11px] font-semibold text-emerald-950 shrink-0 hover:bg-emerald-50 active:scale-95 shadow-2xs"
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ALL 13 FOOD CATEGORIES (WITH PC NAV BUTTONS & GRID TOGGLE) */}
            <div className="px-3.5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                  <ListFilter className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{t.categoriesTitle} (૧૩ શ્રેણીઓ)</span>
                </h3>

                {/* PC and Mobile Navigation Controls */}
                <div className="flex items-center gap-1">
                  {/* Grid / Horizontal Toggle */}
                  <button
                    onClick={() => setIsGridView(!isGridView)}
                    className="px-2 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 text-[10px] font-bold flex items-center gap-1 transition-all"
                    title={isGridView ? 'આડી પટ્ટી જુઓ' : 'બધા બટનો એકસાથે જુઓ'}
                  >
                    {isGridView ? (
                      <>
                        <SlidersHorizontal className="w-3 h-3 text-emerald-700" />
                        <span>પટ્ટી</span>
                      </>
                    ) : (
                      <>
                        <LayoutGrid className="w-3 h-3 text-emerald-700" />
                        <span>બધા (▦)</span>
                      </>
                    )}
                  </button>

                  {/* Left / Right Scroll Buttons (Especially helpful on PC) */}
                  {!isGridView && (
                    <>
                      <button
                        onClick={() => scrollCategories('left')}
                        className="w-6 h-6 rounded-lg bg-white hover:bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700 shadow-2xs active:scale-90"
                        title="ડાબે ખસેડો"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => scrollCategories('right')}
                        className="w-6 h-6 rounded-lg bg-white hover:bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700 shadow-2xs active:scale-90"
                        title="જમણે ખસેડો"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </>
                  )}

                  {selectedCategory !== 'all' && (
                    <button
                      onClick={() => {
                        setSelectedCategory('all');
                        setSearchQuery('');
                      }}
                      className="text-[10px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full hover:bg-emerald-200 ml-1"
                    >
                      ✕ બધા
                    </button>
                  )}
                </div>
              </div>

              {/* View Mode 1: Horizontal Scrollable Chips with PC Left/Right arrows */}
              {!isGridView ? (
                <div
                  ref={categoryScrollRef}
                  className="flex gap-2 overflow-x-auto no-scrollbar pb-1 scroll-smooth"
                >
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchQuery('');
                    }}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl shrink-0 font-bold text-xs transition-all ${
                      selectedCategory === 'all'
                        ? 'bg-emerald-800 text-white shadow-xs ring-1 ring-emerald-600'
                        : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    <span>🔍</span>
                    <span>{t.allCategories}</span>
                    <span className="text-[10px] opacity-75">({foodDatabase.length}+)</span>
                  </button>

                  {categoriesList.map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    const count = foodDatabase.filter((f) => f.categoryId === cat.id).length;
                    const label = language === 'gu' ? cat.shortGu : language === 'hi' ? cat.shortHi : cat.shortEn;

                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setSearchQuery('');
                        }}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-xl shrink-0 font-bold text-xs transition-all ${
                          isSelected
                            ? 'bg-emerald-800 text-white shadow-xs ring-1 ring-emerald-600'
                            : 'bg-white text-stone-800 border border-stone-200 hover:bg-stone-50'
                        }`}
                      >
                        <span className="text-base">{cat.icon}</span>
                        <span>{label}</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
                          }`}
                        >
                          {count > 0 ? count : '૫૦+'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                /* View Mode 2: Full 13-Category Grid (All visible simultaneously without scrolling) */
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 p-2 bg-stone-100/70 rounded-2xl border border-stone-200 animate-in fade-in duration-150">
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchQuery('');
                    }}
                    className={`p-2 rounded-xl font-bold text-xs flex items-center justify-between transition-all ${
                      selectedCategory === 'all'
                        ? 'bg-emerald-800 text-white shadow-xs'
                        : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      <span>🔍</span>
                      <span>{t.allCategories}</span>
                    </span>
                    <span className="text-[10px] opacity-75">({foodDatabase.length}+)</span>
                  </button>

                  {categoriesList.map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    const count = foodDatabase.filter((f) => f.categoryId === cat.id).length;
                    const label = language === 'gu' ? cat.shortGu : language === 'hi' ? cat.shortHi : cat.shortEn;

                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setSearchQuery('');
                        }}
                        className={`p-2 rounded-xl font-bold text-xs flex items-center justify-between transition-all ${
                          isSelected
                            ? 'bg-emerald-800 text-white shadow-xs'
                            : 'bg-white text-stone-800 border border-stone-200 hover:bg-stone-50'
                        }`}
                      >
                        <span className="flex items-center gap-1 truncate">
                          <span>{cat.icon}</span>
                          <span className="truncate">{label}</span>
                        </span>
                        <span
                          className={`text-[9px] px-1.5 py-0.2 rounded-full ml-1 shrink-0 ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
                          }`}
                        >
                          {count > 0 ? count : '૫૦+'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* INSTANT 400+ INDIAN FOOD DIRECTORY CHIPS (Addressing User Demand for 400-500 Items) */}
            <div className="px-3.5">
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50 border border-emerald-200 shadow-2xs">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span className="text-xs font-bold text-emerald-950">
                      {selectedCategory === 'all'
                        ? '૪૦૦+ દેશી ખાદ્ય પદાર્થો (ત્વરિત તપાસ)'
                        : `${categoriesList.find(c => c.id === selectedCategory)?.[language === 'gu' ? 'shortGu' : 'shortEn']} ની યાદી (ટેપ કરીને ટેસ્ટ જુઓ)`}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                    લાઈવ જ્ઞાનકોશ
                  </span>
                </div>

                <p className="text-[11px] text-stone-600 mb-2.5 leading-tight">
                  કોઈપણ નામ પર ક્લિક કરો — AI તરત જ તેનો FSSAI શુદ્ધતા ટેસ્ટ અને સંપૂર્ણ આયુર્વેદિક ગુણ-દોષ તૈયાર કરશે!
                </p>

                {/* Grid of Interactive Quick Food Items */}
                <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto pr-1 no-scrollbar">
                  {activeCatalogItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSelectOrLookup(item.nameGu || item.nameEn)}
                      className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-emerald-100/70 border border-emerald-200/90 text-stone-800 text-[11px] font-semibold flex items-center gap-1.5 transition-all active:scale-95 shadow-2xs"
                    >
                      <span>{item.icon}</span>
                      <span>{language === 'gu' ? item.nameGu : language === 'hi' ? item.nameHi : item.nameEn}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Loading Overlay Banner if Looking Up Food via AI */}
            {isLookingUp && (
              <div className="px-3.5">
                <div className="p-4 rounded-2xl bg-emerald-900 text-white flex items-center gap-3 shadow-lg border border-emerald-700 animate-pulse">
                  <Loader2 className="w-6 h-6 text-emerald-300 animate-spin shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold">
                      "{lookupTargetName}" ની તપાસ ચાલુ છે...
                    </h4>
                    <p className="text-[10px] text-emerald-200 mt-0.5">
                      FSSAI DART ટેસ્ટ અને ચરકસંહિતા આયુર્વેદિક ગુણદોષ તૈયાર થઈ રહ્યા છે...
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message if AI lookup fails */}
            {lookupError && (
              <div className="px-3.5">
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{lookupError}</span>
                </div>
              </div>
            )}

            {/* Safety Alert Banner */}
            <div className="px-3.5">
              <div className="p-2.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-2 text-amber-950">
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p className="text-[11px] leading-tight">
                  <strong className="font-bold">સલામતી સૂચના:</strong> ઘરગથ્થુ ટેસ્ટ માત્ર પ્રાથમિક સંકેત આપે છે. ક્યારેય કોઈ ખોરાકને માત્ર ઘરના ટેસ્ટથી ૧૦૦% શુદ્ધ ન માનવો.
                </p>
              </div>
            </div>

            {/* Food Cards List (Mobile Layout) */}
            <div className="px-3.5 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                  મુખ્ય ચકાસાયેલા પદાર્થો ({filteredFoods.length})
                </h3>
              </div>

              {filteredFoods.length > 0 ? (
                <div className="space-y-3">
                  {filteredFoods.map((food) => (
                    <div
                      key={food.id}
                      onClick={() => setSelectedFood(food)}
                      className="p-3.5 rounded-2xl bg-white border border-stone-200 shadow-2xs hover:border-emerald-300 transition-all flex items-start gap-3 active:scale-[0.99] cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center text-2xl shrink-0 border border-stone-200">
                        {food.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <h4 className="font-bold text-sm text-stone-900 truncate">
                            {food.name[language] || food.name.en}
                          </h4>
                          <span
                            className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md ${
                              food.riskSeverity === 'Critical'
                                ? 'bg-rose-100 text-rose-800'
                                : 'bg-amber-100 text-amber-800'
                            }`}
                          >
                            {food.riskSeverity}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                          <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-800 border border-emerald-100">
                            {categoriesList.find(c => c.id === food.categoryId)?.icon} {categoriesList.find(c => c.id === food.categoryId)?.[language === 'gu' ? 'shortGu' : language === 'hi' ? 'shortHi' : 'shortEn']}
                          </span>
                          {food.healthDetails?.ayurvedicProps && (
                            <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-0.5">
                              <Leaf className="w-2.5 h-2.5 text-amber-600" />
                              {food.healthDetails.ayurvedicProps.virya[language] || 'આયુર્વેદિક ગુણ'}
                            </span>
                          )}
                        </div>

                        <p className="text-[11px] text-stone-500 line-clamp-1">
                          {food.subtitle[language] || food.subtitle.en}
                        </p>

                        <div className="mt-2 flex items-center justify-between text-[11px]">
                          <span className="text-emerald-800 font-semibold flex items-center gap-1">
                            <TestTube2 className="w-3 h-3 text-emerald-600" />
                            {food.homeTests.length} ટેસ્ટ પદ્ધતિ
                          </span>

                          <span className="text-emerald-700 font-bold flex items-center gap-0.5">
                            ટેસ્ટ અને ગુણ-દોષ <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 px-4 bg-white rounded-2xl border border-stone-200 space-y-3">
                  <p className="text-xs text-stone-600">
                    "{searchQuery}" અમારી લોકલ યાદીમાં નથી, પરંતુ તમે તરત જ નીચે AI જ્ઞાનકોશ દ્વારા તેની સંપૂર્ણ તપાસ મેળવી શકો છો:
                  </p>
                  <button
                    onClick={() => handleSelectOrLookup(searchQuery)}
                    className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center justify-center gap-2 mx-auto shadow-sm active:scale-95"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>"{searchQuery}" ની લાઈવ AI તપાસ કરો</span>
                  </button>
                </div>
              )}

              {/* Developer Credit Footer Badge */}
              <div className="pt-8 pb-4 text-center select-none">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-xs font-medium">
                  <span>👨‍💻 Developer: <strong className="text-stone-900">Yashvee Thaker - 7878413535</strong></span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: AI Food Safety Specialist */}
        {activeTab === 'ai-chat' && (
          <div className="flex-1 flex flex-col">
            <AIChatSection
              language={language}
              initialQuestion={aiInitialQuestion}
              onClearInitialQuestion={() => setAiInitialQuestion('')}
            />
          </div>
        )}

        {/* Tab 3: Food Image Upload */}
        {activeTab === 'image-inspect' && (
          <div className="flex-1 pb-6">
            <ImageUploadSection language={language} />
          </div>
        )}

        {/* Tab 4: Settings, Laboratory Directory & Helplines */}
        {activeTab === 'labs' && (
          <div className="flex-1 pb-6">
            <LabDirectoryView
              language={language}
              onOpenEmergency={() => setIsEmergencyOpen(true)}
              onInstallApp={() => setIsApkModalOpen(true)}
            />
          </div>
        )}

        {/* Mobile Bottom Navigation Bar */}
        <MobileBottomNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          language={language}
        />
      </div>

      {/* Food Detail Modal (Bottom Sheet on Mobile) with Ayurvedic Section directly below test */}
      {selectedFood && (
        <FoodDetailModal
          food={selectedFood}
          language={language}
          onClose={() => setSelectedFood(null)}
          onAskAi={(f, q) => {
            setSelectedFood(null);
            handleAskAiAboutFood(f, q);
          }}
        />
      )}

      {/* Emergency Helpline Modal */}
      {isEmergencyOpen && (
        <EmergencyModal
          language={language}
          onClose={() => setIsEmergencyOpen(false)}
        />
      )}

      {/* APK / Mobile Install Modal */}
      {isApkModalOpen && (
        <ApkDownloadModal
          language={language}
          onClose={() => setIsApkModalOpen(false)}
          deferredPrompt={deferredPrompt}
        />
      )}
    </div>
  );
}
