import React from "react";

interface SubtitleTextProps {
  text: string;
  className?: string;
}

const SubtitleText: React.FC<SubtitleTextProps> = ({ text, className }) => {
  return (
    <h2 className={`text-4xl font-bold text-primary ${className}`}>{text}</h2>
  );
};

export default SubtitleText;
