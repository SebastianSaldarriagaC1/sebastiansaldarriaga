import React from "react";
import { HighlightText, ParagraphText } from "../atoms/Text";
import { CircleImage } from "../atoms/Image";

const AboutSection: React.FC = () => {
  return (
    <div className="mx-auto w-11/12 sm:w-10/12">
      <div>
        <div className="w-full flex flex-col-reverse my-10 sm:flex-row sm:justify-between sm:items-center">
          <div className="mx-auto mt-10 sm:mt-0 sm:w-1/3">
            <CircleImage src="/sebastian-picture.jpg" alt="Profile Picture" />
          </div>
          <div className="sm:w-2/3 justify-end sm:mx-10">
            <HighlightText
              text="I’m Sebastian Saldarriaga, Systems Engineering Student"
              highlight="Sebastian Saldarriaga"
              id="about-me"
            />
          </div>
        </div>
        <div className="w-10/12 mx-auto items-center text-base sm:text-xl">
          <ParagraphText
            text="I'm a Systems Engineering student at the University of
            Antioquia, with a strong passion for backend programming, and
            I'm in the process of becoming a Fullstack Developer. I have
            experience working with languages such as Java,
            JavaScript/TypeScript, and Kotlin, and my love for technology
            constantly drives my enthusiasm to learn and grow in this
            ever-evolving field."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
