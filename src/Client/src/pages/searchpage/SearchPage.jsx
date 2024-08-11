import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { getAllGenres, searchAll, getArtists } from "../../config/apiConfig";
import SearchResults from "../../components/searchPage/SearchResults";
import TopResult from "../../components/searchPage/TopResult";
import RecentSearches from "../../components/searchPage/RecentSearches";
import BrowseGenres from "../../components/searchPage/BrowseGenres";
import LanguageContext from "../../contexts/LanguageContext";

const SearchPage = () => {
  const [recentSearches, setRecentSearches] = useState([]);
  const [genres, setGenres] = useState([]);
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState({
    genres: [],
    artists: [],
    songs: [],
    albums: [],
    playlists: [],
    songsByArtist: [],
  });
  const { translations } = useContext(LanguageContext);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genresData = await getAllGenres();
        setGenres(genresData);
      } catch (error) {
        console.error("Lỗi khi lấy thể loại:", error);
      }
    };

    const fetchArtists = async () => {
      try {
        const artistsData = await getArtists();
        setArtists(artistsData);
      } catch (error) {
        console.error("Lỗi khi lấy nghệ sĩ:", error);
      }
    };

    fetchGenres();
    fetchArtists();

    // Load recent searches from localStorage
    const storedSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(storedSearches);
    setLoading(false);
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
        songsByArtist: [],
      });
    }
  }, [searchQuery]);

  const performSearch = async (query) => {
    try {
      const response = await searchAll(query);
      setSearchResults(response);
      
      // Lưu tìm kiếm vào localStorage
      const artist = artists.find(artist => artist.name.toLowerCase() === query.toLowerCase());
      const newSearch = {
        name: query,
        role: artist ? artist.role : "Unknown",
        artist_art: artist ? artist.artist_art : "default.jpg", // Lấy hình ảnh từ API hoặc hình ảnh mặc định
      };
  
      // Cập nhật danh sách tìm kiếm gần đây
      const updatedSearches = [newSearch, ...recentSearches];
      setRecentSearches(updatedSearches);
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
    } catch (error) {
      console.error("Lỗi khi tìm kiếm:", error);
    }
  };

  const handleRemove = (index) => {
    const newSearches = [...recentSearches];
    newSearches.splice(index, 1);
    setRecentSearches(newSearches);
    localStorage.setItem("recentSearches", JSON.stringify(newSearches));
  };

  if (loading) {
    return <div>Đang tải...</div>;
  }

  return (
    <div className="p-4 min-h-screen">
      {searchQuery ? (
        <div>
          <h1 className="text-2xl font-bold mb-6 text-white">{translations.SearchQuery} "{searchQuery}"</h1>
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
