"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { es } from "@/lib/translations/es"
import { en } from "@/lib/translations/en"
import type { Translations } from "@/lib/translations"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  t: Translations
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const saved = localStorage.getItem("bop-lang") as Language | null
    if (saved === "es" || saved === "en") {
      setLanguage(saved)
    }
  }, [])

  const toggleLanguage = () => {
    const next: Language = language === "es" ? "en" : "es"
    setLanguage(next)
    localStorage.setItem("bop-lang", next)
  }

  const t = language === "es" ? es : en

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider")
  return ctx
}

