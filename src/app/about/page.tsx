import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { AboutSection } from "@/components/home/AboutSection";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-void text-starlight selection:bg-accretion selection:text-void-dark relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Starfield />
      </div>
      <Navbar />
      <div className="relative my-24 z-10 flex flex-col items-center justify-center min-h-screen w-full">
        <h1 className="text-5xl font-bold mb-8 mt-20 text-center">About Us</h1>
        <div className="w-full max-w-4xl">
          <AboutSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
