import React, { useState, useEffect } from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  const [currentPage, setCurrentPageLocal] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Update total pages whenever totalPosts or postsPerPage changes
  useEffect(() => {
    setTotalPages(Math.ceil(totalPosts / postsPerPage));
  }, [totalPosts, postsPerPage]);

  // Handle click event for previous button
  const handlePrevClick = () => {
    const prevPage = currentPage > 1 ? currentPage - 1 : totalPages;
    setCurrentPageLocal(prevPage);
    setCurrentPage(prevPage); // Pass the current page to parent component if needed
  };

  // Handle click event for next button
  const handleNextClick = () => {
    const nextPage = currentPage < totalPages ? currentPage + 1 : 1;
    setCurrentPageLocal(nextPage);
    setCurrentPage(nextPage); // Pass the current page to parent component if needed
  };

  // Generate an array of page numbers
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="mt-4 flex justify-center gap-2">
      <button onClick={handlePrevClick}>
        Prev
      </button>
      {pages.map((page) => (
        <button
          onClick={() => setCurrentPage(page)}
          className={`px-2 border rounded-sm shadow-sm ${
            currentPage === page ? "font-bold bg-[#A9B388] text-white" : ""
          }`}
          key={page}
        >
          {page}
        </button>
      ))}
      <button onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
