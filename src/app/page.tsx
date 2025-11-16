import Header from "@/components/sections/header";
// import PrivacyModal from "@/components/overlays/privacy-modal";
import Hero from "@/components/sections/hero";
import ThreeColumnFeatures from "@/components/sections/three-column-features";
import ProductRangeGrid from "@/components/sections/product-range-grid";
import CustomSolutions from "@/components/sections/custom-solutions";
import IndustriesGrid from "@/components/sections/industries-grid";
import CompanyHistory from "@/components/sections/company-history";
import ServicesOverview from "@/components/sections/services-overview";
import EmergencyCtaSection from "@/components/sections/emergency-cta";
import NewsAndEvents from "@/components/sections/news-events";
import ContactCtaBottom from "@/components/sections/contact-cta-bottom";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 pt-[108px] lg:pt-[108px]">
        <Hero />
        <ThreeColumnFeatures />
        <ProductRangeGrid />
        <CustomSolutions />
        <IndustriesGrid />
        <CompanyHistory />
        <ServicesOverview />
        <EmergencyCtaSection />
        <NewsAndEvents />
        <ContactCtaBottom />
      </main>

      <Footer />
      {/* <PrivacyModal /> */}
    </div>
  );
}