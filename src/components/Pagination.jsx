export default function Pagination({ postsPerPage, totalPosts, currentPage, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-8">
      <ul className="flex justify-center space-x-2">
        {currentPage > 1 && (
          <li>
            <button
              onClick={() => paginate(currentPage - 1)}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Previous
            </button>
          </li>
        )}

        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 border rounded ${
                currentPage === number 
                  ? 'bg-blue-600 text-white' 
                  : 'hover:bg-gray-100'
              }`}
            >
              {number}
            </button>
          </li>
        ))}

        {currentPage < pageNumbers.length && (
          <li>
            <button
              onClick={() => paginate(currentPage + 1)}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}