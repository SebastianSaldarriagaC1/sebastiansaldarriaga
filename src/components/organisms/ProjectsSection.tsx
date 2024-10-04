"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ProjectCard } from "../molecules/Card";
import { SectionText } from "../atoms/Text";
import { RoundedButton } from "../atoms/Button";

const projectList = [
  {
    title: "SSMU Backend",
    description:
      "Backend for the module to request rides in the SSMU application, similar to Uber. Responsible for database management and building APIs.",
    image: "/projects/ssmu-backend.png",
    githubLink:
      "https://github.com/SebastianSaldarriagaC1/realizar-solicitudes-back",
  },
  {
    title: "IoT Monitoring",
    description:
      "An IoT solution using ESP32 to collect temperature and humidity data from a KY-015 sensor, sending the data to Firebase for real-time storage. Includes a Firebase-based frontend for monitoring.",
    image: "/projects/iot-temperature.png",
    githubLink:
      "https://github.com/SebastianSaldarriagaC1/esp32-firebase-webapp",
    websiteLink: "https://esp32-webapp-27b6f.web.app/",
  },
  {
    title: "Predictive Fifa Model",
    description:
      "Predictive model built in Python to predict the value of soccer players in FIFA19 based on their characteristics. Responsible for data preprocessing and testing different predictive models with SKlearn to determine the most efficient and complex model.",
    image: "/projects/predictive-model-fifa19.jpeg",
    githubLink:
      "https://github.com/SebastianSaldarriagaC1/proyecto-final-modelos",
  },
  {
    title: "Sprint Pulse (WIP)",
    description:
      "Scrum-focused project management platform with gamified features. Responsible for the frontend and backend development with Angular and Spring Boot.",
    image: "/projects/sprint-pulse.png",
    githubLink: "https://github.com/SebastianSaldarriagaC1/sprint-pulse",
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
    <div id="projects" className="mx-auto w-11/12 sm:w-10/12">
      <div className="slider-container">
        <SectionText text="Projects" />
        <Slider
          asNavFor={nav2 ?? undefined}
          ref={(slider) => {
            if (slider) sliderRef1.current = slider;
          }}
          {...upperSliderSettings}
          className="my-10 h-10"
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
      {/* Centered button to see more projects*/}
      <div className="flex justify-center my-10">
        <RoundedButton
          text="See more projects"
          onClick={() =>
            window.open("https://github.com/SebastianSaldarriagaC1", "_blank")
          }
          extraClass="mx-auto"
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
