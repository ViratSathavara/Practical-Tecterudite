import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly w-full h-full px-4 md:px-12 py-12 gap-10 md:gap-20">
      
      <div className="text-black max-w-md md:max-w-lg flex flex-col gap-6 md:gap-7">
        <h1 className="text-black font-semibold text-3xl sm:text-4xl">About us</h1>
        <p className="text-[#606060] text-base sm:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor. Lorem ipsum dolor sit amet consetetur sadipscing elitr.
        </p>
        <Link to="/about" className="w-40">
          <button className="bg-[#FF6400] font-bold text-white px-6 py-2 rounded-full w-full transition hover:bg-orange-600">
            Checkout
          </button>
        </Link>
      </div>

      <div className="w-full max-w-md md:max-w-lg">
        <img
          src="/src/assets/about-banner.png"
          alt="About us banner"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default AboutUs;
