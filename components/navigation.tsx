"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useLanguage()

  const isActive = (path: string) => pathname === path

  const languages = [
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "zh-cn", name: "简体中文", flag: "🇨🇳" },
    { code: "zh-tw", name: "繁體中文", flag: "🇹🇼" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary-dark">
            SISM CYCLING
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={isActive("/") ? "nav-link-active" : "nav-link"}>
              {t("nav.home")}
            </Link>
            <Link href="/about" className={isActive("/about") ? "nav-link-active" : "nav-link"}>
              {t("nav.about")}
            </Link>
            <Link
              href="/tours"
              className={isActive("/tours") || pathname.startsWith("/tours/") ? "nav-link-active" : "nav-link"}
            >
              {t("nav.tours")}
            </Link>
            <Link href="/contact" className={isActive("/contact") ? "nav-link-active" : "nav-link"}>
              {t("nav.contact")}
            </Link>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 text-sm text-secondary hover:text-primary-dark transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span>{currentLanguage?.flag}</span>
                <span>{currentLanguage?.name}</span>
                <ChevronDown className="h-3 w-3" />
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-light py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any)
                        setIsLanguageOpen(false)
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-light transition-colors flex items-center space-x-3 ${
                        language === lang.code ? "bg-light text-primary-dark font-medium" : "text-secondary"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-light">
          <div className="px-6 py-4 space-y-4">
            <Link href="/" className={`block ${isActive("/") ? "nav-link-active" : "nav-link"}`}>
              {t("nav.home")}
            </Link>
            <Link href="/about" className={`block ${isActive("/about") ? "nav-link-active" : "nav-link"}`}>
              {t("nav.about")}
            </Link>
            <Link
              href="/tours"
              className={`block ${isActive("/tours") || pathname.startsWith("/tours/") ? "nav-link-active" : "nav-link"}`}
            >
              {t("nav.tours")}
            </Link>
            <Link href="/contact" className={`block ${isActive("/contact") ? "nav-link-active" : "nav-link"}`}>
              {t("nav.contact")}
            </Link>

            {/* Mobile Language Selector */}
            <div className="pt-4 border-t border-light">
              <div className="text-sm text-secondary mb-2 flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>Language</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as any)
                      setIsMenuOpen(false)
                    }}
                    className={`text-left px-3 py-2 text-sm rounded-md transition-colors flex items-center space-x-2 ${
                      language === lang.code
                        ? "bg-light text-primary-dark font-medium"
                        : "text-secondary hover:bg-light"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
