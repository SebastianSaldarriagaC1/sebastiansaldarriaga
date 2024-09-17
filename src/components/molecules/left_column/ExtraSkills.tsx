import React from "react";
import SectionText from "@/components/atoms/texts/SectionText";
import IconText from "@/components/atoms/texts/IconText";

interface ExtraSkill {
  name: string;
  icon: string;
  iconWidth?: string;
  iconHeight?: string;
  iconViewBox?: string;
  iconColor?: string;
}

interface ExtraSkillsSectionProps {
  title: string;
  skills: ExtraSkill[];
  className?: string;
}

const ExtraSkillsSection: React.FC<ExtraSkillsSectionProps> = ({
  title,
  skills,
  className,
}) => {
  return (
    <div className={`${className} my-10`}>
      <SectionText text={title} />
      {skills.map((skill, index) => (
        <div key={index} className="my-4 ">
          <IconText
            text={skill.name}
            icon={skill.icon}
            iconWidth="30px"
            iconHeight="30px"
            iconColor="#ffb400"
            iconViewBox={skill.iconViewBox}
          />
        </div>
      ))}
    </div>
  );
};

export default ExtraSkillsSection;
