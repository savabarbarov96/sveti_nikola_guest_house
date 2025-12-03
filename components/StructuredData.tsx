export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "\"Свети Никола\" Guest House",
    alternateName: "\"Sveti Nikola\" Guest House Razlog",
    description:
      "Уютна къща за гости в центъра на Разлог с барбекю, градина и спокойна атмосфера. Близо до Банско, Пирин и ски курорти.",
    image: [
      "https://svetinikola-razlog.com/DSC06902-scaled.jpg",
      "https://svetinikola-razlog.com/DSC06907-scaled.jpg",
      "https://svetinikola-razlog.com/DSC06914-scaled.jpg",
    ],
    "@id": "https://svetinikola-razlog.com",
    url: "https://svetinikola-razlog.com",
    telephone: "+359887673759",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Братя Юрукови № 4",
      addressLocality: "Разлог",
      postalCode: "2760",
      addressCountry: "BG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.8855,
      longitude: 23.4622,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Барбекю / BBQ",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Градина / Garden",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Паркинг / Parking",
        value: true,
      },
    ],
    hasMap: "https://www.google.com/maps?q=41.8855,23.4622",
    numberOfRooms: "Multiple",
    petsAllowed: "Ask in advance",
    smokingAllowed: false,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
