"use client";

import { useLanguage } from "@/lib/language-context";

export default function Attractions() {
  const { t } = useLanguage();

  return (
    <section id="attractions" className="py-20 px-6 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4 -rotate-1">
            {t.attractions.title}
          </h2>
          <p className="text-lg md:text-xl text-foreground/80">
            {t.attractions.subtitle}
          </p>

          {/* Decorative wavy line */}
          <svg
            className="w-40 h-6 mx-auto mt-4"
            viewBox="0 0 120 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M0,10 Q15,5 30,10 T60,10 T90,10 T120,10" />
          </svg>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* About Razlog Card */}
          <div
            className="bg-[#fff9c4] border-[3px] border-foreground shadow-hard-lg p-8 rotate-1"
            style={{
              borderRadius: "185px 25px 165px 35px / 35px 165px 25px 185px",
            }}
          >
            {/* Decorative tape */}
            <div
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-foreground/10 rotate-3"
              style={{
                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
              }}
            />

            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4 flex items-center gap-3">
              <span className="text-accent text-4xl">?</span>
              {t.attractions.about.title}
            </h3>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
              {t.attractions.about.description}
            </p>
          </div>

          {/* Attractions List Card */}
          <div
            className="bg-white border-[3px] border-foreground shadow-hard-lg p-8 -rotate-1"
            style={{
              borderRadius: "155px 35px 145px 25px / 25px 145px 35px 155px",
            }}
          >
            {/* Decorative thumbtack */}
            <div className="absolute top-4 right-4">
              <div className="w-5 h-5 rounded-full bg-accent border-2 border-foreground" />
            </div>

            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-6">
              {t.attractions.list.title}
            </h3>
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              {t.attractions.list.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-accent mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Grid - Razlog scenery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            "/DSC06960-scaled.jpg",
            "/DSC06964-scaled.jpg",
            "/DSC06969-scaled.jpg",
            "/DSC06979-scaled.jpg",
          ].map((image, index) => (
            <div
              key={index}
              className={`aspect-square relative group cursor-pointer ${
                index % 2 === 0 ? "rotate-2" : "-rotate-2"
              }`}
            >
              <div
                className="w-full h-full border-[3px] border-foreground shadow-hard hover:shadow-hard-lg hover:scale-105 hover:rotate-0 transition-all duration-300 overflow-hidden"
                style={{
                  borderRadius:
                    index % 3 === 0
                      ? "95px 15px 85px 25px / 25px 85px 15px 95px"
                      : index % 3 === 1
                      ? "105px 25px 95px 15px / 15px 95px 25px 105px"
                      : "85px 25px 95px 15px / 15px 95px 25px 85px",
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
