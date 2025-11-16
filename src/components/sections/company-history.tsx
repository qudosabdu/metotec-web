"use client";

import React from "react";
import { motion } from "framer-motion";

const CompanyHistory = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[var(--color-medium-gray)] mb-6">
            METOTEC — Ihr Partner seit über 30 Jahren
          </h2>
          <div className="space-y-4 text-[var(--color-light-gray)] leading-relaxed">
            <p>
              Seit über <strong className="text-[var(--color-medium-gray)]">30 Jahren</strong> ist METOTEC eine führende 
              <strong className="text-[var(--color-medium-gray)]"> internationale Handelsfirma</strong> für den Ankauf von neuen 
              und gebrauchten technischen Wirtschaftsgütern. Unsere langjährige Erfahrung und unser 
              <strong className="text-[var(--color-medium-gray)]"> weltweites Netzwerk</strong> ermöglichen es uns, 
              faire Preise und schnelle Abwicklungen zu garantieren.
            </p>
            <p>
              Wir sind spezialisiert auf <strong className="text-[var(--color-medium-gray)]">Elektromotoren, Getriebe, 
              Hydraulik, Elektromaterial</strong> und vieles mehr. Mit einem Produktsortiment von über 
              <strong className="text-[var(--color-medium-gray)]"> 500+ Kategorien</strong> und Präsenz in mehr als 
              <strong className="text-[var(--color-medium-gray)]"> 50 globalen Märkten</strong>, bieten wir unseren Kunden 
              professionelle Bewertungen und transparente Prozesse.
            </p>
            <p>
              Als <strong className="text-[var(--color-medium-gray)]">unabhängiges Familienunternehmen</strong> legen wir 
              besonderen Wert auf Vertrauen, Qualität und langfristige Geschäftsbeziehungen. Unsere 
              <strong className="text-[var(--color-medium-gray)]"> Expertise in der Industrie</strong> und unser Engagement 
              für exzellenten Service machen uns zum bevorzugten Partner für Industrieunternehmen weltweit.
            </p>
          </div>
          <button className="mt-8 bg-[var(--color-medium-gray)] text-white px-8 py-3 rounded-sm font-bold uppercase text-sm hover:bg-[var(--color-dark-charcoal)] transition-colors">
            Mehr über unser Unternehmen
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyHistory;