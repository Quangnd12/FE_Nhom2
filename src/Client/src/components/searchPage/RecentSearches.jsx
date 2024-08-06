import React from "react";
import RecentSearchCard from "../../components/cards/RecentSearchCard";

const RecentSearches = ({ recentSearches, handleRemove }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-white">Recent searches</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {recentSearches.map((item, index) => (
          <RecentSearchCard
            key={index}
            item={item}
            index={index}
            handleRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;
