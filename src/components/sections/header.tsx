"use client";

import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 bg-[var(--color-very-light-gray)] border-b border-[var(--color-border-gray)] z-50">
        <div className="container">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="text-[var(--color-light-gray)]">
              Your global supplier for industrial stocklot trading
            </div>
            <div className="hidden md:flex items-center gap-6 text-[var(--color-light-gray)]">
              <span>info@metotec.com</span>
              <span>+49 (0) 123 456789</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="fixed top-[42px] left-0 right-0 bg-white shadow-sm z-50">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
              <div className="flex items-center">
              <img 
                src="/LOGO.jpeg" 
                alt="Logo" 
                className="h-12 md:h-16 w-auto object-contain transform md:scale-110 lg:scale-125"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <a
                href="/"
                className="text-sm font-bold uppercase text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] transition-colors"
              >
                Home
              </a>
              <a
                href="/firma"
                className="text-sm font-bold uppercase text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] transition-colors"
              >
                Firma
              </a>
              <a
                href="/was-kauft-metotec"
                className="text-sm font-bold uppercase text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] transition-colors"
              >
                Was kauft Metotec?
              </a>
              <a
                href="/kontakt"
                className="text-sm font-bold uppercase text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] transition-colors"
              >
                Kontakt
              </a>
              
              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href="/products"
                  className="text-sm font-bold uppercase text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] transition-colors flex items-center gap-1"
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === 'products' ? 'true' : 'false'}
                >
                  Products
                  <ChevronDown className="w-4 h-4" />
                </a>
                {activeDropdown === 'products' && (
                  <div className="absolute top-full left-0 mt-0 bg-white shadow-lg border border-[var(--color-border-gray)] min-w-[220px] py-2 z-50">
                    <a href="/products/armaturen" className="block px-4 py-2 text-sm text-[var(--color-medium-gray)] hover:bg-[var(--color-very-light-gray)] hover:text-[var(--color-brand-blue)]">
                      Armaturen
                    </a>
                    <a href="/products/elektromotoren" className="block px-4 py-2 text-sm text-[var(--color-medium-gray)] hover:bg-[var(--color-very-light-gray)] hover:text-[var(--color-brand-blue)]">
                      Elektromotoren
                    </a>
                    <a href="/products/gleichstrommotoren" className="block px-4 py-2 text-sm text-[var(--color-medium-gray)] hover:bg-[var(--color-very-light-gray)] hover:text-[var(--color-brand-blue)]">
                      Gleichstrommotoren
                    </a>
                    <a href="/products/hochspannungsmotoren" className="block px-4 py-2 text-sm text-[var(--color-medium-gray)] hover:bg-[var(--color-very-light-gray)] hover:text-[var(--color-brand-blue)]">
                      Hochspannungsmotoren
                    </a>
                    <a href="/products/getriebemotoren" className="block px-4 py-2 text-sm text-[var(--color-medium-gray)] hover:bg-[var(--color-very-light-gray)] hover:text-[var(--color-brand-blue)]">
                      Getriebemotoren
                    </a>
                    <a href="/products/getriebe" className="block px-4 py-2 text-sm text-[var(--color-medium-gray)] hover:bg-[var(--color-very-light-gray)] hover:text-[var(--color-brand-blue)]">
                      Getriebe
                    </a>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href="/services"
                  className="text-sm font-bold uppercase text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] transition-colors flex items-center gap-1"
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === 'services' ? 'true' : 'false'}
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </a>
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-0 bg-white shadow-lg border border-[var(--color-border-gray)] min-w-[220px] py-2 z-50">
                    <a href="/services/elektromaterial" className="block px-4 py-2 text-sm text-[var(--color-medium-gray)] hover:bg-[var(--color-very-light-gray)] hover:text-[var(--color-brand-blue)]">
                      Elektromaterial
                    </a>
                    <a href="/services/hydraulik" className="block px-4 py-2 text-sm text-[var(--color-medium-gray)] hover:bg-[var(--color-very-light-gray)] hover:text-[var(--color-brand-blue)]">
                      Hydraulik
                    </a>
                    <a href="/services/pneumatik" className="block px-4 py-2 text-sm text-[var(--color-medium-gray)] hover:bg-[var(--color-very-light-gray)] hover:text-[var(--color-brand-blue)]">
                      Pneumatik
                    </a>
                    <a href="/services/pumpen" className="block px-4 py-2 text-sm text-[var(--color-medium-gray)] hover:bg-[var(--color-very-light-gray)] hover:text-[var(--color-brand-blue)]">
                      Pumpen
                    </a>
                    <a href="/services/kraene" className="block px-4 py-2 text-sm text-[var(--color-medium-gray)] hover:bg-[var(--color-very-light-gray)] hover:text-[var(--color-brand-blue)]">
                      Kräne
                    </a>
                    <a href="/services/kugellager" className="block px-4 py-2 text-sm text-[var(--color-medium-gray)] hover:bg-[var(--color-very-light-gray)] hover:text-[var(--color-brand-blue)]">
                      Kugellager
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/impressum"
                className="text-sm font-bold uppercase text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] transition-colors"
              >
                Impressum
              </a>
              <a
                href="/en"
                className="text-sm font-bold uppercase text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] transition-colors"
              >
                English
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center gap-2 text-[var(--color-medium-gray)]"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <>
                  <Menu className="w-6 h-6" />
                  <span className="text-sm font-bold uppercase">Menu</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[var(--color-border-gray)] bg-white">
            <div className="container py-4">
              <nav className="flex flex-col gap-4">
                <a
                  href="#"
                  className="text-sm font-bold uppercase text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] transition-colors py-2"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-sm font-bold uppercase text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] transition-colors py-2"
                >
                  Firma
                </a>
                <a
                  href="#"
                  className="text-sm font-bold uppercase text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] transition-colors py-2"
                >
                  Was kauft Metotec?
                </a>
                <a
                  href="#"
                  className="text-sm font-bold uppercase text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] transition-colors py-2"
                >
                  Kontakt
                </a>
                
                {/* Products Mobile */}
                <div className="border-t border-[var(--color-border-gray)] pt-2">
                  <div className="text-sm font-bold uppercase text-[var(--color-medium-gray)] py-2">Products</div>
                  <div className="pl-4 flex flex-col gap-2">
                    <a href="#" className="text-sm text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] py-1">Armaturen</a>
                    <a href="#" className="text-sm text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] py-1">Elektromotoren</a>
                    <a href="#" className="text-sm text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] py-1">Gleichstrommotoren</a>
                    <a href="#" className="text-sm text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] py-1">Hochspannungsmotoren</a>
                    <a href="#" className="text-sm text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] py-1">Getriebemotoren</a>
                    <a href="#" className="text-sm text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] py-1">Getriebe</a>
                  </div>
                </div>

                {/* Services Mobile */}
                <div className="border-t border-[var(--color-border-gray)] pt-2">
                  <div className="text-sm font-bold uppercase text-[var(--color-medium-gray)] py-2">Services</div>
                  <div className="pl-4 flex flex-col gap-2">
                    <a href="#" className="text-sm text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] py-1">Elektromaterial</a>
                    <a href="#" className="text-sm text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] py-1">Hydraulik</a>
                    <a href="#" className="text-sm text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] py-1">Pneumatik</a>
                    <a href="#" className="text-sm text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] py-1">Pumpen</a>
                    <a href="#" className="text-sm text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] py-1">Kräne</a>
                    <a href="#" className="text-sm text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] py-1">Kugellager</a>
                  </div>
                </div>

                <a
                  href="#"
                  className="text-sm font-bold uppercase text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] transition-colors py-2 border-t border-[var(--color-border-gray)] pt-4"
                >
                  Impressum
                </a>
                <a
                  href="#"
                  className="text-sm font-bold uppercase text-[var(--color-medium-gray)] hover:text-[var(--color-brand-blue)] transition-colors py-2"
                >
                  English
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;