"use client";

import { useLanguage } from "@/lib/language-context";
import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

interface Photo {
  src: string;
  alt: string;
}

export default function Gallery() {
  const { t } = useLanguage();
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  // Механа photos
  const mehanaPhotos: Photo[] = [
    { src: "/DSC06902-scaled.jpg", alt: "Механа - Главна зала" },
    { src: "/DSC06907-scaled.jpg", alt: "Механа - Интериор" },
    { src: "/DSC06908-scaled.jpg", alt: "Механа - Детайли" },
    { src: "/DSC06912-scaled.jpg", alt: "Механа - Камина" },
  ];

  // Apartment 1 photos
  const apartment1Photos: Photo[] = [
    { src: "/DSC06921-scaled.jpg", alt: "Апартамент 1 - Спалня" },
    { src: "/DSC06923-scaled.jpg", alt: "Апартамент 1 - Хол" },
    { src: "/DSC06927-scaled.jpg", alt: "Апартамент 1 - Кухня" },
    { src: "/DSC06929-scaled.jpg", alt: "Апартамент 1 - Баня" },
    { src: "/DSC06930-scaled.jpg", alt: "Апартамент 1 - Детайли" },
    { src: "/DSC06932-scaled.jpg", alt: "Апартамент 1 - Изглед" },
    { src: "/DSC06934-scaled.jpg", alt: "Апартамент 1 - Балкон" },
  ];

  // Apartment 2 photos
  const apartment2Photos: Photo[] = [
    { src: "/DSC06935-scaled.jpg", alt: "Апартамент 2 - Спалня" },
    { src: "/DSC06937-scaled.jpg", alt: "Апартамент 2 - Хол" },
    { src: "/DSC06939-scaled.jpg", alt: "Апартамент 2 - Кухня" },
    { src: "/DSC06943-scaled.jpg", alt: "Апартамент 2 - Баня" },
    { src: "/DSC06944-scaled.jpg", alt: "Апартамент 2 - Детайли" },
  ];

  // Apartment 3 photos
  const apartment3Photos: Photo[] = [
    { src: "/DSC06950-scaled.jpg", alt: "Апартамент 3 - Спалня" },
    { src: "/DSC06953-scaled.jpg", alt: "Апартамент 3 - Хол" },
    { src: "/DSC06956-scaled.jpg", alt: "Апартамент 3 - Кухня" },
    { src: "/DSC06958-scaled.jpg", alt: "Апартамент 3 - Баня" },
    { src: "/DSC06960-scaled.jpg", alt: "Апартамент 3 - Тераса" },
    { src: "/DSC06964-scaled.jpg", alt: "Апартамент 3 - Изглед" },
    { src: "/DSC06966-scaled.jpg", alt: "Апартамент 3 - Детайли" },
    { src: "/DSC06969-scaled.jpg", alt: "Апартамент 3 - Обзавеждане" },
  ];

  // Apartment 4 photos
  const apartment4Photos: Photo[] = [
    { src: "/DSC06971-scaled.jpg", alt: "Апартамент 4 - Спалня" },
    { src: "/DSC06976-scaled.jpg", alt: "Апартамент 4 - Хол" },
    { src: "/DSC06977-scaled.jpg", alt: "Апартамент 4 - Кухня" },
    { src: "/DSC06978-scaled.jpg", alt: "Апартамент 4 - Баня" },
    { src: "/DSC06979-scaled.jpg", alt: "Апартамент 4 - Тераса" },
    { src: "/DSC06982-scaled.jpg", alt: "Апартамент 4 - Изглед" },
  ];

  const renderPhotoGrid = (photos: Photo[], sectionIndex: number) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`${
              index % 2 === 0 ? "rotate-1" : "-rotate-1"
            } group cursor-pointer`}
            onClick={() => setLightboxImage(photo)}
          >
            <div
              className="aspect-square bg-white border-[3px] border-foreground shadow-hard hover:shadow-hard-lg hover:scale-105 hover:rotate-0 transition-all duration-300 overflow-hidden relative"
              style={{
                borderRadius:
                  index % 3 === 0
                    ? "95px 15px 85px 25px / 25px 85px 15px 95px"
                    : index % 3 === 1
                    ? "105px 25px 95px 15px / 15px 95px 25px 105px"
                    : "85px 25px 95px 15px / 15px 95px 25px 85px",
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />

              {/* Click to expand overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
                </svg>
              </div>

              {/* Decorative elements */}
              {index % 3 === 0 && (
                <div
                  className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-foreground/10 rotate-3 z-10"
                  style={{
                    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                  }}
                />
              )}
              {index % 3 === 1 && (
                <div className="absolute top-2 right-2 z-10">
                  <div className="w-3 h-3 rounded-full bg-accent border-2 border-foreground" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Механа Section */}
      <section id="mehana" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4 rotate-1">
              {t.gallery.categories.mehana}
            </h2>
            <p className="text-lg md:text-xl text-foreground/80">
              Традиционна механа с автентична атмосфера
            </p>
            <svg
              className="w-32 h-4 mx-auto mt-4"
              viewBox="0 0 100 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5" />
            </svg>
          </div>
          {renderPhotoGrid(mehanaPhotos, 0)}
        </div>
      </section>

      {/* Apartment 1 Section */}
      <section id="apartment1" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4 -rotate-1">
              {t.gallery.categories.apartment1}
            </h2>
            <p className="text-lg md:text-xl text-foreground/80">
              Просторен и уютен апартамент за цялото семейство
            </p>
            <svg
              className="w-32 h-4 mx-auto mt-4"
              viewBox="0 0 100 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4,4"
            >
              <path d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5" />
            </svg>
          </div>
          {renderPhotoGrid(apartment1Photos, 1)}
        </div>
      </section>

      {/* Apartment 2 Section */}
      <section id="apartment2" className="py-20 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4 rotate-2">
              {t.gallery.categories.apartment2}
            </h2>
            <p className="text-lg md:text-xl text-foreground/80">
              Модерен апартамент с всички удобства
            </p>
            <svg
              className="w-32 h-4 mx-auto mt-4"
              viewBox="0 0 100 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5" />
            </svg>
          </div>
          {renderPhotoGrid(apartment2Photos, 2)}
        </div>
      </section>

      {/* Apartment 3 Section */}
      <section id="apartment3" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4 -rotate-2">
              {t.gallery.categories.apartment3}
            </h2>
            <p className="text-lg md:text-xl text-foreground/80">
              Луксозен апартамент с панорамен изглед
            </p>
            <svg
              className="w-32 h-4 mx-auto mt-4"
              viewBox="0 0 100 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4,4"
            >
              <path d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5" />
            </svg>
          </div>
          {renderPhotoGrid(apartment3Photos, 3)}
        </div>
      </section>

      {/* Apartment 4 Section */}
      <section id="apartment4" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4 rotate-1">
              {t.gallery.categories.apartment4}
            </h2>
            <p className="text-lg md:text-xl text-foreground/80">
              Comfortable apartment with beautiful terrace
            </p>
            <svg
              className="w-32 h-4 mx-auto mt-4"
              viewBox="0 0 100 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5" />
            </svg>
          </div>
          {renderPhotoGrid(apartment4Photos, 4)}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <ImageLightbox
          imageSrc={lightboxImage.src}
          imageAlt={lightboxImage.alt}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </>
  );
}
