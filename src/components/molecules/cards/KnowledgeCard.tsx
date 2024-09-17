import Icon from "@/components/atoms/icons/Icon";
import Paragraph from "@/components/atoms/texts/Paragraph";
import SectionText from "@/components/atoms/texts/SectionText";
import React from "react";

interface KnowledgeCardProps {
  title: string;
  description: string;
  icon: string;
  iconWidth?: string;
  iconHeight?: string;
  iconViewBox?: string;
  iconColor?: string;
}

const KnowledgeCard: React.FC<KnowledgeCardProps> = ({
  title,
  description,
  icon,
  iconWidth = "40px",
  iconHeight = "40px",
  iconViewBox = "0 0 24 24",
  iconColor = "black",
}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-general p-10 h-72">
      <Icon
        icon={icon}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        iconViewBox={iconViewBox}
        iconColor={iconColor}
      />
      <SectionText text={title} className="text-center m-2" />
      <Paragraph text={description} className="text-secondary text-center" />
    </div>
  );
};

export default KnowledgeCard;
