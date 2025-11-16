"use client";

import React from "react";
import { motion } from "framer-motion";

const ThreeColumnFeatures = () => {
  const stats = [
    { number: "30+", label: "Years Experience" },
    { number: "500+", label: "Product Range" },
    { number: "50+", label: "Global Markets" },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[var(--color-medium-gray)] mb-4">
            Industrial Motors — SHOWCASE
          </h2>
          <p className="text-xl text-[var(--color-medium-gray)] font-bold mb-2">
            Premium Industrial Motors
          </p>
          <p className="text-[var(--color-light-gray)] max-w-2xl mx-auto">
            High-quality electric motors for industrial applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-[var(--color-very-light-gray)] rounded-sm"
            >
              <div className="text-4xl md:text-5xl font-black text-[var(--color-brand-blue)] mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-bold text-[var(--color-medium-gray)]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeColumnFeatures;