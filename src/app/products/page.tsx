import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-[108px] lg:pt-[108px]">
        <div className="container py-20">
          <h1 className="text-3xl font-black text-center">Products</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-center">
            Übersicht unserer Produktgruppen. Wählen Sie eine Kategorie, um mehr zu sehen.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/products/armaturen" className="block p-6 bg-white border rounded shadow hover:shadow-md">
              <h3 className="font-bold">Armaturen</h3>
            </a>
            <a href="/products/elektromotoren" className="block p-6 bg-white border rounded shadow hover:shadow-md">
              <h3 className="font-bold">Elektromotoren</h3>
            </a>
            <a href="/products/getriebemotoren" className="block p-6 bg-white border rounded shadow hover:shadow-md">
              <h3 className="font-bold">Getriebemotoren</h3>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
