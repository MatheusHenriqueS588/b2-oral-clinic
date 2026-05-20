import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Differentials from "@/components/differentials/Differentials";
import Services from "@/components/services/Services";
import About from "@/components/about/About";
import BeforeAfter from "@/components/before-after/BeforeAfter";
import Testimonials from "@/components/testimonials/Testimonials";
import Process from "@/components/process/Process";
import FAQ from "@/components/faq/FAQ";
import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Differentials />
      <Services />
      <About />
      <BeforeAfter />
      <Testimonials />
      <Process />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
