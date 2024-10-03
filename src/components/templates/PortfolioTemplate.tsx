import React from "react";
import Navbar from "../molecules/Navbar";
import AboutSection from "../organisms/AboutSection";
import ProjectsSection from "../organisms/ProjectsSection";
import SkillsSection from "../organisms/SkillsSection";
import EducationSection from "../organisms/EducationSection";
import ContactSection from "../organisms/ContactSection";
import PortfolioFooter from "../organisms/Footer";

const PortfolioTemplate: React.FC = () => {
  return (
    <div>
      <Navbar
        title="SSC"
        sections={[
          { text: "About Me", href: "#about-me" },
          { text: "Projects", href: "#projects" },
          { text: "Skills", href: "#skills" },
          { text: "Education", href: "#education" },
          { text: "Contact", href: "#contact" },
        ]}
      />
      <hr className="mx-auto w-11/12 mb-10" />
      <AboutSection />
      <hr className="mx-auto w-11/12 my-10" />
      <ProjectsSection />
      <hr className="mx-auto w-11/12 my-10" />
      <SkillsSection />
      <hr className="mx-auto w-11/12 my-10" />
      <EducationSection />
      <hr className="mx-auto w-11/12 my-10" />
      <ContactSection />
      <hr className="mx-auto w-11/12 my-10" />
      <PortfolioFooter />
    </div>
  );
};

export default PortfolioTemplate;
