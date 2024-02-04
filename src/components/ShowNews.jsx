import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowNews = () => {
  const [news, setNews] = useState([]);
  const [clickedNews, setClickedNews] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=975d786d609c49d29e339132f2253e68"
      )
      .then((response) => {
        setNews(response.data.articles); // Assuming the articles are available in data.articles
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClick = (article) => {
    setClickedNews(article);
  };

  return (
    <div className="container mx-auto p-4 bg-blue-950">
      <h2 className="text-3xl font-bold mb-4 text-white">SHEYNEWS</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
        {news && news.length > 0 ? (
          news.map((article, index) => (
            <li key={index} className="bg-white p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{article.title}</h3>
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-32 object-cover mb-2"
              />
              <p className="text-gray-800">{article.description}</p>
              <Link to={article.url}>
                <button
                  onClick={() => handleClick(article)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
                >
                  Read More
                </button>
              </Link>
            </li>
          ))
        ) : (
          <p>No news articles available</p>
        )}
      </ul>

      {clickedNews && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Clicked News</h2>
          <p>{clickedNews.title}</p>
          {/* Add additional details as needed */}
        </div>
      )}
    </div>
  );
};

export default ShowNews;
