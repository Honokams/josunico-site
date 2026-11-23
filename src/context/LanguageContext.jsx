
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import fr from "@/locales/fr";
import en from "@/locales/en";

const LanguageContext = createContext(null);

const dictionaries = { fr, en };

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("josunico-language");

      if (savedLanguage === "fr" || savedLanguage === "en") {
        setLanguage(savedLanguage);
      }
    } catch {
      // Le site conserve le français si le stockage est indisponible.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (newLanguage) => {
    if (newLanguage !== "fr" && newLanguage !== "en") return;

    setLanguage(newLanguage);

    try {
      localStorage.setItem("josunico-language", newLanguage);
    } catch {
      // La sélection reste active pendant la session.
    }
  };

  const t = dictionaries[language];

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage doit être utilisé dans LanguageProvider"
    );
  }

  return context;
}
