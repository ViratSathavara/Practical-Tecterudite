import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import OverviewSection from '../components/OverviewSection';
import AboutUs from '../components/AboutUs';
import OurProgress from '../components/OurProgress';
import TestimonialsBlogs from '../components/TestimonialsBlogs';
import ContactForm from '../components/ContactForm';

const Services = () => {
  const aboutRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const section = queryParams.get('section');

    if (section === 'about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'case-studies' && caseStudiesRef.current) {
      caseStudiesRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'services' && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contact' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="relative">
      <div className="h-screen relative">
        <div className="fixed inset-0 -z-20">
          <img
            src="/src/assets/servicelayer.png"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-start z-10 mt-60 px-6 sm:ml-30">
          <div className="max-w-3xl  bg-opacity-80 p-6 rounded-lg text-black">
            <h1 className="text-3xl sm:text-4xl font-bold uppercase mb-4 max-w-80">
              How much could you save?
            </h1>
            <p className="mb-6 text-md max-w-96">
              Answer the questions below to get a fixed price quotation for us to take your
              accountancy hassles away from you.
            </p>
            <div className="mb-6 bg-white rounded-md px-15 py-8 shadow-lg">
              <p className="text-lg sm:text-2xl text-center mb-4 max-w-md">
                Is your turnover expected to be more than £85k?
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-[#FF6400] font-bold text-white px-6 py-2 rounded-lg transition">
                  Yes
                </button>
                <button className="bg-[#FF6400] font-bold text-white px-6 py-2 rounded-lg transition">
                  No
                </button>
              </div>
            </div>
            <p className="text-sm opacity-80 font-semibold">Takes less than 30 seconds</p>
          </div>
        </div>
      </div>

      <section
        id="overview"
        ref={servicesRef}
        className="relative flex items-center justify-center text-white px-4 py-10"
        style={{ minHeight: '110vh' }}
      >
        <img
          src="/src/assets/Design-elements.png"
          alt="Design Element"
          className="absolute w-40 sm:w-52 md:w-64 lg:w-72 left-1/2 -translate-x-1/2 top-10 sm:top-20 rotate-0 sm:rotate-90 opacity-60 z-[-10]"
        />
        <div className="absolute inset-0 bg-white bg-opacity-40 z-[-15]"></div>
        <div className="w-full h-full relative z-10">
          <OverviewSection />
        </div>
      </section>

      <section id="about" ref={aboutRef} className="relative flex items-center justify-center text-white px-4" style={{ height: '165vh' }}>
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <img src="/src/assets/Rectangleabout-bg.png" alt="Background Design" className="absolute inset-0 w-full h-full object-cover z-[-10]" />
        </div>
        <div className="absolute inset-0 bg-white bg-opacity-40 -z-15"></div>
        <div className="w-full h-full bg-opacity-70 rounded-lg relative z-10">
          <AboutUs />
        </div>
      </section>

      <section
        id="case-studies"
        ref={caseStudiesRef}
        className="relative flex items-center justify-center text-white px-4 py-10"
        style={{ minHeight: '70vh' }}
      >
        <img
          src="/src/assets/Design-elements.png"
          alt="Design"
          className="absolute w-40 sm:w-52 md:w-64 lg:w-72 top-6 left-1/2 -translate-x-1/2 rotate-0 sm:rotate-90 opacity-50 z-[-10]"
        />
        <div className="absolute inset-0 bg-white bg-opacity-40 z-[-15]"></div>
        <div className="w-full h-full relative z-10">
          <OurProgress />
        </div>
      </section>

      <section id="TestimonialsBlogs" className="relative flex items-center justify-center text-white px-4" style={{ height: '220vh' }}>
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <img src="/src/assets/TestimonialsBlogs.png" alt="Background Design" className="absolute inset-0 w-full h-full object-cover z-[-10]" />
        </div>
        <div className="absolute inset-0 bg-white bg-opacity-40 -z-15"></div>
        <div className="w-full h-full bg-opacity-70 rounded-lg relative z-10">
          <TestimonialsBlogs />
        </div>
      </section>
      <section
        id="contact"
        ref={contactRef}
        className="relative flex items-center justify-center text-white px-4 py-10"
        style={{ minHeight: '80vh' }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-40 z-[-5]"></div>
        <div className="w-full h-full relative z-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Services;
