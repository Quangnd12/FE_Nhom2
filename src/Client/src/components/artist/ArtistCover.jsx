import React from "react";

const ArtistCover = ({ artist }) => {
  return (
    <img
      src={`http://localhost:4000/uploads/${artist.artist_art}`} // Sử dụng đường dẫn từ props
      alt="Artist Cover"
      className="absolute top-0 contrast-50 left-0 w-full h-4/5 object-cover rounded"
      style={{
        aspectRatio: "1/1",
        imageRendering: "auto",
      }}
    />
  );
};

export default ArtistCover;
