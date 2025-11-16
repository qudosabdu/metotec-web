"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Globe, Award, Users } from "lucide-react";

const NewsAndEvents = () => {
  const updates = [
    {
      icon: TrendingUp,
      title: "Marktexpansion 2024",
      excerpt: "METOTEC erweitert sein Netzwerk auf weitere europäische und asiatische Märkte.",
      date: "März 2024",
    },
    {
      icon: Globe,
      title: "Globale Partnerschaft",
      excerpt: "Neue strategische Partnerschaften mit führenden Industrieunternehmen weltweit.",
      date: "Februar 2024",
    },
    {
      icon: Award,
      title: "ISO 9001 Rezertifizierung",
      excerpt: "Erfolgreiche Rezertifizierung unseres Qualitätsmanagementsystems nach ISO 9001.",
      date: "Januar 2024",
    },
    {
      icon: Users,
      title: "Team-Erweiterung",
      excerpt: "Willkommen an unser erweitertes Expertenteam für noch besseren Service.",
      date: "Dezember 2023",
    },
  ];

  return (
    <section className="bg-[var(--color-very-light-gray)] py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[var(--color-medium-gray)] mb-4">
            News & Updates
          </h2>
          <p className="text-[var(--color-light-gray)]">
            Bleiben Sie informiert über die neuesten Entwicklungen bei METOTEC
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {updates.map((update, index) => {
            const Icon = update.icon;
            return (
              <motion.div
                key={update.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex gap-4">
                  <div className="bg-[var(--color-brand-blue)] p-3 rounded-sm h-fit">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-[var(--color-light-gray)] mb-2">
                      {update.date}
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-medium-gray)] mb-2">
                      {update.title}
                    </h3>
                    <p className="text-sm text-[var(--color-light-gray)] mb-4 leading-relaxed">
                      {update.excerpt}
                    </p>
                    <button className="inline-flex items-center gap-2 text-[var(--color-medium-gray)] font-bold text-sm hover:text-[var(--color-brand-blue)] transition-colors group-hover:gap-3">
                      Mehr lesen <ArrowRight className="w-4 h-4" />
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

export default NewsAndEvents;