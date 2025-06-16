import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const testimonials = [
  {
    id: 1,
    name: 'Josh Brollins',
    image: '/src/assets/profile.png',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
  },
  {
    id: 2,
    name: 'Josh Brollins',
    image: '/src/assets/profile.png',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',
  },
];

const TestimonialsBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const getBlogs = async () => {
    try {
      const response = await axios.get('http://3.7.81.243:3253/api/blog?page=0');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return  (
    <div className="text-black flex flex-col justify-center items-center w-full  py-10">
      <div className="w-full max-w-7xl">
        <h1 className="text-3xl md:text-4xl font-semibold mb-10 md:my-20">Testimonials</h1>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {testimonials.map(({ id, name, image, text }) => (
            <div
              key={id}
              className="bg-white py-8 px-6 rounded-lg shadow-xl max-w-2xl w-full flex flex-col gap-4 relative"
            >
              <img
                src="/src/assets/up-quote-icon.png"
                alt="upquote"
                className="absolute -top-4 left-6 w-8 h-8"
              />
              <div className="flex items-center gap-5">
                <img src={image} alt={name} className="w-16 h-16 md:w-20 md:h-20 rounded-full" />
                <h1 className="text-lg md:text-xl font-semibold">{name}</h1>
              </div>
              <p className="text-gray-700 text-sm md:text-base">{text}</p>
              <img
                src="/src/assets/down-quote-icon.png"
                alt="downquote"
                className="absolute right-6 -bottom-4 w-8 h-8"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-7xl mt-20 md:mt-60">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-3xl md:text-4xl font-semibold">Blogs</h1>
          <p
            className="text-blue-600 flex items-center gap-1 cursor-pointer hover:underline text-base md:text-lg"
            onClick={() => navigate('/blogs')}
          >
            View All <ArrowRightAltIcon />
          </p>
        </div>

        <div>
          {blogs.data?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.data.slice(0, 3).map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white p-6 rounded-lg hover:shadow-xl transition-shadow"
                >
                  <img
                    src={blog.image_url}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h2 className="text-lg md:text-xl font-semibold mb-2">{blog.seo_title}</h2>
                  <p className="text-gray-600 text-sm md:text-base">{blog.seo_description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Loading blogs...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsBlogs;