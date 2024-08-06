import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getAllGenres, searchAll } from "../../config/apiConfig";
import SearchResults from "../../components/searchPage/SearchResults";
import TopResult from "../../components/searchPage/TopResult";
import RecentSearches from "../../components/searchPage/RecentSearches";
import BrowseGenres from "../../components/searchPage/BrowseGenres";

const SearchPage = () => {
  const [recentSearches, setRecentSearches] = useState([
    { name: "Soobin", role: "Artist", image: "soobin.jpg" },
    { name: "Taylor Swift", role: "Artist", image: "taylor.jpg" },
    { name: "Charlie Puth", role: "Artist", image: "charlie.jpg" },
    { name: "Harry Styles", role: "Song", image: "harry.jpg" },
  ]);

  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState({
    genres: [],
    artists: [],
    songs: [],
    albums: [],
    playlists: [],
  });

  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genresData = await getAllGenres();
        setGenres(genresData);
      } catch (error) {
        console.error('Lỗi khi lấy thể loại:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      performSearch(searchQuery);
    } else {
      setSearchResults({
        genres: [],
        artists: [],
        songs: [],
        albums: [],
        playlists: [],
      });
    }
  }, [searchQuery]);

  const performSearch = async (query) => {
    try {
      const response = await searchAll(query);
      setSearchResults(response);
    } catch (error) {
      console.error('Lỗi khi tìm kiếm:', error);
    }
  };

  const handleRemove = (index) => {
    const newSearches = [...recentSearches];
    newSearches.splice(index, 1);
    setRecentSearches(newSearches);
  };

  if (loading) {
    return <div>Đang tải...</div>;
  }

  return (
    <div className="p-4 min-h-screen">
      {searchQuery ? (
        <div>
          <h1 className="text-2xl font-bold mb-6 text-white">Search results for "{searchQuery}"</h1>
          <TopResult searchResults={searchResults} />
          <SearchResults searchResults={searchResults} />
        </div>
      ) : (
        <>
          <RecentSearches recentSearches={recentSearches} handleRemove={handleRemove} />
          <BrowseGenres genres={genres} />
        </>
      )}
    </div>
  );
};

export default SearchPage;
