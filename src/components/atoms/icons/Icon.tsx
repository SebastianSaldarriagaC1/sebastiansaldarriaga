import React from "react";

interface IconProps {
  icon: string;
  iconWidth?: string;
  iconHeight?: string;
  iconViewBox?: string;
  iconColor?: string;
}

const Icon: React.FC<IconProps> = ({
  icon,
  iconWidth = "40px",
  iconHeight = "40px",
  iconViewBox = "0 0 24 24",
  iconColor = "black",
}) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconWidth}
        height={iconHeight}
        viewBox={iconViewBox}
      >
        <path fill={iconColor} d={icon} />
      </svg>
    </div>
  );
};

export default Icon;
