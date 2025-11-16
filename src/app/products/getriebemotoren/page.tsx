import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function GetriebemotorenPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-[108px] lg:pt-[108px]">
        <div className="container py-20">
          <h1 className="text-3xl font-black text-center">Getriebemotoren</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto text-center">
            Informationen und technische Daten zu Getriebemotoren.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
