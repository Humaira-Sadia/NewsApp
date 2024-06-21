import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

const Cards = ({ category }) => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    await axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=3cf5032a2978426fa09cde2e7c34509a`
      )
      .then((res) => setData(res.data.articles));
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  // Ensuring articles is an array
  const articles = Array.isArray(data) ? data : [];

  // Filter out articles that do not have a valid image URL and match the search query
  const filteredArticles = articles.filter(
    (article) =>
      article.urlToImage &&
      (article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredArticles.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle search input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  return (
    <div>
      <div className="flex md:flex-row flex-col-reverse justify-between p-2">
        <h3 className="md:font-semibold text-[10px] md:text-sm tracking-wider">
          Trending Topics Now
        </h3>
        <div
          className="mx-12 p-2 mb-5 md:mx-0 md:mb-0 flex items-center bg-slate-100 
        md:p-[.35rem] rounded-2xl border-transparent"
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-slate-100 flex-grow md:px-[.35rem] rounded-2xl border-transparent focus:outline-none md:text-sm text-[10px]"
            value={searchQuery}
            onChange={handleSearch}
          />
          <button onClick={handleSearch}>
            <img src="search.png" alt="Search" className="md:h-5 h-3 ml-5" />
          </button>
        </div>
      </div>

      <div className="md:grid grid-rows-4 grid-flow-col gap-4 lg:h-[30rem] h-auto">
        {currentPosts.length > 0 && (
          <div className="relative rounded-xl col-span-1 row-span-4 overflow-hidden mb-4">
            <img
              src={currentPosts[0].urlToImage}
              alt="Description"
              className="w-full h-full object-cover"
            />
            <div className="bg-gradient-to-t from-black via-transparent to-transparent backdrop">
              <h3 className="text-sm md:text-lg font-bold">{currentPosts[0].title}</h3>
              <button className="view">
                <a href={currentPosts[0].url}>
                  <span>View</span>
                </a>
              </button>
              <p className="mt-2 hidden sm:block">
                Desc: {currentPosts[0].description}
              </p>
            </div>
          </div>
        )}

        {currentPosts.length > 1 && (
          <div className="relative rounded-xl row-span-2 col-span-2 overflow-hidden mb-4">
            <img
              src={currentPosts[1].urlToImage}
              alt="Description"
              className="w-full h-full object-cover"
            />
            <div className="bg-gradient-to-t from-black via-transparent to-transparent backdrop">
              <h3 className="text-lg font-bold">{currentPosts[1].title}</h3>
              <button className="view">
                <a href={currentPosts[1].url}>
                  <span>View</span>
                </a>
              </button>
              <p className="mt-2 hidden sm:block">
                Desc: {currentPosts[1].description}
              </p>
            </div>
          </div>
        )}

        {currentPosts.length > 2 && (
          <div className="relative rounded-xl row-span-2 overflow-hidden mb-4">
            <img
              src={currentPosts[2].urlToImage}
              alt="Description"
              className="w-full h-full object-cover"
            />
            <div className="bg-gradient-to-t from-black via-transparent to-transparent backdrop text-[10px]">
              <h3 className="text-[15px] font-bold">{currentPosts[2].title}</h3>
              <button className="view">
                <a href={currentPosts[2].url}>
                  <span>View</span>
                </a>
              </button>
              <p className="mt-2 hidden sm:block">
                Desc: {currentPosts[2].description}
              </p>
            </div>
          </div>
        )}

        {currentPosts.length > 3 && (
          <div className="relative rounded-xl row-span-2 overflow-hidden mb-4">
            <img
              src={currentPosts[3].urlToImage}
              alt="Description"
              className="w-full h-full object-cover"
            />
            <div className="bg-gradient-to-t from-black via-transparent to-transparent backdrop text-[10px]">
              <h3 className="text-lg font-bold">{currentPosts[3].title}</h3>
              <button className="view">
                <a href={currentPosts[3].url}>
                  <span>View</span>
                </a>
              </button>
              <p className="mt-2 hidden sm:block">
                Desc: {currentPosts[3].description}
              </p>{" "}
            </div>
          </div>
        )}
      </div>
      <Pagination
        totalPosts={filteredArticles.length}
        postsPerPage={postsPerPage}
        paginate={paginate}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Cards;
