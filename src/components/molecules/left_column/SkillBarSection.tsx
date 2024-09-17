import React from "react";
import SkillBar from "../skill_bar/SkillBar";
import SectionText from "@/components/atoms/texts/SectionText";

interface Skill {
  name: string;
  percentage: number;
}

interface SkillBarSectionProps {
  title: string;
  skills: Skill[];
  className?: string;
}

const SkillBarSection: React.FC<SkillBarSectionProps> = ({
  title,
  skills,
  className,
}) => {
  return (
    <div className={`${className} my-10`}>
      <SectionText text={title} />
      {skills.map((skill, index) => (
        <div key={index} className="my-4">
          <SkillBar skill={skill.name} percentage={skill.percentage} />
        </div>
      ))}
    </div>
  );
};

export default SkillBarSection;
