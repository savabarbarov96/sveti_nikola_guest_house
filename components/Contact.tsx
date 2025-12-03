"use client";

import { useLanguage } from "@/lib/language-context";
import { useState } from "react";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - could integrate with email service
    console.log("Form submitted:", formData);
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4 rotate-1">
            {t.contact.title}
          </h2>
          <p className="text-lg md:text-xl text-foreground/80">
            {t.contact.subtitle}
          </p>

          {/* Decorative squiggle */}
          <svg
            className="w-40 h-6 mx-auto mt-4"
            viewBox="0 0 120 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4,4"
          >
            <path d="M0,10 Q15,0 30,10 T60,10 T90,10 T120,10" />
          </svg>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className="bg-white border-[3px] border-foreground shadow-hard-lg p-8 -rotate-1"
            style={{
              borderRadius: "185px 25px 165px 35px / 35px 165px 25px 185px",
            }}
          >
            {/* Decorative tape at top */}
            <div
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-foreground/10 rotate-2"
              style={{
                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
              }}
            />

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-heading text-foreground mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-foreground wobbly-sm focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                  placeholder={t.contact.form.name}
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-heading text-foreground mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border-2 border-foreground wobbly-sm focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                  placeholder={t.contact.form.email}
                />
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-sm font-heading text-foreground mb-2">
                  {t.contact.form.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-foreground wobbly-sm focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                  placeholder={t.contact.form.phone}
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-heading text-foreground mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white border-2 border-foreground wobbly-sm focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"
                  placeholder={t.contact.form.message}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full wobbly-md px-6 py-4 text-lg md:text-xl bg-white border-[3px] border-foreground text-foreground shadow-hard hover:bg-accent hover:text-white hover:shadow-hard-sm hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all font-heading"
              >
                {t.contact.form.submit}
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Information Card */}
            <div
              className="bg-[#fff9c4] border-[3px] border-foreground shadow-hard p-8 rotate-1"
              style={{
                borderRadius: "155px 35px 145px 25px / 25px 145px 35px 155px",
              }}
            >
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <svg
                    className="w-6 h-6 text-accent mt-1 flex-shrink-0"
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
                  <div>
                    <p className="font-heading text-lg text-foreground mb-1">
                      {t.contact.info.address}
                    </p>
                    <p className="text-foreground/80">
                      {t.contact.info.addressValue}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <svg
                    className="w-6 h-6 text-accent mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="font-heading text-lg text-foreground mb-1">
                      {t.contact.info.phone}
                    </p>
                    <a
                      href="tel:0887673759"
                      className="text-foreground/80 hover:text-accent transition-colors"
                    >
                      {t.contact.info.phoneValue}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div
              className="aspect-[4/3] bg-white border-[3px] border-foreground shadow-hard-lg overflow-hidden -rotate-1"
              style={{
                borderRadius: "145px 25px 135px 35px / 35px 135px 25px 145px",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.234567890!2d23.4622!3d41.8855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDUzJzA3LjgiTiAyM8KwMjcnNDMuOSJF!5e0!3m2!1sen!2sbg!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sveti Nikola Guest House Location"
              />
              {/* Note: The coordinates in the src are approximate for Razlog center.
                   You'll need to get the exact coordinates for the actual address. */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
