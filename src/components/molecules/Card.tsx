import React from "react";
import { ProjectImage } from "../atoms/Image";

import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { ParagraphText } from "../atoms/Text";
import { IconType } from "react-icons";
import Image from "next/image";
import { CiLink } from "react-icons/ci";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubLink?: string;
  websiteLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  githubLink,
  websiteLink,
}) => {
  return (
    <div className="p-10 m-[1px] card-border card-hover transition-shadow">
      <div className="md:flex items-center">
        <div className="md:w-1/2">
          <ProjectImage src={image} alt={title} />
        </div>
        <div className="md:w-1/2">
          <ParagraphText text={description} extraClass="sm:ml-10" />
        </div>
      </div>
      <div className="sm:flex w-full mt-10 justify-evenly">
        {websiteLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex external-link"
          >
            <CgWebsite className="mr-2 text-xl sm:text-3xl" />
            <p className="text-xl  sm:text-2xl underline">Visit Webpage</p>
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex external-link"
          >
            <FaGithub className="mr-2 text-xl sm:text-3xl" />
            <p className="text-xl sm:text-2xl underline">Visit Repository</p>
          </a>
        )}
      </div>
    </div>
  );
};

interface SkillCardProps {
  name: string;
  icon: IconType;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center p-3 card-border card-hover transition-shadow">
      {icon({ size: 24 })}
      <ParagraphText
        text={name}
        extraClass="text-center my-auto justify-center"
      />
    </div>
  );
};

interface EducationCardProps {
  institution: string;
  institutionLogo: string;
  degree: string;
  city: string;
  completionDate: string;
  certificateLink?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  institution,
  institutionLogo,
  degree,
  city,
  completionDate,
  certificateLink,
}) => {
  return (
    <div className="flex flex-col sm:flex-row p-10 m-[1px] card-border card-hover transition-shadow w-full justify-between">
      <div className="flex flex-col sm:flex-row">
        <Image
          src={institutionLogo}
          alt="Institution logo"
          width={105}
          height={140}
          className="sm:mr-10  object-contain"
        />
        <div className="flex flex-col justify-center my-6">
          <p>{institution}</p>
          {certificateLink ? (
            <a
              href={certificateLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center external-link"
            >
              <ParagraphText
                text={degree}
                extraClass="underline external-link"
              />
              <CiLink className="text-xl sm:text-2xl ml-1" />
            </a>
          ) : (
            <ParagraphText text={degree} />
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center sm:text-end">
        <p>{city}</p>
        <ParagraphText text={completionDate} />
      </div>
    </div>
  );
};

export { ProjectCard, SkillCard, EducationCard };
