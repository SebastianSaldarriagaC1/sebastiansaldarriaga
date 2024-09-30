import React from "react";
import { ProjectImage } from "../atoms/Image";

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
    <div>
      <ProjectImage src={image} alt={title} />
      <div>
        <p>{description}</p>
        <div>
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noreferrer">
              Github
            </a>
          )}
          {websiteLink && (
            <a href={websiteLink} target="_blank" rel="noreferrer">
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
