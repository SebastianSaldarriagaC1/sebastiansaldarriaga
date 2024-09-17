import React from "react";
import PresentationHeader from "../molecules/main_content/PresentationHeader";
import KnowledgeSection from "../molecules/main_content/KnowledgeSection";
import EducationSection from "../molecules/main_content/EducationSection";
import PortfolioSection from "../molecules/main_content/PortfolioSection";
import SimpleTextCard from "../molecules/main_content/SimpleTextCard";

const MainContent: React.FC = () => {
  return (
    <div className="bg-main h-full flex flex-col items-center px-6">
      <section className="mt-6 lg:mt-0">
        <PresentationHeader
          text="I'm Sebastian Saldarriaga, Systems Engineering Student"
          highlight="Systems Engineering"
          imageSrc="/profile-picture.png"
          imageAlt="Sebastian Saldarriaga Picture"
          imageClassName="w-96 h-96"
        />
      </section>
      <section className="mt-10">
        <KnowledgeSection
          title="My Knowledge"
          description="Explore my knowledge base encompassing various areas of technology and software development. This section provides insight into my proficiency across different frameworks, tools, and methodologies."
          knowledgeList={[
            {
              title: "Front-End Development",
              description: "HTML, CSS, JavaScript, TypeScript, React, Next.js",
              icon: "M28 4H4a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h24a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2m0 2v4H4V6ZM4 12h6v14H4Zm8 14V12h16v14Z",
              iconViewBox: "0 0 32 32",
            },
            {
              title: "Back-End (API) Development",
              description: "Spring Boot, Express.js",
              icon: "m12 14l-2-2l2-2l2 2zM9.875 8.125l-2.5-2.5L12 1l4.625 4.625l-2.5 2.5L12 6zm-4.25 8.5L1 12l4.625-4.625l2.5 2.5L6 12l2.125 2.125zm12.75 0l-2.5-2.5L18 12l-2.125-2.125l2.5-2.5L23 12zM12 23l-4.625-4.625l2.5-2.5L12 18l2.125-2.125l2.5 2.5z",
              iconViewBox: "0 0 24 24",
            },
            {
              title: "Database Management",
              description: "Oracle, PostgresSQL, MySQL",
              icon: "M12 11q3.75 0 6.375-1.175T21 7q0-1.65-2.625-2.825T12 3Q8.25 3 5.625 4.175T3 7q0 1.65 2.625 2.825T12 11m0 2.5q1.025 0 2.563-.213t2.962-.687q1.425-.475 2.45-1.237T21 9.5V12q0 1.1-1.025 1.863t-2.45 1.237q-1.425.475-2.962.688T12 16q-1.025 0-2.562-.213T6.475 15.1q-1.425-.475-2.45-1.237T3 12V9.5q0 1.1 1.025 1.863t2.45 1.237q1.425.475 2.963.688T12 13.5m0 5q1.025 0 2.563-.213t2.962-.687q1.425-.475 2.45-1.237T21 14.5V17q0 1.1-1.025 1.863t-2.45 1.237q-1.425.475-2.962.688T12 21q-1.025 0-2.562-.213T6.475 20.1q-1.425-.475-2.45-1.237T3 17v-2.5q0 1.1 1.025 1.863t2.45 1.237q1.425.475 2.963.688T12 18.5",
              iconViewBox: "0 0 24 24",
            },
            {
              title: "Android Development",
              description: "Android Studio, Kotlin, Java, Jetpack Compose",
              icon: "M21.005 43.003c-4.053-.002-7.338 3.291-7.339 7.341l.005 30.736a7.338 7.338 0 0 0 7.342 7.343a7.33 7.33 0 0 0 7.338-7.342V50.34a7.345 7.345 0 0 0-7.346-7.337m59.193-27.602l5.123-9.355a1.023 1.023 0 0 0-.401-1.388a1.022 1.022 0 0 0-1.382.407l-5.175 9.453c-4.354-1.938-9.227-3.024-14.383-3.019c-5.142-.005-10.013 1.078-14.349 3.005L44.45 5.075a1.01 1.01 0 0 0-1.378-.406a1.007 1.007 0 0 0-.404 1.38l5.125 9.349c-10.07 5.193-16.874 15.083-16.868 26.438l66.118-.008c.002-11.351-6.79-21.221-16.845-26.427M48.942 29.858a2.772 2.772 0 0 1 .003-5.545a2.78 2.78 0 0 1 2.775 2.774a2.776 2.776 0 0 1-2.778 2.771m30.106-.005a2.77 2.77 0 0 1-2.772-2.771a2.793 2.793 0 0 1 2.773-2.778a2.79 2.79 0 0 1 2.767 2.779a2.767 2.767 0 0 1-2.768 2.77M31.195 44.39l.011 47.635a7.822 7.822 0 0 0 7.832 7.831l5.333.002l.006 16.264c-.001 4.05 3.291 7.342 7.335 7.342c4.056 0 7.342-3.295 7.343-7.347l-.004-16.26l9.909-.003l.004 16.263c0 4.047 3.293 7.346 7.338 7.338c4.056.003 7.344-3.292 7.343-7.344l-.005-16.259l5.352-.004a7.835 7.835 0 0 0 7.836-7.834l-.009-47.635zm83.134 5.943a7.338 7.338 0 0 0-7.341-7.339c-4.053-.004-7.337 3.287-7.337 7.342l.006 30.738a7.334 7.334 0 0 0 7.339 7.339a7.337 7.337 0 0 0 7.338-7.343z",
              iconViewBox: "0 0 128 128",
            },
            {
              title: "Quality Asurance",
              description: "SonarCloud, JUnit, Postman",
              icon: "M33.914 413.612h149.55v27.595H27.494c-26.348 0-34.136-13.194-21.729-34.31L137.91 187.753V61.975h-26.075c-19.504 0-19.504-27.595 0-27.595h189.93c19.505 0 19.505 27.595 0 27.595H275.69v132.828h-27.963V61.975h-81.854v132.828zm135.6-169.187L84.692 386.574h70.601l104.375-112.907l-15.582-29.242zm145.996 9.783L209.5 367.506l106.01 110.286l33.538-33.538l-80.65-76.748l80.65-79.76zm56.943 33.537l80.65 79.76l-80.65 76.75l33.538 33.537L512 367.506L405.99 254.208z",
              iconViewBox: "0 0 512 512",
            },
            {
              title: "Deployment and Cloud Services",
              description: "Docker, GitHub Actions, Google Cloud, Vercel",
              icon: "M24.01 20.027v2h-24v-2h4v-1a2.006 2.006 0 0 1-2-2v-10a2.006 2.006 0 0 1 2-2h1.996v2H4.01v10h16v-10h-2.004v-2h2.004a2.006 2.006 0 0 1 2 2l-.01 10a1.997 1.997 0 0 1-1.99 2v1Zm-9-6.012l-3-3l-3 3h2v2.01h2v-2.01Zm.995-7.991a4 4 0 1 1-4-4a4.001 4.001 0 0 1 4 4m-4.4 2.96v-.56a.802.802 0 0 1-.8-.8v-.4L9.06 5.479a2.958 2.958 0 0 0 2.545 3.505m2.658-1.007a2.977 2.977 0 0 0-1.068-4.704a.797.797 0 0 1-.79.75h-.8v.8a.401.401 0 0 1-.4.4h-.8v.8h2.4a.401.401 0 0 1 .4.4v1.2h.4a.787.787 0 0 1 .658.354",
              iconViewBox: "0 0 24 24",
            },
          ]}
        />
      </section>
      <section className="mt-10">
        <EducationSection
          title="Education"
          description="Delve into my educational journey, where each milestone represents a commitment to continuous learning and professional development. In this section, you'll find a collection of my academic achievements that have equipped me with the knowledge and skills necessary for success in the field of information technology. Explore my educational background and discover how each experience has shaped my career trajectory and contributed to my growth as a technology professional."
          educationList={[
            {
              institution: "University of Antioquia",
              date: "2019 - Present",
              certification: "Systems Engineering Degree (In progress)",
              description:
                "Currently pursuing a Bachelor of Science in Systems Engineering at the University of Antioquia. Enrolled in a comprehensive program focusing on software development, database management, and system analysis. Gaining hands-on experience through practical projects and coursework, preparing for a rewarding career in the ever-evolving field of information technology.",
            },
            {
              institution: "SENA (National Learning Service)",
              date: "2017 - 2018",
              certification: "Systems Technical Degree",
              description:
                "Attained a Systems Technician certification from SENA (National Learning Service), a leading institution in technical education and vocational training. Acquired practical knowledge in computer systems, network administration, and troubleshooting, equipping with the foundational skills necessary for entry-level positions in the IT industry.",
            },
          ]}
        />
      </section>
      <section className="mt-10">
        <PortfolioSection
          title="My Portfolio"
          description="My Portfolio showcases a selection of my projects. Dive into this collection to explore my diverse range of endeavors, from innovative software solutions to impactful projects in areas like predictive modeling, web development, and more."
          projects={[
            {
              title: "SprintPulse (WIP)",
              description:
                "Scrum-focused project management platform with gamified features. Primarily responsible for backend development (APIs and database), as well as creating necessary diagrams and initial front-end mockups. May also contribute to front-end development.",
              image: "/scrum-progress.png",
              link: "https://github.com/SebastianSaldarriagaC1/sprint-pulse",
            },
            {
              title: "Backend for SSMU Application",
              description:
                "Backend for the module to request rides in the SSMU application, similar to Uber. Responsible for database management and building APIs.",
              image: "/ssmu-backend.png",
              link: "https://github.com/SebastianSaldarriagaC1/realizar-solicitudes-back",
            },
            {
              title: "SITAS - Airline Ticketing Systems",
              description:
                "SITAS is a web application aimed at providing users with an efficient experience for managing airline tickets. Role focused on the Reservations module, including quality assurance (best practices, requirements refinement, testing, etc.), as well as part of front-end development and deployment.",
              image: "/sitas-reservas-a.png",
              link: "https://github.com/CodeFactory2024-1/frontend-presencial/tree/reservas-A",
            },
            {
              title: "Predictive Model for FIFA19 Players",
              description:
                "Predictive model built in Python to predict the value of soccer players in FIFA19 based on their characteristics. Responsible for data preprocessing and testing different predictive models with SKlearn to determine the most efficient and complex model.",
              image: "/predictive-model-fifa19.jpeg",
              link: "https://github.com/SebastianSaldarriagaC1/proyecto-final-modelos",
            },
          ]}
        />
      </section>
      <div className="mt-10 w-full">
        <SimpleTextCard text="2024 All Rights Reserved." />
      </div>
    </div>
  );
};

export default MainContent;
