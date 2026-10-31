import React from 'react';
import { Home, Sparkles, Camera, Settings } from 'lucide-react';
import { Language } from '../types';

interface MobileBottomNavProps {
  activeTab: 'browse' | 'ai-chat' | 'image-inspect' | 'labs';
  setActiveTab: (tab: 'browse' | 'ai-chat' | 'image-inspect' | 'labs') => void;
  language: Language;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  setActiveTab,
  language,
}) => {
  const tabs = [
    {
      id: 'browse' as const,
      icon: Home,
      label: language === 'gu' ? 'હોમ' : language === 'hi' ? 'होम' : 'Home',
    },
    {
      id: 'ai-chat' as const,
      icon: Sparkles,
      label: language === 'gu' ? 'AI સહાયક' : language === 'hi' ? 'AI विशेषज्ञ' : 'AI Expert',
      badge: 'Gemini',
    },
    {
      id: 'image-inspect' as const,
      icon: Camera,
      label: language === 'gu' ? 'કેમેરા સ્કેન' : language === 'hi' ? 'कैमरा जांच' : 'Camera',
    },
    {
      id: 'labs' as const,
      icon: Settings,
      label: language === 'gu' ? 'સેટિંગ્સ' : language === 'hi' ? 'सेटिंग्स' : 'Settings',
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-[440px] mx-auto z-50 bg-white/95 backdrop-blur-lg border-t border-emerald-100/80 shadow-2xl safe-area-bottom pb-1 overflow-hidden">
      <div className="w-full grid grid-cols-4 h-16 items-center px-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center h-full w-full relative transition-all active:scale-95 select-none ${
                isActive ? 'text-emerald-800 font-bold' : 'text-stone-400 hover:text-stone-600 font-medium'
              }`}
            >
              <div className="relative">
                <div
                  className={`w-10 h-7 rounded-full flex items-center justify-center transition-all ${
                    isActive ? 'bg-emerald-100 text-emerald-800' : 'text-stone-500'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.4]' : 'stroke-2'}`} />
                </div>
                {tab.badge && (
                  <span className="absolute -top-1 -right-1 px-1 py-0.2 rounded-full text-[9px] font-extrabold bg-amber-500 text-white shadow-2xs">
                    AI
                  </span>
                )}
              </div>
              <span className={`text-[10px] mt-0.5 tracking-tight ${isActive ? 'font-bold text-emerald-900' : 'text-stone-500'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
