import React from "react";

interface SectionTextProps {
  text: string;
  className?: string;
}

const SectionText: React.FC<SectionTextProps> = ({ text, className }) => {
  return (
    <h4 className={`text-lg font-bold text-primary ${className}`}>{text}</h4>
  );
};

export default SectionText;
