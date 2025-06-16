import React from 'react';

const services = [
  {
    id: 1,
    title: 'Audit & Account',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    image: '/src/assets/searchservice1.png',
  },
  {
    id: 2,
    title: 'Budget & Projections',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    image: '/src/assets/budgetservice2.png',
  },
  {
    id: 3,
    title: 'Payroll & Bookkeeping',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    image: '/src/assets/revenueservice3.png',
  },
  {
    id: 4,
    title: 'Software Training & IT',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/src/assets/settingservice4.png',
  },
  {
    id: 5,
    title: 'Tax Planning & Returns',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    image: '/src/assets/taxservice5.png',
  },
  {
    id: 6,
    title: 'Management Information',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/src/assets/statisticsservice6.png',
  },
];

const OverviewSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
        Services
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-xl bg-white hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-20 w-20 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
            <p className="text-[#606060] text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OverviewSection;
