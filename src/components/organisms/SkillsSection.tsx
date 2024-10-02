"use client";
import React, { useState } from "react";

import { SectionText } from "../atoms/Text";
import { IconType } from "react-icons";
import { FaJava, FaNode } from "react-icons/fa";
import {
  SiDocker,
  SiExpress,
  SiGit,
  SiJavascript,
  SiKotlin,
  SiLinux,
  SiMongodb,
  SiPostgresql,
  SiReact,
} from "react-icons/si";
import { SkillCard } from "../molecules/Card";

interface Skill {
  name: string;
  icon: IconType;
  category: string[];
}

const skillsList: Skill[] = [
  { name: "Java", icon: FaJava, category: ["Backend"] },
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: ["Frontend", "Backend"],
  },
  { name: "Kotlin", icon: SiKotlin, category: ["Backend"] },
  { name: "React", icon: SiReact, category: ["Frontend"] },
  { name: "Node.js", icon: FaNode, category: ["Backend"] },
  { name: "Express", icon: SiExpress, category: ["Backend"] },
  { name: "PostgreSQL", icon: SiPostgresql, category: ["Database"] },
  { name: "MongoDB", icon: SiMongodb, category: ["Database"] },
  { name: "Docker", icon: SiDocker, category: ["DevOps"] },
  { name: "Git", icon: SiGit, category: ["DevOps"] },
  { name: "Linux", icon: SiLinux, category: ["DevOps"] },
  { name: "HTML", icon: SiJavascript, category: ["Tu mama"] },
];

const categories = Array.from(
  new Set(skillsList.flatMap((skill) => skill.category))
);

const SkillsSection: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

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
    <div id="skills" className="mx-auto w-11/12 sm:w-10/12 sm:h-[400px]">
      <SectionText text="Skills & Tools" />
      <div className="flex flex-col sm:flex-row w-10/12 mx-auto items-start sm:items-center text-base sm:text-xl">
        <div className="flex flex-col w-full sm:w-1/2 h-auto">
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
        <div className="border-gray-50 h-1/2 w-1"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 w-full sm:w-1/2 mt-10 sm:mt-0">
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
