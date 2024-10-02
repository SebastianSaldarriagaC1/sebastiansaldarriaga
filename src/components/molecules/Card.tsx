import React from "react";
import { ProjectImage } from "../atoms/Image";

import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { ParagraphText } from "../atoms/Text";

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
    <div className="p-10 m-[1px] card-border">
      <div className="sm:flex items-center">
        <ProjectImage src={image} alt={title} />
        <ParagraphText text={description} extraClass="sm:ml-10" />
      </div>
      <div className="sm:flex w-full mt-10 justify-evenly">
        {websiteLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex"
          >
            <CgWebsite className="mr-2 text-xl sm:text-3xl" />
            <p className="project-external-link-text text-xl  sm:text-2xl">
              Visit Webpage
            </p>
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex"
          >
            <FaGithub className="mr-2 text-xl sm:text-3xl" />
            <p className="project-external-link-text text-xl sm:text-2xl">
              Visit Repository
            </p>
          </a>
        )}
      </div>
    </div>
  );
};

export { ProjectCard };
