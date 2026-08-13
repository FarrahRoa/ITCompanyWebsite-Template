import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import TrackRecord from "@/components/TrackRecord";
import HowItWorks from "@/components/HowItWorks";
import Coverage from "@/components/Coverage";
import Portfolio from "@/components/Portfolio";
import LatestNews from "@/components/LatestNews";
import AISection from "@/components/AISection";
import Testimonials from "@/components/Testimonials";
import Technologies from "@/components/Technologies";
import FAQ from "@/components/FAQ";
import ClientsShowcase from "@/components/ClientsShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="pt-24 md:pt-28">
        <Hero />
        <Services />
        <About />
        <TrackRecord />
        <HowItWorks />
        <Coverage />
        <ClientsShowcase />
        <Portfolio />
        <LatestNews />
        <Technologies />
        <AISection />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}