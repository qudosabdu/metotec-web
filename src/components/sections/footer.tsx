"use client";

import React from "react";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-dark-charcoal)] text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-xl font-black mb-4">
              <span className="text-white">METO</span>
              <span className="text-[var(--color-brand-blue)]">TEC</span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Internationale Handelsfirma für den Ankauf von Industriegütern
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Musterstraße 123<br />12345 Musterstadt, Germany</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-[var(--color-brand-blue)] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[var(--color-brand-blue)] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[var(--color-brand-blue)] transition-colors">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[var(--color-brand-blue)] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <a href="tel:+491234567890" className="hover:text-[var(--color-brand-blue)] transition-colors">
                  +49 (0) 123 456789
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@metotec.com" className="hover:text-[var(--color-brand-blue)] transition-colors">
                  info@metotec.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Follow Us</h4>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="bg-[var(--color-medium-gray)] hover:bg-[var(--color-brand-blue)] p-2 rounded-sm transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-[var(--color-medium-gray)] hover:bg-[var(--color-brand-blue)] p-2 rounded-sm transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-[var(--color-medium-gray)] hover:bg-[var(--color-brand-blue)] p-2 rounded-sm transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-[var(--color-medium-gray)] hover:bg-[var(--color-brand-blue)] p-2 rounded-sm transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div>
              © {new Date().getFullYear()} METOTEC. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[var(--color-brand-blue)] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[var(--color-brand-blue)] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[var(--color-brand-blue)] transition-colors">
                Legal notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;