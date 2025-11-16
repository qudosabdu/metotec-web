"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactCtaBottom = () => {
  return (
    <section className="bg-[var(--color-brand-blue)] py-16 md:py-20">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-white/90 mb-6 max-w-3xl mx-auto">
            METOTEC ist bekannt für schnelle Abwicklung und faire Preise. Nutzen Sie einfach unser 
            Kontaktformular, um ein Angebot zu erhalten, oder senden Sie uns Fotos und Spezifikationen 
            Ihrer Industriegüter. Wir helfen Ihnen gerne weiter.
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
            Lassen Sie uns gemeinsam die beste Lösung für Ihre Industriegüter finden!
          </h2>
          <button className="bg-white text-[var(--color-dark-charcoal)] px-8 py-4 rounded-sm font-bold uppercase text-sm hover:bg-[var(--color-very-light-gray)] transition-colors shadow-md">
            Kontakt aufnehmen
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCtaBottom;