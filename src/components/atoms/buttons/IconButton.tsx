import React from "react";
import Icon from "../icons/Icon";

interface IconButtonProps {
  icon: string;
  iconColor?: string;
  iconViewBox?: string;
  url: string;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  iconColor = "black",
  iconViewBox = "0 0 24 24",
  url,
  className,
}) => {
  return (
    <div>
      <a
        href={url}
        className={`${className} flex bg-highlight rounded-full p-2`}
        target="_blank"
      >
        <Icon icon={icon} iconViewBox={iconViewBox} iconColor={iconColor} />
      </a>
    </div>
  );
};

export default IconButton;
