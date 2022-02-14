import Link from 'next/link';
import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-landingBG">
      <section className="grid grid-cols-2 max-w-1440 mx-auto px-20 py-36">
        <section>
          <h1 className="text-5xl leading-56 text-primary">{LANDING_DATA.title}</h1>
          <p className="mt-6 text-base">{LANDING_DATA.paragraph}</p>
          <button className="bg-slate-500 text-white px-20 py-3 mt-6 rounded-md">
            <Link href={LANDING_DATA.buttonLink}>{LANDING_DATA.buttonName}</Link>
          </button>
        </section>
        <section className="flex justify-center items-center">
          <img src={LANDING_DATA.landingImage} className="w-20 h-20" alt="random image" />
        </section>
      </section>
    </div>
  );
};

export default LandingPage;

const LANDING_DATA = {
  title: 'Very Catchy Game-Fi Cap Display Message',
  paragraph:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper consec elementum augue scelerisque mi aliquet etiam urna.',
  buttonName: 'Click Me',
  buttonLink: '/tokens',
  landingImage: '/assets/image.svg',
};
