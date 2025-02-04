import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Services from "../components/Services";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
}
