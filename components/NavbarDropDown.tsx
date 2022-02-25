import React from "react";
import { IoMdArrowDropup } from "react-icons/io";

interface NavbarDropDownProps {
  children?: React.ReactNode;
}

const NavbarDropDown: React.FC<NavbarDropDownProps> = ({ children }) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  console.log(isVisible);
  return (
    <div className={`relative ${isVisible ? "" : "overflow-hidden"}`}>
      <button onMouseOut={() => setIsVisible(false)} onMouseEnter={() => setIsVisible(true)}>
        Dropdown
      </button>
      <div className="triangle-up absolute left-2 top-12 z-10" />
      <div
        className={`${
          isVisible ? "max-h-96" : "max-h-0"
        }  absolute top-16 bg-white w-60 filter drop-shadow-dropdown z-0 p-3`}
      >
        Hello World
      </div>
    </div>
  );
};

export default NavbarDropDown;
