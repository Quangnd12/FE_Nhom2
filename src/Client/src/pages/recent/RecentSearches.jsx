import React, { useState, useEffect, useContext } from "react";
import { getArtists, getAlbums } from "../../config/apiConfig";
import LanguageContext from "../../contexts/LanguageContext";
import CircleCard from "../../components/cards/CircleCard";
import RoundCard from "../../components/cards/RoundCard";
import { UPLOADS_BASE_URL } from "../../config/apiConfig";
import { Link } from "react-router-dom";

const RecentSearches = () => {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const { translations } = useContext(LanguageContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const artistData = await getArtists();
        setArtists(artistData);

        const albumData = await getAlbums();
        setAlbums(albumData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <div className="flex flex-col mb-6">
        <h2 className="text-2xl font-bold mb-4">
          {translations.popularArtist}
        </h2>
        <div className="flex flex-wrap">
          {artists.map((artist) => (
            <div key={artist.id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
              <Link to={`/artist/${artist.id}`}>
                <CircleCard
                  image={`${UPLOADS_BASE_URL}${artist.artist_art}`}
                  name={artist.name}
                  title={artist.role}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-4">{translations.popularAlbum}</h2>
        <div className="flex flex-wrap">
          {albums.map((album) => (
            <div key={album.id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
              <Link to={`/album/${album.id}`}>
                <RoundCard
                  image={`${UPLOADS_BASE_URL}${album.album_art}`}
                  name={album.title}
                  title={album.artist_name}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentSearches;
