import Features from "@/components/features";
import Hero from "@/components/hero";
import NavBar from "@/components/navBar";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <Features/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </main>
  );
}
