import React from "react";

interface TitleHighlightTextProps {
  text: string;
  highlight?: string;
}

const TitleHighlightText: React.FC<TitleHighlightTextProps> = ({
  text,
  highlight,
}) => {
  if (highlight === undefined) {
    return <h1>{text}</h1>;
  } else {
    const parts = text.split(highlight);

    return (
      <h1 className="text-primary text-5xl font-bold">
        {parts[0]}
        <span className="text-highlight">{highlight}</span>
        {parts[1]}
      </h1>
    );
  }
};

export default TitleHighlightText;
