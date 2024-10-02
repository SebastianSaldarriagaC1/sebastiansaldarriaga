import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  extraClass?: string;
}

const RoundedButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  extraClass,
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full bg-primary text-white px-8 py-3 text-xl rounded-button ${extraClass}`}
    >
      {text}
    </button>
  );
};

export { RoundedButton };
