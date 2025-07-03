import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VehicleCatalog from "./components/VehicleCatalog";
import Services from "./components/Services";
import TyreCare from "./components/TyreCare";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger on component mount
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Hero />
        {/*        <VehicleCatalog /> */}
        <Services />
        <TyreCare />
        <Features />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
