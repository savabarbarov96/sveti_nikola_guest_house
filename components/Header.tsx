"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <header className="sticky top-0 z-50 py-4 px-6 bg-white/90 backdrop-blur-sm border-b-[3px] border-foreground">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo/Title */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 hover:-rotate-1 transition-transform group"
        >
          <img
            src="/logo.png"
            alt="Свети Никола Logo"
            className="h-14 md:h-16 w-auto"
          />
          <span className="font-heading text-2xl md:text-3xl text-foreground">
            "Свети Никола"
          </span>
        </button>

        {/* Burger Menu Button - Mobile Only */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 hover:rotate-3 transition-transform z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
          />
          <span
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          />
        </button>

        {/* Desktop Navigation - Hidden on Mobile */}
        <nav className="hidden md:flex items-center gap-2 md:gap-4">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xs md:text-sm hover:text-accent hover:rotate-1 transition-all relative group"
          >
            {t.nav.home}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-xs md:text-sm hover:text-accent hover:rotate-1 transition-all relative group"
          >
            {t.nav.features}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
          </button>

          {/* Dropdown for apartments */}
          <div className="relative group/dropdown">
            <button className="text-xs md:text-sm hover:text-accent hover:rotate-1 transition-all relative group flex items-center gap-1">
              {t.nav.gallery}
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
            </button>

            {/* Dropdown menu */}
            <div className="absolute top-full left-0 mt-2 bg-white border-[3px] border-foreground shadow-hard-lg opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 z-50 min-w-[180px]"
              style={{ borderRadius: "75px 15px 65px 25px / 25px 65px 15px 75px" }}>
              <button
                onClick={() => scrollToSection("mehana")}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-accent hover:text-white transition-colors"
              >
                {t.gallery.categories.mehana}
              </button>
              <button
                onClick={() => scrollToSection("apartment1")}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-accent hover:text-white transition-colors"
              >
                {t.gallery.categories.apartment1}
              </button>
              <button
                onClick={() => scrollToSection("apartment2")}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-accent hover:text-white transition-colors"
              >
                {t.gallery.categories.apartment2}
              </button>
              <button
                onClick={() => scrollToSection("apartment3")}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-accent hover:text-white transition-colors"
              >
                {t.gallery.categories.apartment3}
              </button>
              <button
                onClick={() => scrollToSection("apartment4")}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-accent hover:text-white transition-colors"
              >
                {t.gallery.categories.apartment4}
              </button>
            </div>
          </div>

          <button
            onClick={() => scrollToSection("attractions")}
            className="text-xs md:text-sm hover:text-accent hover:rotate-1 transition-all relative group"
          >
            {t.nav.attractions}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-xs md:text-sm hover:text-accent hover:rotate-1 transition-all relative group"
          >
            {t.nav.contact}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
          </button>

          {/* Language Toggle */}
          <div className="flex gap-1 ml-2 border-2 border-foreground wobbly-sm p-1 bg-white">
            <button
              onClick={() => setLanguage("bg")}
              className={`px-2 py-1 text-sm md:text-base transition-all ${language === "bg"
                ? "bg-accent text-white"
                : "bg-transparent text-foreground hover:bg-muted"
                }`}
              style={{
                borderRadius: "45px 25px 55px 15px / 15px 55px 25px 45px",
              }}
            >
              БГ
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 text-sm md:text-base transition-all ${language === "en"
                ? "bg-accent text-white"
                : "bg-transparent text-foreground hover:bg-muted"
                }`}
              style={{
                borderRadius: "45px 25px 55px 15px / 15px 55px 25px 45px",
              }}
            >
              EN
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu - Slide Down Panel */}
      <div
        className={`absolute left-0 right-0 bg-white/95 backdrop-blur-sm md:hidden transition-all duration-300 border-b-[3px] border-foreground shadow-hard-lg overflow-hidden ${isMobileMenuOpen
            ? "max-h-[80vh] opacity-100"
            : "max-h-0 opacity-0 border-b-0"
          }`}
        style={{ top: "100%" }}
      >
        <nav className="flex flex-col gap-4 p-6 overflow-y-auto max-h-[calc(80vh-3rem)]">
          {/* Main Navigation Links */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-lg hover:text-accent transition-all text-left py-2 border-b border-muted"
          >
            {t.nav.home}
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-lg hover:text-accent transition-all text-left py-2 border-b border-muted"
          >
            {t.nav.features}
          </button>

          {/* Apartments Section - Collapsible */}
          <div className="border-b border-muted pb-2">
            <div className="text-lg font-bold text-foreground py-2">
              {t.nav.gallery}
            </div>
            <div className="grid grid-cols-2 gap-2 pl-2">
              <button
                onClick={() => scrollToSection("mehana")}
                className="text-base hover:text-accent transition-all text-left py-1"
              >
                {t.gallery.categories.mehana}
              </button>
              <button
                onClick={() => scrollToSection("apartment1")}
                className="text-base hover:text-accent transition-all text-left py-1"
              >
                {t.gallery.categories.apartment1}
              </button>
              <button
                onClick={() => scrollToSection("apartment2")}
                className="text-base hover:text-accent transition-all text-left py-1"
              >
                {t.gallery.categories.apartment2}
              </button>
              <button
                onClick={() => scrollToSection("apartment3")}
                className="text-base hover:text-accent transition-all text-left py-1"
              >
                {t.gallery.categories.apartment3}
              </button>
              <button
                onClick={() => scrollToSection("apartment4")}
                className="text-base hover:text-accent transition-all text-left py-1 col-span-2"
              >
                {t.gallery.categories.apartment4}
              </button>
            </div>
          </div>

          <button
            onClick={() => scrollToSection("attractions")}
            className="text-lg hover:text-accent transition-all text-left py-2 border-b border-muted"
          >
            {t.nav.attractions}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-lg hover:text-accent transition-all text-left py-2 border-b border-muted"
          >
            {t.nav.contact}
          </button>

          {/* Language Toggle - Mobile */}
          <div className="flex gap-2 border-2 border-foreground wobbly-sm p-1 bg-white w-fit mt-2">
            <button
              onClick={() => setLanguage("bg")}
              className={`px-3 py-1 text-base transition-all ${language === "bg"
                  ? "bg-accent text-white"
                  : "bg-transparent text-foreground hover:bg-muted"
                }`}
              style={{
                borderRadius: "45px 25px 55px 15px / 15px 55px 25px 45px",
              }}
            >
              БГ
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 text-base transition-all ${language === "en"
                  ? "bg-accent text-white"
                  : "bg-transparent text-foreground hover:bg-muted"
                }`}
              style={{
                borderRadius: "45px 25px 55px 15px / 15px 55px 25px 45px",
              }}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
