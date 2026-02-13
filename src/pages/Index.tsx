import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import SectionReveal from "@/components/SectionReveal";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import BackToTop from "@/components/BackToTop";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="relative scroll-smooth">
      <ScrollProgressBar />
      <CursorGlow />
      <ThemeToggle />
      <Navbar />
      <main>
        <HeroSection />
        <SectionReveal>
          <AboutSection />
        </SectionReveal>
        <SectionReveal>
          <ExperienceSection />
        </SectionReveal>
        <SectionReveal>
          <ProjectsSection />
        </SectionReveal>
        <SectionReveal>
          <SkillsSection />
        </SectionReveal>
        <SectionReveal>
          <EducationSection />
        </SectionReveal>
        <SectionReveal>
          <ContactSection />
        </SectionReveal>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
