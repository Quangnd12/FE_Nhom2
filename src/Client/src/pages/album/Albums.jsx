import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Để lấy ID từ URL
import AlbumCover from "../../components/album/AlbumCover";
import AlbumInfo from "../../components/album/AlbumInfo";
import Playlist from "./playlist/Playlist";
import { getAlbums } from "../../config/apiConfig";

const Album = () => {
  const [album, setAlbum] = useState(null);
  const { id } = useParams(); // Lấy ID từ URL

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const albumsData = await getAlbums();
        const selectedAlbum = albumsData.find((album) => album.id === parseInt(id, 10));
        setAlbum(selectedAlbum);
      } catch (error) {
        console.error("Lỗi khi lấy album:", error);
      }
    };

    fetchAlbum();
  }, [id]);

  if (!album) {
    return <div>Đang tải...</div>;
  }

  return (
    <div className="relative w-full h-screen">
      <AlbumCover album={album} />
      <AlbumInfo album={album} />
      <div className="relative text-left">
        <Playlist />
      </div>
    </div>
  );
};

export default Album;
