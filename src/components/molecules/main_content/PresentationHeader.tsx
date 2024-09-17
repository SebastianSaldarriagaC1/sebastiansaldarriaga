import Button from "@/components/atoms/buttons/Button";
import TitleHighlightText from "@/components/atoms/texts/TitleText";
import React from "react";

interface PresentationHeaderProps {
  text: string;
  highlight?: string;
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
}

const PresentationHeader: React.FC<PresentationHeaderProps> = ({
  text,
  highlight,
  imageSrc,
  imageAlt,
  imageClassName,
}) => {
  return (
    <div className="bg-general flex flex-col lg:flex-row">
      <div className="w-full lg:w-3/5 p-10 flex flex-col items-start justify-center lg:pl-10">
        <TitleHighlightText text={text} highlight={highlight} />
        <Button
          text="HIRE ME"
          link="https://www.linkedin.com/in/sebastian-saldarriagac/"
          className="mt-6 px-8 py-4"
          icon="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"
          iconViewBox="0 0 15 15"
          iconWidth="20px"
          iconHeight="20px"
        />
      </div>
      <div className="w-full flex justify-center lg:w-2/5 mt-6 lg:mt-0">
        <img src={imageSrc} alt={imageAlt} className={imageClassName} />
      </div>
    </div>
  );
};

export default PresentationHeader;
