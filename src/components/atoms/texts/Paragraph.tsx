import React from "react";

interface ParagraphProps {
  text: string;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({
  text,
  className = "text-secondary",
}) => {
  return <p className={`text-sm ${className}`}>{text}</p>;
};

export default Paragraph;
