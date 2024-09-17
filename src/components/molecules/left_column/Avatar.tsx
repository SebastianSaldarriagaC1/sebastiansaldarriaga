import CircularImage from "@/components/atoms/images/CircularImage";
import Paragraph from "@/components/atoms/texts/Paragraph";
import SectionText from "@/components/atoms/texts/SectionText";
import React from "react";

interface AvatarProps {
  src: string;
  name: string;
  profession: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  profession,
  className,
}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <CircularImage src={src} alt="Profile Picture" className="w-40 h-40" />
      <SectionText text={name} className="mt-8 mb-4" />
      <Paragraph text={profession} className="text-secondary" />
    </div>
  );
};

export default Avatar;
