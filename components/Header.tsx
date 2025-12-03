"use client";

import { useLanguage } from "@/lib/language-context";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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

        {/* Navigation */}
        <nav className="flex items-center gap-2 md:gap-4">
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
              className={`px-2 py-1 text-sm md:text-base transition-all ${
                language === "bg"
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
              className={`px-2 py-1 text-sm md:text-base transition-all ${
                language === "en"
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
