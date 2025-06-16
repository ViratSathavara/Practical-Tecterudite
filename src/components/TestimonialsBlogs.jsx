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
  console.log(blogs)
  const navigate = useNavigate();

  const getBlogs = async () => {
    try {
      const response = await axios.get('http://3.7.81.243:3253/api/blog/');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="text-black flex flex-col items-center w-full px-6 py-10">
      <div className="w-9/12">
        <h1 className="text-4xl font-semibold my-20">Testimonials</h1>
        <div className="flex justify-evenly w-full gap-10">
          {testimonials.map(({ id, name, image, text }) => (
            <div
              key={id}
              className="bg-white py-8 px-6 rounded-lg shadow-xl max-w-2xl flex flex-col gap-4 relative"
            >
              <img
                src="/src/assets/up-quote-icon.png"
                alt="upquote"
                className="absolute -top-4 left-6 w-8 h-8"
              />
              <div className="flex items-center gap-5">
                <img src={image} alt={name} className="w-20 h-20 rounded-full" />
                <h1 className="text-xl font-semibold">{name}</h1>
              </div>
              <p className="text-gray-700">{text}</p>
              <img
                src="/src/assets/down-quote-icon.png"
                alt="downquote"
                className="absolute right-6 -bottom-4 w-8 h-8"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-9/12 mt-30">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-semibold">Blogs</h1>
          <p
            className="text-blue-600 flex items-center gap-1 cursor-pointer hover:underline"
            onClick={() => navigate('/blogs')}
          >
            View All <ArrowRightAltIcon />
          </p>
        </div>

        <div>
          {blogs.data?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.data.slice(0, 3).map((blog) => (
                <div
                  key={blog.id}
                  className=" p-6 rounded-lg hover:shadow-xl transition-shadow"
                >
                  <img
                    src={blog.image_url}
                    alt={blog.title}
                    className="w-xl h-48 object-cover rounded-md mb-4"
                  />
                  <h2 className="text-xl font-semibold mb-2">{blog.seo_title}</h2>
                  <p className="text-gray-600 mb-4">{blog.seo_description}</p>
                  
                </div>
              ))}
            </div>
          ) : (
            <p>Loading blogs...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsBlogs;
