import React from "react";
import Navbar from "../molecules/Navbar";
import AboutSection from "../organisms/AboutSection";
import ProjectsSection from "../organisms/ProjectsSection";

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
    </div>
  );
};

export default PortfolioTemplate;
