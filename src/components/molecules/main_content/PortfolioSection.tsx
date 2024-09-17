import React from "react";
import ProjectCard from "@/components/molecules/cards/ProjectCard";
import Paragraph from "@/components/atoms/texts/Paragraph";
import SubtitleText from "@/components/atoms/texts/SubtitleText";

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}

interface PortfolioSectionProps {
  title: string;
  description: string;
  projects: Project[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  title,
  description,
  projects,
}) => {
  return (
    <div className="p-8">
      <SubtitleText text={title} className="text-center" />
      <Paragraph
        text={description}
        className="text-secondary my-10 text-center"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 justify-center">
        {projects.map((knowledge, index) => (
          <div key={index} className="h-full">
            <ProjectCard
              title={knowledge.title}
              description={knowledge.description}
              image={knowledge.image}
              link={knowledge.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
