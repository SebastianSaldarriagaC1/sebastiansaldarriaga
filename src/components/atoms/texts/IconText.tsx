import React from "react";
import Icon from "../icons/Icon";
import Paragraph from "./Paragraph";

interface IconTextProps {
  text: string;
  icon: string;
  iconWidth?: string;
  iconHeight?: string;
  iconViewBox?: string;
  iconColor?: string;
}

const IconText: React.FC<IconTextProps> = ({
  text,
  icon,
  iconWidth = "40px",
  iconHeight = "40px",
  iconViewBox = "0 0 24 24",
  iconColor = "black",
}) => {
  return (
    <div className="flex items-center">
      <Icon
        icon={icon}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        iconViewBox={iconViewBox}
        iconColor={iconColor}
      />
      <Paragraph text={`\u00A0\u00A0\u00A0${text}`} />
    </div>
  );
};

export default IconText;
