import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-[108px] lg:pt-[108px]">
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-black">Services</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Unsere Serviceleistungen – Wartung, Lieferung und individuelle Lösungen.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
