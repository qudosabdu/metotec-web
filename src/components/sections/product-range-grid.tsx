"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Settings, Cog, Plug, Droplets } from "lucide-react";

const ProductRangeGrid = () => {
  const categories = [
    {
      icon: Zap,
      title: "Elektromotoren",
      description: "Drehstrommotoren, Gleichstrommotoren (200–1.000 KW), Hochspannungsmotoren (bis 20.000 KW)",
      manufacturers: ["ABB", "AEG", "Siemens", "SEW", "+3"],
    },
    {
      icon: Settings,
      title: "Getriebemotoren",
      description: "Hochwertige Getriebemotoren führender Hersteller",
      manufacturers: ["Demag", "SEW", "Nord", "Bauer", "+4"],
    },
    {
      icon: Cog,
      title: "Getriebe",
      description: "Industriegetriebe für vielfältige Einsatzbereiche",
      manufacturers: ["SEW", "Nord", "Siemens", "Flender"],
    },
    {
      icon: Plug,
      title: "Elektromaterial",
      description: "Inverter, Schalter, Schütze, Sensoren, Simatic, Schaltschränke, Relais",
      manufacturers: ["Siemens", "ABB", "Schneider Electric", "Allen Bradley"],
    },
    {
      icon: Droplets,
      title: "Hydraulik",
      description: "Schalter, Pumpen, Motoren, Ventile, Zylinder",
      manufacturers: ["Bosch Rexroth", "Parker", "Eaton", "Hydac"],
    },
  ];

  return (
    <section className="bg-[var(--color-very-light-gray)] py-16 md:py-24">
      <div className="container">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[var(--color-brand-blue)] p-8 md:p-12 rounded-sm mb-12 text-center"
        >
          <div className="text-5xl mb-4">🛒</div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Was kaufen wir?
          </h2>
          <p className="text-lg text-white/90 mb-6">
            Wir kaufen neue und neuwertige Industriegüter in allen Kategorien
          </p>
          <button className="inline-flex items-center gap-2 bg-white text-[var(--color-dark-charcoal)] px-6 py-3 rounded-sm font-bold uppercase text-sm hover:bg-[var(--color-very-light-gray)] transition-colors">
            Mehr erfahren <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[var(--color-brand-blue)] p-3 rounded-sm">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-medium-gray)] flex-1">
                    {category.title}
                  </h3>
                </div>
                <p className="text-[var(--color-light-gray)] mb-4 text-sm leading-relaxed">
                  {category.description}
                </p>
                <div className="mb-4">
                  <div className="text-xs font-bold text-[var(--color-medium-gray)] mb-2">
                    Hersteller:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.manufacturers.map((mfr) => (
                      <span
                        key={mfr}
                        className="text-xs bg-[var(--color-very-light-gray)] px-2 py-1 rounded-sm text-[var(--color-light-gray)]"
                      >
                        {mfr}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 text-[var(--color-medium-gray)] font-bold text-sm hover:text-[var(--color-brand-blue)] transition-colors group-hover:gap-3">
                  Mehr erfahren <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductRangeGrid;