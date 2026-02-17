import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/data/translations";

type Language = "ko" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (ko: string, en: string) => string;
  tr: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // 로컬 스토리지에서 저장된 언어 설정 불러오기
    const saved = localStorage.getItem("language");
    return (saved === "en" ? "en" : "ko") as Language;
  });

  useEffect(() => {
    // 언어 변경 시 로컬 스토리지에 저장
    localStorage.setItem("language", language);
    // HTML lang 속성 변경
    document.documentElement.lang = language;
  }, [language]);

  const t = (ko: string, en: string) => {
    return language === "en" ? en : ko;
  };

  // 번역 객체에서 값을 가져오는 헬퍼 함수
  const tr = (path: string) => {
    const keys = path.split('.');
    let value: any = translations;
    
    for (const key of keys) {
      value = value?.[key];
      if (!value) return path; // 키가 없으면 경로 반환
    }
    
    return value[language] || value["ko"] || path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
