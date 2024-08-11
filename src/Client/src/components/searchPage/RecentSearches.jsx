import React, { useContext } from "react";
import RecentSearchCard from "../../components/cards/RecentSearchCard";
import LanguageContext from "../../contexts/LanguageContext";

const RecentSearches = ({ recentSearches, handleRemove }) => {
  const { translations } = useContext(LanguageContext);
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-white">
        {translations.SearchRecent}
      </h2>
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
