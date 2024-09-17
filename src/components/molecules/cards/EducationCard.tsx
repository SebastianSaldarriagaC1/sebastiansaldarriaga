import Paragraph from "@/components/atoms/texts/Paragraph";
import SectionText from "@/components/atoms/texts/SectionText";
import React from "react";

interface EducationCardProps {
  institution: string;
  date: string;
  certification: string;
  description: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  institution,
  date,
  certification,
  description,
}) => {
  return (
    <div className="flex items-center bg-general">
      <div className="flex flex-col w-2/5 p-8">
        <SectionText text={institution} />
        <div className="flex flex-row justify-between mt-6">
          <Paragraph text="Student" className="text-primary" />
          <Paragraph text={date} className="date-label" />
        </div>
      </div>
      <div className="flex flex-col w-3/5 p-8">
        <SectionText text={certification} className="mb-6" />
        <Paragraph text={description} />
      </div>
    </div>
  );
};

export default EducationCard;
