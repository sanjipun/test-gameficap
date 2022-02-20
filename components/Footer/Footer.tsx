import React from 'react';

const Footer = () => {
  return (
    <div id="footer" className="bg-EAECEE text-primary">
      <footer className="max-w-1440 mx-auto px-20 grid grid-cols-5 py-16">
        <div className="flex justify-center items-start text-2xl">
          <img src="/assets/image.svg" className="w-10 h-10 mr-2" /> Game Fi Cap
        </div>
        <div>
          <h1>Company</h1>
          <ul className="list-none mb-1">
            {FOOTER_DATA.map((data, i) => (
              <li key={i} className="my-3">
                {data}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1>Support</h1>
          <ul className="list-none mb-1">
            {FOOTER_DATA.map((data, i) => (
              <li key={i} className="my-3">
                {data}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1>Community</h1>
          <ul className="list-none mb-1">
            {FOOTER_DATA.map((data, i) => (
              <li key={i} className="my-3">
                {data}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1>Interested to stay up-to-date with cryptocurrencies?</h1>
          <h2 className="mt-4">
            Get the latest crypto news, updates, and reports by subscribing to our free newsletter.
          </h2>
          <textarea className="w-full mt-6" />
          <button className="bg-slate-500 text-white px-12 py-3 mt-6 rounded-md">Subscribe</button>
        </div>
        <div className="divide-red-50"></div>
      </footer>
    </div>
  );
};

export default Footer;

const FOOTER_DATA: string[] = ['Terms of Use', 'Terms of Use', 'Terms of Use', 'Terms of Use'];
