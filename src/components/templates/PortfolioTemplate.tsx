import React from "react";
import MainContent from "../organisms/MainContent";
import SocialLinks from "../organisms/SocialLinks";
import LeftColumn from "../organisms/LeftColumn";

const PortfolioTemplate: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-[20%] lg:order-first">
        <LeftColumn />
      </div>
      <div className="w-full lg:w-[75%]">
        <MainContent />
      </div>
      <div className="w-full lg:w-[5%] lg:order-last lg:fixed lg:top-0 lg:right-0">
        <SocialLinks />
      </div>
    </div>
  );
};

export default PortfolioTemplate;
