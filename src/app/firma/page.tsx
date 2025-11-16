import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import CompanyHistory from "@/components/sections/company-history";
import ServicesOverview from "@/components/sections/services-overview";
import ContactCtaBottom from "@/components/sections/contact-cta-bottom";

export default function FirmaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-[108px] lg:pt-[108px]">
        <section className="bg-white py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-black text-[var(--color-medium-gray)]">
                METOTEC — Internationale Handelsfirma für technische Wirtschaftsgüter
              </h1>
              <p className="mt-6 text-lg text-[var(--color-light-gray)]">
                Seit über 30 Jahren stehen wir für effiziente Ankaufslösungen, faire Preise
                und eine schnelle, transparente Abwicklung. Wir kaufen neue und gebrauchte
                technische Wirtschaftsgüter aus den Bereichen Elektromotoren, Getriebe,
                Hydraulik, Pneumatik, Armaturen und mehr.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-[var(--color-medium-gray)]">Unsere Mission</h3>
                <p className="mt-3 text-sm text-[var(--color-light-gray)]">
                  Nachhaltigkeit durch Wiederverwendung und Kreislaufwirtschaft — wir sorgen dafür,
                  dass technische Güter eine zweite Chance erhalten.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-[var(--color-medium-gray)]">Unsere Werte</h3>
                <p className="mt-3 text-sm text-[var(--color-light-gray)]">
                  Vertrauen, Transparenz und langfristige Partnerschaften — wir handeln fair
                  und verlässlich gegenüber Kunden und Lieferanten.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-[var(--color-medium-gray)]">Unser Netzwerk</h3>
                <p className="mt-3 text-sm text-[var(--color-light-gray)]">
                  Weltweite Präsenz mit Partnern in über 50 Märkten, schnelle Logistiklösungen
                  und starke Marktkenntnis.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CompanyHistory />

        <ServicesOverview />

        <section className="bg-white py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-black text-[var(--color-medium-gray)] text-center">
              Unsere Prozesse — schnell, sicher, transparent
            </h2>

            <div className="mt-8 max-w-4xl mx-auto space-y-6 text-[var(--color-light-gray)]">
              <div>
                <h4 className="font-bold text-[var(--color-medium-gray)]">Bewertung & Angebot</h4>
                <p className="mt-2 text-sm">
                  Nach Erhalt Ihrer Anfrage führen wir eine qualifizierte Bewertung durch und
                  unterbreiten Ihnen innerhalb von 24 Stunden ein verbindliches Angebot.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[var(--color-medium-gray)]">Abwicklung & Logistik</h4>
                <p className="mt-2 text-sm">
                  Wir organisieren Abholung, Verpackung und Transport — europaweit und weltweit.
                  Unsere Logistikpartner gewährleisten kurze Durchlaufzeiten.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[var(--color-medium-gray)]">Zahlung & Nachverfolgung</h4>
                <p className="mt-2 text-sm">
                  Sichere Zahlungsabwicklung nach Vereinbarung und transparente Dokumentation
                  für Ihre Buchhaltung und Nachverfolgung.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ContactCtaBottom />
      </main>

      <Footer />
    </div>
  );
}
