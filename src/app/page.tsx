import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatementSlides from "@/components/StatementSlides";
import Purpose from "@/components/Purpose";
import CEOAddress from "@/components/CEOAddress";
import History from "@/components/History";
import Leadership from "@/components/Leadership";
import CinematicGallery from "@/components/CinematicGallery";
import Foundation from "@/components/Foundation";
import Subsidiaries from "@/components/Subsidiaries";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <StatementSlides />
      <Purpose />
      <CEOAddress />
      <History />
      <Leadership />
      <CinematicGallery />
      <Foundation />
      <Subsidiaries />
      <ContactCTA />
      <Footer />
    </main>
  );
}
