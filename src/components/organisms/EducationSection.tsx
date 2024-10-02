import React from "react";
import { EducationCard } from "../molecules/Card";
import { SectionText, SubsectionText } from "../atoms/Text";

const formalEducationList = [
  {
    institution: "Universidad de Antioquia",
    institutionLogo: "/logo.png",
    degree: "Systems Engineering",
    city: "Medellín, Colombia",
    completionDate: "Currently studying",
    certificateLink: "a",
  },
  {
    institution: "Universidad de Antioquia",
    institutionLogo: "/logo.png",
    degree: "Systems Engineering",
    city: "Medellín, Colombia",
    completionDate: "Currently studying",
    certificateLink: "",
  },
];

const coursesAndCertificationsList = [
  {
    institution: "Universidad de Antioquia",
    institutionLogo: "/logo.png",
    degree: "Systems Engineering",
    city: "Medellín, Colombia",
    completionDate: "Currently studying",
    certificateLink: "",
  },
  {
    institution: "Universidad de Antioquia",
    institutionLogo: "/logo.png",
    degree: "Systems Engineering",
    city: "Medellín, Colombia",
    completionDate: "Currently studying",
    certificateLink: "",
  },
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
      <div className="mx-auto w-11/12 sm:w-10/12 my-10">
        <SubsectionText text="Formal Education" />
        <div className="flex flex-col justify-center items-center">
          {formalEducationList.map((education) => (
            <div key={education.institution} className="w-full my-5">
              <EducationCard
                institution={education.institution}
                institutionLogo={education.institutionLogo}
                degree={education.degree}
                city={education.city}
                completionDate={education.completionDate}
                certificateLink={education.certificateLink}
              />
            </div>
          ))}
        </div>
      </div>
      <hr className="mx-auto w-11/12 my-10" />
      <div className="mx-auto w-11/12 sm:w-10/12 my-10">
        <SubsectionText text="Courses & Certifications" />
        <div className="flex flex-col justify-center items-center">
          {coursesAndCertificationsList.map((education) => (
            <div key={education.institution} className="w-full my-5">
              <EducationCard
                institution={education.institution}
                institutionLogo={education.institutionLogo}
                degree={education.degree}
                city={education.city}
                completionDate={education.completionDate}
                certificateLink={education.certificateLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
