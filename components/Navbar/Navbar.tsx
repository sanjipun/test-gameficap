import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import Login from "./Login";
import SignUp from "./SignUp";

const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);
  return (
    <div className="bg-FAFAFA relative z-0">
      <nav id="nav" className="max-w-1440 mx-auto px-5 sm:px-7 md:px-10 lg:px-20">
        <div className="hidden lg:flex justify-between items-center h-24">
          <Link href="/">Logo</Link>
          <div>
            {NAVBAR_DATA.map((navData, i: number) => (
              <Link key={i} href={navData.path}>
                <a className="mx-4 capitalize">{navData.name}</a>
              </Link>
            ))}
          </div>
          <div className="border w-56 flex justify-between items-center rounded-md h-10 bg-black bg-opacity-20">
            <input
              type="search"
              placeholder="search"
              className="h-full bg-black bg-opacity-0 w-full px-3 rounded-md"
            />
            <AiOutlineSearch className="text-3xl mx-2 text-white" />
          </div>
          {/*<button className="bg-94A2AB text-white px-7 py-3 rounded-md">Connect Wallet</button>*/}
          <div className="flex items center">
            <Login />
            <SignUp />
          </div>
        </div>
        <div className="h-24 flex lg:hidden justify-between items-center">
          {!openMenu && <GiHamburgerMenu onClick={() => setOpenMenu(true)} className="w-7 h-7" />}
          {openMenu && <GrClose onClick={() => setOpenMenu(false)} className="w-7 h-7" />}
          <Link href="/">Logo</Link>
        </div>
      </nav>
      <div
        className={`${
          openMenu ? "tranxlate-x-0" : "-translate-x-full"
        } absolute top-20 left-0 text-center py-5 transition-all duration-500 ease-in-out bg-black w-full min-h-screen text-white px-5 sm:px-7 md:px-10`}
      >
        <button className="bg-94A2AB text-white w-full px-7 py-3 rounded-md">Connect Wallet</button>
        <div className="flex flex-col items-center mt-5">
          {NAVBAR_DATA.map((navData, i: number) => (
            <Link key={i} href={navData.path}>
              <a className="mx-8 capitalize my-3 py-3 rounded w-full hover:bg-94A2AB">
                {navData.name}
              </a>
            </Link>
          ))}
        </div>
        <Login />
        <SignUp />
      </div>
    </div>
  );
};

export default Navbar;

const NAVBAR_DATA: { name: string; path: string }[] = [
  {
    name: "Tokens",
    path: "/tokens",
  },
  {
    name: "NFTs",
    path: "/nfts",
  },
  {
    name: "News",
    path: "/news",
  },
  {
    name: "Games",
    path: "/games",
  },
  {
    name: "Support",
    path: "/support",
  },
];
