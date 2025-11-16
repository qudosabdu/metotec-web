import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function KontaktPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-[108px] lg:pt-[108px]">
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-black">Kontakt</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Kontaktieren Sie uns für Anfragen, Ankaufangebote oder andere Anliegen.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
