"use client";

import { useLanguage } from "@/lib/language-context";

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      key: "bbq",
      icon: (
        <svg
          className="w-12 h-12 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
          />
        </svg>
      ),
      image: "/DSC06914-scaled.jpg",
    },
    {
      key: "location",
      icon: (
        <svg
          className="w-12 h-12 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      image: "/DSC06912-scaled.jpg",
    },
    {
      key: "comfort",
      icon: (
        <svg
          className="w-12 h-12 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      image: "/DSC06902-scaled.jpg",
    },
  ];

  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4 rotate-1">
            {t.features.title}
          </h2>
          <p className="text-lg md:text-xl text-foreground/80">
            {t.features.subtitle}
          </p>

          {/* Decorative squiggle */}
          <svg
            className="w-32 h-6 mx-auto mt-4"
            viewBox="0 0 100 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4,4"
          >
            <path d="M0,10 Q15,5 30,10 T60,10 T100,10" />
          </svg>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const featureData = t.features[feature.key as keyof typeof t.features] as {
              title: string;
              description: string;
            };

            return (
              <div
                key={feature.key}
                className={`${index === 0 ? "-rotate-1" : index === 1 ? "rotate-2" : "-rotate-2"}`}
              >
                <div
                  className="bg-white border-[3px] border-foreground shadow-hard hover:shadow-hard-lg transition-all duration-300 hover:scale-105 hover:rotate-0 overflow-hidden"
                  style={{
                    borderRadius:
                      index === 0
                        ? "155px 25px 145px 35px / 35px 145px 25px 155px"
                        : index === 1
                        ? "185px 15px 165px 25px / 25px 165px 15px 185px"
                        : "145px 35px 135px 25px / 25px 135px 35px 145px",
                  }}
                >
                  {/* Feature Image */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={feature.image}
                      alt={featureData.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full border-2 border-foreground">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Feature Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-3">
                      {featureData.title}
                    </h3>
                    <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                      {featureData.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  {index % 2 === 0 && (
                    <div
                      className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-foreground/10 rotate-2"
                      style={{
                        boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
