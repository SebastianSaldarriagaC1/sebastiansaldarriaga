import Paragraph from "@/components/atoms/texts/Paragraph";
import React from "react";

interface PersonalInfoProps {
  age: string;
  residence: string;
  freelance: boolean;
  address: string;
  externalClassName?: string;
  internalClassName?: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({
  age,
  residence,
  freelance,
  address,
  externalClassName,
  internalClassName,
}) => {
  return (
    <div className={externalClassName}>
      <div className={internalClassName}>
        <Paragraph text="Age: " className="text-primary" />
        <Paragraph text={age} className="text-primary" />
      </div>
      <div className={internalClassName}>
        <Paragraph text="Residence: " className="text-primary" />
        <Paragraph text={residence} className="text-primary" />
      </div>
      <div className={internalClassName}>
        <Paragraph text="Freelance: " className="text-primary" />
        {freelance ? (
          <Paragraph text="Available" className="text-available" />
        ) : (
          <Paragraph text="Not Available" className="text-unavailable" />
        )}
      </div>
      <div className={internalClassName}>
        <Paragraph text="Address: " className="text-primary" />
        <Paragraph text={address} className="text-primary" />
      </div>
    </div>
  );
};

export default PersonalInfo;
