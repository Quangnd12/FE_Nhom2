import React from "react";

const AlbumCover = ({ album }) => {
  // Kiểm tra album có được truyền vào không
  if (!album) {
    return null; // Hoặc bạn có thể hiển thị một placeholder hoặc hình ảnh mặc định
  }

  return (
    <img
      src={`http://localhost:4000/uploads/${album.album_art}`} // Sử dụng album.album_art từ props
      alt="Album cover"
      className="absolute top-0 contrast-50 left-0 w-full h-4/5 object-cover rounded"
      style={{
        aspectRatio: "1/1",
        imageRendering: "auto",
      }}
    />
  );
};

export default AlbumCover;
