"use client";

import { useLanguage } from "@/lib/language-context";
import { useState, useEffect } from "react";

// Hero carousel images - defined outside component to prevent recreation
const heroImages = [
  "/logo.png",
  "/DSC06902-scaled.jpg",
  "/DSC06907-scaled.jpg",
  "/DSC06912-scaled.jpg",
  "/DSC06921-scaled.jpg",
  "/DSC06935-scaled.jpg",
];

export default function Hero() {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Auto-advance carousel
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []); // Empty dependency array since heroImages is constant

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="py-20 px-6 min-h-[80vh] flex items-center relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            {/* Title with hand-drawn effect */}
            <h1 className="font-heading text-5xl md:text-6xl text-foreground -rotate-1">
              {t.hero.title}
            </h1>

            {/* Subtitle */}
            <div
              className="inline-block bg-[#fff9c4] px-4 py-2 border-2 border-foreground rotate-1 shadow-hard-sm"
              style={{
                borderRadius: "95px 15px 85px 25px / 25px 85px 15px 95px",
              }}
            >
              <p className="text-xl md:text-2xl text-foreground">
                {t.hero.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              {t.hero.description}
            </p>

            {/* CTA Button */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="wobbly-md px-8 py-4 text-lg md:text-2xl bg-white border-[3px] border-foreground text-foreground shadow-hard hover:bg-accent hover:text-white hover:shadow-hard-sm hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all font-heading"
              >
                {t.hero.cta}
              </button>

              {/* Hand-drawn arrow (decorative) */}
              <svg
                className="hidden md:block w-20 h-20 text-accent animate-bounce"
                style={{ animationDuration: "3s" }}
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              >
                <path
                  d="M10,50 Q30,20 50,40 T85,30"
                  strokeDasharray="4,4"
                />
                <path d="M75,25 L85,30 L80,40" />
              </svg>
            </div>
          </div>

          {/* Guest House Main Image Carousel */}
          <div className="relative">
            <div
              className="aspect-[4/3] bg-white border-[3px] border-foreground shadow-hard-lg rotate-2 overflow-hidden relative"
              style={{
                borderRadius: "185px 25px 165px 35px / 35px 165px 25px 185px",
              }}
            >
              {/* Image Carousel */}
              {heroImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Свети Никола Guest House - Photo ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Corner frame marks (hand-drawn effect) */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 border-accent z-10" />
              <div className="absolute top-2 right-2 w-8 h-8 border-t-4 border-r-4 border-accent z-10" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-4 border-l-4 border-accent z-10" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 border-accent z-10" />

              {/* Carousel indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full border-2 border-foreground transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-accent scale-125"
                        : "bg-white hover:bg-muted"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating decorative circle */}
            <div
              className="hidden md:block absolute -top-8 -right-8 w-16 h-16 border-[3px] border-dashed border-secondary rounded-full animate-bounce"
              style={{ animationDuration: "4s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
