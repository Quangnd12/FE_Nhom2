import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoundCardGenre from "../../components/cards/RoundCardGenre";
import { getAllGenres, getSongsByGenreId } from "../../config/apiConfig";

const GenrePage = () => {
  const { name } = useParams();
  const [genre, setGenre] = useState(null);
  const [songs, setSongs] = useState([]);
  
  useEffect(() => {
    const fetchGenreAndSongs = async () => {
      try {
        // Lấy tất cả thể loại từ API
        const genres = await getAllGenres();
        // Tìm thể loại được chọn dựa trên tên trong URL
        const selectedGenre = genres.find((g) => g.name === name);
        setGenre(selectedGenre);

        // Nếu tìm thấy thể loại, lấy danh sách bài hát của thể loại đó
        if (selectedGenre) {
          const songsData = await getSongsByGenreId(selectedGenre.id);
          setSongs(songsData);
        }
      } catch (error) {
        console.error("Error fetching genre and songs:", error);
      }
    };

    fetchGenreAndSongs();
  }, [name]);

  return (
    <div className=" text-white p-8">
      <h1 className="text-8xl font-bold text-white mb-4">
        {decodeURIComponent(name)}
      </h1>
      <section className="mb-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            {genre ? genre.description : "Loading..."}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {songs.map((song, index) => (
            <RoundCardGenre
              key={index}
              image={song.cover_image}  
              name={song.title}        
              title={song.artist_name}  
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default GenrePage;
