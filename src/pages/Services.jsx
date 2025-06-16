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
    //URLSearchParams is a built-in JavaScript object that helps you parse query strings easily.
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

        <div className="absolute inset-0 flex items-center justify-start z-10 mt-24 px-6 lg:ml-30">
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
          className="absolute hidden lg:flex -right-33 rotate-270 z-[-10]"
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
          className="absolute hidden h-auto lg:flex -left-33 rotate-90 z-[-13]"
        />
        <div className="absolute inset-0 bg-white bg-opacity-40 z-[-15]"></div>
        <div className="w-full h-full relative z-10">
          <OurProgress />
        </div>
      </section>

      <section id="TestimonialsBlogs" className="relative flex items-center justify-center text-white" style={{ minHeight: '200vh' }}>
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <img src="/src/assets/TestimonialsBlogs.png" alt="Background Design" className="absolute inset-0 w-full h-full object-cover z-[-10]" />
        </div>
        <div className="absolute inset-0 bg-white bg-opacity-40 -z-15"></div>
        <div className="w-full h-full bg-opacity-70 rounded-lg relative z-10 p-3">
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
