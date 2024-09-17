import React from "react";
import Avatar from "../molecules/left_column/Avatar";
import PersonalInfo from "../molecules/left_column/PersonalInfo";
import SkillBarSection from "../molecules/left_column/SkillBarSection";
import ExtraSkillsSection from "../molecules/left_column/ExtraSkills";

const LeftColumn: React.FC = () => {
  var relativeWidth: string = "w-3/4";
  return (
    <div>
      <Avatar
        src="/profile-picture.png"
        name="Sebastian Saldarriaga"
        profession="Systems Engineering Student"
        className="my-10 mx-auto"
      />

      <hr className={`${relativeWidth} border-t border-gray-300 mx-auto`} />

      <PersonalInfo
        age="21"
        residence="CO"
        freelance={true}
        address="Medellín, Colombia"
        externalClassName="flex flex-col items-center my-10"
        internalClassName={`flex justify-between ${relativeWidth}`}
      />

      <hr className={`${relativeWidth} border-t border-gray-300 mx-auto`} />

      <SkillBarSection
        title="Languages"
        skills={[
          { name: "Spanish", percentage: 100 },
          { name: "English", percentage: 60 },
        ]}
        className={`${relativeWidth} mx-auto`}
      />

      <hr className={`${relativeWidth} border-t border-gray-300 mx-auto`} />

      <SkillBarSection
        title="Programming Languages"
        skills={[
          { name: "Java", percentage: 80 },
          { name: "JavaScript", percentage: 60 },
          { name: "Python", percentage: 40 },
          { name: "Kotlin", percentage: 40 },
        ]}
        className={`${relativeWidth} mx-auto`}
      />

      <hr className={`${relativeWidth} border-t border-gray-300 mx-auto`} />

      <ExtraSkillsSection
        title="Extra Skills"
        skills={[
          {
            name: "Scrum",
            icon: "M8 5.5a1.997 1.997 0 0 0-2 2a2 2 0 0 0 2 2h4.44l-.22-.22a.75.75 0 0 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H8a3.5 3.5 0 0 1-3.046-5.225A3.5 3.5 0 0 1 11.5 7.5v.025c-.27.276-.431.62-.482.975H9.732A2 2 0 0 0 8 5.5m-5.25 4h1.218c.29.583.702 1.094 1.203 1.5H2.75a.75.75 0 0 1 0-1.5",
            iconViewBox: "0 0 16 16",
          },
          {
            name: "Figma",
            icon: "M8.667 9.417a2.583 2.583 0 1 0 0 5.166h2.583v-2.531a4.511 4.511 0 0 1 0-.104V9.417zm2.583-1.5H8.667a2.583 2.583 0 0 1 0-5.167h2.583zm1.5-5.167v5.167h2.583a2.584 2.584 0 0 0 0-5.167zm2.583 6.666a2.583 2.583 0 0 0-2.583 2.542v.083a2.583 2.583 0 1 0 2.583-2.625m-6.666 6.667a2.584 2.584 0 1 0 2.583 2.584v-2.584z",
            iconViewBox: "0 0 24 24",
          },
          {
            name: "Tailwind",
            icon: "M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12",
            iconViewBox: "0 0 24 24",
          },
          {
            name: "Git/GitHub",
            icon: "M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.39-1-1.73V9.41l2.07 2.09c-.07.15-.07.32-.07.5a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.18 0-.35 0-.5.07L13.93 7.5a1.98 1.98 0 0 0-1.15-2.34c-.43-.16-.88-.2-1.28-.09L9.8 3.38l.79-.78c.78-.79 2.04-.79 2.82 0l7.99 7.99c.79.78.79 2.04 0 2.82l-7.99 7.99c-.78.79-2.04.79-2.82 0L2.6 13.41c-.79-.78-.79-2.04 0-2.82",
            iconViewBox: "0 0 24 24",
          },
        ]}
        className={`${relativeWidth} mx-auto`}
      />
    </div>
  );
};

export default LeftColumn;
