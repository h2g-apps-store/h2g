"use client";
import Navbar from "@/components/Navbar";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";

// Animation package
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Projects />
      {/* <Testimonials /> */}
      {/* <Hireme /> */}
      <Contact />
    </main>
  );
}
