import React from "react";
import { ParagraphText } from "../atoms/Text";

const PortfolioFooter: React.FC = () => {
  return (
    <footer className="w-full my-6">
      <ParagraphText
        text="© 2024 Sebastian Saldarriaga. All rights reserved."
        extraClass="text-center"
      />
    </footer>
  );
};

export default PortfolioFooter;
