"use client";

import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-6 bg-foreground text-background border-t-4 border-accent">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm md:text-base text-center md:text-left">
            {t.footer.rights}
          </p>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-4 text-sm md:text-base">
            <a
              href="tel:0887673759"
              className="hover:text-accent transition-colors flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              088 767 3759
            </a>

            <span className="hidden md:block text-accent">•</span>

            <span className="text-background/80">Разлог, България</span>
          </div>
        </div>

        {/* Decorative squiggle */}
        <svg
          className="w-full h-2 mt-6 opacity-50"
          viewBox="0 0 1000 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4,4"
        >
          <path d="M0,5 Q50,0 100,5 T200,5 T300,5 T400,5 T500,5 T600,5 T700,5 T800,5 T900,5 T1000,5" />
        </svg>

        {/* Made by credit */}
        <div className="mt-4 text-center">
          <a
            href="https://automationaid.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-background/70 hover:text-accent transition-colors group"
          >
            <span>Made with</span>
            <svg
              className="w-4 h-4 text-accent group-hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <span>by</span>
            <span className="font-heading text-base text-accent group-hover:underline">
              AutomationAid
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
