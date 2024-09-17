import React from "react";

interface CircularImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const CircularImage: React.FC<CircularImageProps> = ({
  src,
  alt,
  className = "",
}) => {
  return (
    <img src={src} alt={alt} className={`rounded-full bg-main ${className}`} />
  );
};

export default CircularImage;
