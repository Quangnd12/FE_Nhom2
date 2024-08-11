import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAlbumsSong, UPLOADS_BASE_URL } from '../../config/apiConfig';

const AlbumInfo = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [albumSong, setArtist] = useState(null);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const albumData = await getAlbumsSong(); // Lấy tất cả dữ liệu nghệ sĩ
        const album = albumData.find((item) => item.albums_id === parseInt(id)); // Tìm nghệ sĩ theo id
        if (album) {
          setArtist(album); // Cập nhật state với nghệ sĩ phù hợp
        }
      } catch (error) {
        console.error('Error fetching artist:', error);
      }
    };

    fetchArtist();
  }, [id]); // Thay đổi khi id thay đổi

  if (!albumSong) {
    return <div>Loading...</div>;
  }

 

  return (
    <div className="relative h-3/5 z-10 p-4">
      <div className="absolute top-60 left-20">
        <span className="text-white font-semibold text-xl">
          Album
        </span>

        <div className="text-white mt-2">
          <h1 className="text-4xl font-bold">{albumSong.album_title}</h1>
          <div className="flex items-center mt-4">
            <img
              src={`${UPLOADS_BASE_URL}${albumSong.artist_art}`}
              alt={albumSong.title}
              className="w-16 h-16 rounded-full"
            />
            <div className="ml-4">
              <p className="text-lg font-semibold">{albumSong.artist_name}</p>
              <p className="text-base">{new Date(albumSong.date).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumInfo;