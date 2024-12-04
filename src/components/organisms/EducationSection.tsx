import React from "react";
import { EducationCard } from "../molecules/Card";
import { SectionText, SubsectionText } from "../atoms/Text";

const formalEducationList = [
  {
    institution: "University of Antioquia",
    institutionLogo: "/education/udea-logo.png",
    degree: "Systems Engineering",
    city: "Medellín, Colombia",
    completionDate: "Currently studying",
    certificateLink: "",
  },
  {
    institution: "SENA",
    institutionLogo: "/education/sena-logo.png",
    degree: "Systems Technician",
    city: "San Roque, Colombia",
    completionDate: "Nov, 2018",
    certificateLink: "",
  },
];

const coursesAndCertificationsList = [
  {
    institution: "Google Cloud",
    institutionLogo: "/education/gcloud-certificate-logo.png",
    degree: "Google Cloud Computing Foundations",
    city: "Google Cloud Skills Boost",
    completionDate: "Jun, 2024",
    certificateLink:
      "https://www.credly.com/badges/dd5a5293-2b88-4449-93b3-0a17fa3c9771/public_url",
  },
  {
    institution: "GitHub",
    institutionLogo: "/education/github-foundations-logo.png",
    degree: "GitHub Foundations",
    city: "",
    completionDate: "Jun, 2024",
    certificateLink:
      "https://www.credly.com/badges/99070e3d-7193-49fb-ab33-f35044e132c4/public_url",
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
