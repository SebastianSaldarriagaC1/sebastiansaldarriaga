import Paragraph from "@/components/atoms/texts/Paragraph";
import SubtitleText from "@/components/atoms/texts/SubtitleText";
import React from "react";
import EducationCard from "../cards/EducationCard";

interface Education {
  institution: string;
  date: string;
  certification: string;
  description: string;
}

interface EducationSectionProps {
  title: string;
  description: string;
  educationList: Education[];
  className?: string;
}

const EducationSection: React.FC<EducationSectionProps> = ({
  title,
  description,
  educationList,
  className,
}) => {
  return (
    <div className={`${className} flex flex-col w-full`}>
      <SubtitleText text={title} className="text-center" />
      <Paragraph
        text={description}
        className="text-secondary my-10 text-center"
      />
      {educationList.map((education, index) => (
        <div key={index} className="w-full">
          <EducationCard
            institution={education.institution}
            date={education.date}
            certification={education.certification}
            description={education.description}
          />
        </div>
      ))}
    </div>
  );
};

export default EducationSection;
