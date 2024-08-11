import React, { useState, useEffect, useCallback, useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { searchAll } from '../../config/apiConfig';
import LanguageContext from "../../contexts/LanguageContext";

const SearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { translations } = useContext(LanguageContext);
  const history = useHistory();

  const performSearch = useCallback(async () => {
    try {
      const results = await searchAll(searchTerm);
      setSearchResults(results);
    } catch (error) {
      console.error('Error performing search:', error);
    }
  }, [searchTerm]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        performSearch();
      } else {
        setSearchResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, performSearch]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      history.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className={`flex items-center w-64 rounded-full p-2 transition-colors duration-300 border ${
          isFocused ? 'border-gray-700 bg-gray-900 text-white' : 'border-gray-300 bg-white text-gray-700'
        }`}
      >
        <FaSearch className="mr-2" />
        <input
          type="text"
          placeholder={translations.search}
          className={`flex-grow bg-transparent focus:outline-none ${
            isFocused ? 'text-white' : 'text-gray-700'
          }`}
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </form>
      {isFocused && searchTerm && searchResults.length > 0 && (
        <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg p-4">
          {Object.keys(searchResults).map((category) => (
            <div key={category}>
              {searchResults[category].length > 0 && (
                <>
                  <h4 className="text-gray-600 font-semibold mb-2">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h4>
                  <ul>
                    {searchResults[category].map((result) => (
                      <li key={result.id} className="flex items-center mb-2">
                        <img src={result.image} alt={result.name} className="w-8 h-8 rounded-full mr-2" />
                        <span>{result.name}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
