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
    <div className="relative w-[100%] h-auto md:w-[450px] md:h-[300px] sm:w-[350px] sm:h-[233px]  overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={450}
        height={300}
        className="contain-content"
      />
    </div>
  );
};

export { CircleImage, ProjectImage };
