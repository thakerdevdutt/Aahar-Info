import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  Sparkles,
  Bot,
  User,
  AlertTriangle,
  RotateCcw,
  Copy,
  Check,
  ShieldCheck,
  Building2,
} from 'lucide-react';
import { ChatMessage, Language } from '../types';
import { translations } from '../data/translations';

interface AIChatSectionProps {
  language: Language;
  initialQuestion?: string;
  onClearInitialQuestion?: () => void;
}

export const AIChatSection: React.FC<AIChatSectionProps> = ({
  language,
  initialQuestion,
  onClearInitialQuestion,
}) => {
  const t = translations[language];
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize greeting on first load or language switch
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeText =
        language === 'gu'
          ? 'નમસ્તે! હું "શુદ્ધ આહાર" AI ખાદ્ય સુરક્ષા નિષ્ણાત છું. તમે દૂધ, ઘી, હળદર, મસાલા, મધ, તેલ કે અન્ય કોઈપણ ખાદ્ય પદાર્થની ભેળસેળ, ઘરગથ્થુ ટેસ્ટિંગ પદ્ધતિઓ અને FSSAI લેબ નિયમો વિશે ગુજરાતી, હિન્દી કે અંગ્રેજીમાં પ્રશ્ન પૂછી શકો છો.'
          : language === 'hi'
          ? 'नमस्ते! मैं "शुद्ध आहार" AI खाद्य सुरक्षा विशेषज्ञ हूँ। आप दूध, घी, हल्दी, मसाले, शहद, सरसों तेल या अन्य किसी भी खाद्य उत्पाद की मिलावट, घरेलू जांच विधियों और FSSAI लैब मानकों के बारे में हिंदी, गुजराती या अंग्रेजी में प्रश्न पूछ सकते हैं।'
          : 'Welcome! I am the "Shuddh Aahar" AI Food Safety Specialist. You can ask me questions about food adulteration, FSSAI DART home tests, toxic chemicals, and accredited laboratory procedures in English, ગુજરાતી, or हिंदी.';

      setMessages([
        {
          id: 'welcome',
          role: 'model',
          text: welcomeText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }
  }, [language]);

  // Handle incoming initialQuestion from other components
  useEffect(() => {
    if (initialQuestion && initialQuestion.trim()) {
      handleSend(initialQuestion);
      if (onClearInitialQuestion) {
        onClearInitialQuestion();
      }
    }
  }, [initialQuestion]);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (customText?: string) => {
    const textToSend = customText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: String(Date.now()),
      role: 'user',
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!customText) setInput('');
    setIsLoading(true);

    try {
      const historyPayload = messages.map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: historyPayload,
          language,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to fetch AI response');
      }

      const botMessage: ChatMessage = {
        id: String(Date.now() + 1),
        role: 'model',
        text: data.reply || 'No response generated.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      console.error('Chat Error:', err);
      const errorMessage: ChatMessage = {
        id: String(Date.now() + 1),
        role: 'model',
        text:
          language === 'gu'
            ? `માફ કરશો, સર્વર સાથે સંપર્ક કરવામાં ભૂલ થઈ: ${err.message}`
            : language === 'hi'
            ? `क्षमा करें, सर्वर से जुड़ने में त्रुटि हुई: ${err.message}`
            : `Sorry, unable to connect to AI Food Specialist: ${err.message}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        error: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleReset = () => {
    setMessages([]);
  };

  return (
    <div className="w-full flex-1 flex flex-col px-3.5 py-3 overflow-x-hidden">
      {/* Container */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden flex flex-col flex-1 min-h-[560px]">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 p-4 sm:p-5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-300 border border-white/20">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base sm:text-lg text-white font-serif">
                  {t.aiAdvisorTab}
                </h3>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
              </div>
              <p className="text-xs text-emerald-200/80">
                Grounded in FSSAI DART & NABL Scientific Protocols • EN / GU / HI
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1 transition-colors"
              title="Reset conversation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="bg-emerald-50/70 border-b border-emerald-100 p-3 overflow-x-auto no-scrollbar shrink-0">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-stone-500 font-semibold whitespace-nowrap flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              {t.quickQuestionsTitle}
            </span>
            {t.quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="px-2.5 py-1 rounded-lg bg-white hover:bg-emerald-100/70 text-stone-700 hover:text-emerald-900 border border-stone-200 text-xs font-medium whitespace-nowrap transition-colors shadow-2xs"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-stone-50/50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 max-w-3xl ${
                msg.role === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
              }`}
            >
              {/* Avatar */}
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                  msg.role === 'user'
                    ? 'bg-emerald-700 text-white'
                    : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                }`}
              >
                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4 text-emerald-800" />}
              </div>

              {/* Message Bubble */}
              <div
                className={`rounded-2xl p-4 text-sm leading-relaxed shadow-xs relative group ${
                  msg.role === 'user'
                    ? 'bg-emerald-800 text-white rounded-tr-none'
                    : msg.error
                    ? 'bg-rose-50 text-rose-900 border border-rose-200 rounded-tl-none'
                    : 'bg-white text-stone-800 border border-stone-200 rounded-tl-none'
                }`}
              >
                {/* Text Content */}
                <div className="whitespace-pre-line space-y-2">
                  {msg.text}
                </div>

                {/* Footer time & copy */}
                <div
                  className={`mt-2.5 pt-1.5 flex items-center justify-between text-[11px] border-t ${
                    msg.role === 'user'
                      ? 'border-white/20 text-emerald-200'
                      : 'border-stone-100 text-stone-400'
                  }`}
                >
                  <span>{msg.timestamp}</span>

                  {msg.role === 'model' && !msg.error && (
                    <button
                      onClick={() => handleCopy(msg.id, msg.text)}
                      className="hover:text-emerald-700 flex items-center gap-1 transition-colors"
                      title="Copy message"
                    >
                      {copiedId === msg.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                      <span>{copiedId === msg.id ? 'Copied' : 'Copy'}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex gap-3 mr-auto max-w-xl">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-200 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-emerald-800" />
              </div>
              <div className="bg-white rounded-2xl rounded-tl-none p-4 border border-stone-200 text-sm text-stone-600 shadow-xs flex items-center gap-3">
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce"></div>
                </div>
                <span className="text-xs font-medium text-stone-500">
                  Consulting FSSAI DART & NABL standards...
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Disclaimer Bar */}
        <div className="px-4 py-2 bg-stone-100 text-stone-600 text-[11px] border-t border-stone-200 flex items-center gap-1.5 shrink-0">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>
            AI responses follow FSSAI scientific protocols. Home tests are rapid screening tools only; accredited lab testing is required for legal and chemical confirmation.
          </span>
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-stone-200 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.aiChatPlaceholder}
              disabled={isLoading}
              className="flex-1 px-4 py-3 rounded-2xl bg-stone-50 border border-stone-200 text-stone-800 text-sm placeholder-stone-400 focus:outline-none focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10 transition-all disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="px-5 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 disabled:bg-stone-300 text-white font-bold text-sm transition-all shadow-xs flex items-center gap-1.5 active:scale-95 disabled:pointer-events-none"
            >
              <span>{t.send}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
