import type { Metadata } from "next";
import { Kalam, Patrick_Hand } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const kalam = Kalam({
  variable: "--font-kalam",
  weight: "700",
  subsets: ["latin"],
});

const patrickHand = Patrick_Hand({
  variable: "--font-patrick-hand",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Къща за Гости \"Свети Никола\" - Разлог | Guest House Razlog Bulgaria",
  description:
    "Къща за гости в центъра на Разлог с барбекю, градина и уютна атмосфера. Близо до Банско, Пирин и ски курорти. Guest house in Razlog center with BBQ, garden. Near Bansko, Pirin National Park.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  keywords: [
    "къща за гости",
    "къща за гости Разлог",
    "къща под наем",
    "настаняване Разлог",
    "хотел Разлог",
    "guest house Razlog",
    "accommodation Razlog",
    "Razlog Bulgaria",
    "Банско",
    "Bansko",
    "Пирин",
    "Pirin",
    "барбекю",
    "bbq",
    "ски",
    "ski",
    "планинска къща",
    "mountain house",
  ],
  authors: [{ name: "Sveti Nikola Guest House" }],
  creator: "Sveti Nikola Guest House",
  publisher: "Sveti Nikola Guest House",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Къща за Гости \"Свети Никола\" - Разлог",
    description:
      "Уютна къща за гости в центъра на Разлог с барбекю и градина. Идеална за почивка близо до Банско и Пирин.",
    url: "https://svetinikola-razlog.com",
    siteName: "\"Sveti Nikola\" Guest House",
    locale: "bg_BG",
    type: "website",
    images: [
      {
        url: "/DSC06902-scaled.jpg",
        width: 1200,
        height: 800,
        alt: "Свети Никола Guest House - Razlog",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${kalam.variable} ${patrickHand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
