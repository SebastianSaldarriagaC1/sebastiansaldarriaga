import React from "react";
import { ProjectImage } from "../atoms/Image";

import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

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
        <p className="ml-10">{description}</p>
      </div>
      <div className="flex w-full mt-10 justify-evenly">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex"
          >
            <FaGithub className="mr-2" size={30} />
            <p className="project-external-link-text text-3xl">GitHub</p>
          </a>
        )}
        {websiteLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex"
          >
            <CgWebsite className="mr-2" size={30} />
            <p className="project-external-link-text text-3xl">WebSite</p>
          </a>
        )}
      </div>
    </div>
  );
};

export { ProjectCard };
