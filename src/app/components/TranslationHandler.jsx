"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import useAutoTranslate from "@/hook/useAutoTranslate";


export default function TranslationHandler() {
  const { language } = useLanguage();

  useEffect(() => {
    if (language) {
      useAutoTranslate(language);
    }
  }, [language]);

  return null;
}
