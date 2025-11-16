"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Factory, Wrench, Building2, Hammer, Truck, Cog } from "lucide-react";

const IndustriesGrid = () => {
  const industries = [
    {
      icon: Factory,
      title: "Produktionsanlagen",
      description: "Maschinen und Anlagen aus der Produktion",
    },
    {
      icon: Wrench,
      title: "Werkzeugmaschinen",
      description: "Fräsmaschinen, Drehmaschinen, CNC-Anlagen",
    },
    {
      icon: Building2,
      title: "Bauindustrie",
      description: "Baumaschinen und Baustellenausstattung",
    },
    {
      icon: Hammer,
      title: "Metallverarbeitung",
      description: "Pressen, Stanzen, Schweißanlagen",
    },
    {
      icon: Truck,
      title: "Logistik & Transport",
      description: "Gabelstapler, Fördertechnik, Lagersysteme",
    },
    {
      icon: Cog,
      title: "Automation",
      description: "Robotik, Steuerungstechnik, Sensoren",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[var(--color-medium-gray)] mb-4">
            Branchen, die wir bedienen
          </h2>
          <p className="text-[var(--color-light-gray)] max-w-2xl mx-auto">
            Weltweiter Ankauf von Industriegütern aus verschiedenen Branchen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[var(--color-very-light-gray)] p-6 rounded-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-brand-blue)] p-3 rounded-sm group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--color-medium-gray)] mb-2">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-[var(--color-light-gray)] mb-3">
                      {industry.description}
                    </p>
                    <button className="inline-flex items-center gap-2 text-[var(--color-medium-gray)] font-bold text-sm hover:text-[var(--color-brand-blue)] transition-colors group-hover:gap-3">
                      Mehr erfahren <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;