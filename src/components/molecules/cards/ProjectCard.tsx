import Paragraph from "@/components/atoms/texts/Paragraph";
import SectionText from "@/components/atoms/texts/SectionText";
import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <div className="flex flex-col items-center py-6 bg-general">
      <img src={image} alt={title} className="object-cover h-72 w-72" />
      <div className="p-4">
        <SectionText text={title} className="text-center" />
        <Paragraph text={description} className="text-secondary my-2" />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-center text-primary text-highlight hover:underline"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
