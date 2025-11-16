"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Mail, Phone } from "lucide-react";

const CustomSolutions = () => {
  const benefits = [
    "Ankauf von neuen und gebrauchten Industriegütern",
    "Schnelle Abwicklung und faire Preise",
    "Weltweites Netzwerk und internationale Erfahrung",
    "Professionelle Bewertung und transparente Prozesse",
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-black text-[var(--color-medium-gray)] mb-6">
              Professioneller Ankauf von Industriegütern
            </h2>
            <p className="text-[var(--color-light-gray)] mb-6 leading-relaxed">
              Als internationale Handelsfirma sind wir spezialisiert auf den Ankauf von neuen und 
              gebrauchten technischen Wirtschaftsgütern. Mit über 30 Jahren Erfahrung und einem 
              globalen Netzwerk bieten wir faire Konditionen und schnelle Abwicklung.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="bg-[var(--color-brand-blue)] rounded-full p-1 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[var(--color-medium-gray)] font-medium">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            <blockquote className="border-l-4 border-[var(--color-brand-blue)] pl-6 italic text-[var(--color-light-gray)]">
              "Mit METOTEC haben wir einen verlässlichen Partner gefunden, der unsere Industriegüter 
              professionell bewertet und fair ankauft. Die Abwicklung war schnell und unkompliziert."
              <footer className="mt-2 text-sm font-bold not-italic text-[var(--color-medium-gray)]">
                — Industriekunde, Deutschland
              </footer>
            </blockquote>
          </div>

          {/* Right Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-[var(--color-very-light-gray)] p-8 rounded-sm sticky top-32">
              <h3 className="text-xl font-black text-[var(--color-medium-gray)] mb-4">
                Haben Sie Industriegüter zu verkaufen?
              </h3>
              <p className="text-[var(--color-light-gray)] mb-6 text-sm">
                Kontaktieren Sie uns für eine unverbindliche Bewertung und ein faires Angebot.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:info@metotec.com"
                  className="flex items-center gap-3 bg-[var(--color-brand-blue)] text-white px-6 py-3 rounded-sm font-bold uppercase text-sm hover:bg-[var(--color-brand-blue-dark)] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  info@metotec.com
                </a>

                <div className="pt-4 border-t border-[var(--color-border-gray)]">
                  <p className="text-sm text-[var(--color-light-gray)] mb-3">
                    Oder sprechen Sie direkt mit einem Experten:
                  </p>
                  <div className="flex items-center gap-3 text-[var(--color-medium-gray)]">
                    <Phone className="w-5 h-5" />
                    <span className="font-bold">Tel. +49 (0) 123 456789</span>
                  </div>
                  <p className="text-xs text-[var(--color-light-gray)] mt-4 italic">
                    Schnelle Bewertung und transparente Preisgestaltung garantiert.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutions;