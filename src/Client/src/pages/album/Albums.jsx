import React from "react";
import AlbumCover from "../../components/album/AlbumCover";
import AlbumInfo from "../../components/album/AlbumInfo";
import Playlist from "./playlist/Playlist";

const Album = () => {
  return (
    <div className="relative w-full h-screen">
      <AlbumCover />
      <AlbumInfo />
      <div className="relative text-left">
        <Playlist />
      </div>
    </div>
  );
};

export default Album;
