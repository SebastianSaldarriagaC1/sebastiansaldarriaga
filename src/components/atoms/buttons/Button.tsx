import React from "react";
import Icon from "../icons/Icon";

interface ButtonProps {
  text: string;
  className?: string;
  link: string;
  icon?: string;
  iconWidth?: string;
  iconHeight?: string;
  iconColor?: string;
  iconViewBox?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  link,
  icon = "",
  iconWidth = "40px",
  iconHeight = "40px",
  iconViewBox = "0 0 24 24",
  iconColor = "black",
}) => {
  return (
    <div>
      <a
        href={link}
        className={`${className} flex justify-between bg-highlight rounded-md `}
        target="_blank"
      >
        {text}
        <Icon
          icon={icon}
          iconWidth={iconWidth}
          iconHeight={iconHeight}
          iconViewBox={iconViewBox}
          iconColor={iconColor}
        />
      </a>
    </div>
  );
};

export default Button;
