import React from "react";
import { Link } from "react-router-dom";

const API_BASE_URL = 'http://localhost:4000'; // Địa chỉ của backend

const RecentSearchCard = ({ item, index, handleRemove }) => {
  return (
    <div
      key={index}
      className="relative flex-shrink-0 text-center group hover:bg-gray-500 px-7 rounded-lg"
    >
      <button
        className="absolute top-2 right-2 bg-gray-950 text-white rounded-full w-8 h-8 flex items-center justify-center"
        onClick={() => handleRemove(index)}
      >
        X
      </button>
      <div className="relative">
        <Link to={`/artist/${item.id}`}>
          <img
            src={item.artist_art ? `${API_BASE_URL}/uploads/${item.artist_art}` : 'default_image_url'} // Đường dẫn đến hình ảnh từ backend
            alt={item.name}
            className={`w-44 h-44 mb-2 ${item.role === "Artist" ? "rounded-full" : "rounded-md"}`}
          />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
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
      <div className="text-white mt-2">{item.name}</div> {/* Hiển thị tên */}
      <div className="text-gray-400 text-sm">{item.role}</div> {/* Hiển thị vai trò */}
    </div>
  );
};

export default RecentSearchCard;
