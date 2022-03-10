import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="bg-EAECEE text-primary">
      <footer className="max-w-1440 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-auto px-5 sm:px-7 md:px-10 lg:px-20 py-16">
        <div className="flex justify-center items-start text-2xl ">
          <img src="/assets/Image.svg" className="w-10 h-10 mr-2" /> Game Fi Cap
        </div>
        <div className="flex justify-center text-center">
          <div>
            <h1 className="text-292C2F">Company</h1>
            <ul className="list-none mb-1">
              {FOOTER_DATA.map((data, i) => (
                <li key={i} className="my-3">
                  {data}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-center text-center">
          <div>
            <h1 className="text-292C2F">Support</h1>
            <ul className="list-none mb-1">
              {FOOTER_DATA.map((data, i) => (
                <li key={i} className="my-3">
                  {data}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-center text-center">
          <div>
            <h1 className="text-292C2F">Community</h1>
            <ul className="list-none mb-1">
              {FOOTER_DATA.map((data, i) => (
                <li key={i} className="my-3">
                  {data}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-center text-center md:col-span-2 lg:col-span-1">
          <div>
            <h1 className="text-292C2F">Interested to stay up-to-date with cryptocurrencies?</h1>
            <h2 className="mt-4">
              Get the latest crypto news, updates, and reports by subscribing to our free
              newsletter.
            </h2>
            <textarea className="w-full mt-6" />
            <button className="bg-slate-500 text-white px-12 py-3 mt-6 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

const FOOTER_DATA: string[] = ["Terms of Use", "Terms of Use", "Terms of Use", "Terms of Use"];
