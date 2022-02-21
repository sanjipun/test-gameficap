import Link from 'next/link';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
const Navbar = () => {
  return (
    <nav id="nav" className="max-w-1440 mx-auto px-20">
      <div className="hidden md:flex justify-between items-center h-24">
        <Link href="/">Logo</Link>
        <div>
          {NAVBAR_DATA.map((navData, i: number) => (
            <Link key={i} href={navData.path}>
              <a className="mx-8 capitalize">{navData.name}</a>
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
        <div className="bg-slate-500 text-white px-4 py-2 rounded-md">Connect Wallet</div>
      </div>
      <div className="h-24 flex md:hidden justify-between items-center">Mobile Nav</div>
    </nav>
  );
};

export default Navbar;

const NAVBAR_DATA: { name: string; path: string }[] = [
  {
    name: 'Tokens',
    path: '/tokens',
  },
  {
    name: 'NFTs',
    path: '/nfts',
  },
  {
    name: 'News',
    path: '/news',
  },
  {
    name: 'Games',
    path: '/games',
  },
  {
    name: 'Support',
    path: '/support',
  },
];
