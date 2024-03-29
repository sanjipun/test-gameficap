import React from "react";

interface TokenButtonProps {
  children: React.ReactNode;
}

const TokenButton: React.FC<TokenButtonProps> = ({ children }) => {
  return (
    <button
      className="bg-C4C4C4 bg-opacity-30 leading-6 m-3 ml-0 text-3C454A text-opacity-70 rounded-md border
      border-C4C4C4 border-opacity-50 px-3 py-1"
    >
      {children}
    </button>
  );
};

export default TokenButton;
