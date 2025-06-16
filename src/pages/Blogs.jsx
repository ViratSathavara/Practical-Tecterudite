import { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const response = await fetch('https://api.example.com/blogs');
      const data = await response.json();
      setBlogs(data);
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog Articles</h1>
      
      <div className="space-y-6">
        {currentPosts.map(blog => (
          <article key={blog.id} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600">{blog.excerpt}</p>
          </article>
        ))}
      </div>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={blogs.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}