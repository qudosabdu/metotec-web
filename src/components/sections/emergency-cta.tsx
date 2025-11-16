"use client";

import React from "react";
import { motion } from "framer-motion";

const EmergencyCtaSection = () => {
  return (
    <section className="bg-[var(--color-brand-blue)] py-12 md:py-16">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
            Schneller Ankauf? Dringende Liquidation?
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Benötigen Sie sofortige Unterstützung? Unser Team steht bereit. 
            Wir bieten schnelle Bewertung und faire Angebote für Ihre Industriegüter!
          </p>
          <button className="bg-white text-[var(--color-dark-charcoal)] px-8 py-4 rounded-sm font-bold uppercase text-sm hover:bg-[var(--color-very-light-gray)] transition-colors">
            Jetzt Kontakt aufnehmen
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EmergencyCtaSection;