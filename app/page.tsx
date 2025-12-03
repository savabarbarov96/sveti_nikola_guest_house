"use client";

import { LanguageProvider } from "@/lib/language-context";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Attractions from "@/components/Attractions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Features />
          <Gallery />
          <Attractions />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
