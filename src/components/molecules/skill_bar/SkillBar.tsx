import ProgressBar from "@/components/atoms/progress_bar/ProgressBar";
import Paragraph from "@/components/atoms/texts/Paragraph";
import React from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between w-full">
        <Paragraph text={skill} />
        <Paragraph text={`${percentage}%`} />
      </div>
      <ProgressBar progress={percentage} />
    </div>
  );
};

export default SkillBar;
