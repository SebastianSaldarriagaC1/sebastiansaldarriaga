import Paragraph from "@/components/atoms/texts/Paragraph";
import React from "react";

interface SimpleTextCardProps {
  text: string;
  className?: string;
}

const SimpleTextCard: React.FC<SimpleTextCardProps> = ({ text, className }) => {
  return (
    <div
      className={`${className} flex items-center justify-center bg-general w-full p-6`}
    >
      <Paragraph text={text} className="text-primary" />
    </div>
  );
};

export default SimpleTextCard;
