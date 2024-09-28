import React from "react";

interface TextProps {
  text: string;
}

interface AnchorProps {
  text: string;
  href: string;
}

const SectionText: React.FC<TextProps> = ({ text }) => {
  return <h1 className="section-text">{text}</h1>;
};

const Navbartext: React.FC<AnchorProps> = ({ text, href }) => {
  return (
    <a href={href} className="navbar-text">
      {text}
    </a>
  );
};

const HeaderText: React.FC<TextProps> = ({ text }) => {
  return <p className="header-text">{text}</p>;
};

const HighlightText: React.FC<TextProps> = ({ text }) => {
  return <p className="highlight-text">{text}</p>;
};

export { SectionText, Navbartext, HeaderText, HighlightText };
