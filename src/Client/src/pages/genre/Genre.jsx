import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import RoundCard from "../../components/cards/RoundCard";
import { getAllGenres } from "../../config/apiConfig";

const GenrePage = () => {
  const { name } = useParams();
  const [genre, setGenre] = useState(null);
  const popularPlaylists = [
    {
      image: "https://i.scdn.co/image/ab67706f00000002b966122b90d6f60e851d4ab6",
      name: "Thiên Hạ Nghe Gì",
      title: "Những gì người bên cạnh...",
    },
    {
      image: "https://i.scdn.co/image/ab67706f0000000221035bcca2f01d52c4cb6f02",
      name: "V-Pop Không Thể Thiếu",
      title: "Những hit V-Pop hay nhất",
    },
    {
      image: "https://i.scdn.co/image/ab67706f000000026491752c52f5112b02c8ec34",
      name: "Cà Phê Quán Quen",
      title: "Quán vắng, một mình, ca...",
    },
    {
      image: "https://i.scdn.co/image/ab67706f000000022b8e5b6102866e4357e133e0",
      name: "Anh Hào Nhạc Việt",
      title: "Những nam thần của làng...",
    },
  ];

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const genres = await getAllGenres();
        const selectedGenre = genres.find((g) => g.name === name);
        setGenre(selectedGenre);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
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
          <Link
            to="/show-all"
            className="text-sm text-gray-400 hover:underline"
          >
            Show all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularPlaylists.map((playlist, index) => (
            <RoundCard
              key={index}
              image={playlist.image}
              name={playlist.name}
              title={playlist.title}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default GenrePage;
