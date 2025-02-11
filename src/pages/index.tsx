import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Metrics from "../components/Metrics";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Metrics />
      {/* <About /> */}
      <Services />
      <Footer />
    </div>
  );
}
