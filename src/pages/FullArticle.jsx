import React from "react";
import { useParams } from "react-router-dom";

const FullArticle = ({ news }) => {
  const { articleIndex } = useParams();
  const article = news[articleIndex];

  return (
    <div className="container mx-auto p-4 bg-blue-950">
      <h2 className="text-3xl font-bold mb-4 text-white">Full Article</h2>
      {article ? (
        <div>
          <h3 className="text-xl font-bold mb-2">{article.title}</h3>
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-32 object-cover mb-2"
          />
          <p className="text-gray-800">{article.description}</p>
          {/* Add additional details as needed */}
        </div>
      ) : (
        <p>Article not found</p>
      )}
    </div>
  );
};

export default FullArticle;
