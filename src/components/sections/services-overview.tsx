"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Globe, Shield, TrendingUp } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Zap,
      title: "Schneller Ankauf",
      description: "Professionelle Bewertung und faire Angebote innerhalb von 24 Stunden",
    },
    {
      icon: Globe,
      title: "Globales Netzwerk",
      description: "Weltweite Präsenz in über 50 Märkten für maximale Reichweite",
    },
    {
      icon: Shield,
      title: "Sichere Abwicklung",
      description: "Transparente Prozesse und zuverlässige Zahlungsabwicklung",
    },
    {
      icon: TrendingUp,
      title: "Beste Marktpreise",
      description: "Faire Konditionen durch umfassende Marktkenntnisse und Expertise",
    },
  ];

  return (
    <section className="bg-[var(--color-very-light-gray)] py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[var(--color-medium-gray)] mb-4">
            Unsere Dienstleistungen auf einen Blick
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-brand-blue)] rounded-full mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-medium-gray)] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--color-light-gray)] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-sm shadow-sm">
            <Check className="w-5 h-5 text-green-600" />
            <span className="text-[var(--color-medium-gray)] font-bold">
              ISO 9001 Zertifiziert — Qualität garantiert
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;