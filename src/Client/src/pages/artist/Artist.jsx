import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Để lấy ID từ URL
import ArtistCover from "../../components/artist/ArtistCover";
import ArtistInfo from "../../components/artist/ArtistInfo";
import Playlist from "./playlist/Playlist";
import { getArtists } from "../../config/apiConfig";

const Artist = () => {
  const [artist, setArtist] = useState(null);
  const { id } = useParams(); // Lấy ID từ URL

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const artistsData = await getArtists();
        const selectedArtist = artistsData.find((artist) => artist.id === parseInt(id));
        setArtist(selectedArtist);
      } catch (error) {
        console.error("Lỗi khi lấy nghệ sĩ:", error);
      }
    };

    fetchArtist();
  }, [id]);

  if (!artist) {
    return <div>Đang tải...</div>;
  }

  return (
    <div className="relative w-full h-screen">
      <ArtistCover artist={artist} />
      <ArtistInfo artist={artist} />
      <div className="relative text-left">
        <Playlist />
      </div>
    </div>
  );
};

export default Artist;
