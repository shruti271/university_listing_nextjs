import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutSection from "../components/sections/about-section/AboutSection";
import FeaturesSection from "../components/sections/features-section/FeaturesSection";
import GetStartedSection from "../components/sections/get-started-section/GetStartedSection";
import HeroSection from "../components/sections/hero-section/HeroSection";
import NewsletterSection from "../components/sections/newsletter-section/NewsletterSection";
import OffersSection from "../components/sections/offers-section/OffersSection";
import PathsSection from "../components/sections/paths-section/PathsSection";
import TestimonialsSection from "../components/sections/testimonials-section/TestimonialsSection";
import ToolsSection from "../components/sections/tools-section/ToolsSection";

import { useState, useEffect } from "react";

export default function Home() {
  const [modalType, setModalType] = useState("");

  useEffect(() => {
    console.log("::::", window.history.state);

    if (window.history.state === "signin") {
      setModalType(window.history.state);
    } else {
      setModalType("");
    }
  }, []);
  return (
    <>
      <Header modalType={modalType} />
      <HeroSection />
      <AboutSection />
      <OffersSection />
      <FeaturesSection />
      <GetStartedSection />
      <ToolsSection />
      <PathsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
