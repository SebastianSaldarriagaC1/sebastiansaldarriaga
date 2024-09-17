import React from "react";
import KnowledgeCard from "../cards/KnowledgeCard";
import Paragraph from "@/components/atoms/texts/Paragraph";
import SubtitleText from "@/components/atoms/texts/SubtitleText";

interface Knowledge {
  title: string;
  description: string;
  icon: string;
  iconWidth?: string;
  iconHeight?: string;
  iconViewBox?: string;
  iconColor?: string;
}

interface KnowledgeSectionProps {
  title: string;
  description: string;
  knowledgeList: Knowledge[];
  className?: string;
}

const KnowledgeSection: React.FC<KnowledgeSectionProps> = ({
  title,
  description,
  knowledgeList,
  className,
}) => {
  return (
    <div className={`${className} flex flex-col items-center`}>
      <SubtitleText text={title} className="text-center" />
      <Paragraph
        text={description}
        className="text-secondary my-10 text-center"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 justify-center">
        {knowledgeList.map((knowledge, index) => (
          <div key={index} className="h-full">
            <KnowledgeCard
              title={knowledge.title}
              description={knowledge.description}
              icon={knowledge.icon}
              iconWidth="68px"
              iconHeight="68px"
              iconColor="#ffb400"
              iconViewBox={knowledge.iconViewBox}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeSection;
