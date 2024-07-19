import React, { useState } from "react";

import { Link } from "react-router-dom";

const SearchPage = () => {
  const [recentSearches, setRecentSearches] = useState([
    { name: "Taylor Swift", role: "Nghệ sĩ", image: "taylor.jpg" },
    { name: "Charlie Puth", role: "Nghệ sĩ", image: "charlie.jpg" },
    { name: "Harry Styles", role: "Bài hát", image: "harry.jpg" },
    { name: "Soobin", role: "Nghệ sĩ", image: "soobin.jpg" },
    { name: "Đánh đỗi", role: "Obito", image: "obito.jpg" },
  ]);

  const genres = [
    { name: "Nhạc", color: "bg-red-500", coverArt: "CoverArt.jpg" },
    { name: "Nhạc Việt", color: "bg-amber-200", coverArt: "CoverArt2.jpg" },
    { name: "US-UK", color: "bg-cyan-500", coverArt: "CoverArt3.jpg" },
    { name: "Dành cho bạn", color: "bg-sky-700", coverArt: "CoverArt4.jpg" },
    {
      name: "Sự kiện trực tiếp",
      color: "bg-purple-600",
      coverArt: "CoverArt5.jpg",
    },
    { name: "Soul", color: "bg-amber-600", coverArt: "CoverArt6.jpg" },
    { name: "Blue", color: "bg-stone-300", coverArt: "CoverArt7.jpg" },
    { name: "Dành cho bạn", color: "bg-blue-600", coverArt: "CoverArt8.jpg" },
  ];

  const handleRemove = (index) => {
    const newSearches = [...recentSearches];
    newSearches.splice(index, 1);
    setRecentSearches(newSearches);
  };

  return (
    <div className="p-4 bg-gray-900 rounded">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="relative group">

            <div className="absolute top-full right-2 mt-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-2 px-10 whitespace-nowrap">
              Thông tin mới
            </div>
          </div>
         
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl text-left text-white font-bold mb-4">
          Các tìm kiếm gần đây
        </h2>
        <div className="flex space-x-8 overflow-x-auto">
          {recentSearches.map((item, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 text-center group hover:bg-gray-800 px-7 rounded-lg"
            >
              <button
                className="relative top-5 left-24 bg-gray-950 text-white rounded-full w-8 h-8 m-2"
                onClick={() => handleRemove(index)}
              >
                X
              </button>
              <div className="relative">
                <Link to="/artist">
                  <img
                    src={`../assets/img/${item.image}`}
                    alt={item.name}
                    className={`w-44 h-44 mb-2 ${
                      item.role === "Nghệ sĩ" ? "rounded-full" : "rounded-md"
                    }`}
                  />
                  <div className="absolute bottom-5 left-36 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-green-500 p-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-black"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M6.5 5.5a1 1 0 011.54-.84l7 4.5a1 1 0 010 1.68l-7 4.5A1 1 0 016.5 15.5v-9z" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="text-white">{item.name}</div>
              <div className="text-gray-400 text-sm">{item.role}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl text-left font-bold mb-4 text-white">
          Duyệt tìm tất cả
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {genres.map((genre, index) => (
            <div
              key={index}
              className={`${genre.color} text-white w-full h-48 cursor-pointer rounded-lg text-left relative p-4 overflow-hidden`}
            >
              <img
                src={`../assets/img/${genre.coverArt}`}
                alt={genre.name}
                className="absolute w-48 h-full object-cover shadow-2xl transform rotate-12 -right-8 -bottom-8"
              />
              <span className="relative text-lg font-bold">{genre.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
