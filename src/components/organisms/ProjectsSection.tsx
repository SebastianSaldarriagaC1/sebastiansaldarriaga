"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ProjectCard } from "../molecules/Card";
import { SectionText } from "../atoms/Text";

const projectList = [
  {
    title: "Predictive Fifa Model",
    description: "Description 1",
    image: "/predictive-model-fifa19.jpeg",
    githubLink: "https://github.com",
    websiteLink: "https://website.com",
  },
  {
    title: "Scrum Progress",
    description: "Description 2",
    image: "/scrum-progress.png",
    githubLink: "https://github.com",
    websiteLink: "https://website.com",
  },
  {
    title: "Sitas Reservas",
    description: "Description 3",
    image: "/sitas-reservas-a.png",
    githubLink: "https://github.com",
    websiteLink: "https://website.com",
  },
  {
    title: "SSMU Backend",
    description: "Description 4",
    image: "/ssmu-backend.png",
    githubLink: "https://github.com",
    websiteLink: "https://website.com",
  },
];

const ProjectsSection: React.FC = () => {
  const upperSliderSettings = {
    className: "center",
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
  };

  const lowerSliderSettings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false,
  };

  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  let sliderRef1 = useRef<Slider | null>(null);
  let sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);
  return (
    <div className="slider-container mx-auto w-11/12 sm:w-10/12">
      <SectionText text="Projects" />
      <Slider
        asNavFor={nav2 ?? undefined}
        ref={(slider) => {
          if (slider) sliderRef1.current = slider;
        }}
        {...upperSliderSettings}
        className="my-10"
      >
        {projectList.map((project, index) => (
          <div key={index}>
            <h3 className="text-center project-text">{project.title}</h3>
          </div>
        ))}
      </Slider>
      <Slider
        asNavFor={nav1 ?? undefined}
        ref={(slider) => {
          if (slider) sliderRef2.current = slider;
        }}
        className="w-10/12 mx-auto items-center text-base sm:text-2xl"
        {...lowerSliderSettings}
      >
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ProjectsSection;
