import React from "react";
import { EducationCard } from "../molecules/Card";
import { SectionText } from "../atoms/Text";

const educationList = [
  {
    institution: "Universidad de Antioquia",
    institutionLogo: "/logo.png",
    degree: "Systems Engineering",
    city: "Medellín, Colombia",
    completionDate: "Currently studying",
    certificateLink: "",
  },
];

const EducationSection: React.FC = () => {
  return (
    <div id="education" className="mx-auto w-11/12 sm:w-10/12">
      <SectionText text="Education" />
      <div className="flex flex-col sm:flex-row justify-center items-center">
        {educationList.map((education) => (
          <EducationCard
            key={education.institution}
            institution={education.institution}
            institutionLogo={education.institutionLogo}
            degree={education.degree}
            city={education.city}
            completionDate={education.completionDate}
            certificateLink={education.certificateLink}
          />
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
