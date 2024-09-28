import React from "react";
import Navbar from "../molecules/Navbar";

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
      <hr className="mx-auto w-11/12" />
      <div className="mx-auto w-11/12 sm:w-10/12">
        <h1 id="about-me">Portfolio</h1>
        <p>Under construction</p>
      </div>
    </div>
  );
};

export default PortfolioTemplate;
