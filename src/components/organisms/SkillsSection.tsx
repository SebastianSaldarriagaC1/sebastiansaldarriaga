"use client";
import React, { useState } from "react";

import { SectionText } from "../atoms/Text";
import { IconType } from "react-icons";
import {
  FaAndroid,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaJsSquare,
  FaLinux,
  FaReact,
} from "react-icons/fa";
import {
  SiAzuredevops,
  SiExpress,
  SiGitlab,
  SiGooglecloud,
  SiJetpackcompose,
  SiKotlin,
  SiPostgresql,
  SiPostman,
  SiScrumalliance,
  SiSonarcloud,
  SiSpringboot,
  SiVercel,
} from "react-icons/si";
import { SkillCard } from "../molecules/Card";

interface Skill {
  name: string;
  icon: IconType;
  category: string[];
}

const skillsList: Skill[] = [
  { name: "Java", icon: FaJava, category: ["Backend", "Programming Language"] },
  { name: "HTML", icon: FaHtml5, category: ["Frontend", "Web Development"] },
  { name: "CSS", icon: FaCss3Alt, category: ["Frontend", "Web Development"] },
  {
    name: "JavaScript",
    icon: FaJs,
    category: ["Frontend", "Web Development", "Programming Language"],
  },
  { name: "React", icon: FaReact, category: ["Frontend", "Web Development"] },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    category: ["Backend", "Web Development"],
  },
  { name: "PostgreSQL", icon: SiPostgresql, category: ["Database"] },
  {
    name: "Kotlin",
    icon: SiKotlin,
    category: ["Mobile Development", "Programming Language"],
  },
  { name: "SonarCloud", icon: SiSonarcloud, category: ["Tools", "DevOps"] },
  { name: "Postman", icon: SiPostman, category: ["Tools", "DevOps"] },
  { name: "Git", icon: FaGitAlt, category: ["Version Control", "Tools"] },
  { name: "GitHub", icon: FaGithub, category: ["Version Control", "Tools"] },
  { name: "GitLab", icon: SiGitlab, category: ["Version Control", "Tools"] },
  { name: "GCP", icon: SiGooglecloud, category: ["Cloud", "DevOps"] },
  { name: "Vercel", icon: SiVercel, category: ["Cloud", "DevOps"] },
  { name: "Linux", icon: FaLinux, category: ["Tools", "DevOps"] },
  { name: "Scrum", icon: SiScrumalliance, category: ["DevOps", "Tools"] },
  { name: "Azure DevOps", icon: SiAzuredevops, category: ["Cloud", "DevOps"] },
];

const categories = Array.from(
  new Set(skillsList.flatMap((skill) => skill.category))
);

const SkillsSection: React.FC = () => {
  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(categories);

  const toggleCategory = (category: string) => {
    setSelectedCategories(
      (prev) =>
        prev.includes(category)
          ? prev.filter((cat) => cat !== category) // Remove if already selected
          : [...prev, category] // Add if not selected
    );
  };

  // Filter skills based on selected categories
  const filteredSkills =
    selectedCategories.length === 0
      ? skillsList // Show all skills if no category is selected
      : skillsList.filter((skill) =>
          skill.category.some((cat) => selectedCategories.includes(cat))
        );

  return (
    <div id="skills" className="mx-auto w-11/12 sm:w-10/12">
      <SectionText text="Skills & Tools" />
      <div className="flex flex-col sm:flex-row w-10/12 mx-auto items-start sm:items-center min-h-96">
        <hr className="sm:rotate-90 visible sm:hidden w-10/12 sm:w-0 mx-auto my-5" />
        <div className="flex flex-col w-full sm:w-5/12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`p-2 text-center mb-2 ${
                selectedCategories.includes(category)
                  ? "active-category"
                  : "unactive-category"
              }  transition-colors`}
              onClick={() => toggleCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <hr className="sm:rotate-90 w-10/12 sm:w-2/12 mx-auto my-5" />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 w-full sm:w-5/12 mt-10 sm:mt-0">
          {filteredSkills.map((skill, index) => {
            return (
              <SkillCard key={index} name={skill.name} icon={skill.icon} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
