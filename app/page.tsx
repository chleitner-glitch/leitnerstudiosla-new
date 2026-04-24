import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import StudioSection from "@/components/StudioSection";
import Gallery from "@/components/Gallery";
import BookingSection from "@/components/BookingSection";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <StudioSection />
      <Gallery />
      <BookingSection />
      <Reviews />
      <Location />
      <Footer />
      <AIChatbot />
    </main>
  );
}