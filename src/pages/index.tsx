import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Services from "../components/Services";
import Metrics from "../components/Metrics";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader"; // Import the Loader component

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (2 seconds)
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <Loader />;
  return (
    <div className="relative min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Metrics />
      {/* <About /> */}
      <section id="services">
        <Services />
      </section>
      <Footer />
    </div>
  );
}
