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

export { CircleImage };
