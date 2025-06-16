import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    budget: '',
    description: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      await axios.post('http://3.7.81.243:3253/api/contact/send', formData);
      setSuccessMsg('Message sent successfully!');
      setFormData({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        budget: '',
        description: '',
      });
    } catch (error) {
      setErrorMsg('Something went wrong. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center mt-24 px-4 sm:px-8">
      <div className="text-black flex flex-col justify-center items-center w-full max-w-2xl">
        <p className='text-[#606060] text-center'>
          {`<small>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</small>`}
        </p>

        <form className="flex flex-col gap-6 w-full mt-10" onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-10 w-full">
            <div className="flex flex-col w-full sm:w-1/2 gap-4">
              <label htmlFor="fname" className="sr-only">First Name</label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                placeholder="First Name"
                className="p-3 border-b border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />

              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-3 border-b border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />

              <label htmlFor="budget" className="sr-only">Budget</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="p-3 border-b border-gray-300 text-[#606060] bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              >
                <option value="" disabled>Budget</option>
                {[1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000].map(amount => (
                  <option key={amount} value={amount}>
                    {amount}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col w-full sm:w-1/2 gap-4 mt-6 sm:mt-0">
              <label htmlFor="lname" className="sr-only">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                placeholder="Last Name"
                className="p-3 border-b border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />

              <label htmlFor="phone" className="sr-only">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="p-3 border-b border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />

              <label htmlFor="description" className="sr-only">Description</label>
              <textarea
                id="description"
                name="description"
                rows="3"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="p-3 border-b border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none w-full"
                required
              />
            </div>
          </div>

          <div className="flex w-full justify-center mt-10">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#FF6400] text-white py-3 px-8 rounded-full transition-colors hover:bg-orange-600 disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {successMsg && <p className="text-green-600 text-center mt-4">{successMsg}</p>}
          {errorMsg && <p className="text-red-600 text-center mt-4">{errorMsg}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
