"use client";

import { useEffect } from "react";

interface ImageLightboxProps {
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
}

export default function ImageLightbox({ imageSrc, imageAlt, onClose }: ImageLightboxProps) {
  useEffect(() => {
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden";

    // Close on escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-12 h-12 bg-white border-[3px] border-foreground wobbly-sm shadow-hard hover:bg-accent hover:text-white transition-all group z-50"
        aria-label="Close"
      >
        <svg
          className="w-6 h-6 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Image container */}
      <div
        className="relative max-w-6xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="bg-white border-[3px] border-foreground shadow-hard-lg overflow-hidden"
          style={{
            borderRadius: "185px 25px 165px 35px / 35px 165px 25px 185px",
          }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto max-h-[85vh] object-contain"
          />
        </div>

        {/* Navigation hint */}
        <p className="text-center mt-4 text-background/70 text-sm font-heading">
          Click outside or press ESC to close
        </p>
      </div>
    </div>
  );
}
