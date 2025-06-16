import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../components/Pagination';

export default function Blogs() {
  const [blogs, setBlogs] = useState({ data: [], total: 0 });
  const [currentPage, setCurrentPage] = useState(0);
  const [postsPerPage] = useState(6);
  const [loading, setLoading] = useState(false);

  const getBlogs = async (page = 0) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://3.7.81.243:3253/api/blog?page=${page}&limit=${postsPerPage}`);
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogs(currentPage);
  }, [currentPage]);

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Blog Articles</h1>

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs?.data?.map((blog) => (
              <div
                key={blog.id}
                className="p-6 rounded-lg bg-white hover:shadow-xl transition-shadow"
              >
                <img
                  src={blog.image_url}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{blog.seo_title}</h2>
                <p className="text-gray-600 mb-4">{blog.seo_description}</p>
              </div>
            ))}
          </div>

          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={blogs.total}
            currentPage={currentPage}
            paginate={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}
