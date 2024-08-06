import request from "Admin/src/config/apiConfig";

// Lấy danh sách các album_song
const AlbumSong = async () => {
  const res = await request({
    method: "GET",
    path: "/api/albums_song",
  });
  return res;
};

// Lấy album_song theo ID
const getAlbumSongById = async (id) => {
  const res = await request({
    method: "GET",
    path: `/api/albums_song/${id}`,
  });
  return res;
};

// Thêm một album_song mới
const addAlbumSong = async (album_song) => {
  const res = await request({
    method: "POST",
    path: "/api/albums_song",
    data: album_song,
  });
  return res;
};

// Xóa album_song theo ID
const deleteAlbumSong = async (id) => {
  const res = await request({
    method: "DELETE",
    path: `/api/albums_song/${id}`,
  });
  return res;
};

// Cập nhật album_song theo ID
const updateAlbumSong = async (id, album_song) => {
  const res = await request({
    method: "PUT",
    path: `/api/albums_song/${id}`,
    data: album_song,
  });
  return res;
};

export { AlbumSong, getAlbumSongById, addAlbumSong, deleteAlbumSong, updateAlbumSong };
