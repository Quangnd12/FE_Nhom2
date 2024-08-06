import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { API_BASE_URL, UPLOADS_BASE_URL } from '../../../src/config/albumConfig/albumConfig'; // Đảm bảo đường dẫn là chính xác

const AlbumInfo = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/albums/${id}`);
        setAlbum(response.data);
      } catch (error) {
        console.error('Error fetching album:', error);
      }
    };

    fetchAlbum();
  }, [id]);

  if (!album) return <div>Loading...</div>;

  return (
    <div className="relative h-3/5 z-10 p-4">
      <div className="absolute top-36 left-4 flex items-center space-x-2">
      <span className="relative top-20 left-5 text-white font-semibold">
          Album
        </span>
        
        <div className="absolute top-28 left-3 text-white">
          <h1 className="text-8xl font-bold whitespace-nowrap">{album.title}</h1>
          <div className="flex items-center mt-2">
            <img
              src={`${UPLOADS_BASE_URL}${album.album_art}`} // Đảm bảo trường đúng tên và đường dẫn hình ảnh hợp lệ
              alt={album.artist_name}
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <p className="text-lg font-semibold">{album.title}</p>
              <p className="text-sm">{new Date(album.release_date).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumInfo;
