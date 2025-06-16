import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Step 1',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
    image: '/src/assets/1progress-circle.png',
  },
  {
    id: 2,
    title: 'Step 2',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
    image: '/src/assets/2progress-circle.png',
  },
  {
    id: 3,
    title: 'Step 3',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
    image: '/src/assets/3progress-circle.png',
  },
];

const OurProgress = () => {
  return (
    <section className="text-black py-12 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Process</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-y-12 md:gap-x-10">
        {steps.map(step => (
          <div
            key={step.id}
            className="relative w-full max-w-xs md:max-w-sm h-64 flex items-center justify-center text-center mx-auto"
          >
            <img
              src={step.image}
              alt={step.title}
              className="absolute inset-0 w-full h-full object-contain"
            />
            <div className="relative z-10 px-4">
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-700">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProgress;
