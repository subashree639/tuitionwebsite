import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import TimingsSection from "@/components/TimingsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Suba Shree A Tuition Classes | Quality Education for Classes 5-12";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Expert tuition classes for students from 5th to 12th standard. Covering State Board, CBSE, ICSE & International curriculum. Individual attention, concept-based learning, and exam preparation."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Expert tuition classes for students from 5th to 12th standard. Covering State Board, CBSE, ICSE & International curriculum. Individual attention, concept-based learning, and exam preparation.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <TimingsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
