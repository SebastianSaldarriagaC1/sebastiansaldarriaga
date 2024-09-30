import React from "react";
// Import next/image
import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
}

const CircleImage: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={300}
      height={300}
      className="rounded-full"
    />
  );
};

const ProjectImage: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <Image src={src} alt={alt} width={500} height={300} layout="responsive" />
  );
};

export { CircleImage, ProjectImage };
