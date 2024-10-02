import React from "react";

import { SectionText } from "../atoms/Text";

const SkillsSection: React.FC = () => {
  return (
    <div id="skills" className="flex flex-col items-center">
      <h1 className="section-text">Skills</h1>
      <div className="flex flex-wrap justify-center w-11/12">
        <div className="flex flex-col items-center w-1/3">
          <h2 className="header-text">Languages</h2>
          <p className="paragraph-text">Python, JavaScript, TypeScript, Java</p>
        </div>
        <div className="flex flex-col items-center w-1/3">
          <h2 className="header-text">Frameworks</h2>
          <p className="paragraph-text">React, Next.js, Node.js, Express</p>
        </div>
        <div className="flex flex-col items-center w-1/3">
          <h2 className="header-text">Tools</h2>
          <p className="paragraph-text">
            Git, Docker, Kubernetes, Terraform, Jenkins, CircleCI
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
