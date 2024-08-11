import React from "react";
import PlaylistControls from "../../../components/album/playlist/PlaylistControls";
import PopularSongs from "../../../components/album/playlist/PopularSongs";
// import AlbumChoice from "../../../components/album/playlist/AlbumChoice";

const Playlist = () => {
  return (
    <div className="p-4 bg-zinc-800 bg-gradient-to-t rounded-b-lg mt-4 backdrop-filter">
      <PlaylistControls />
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        <PopularSongs />
        {/* <AlbumChoice /> */}
      </div>
    </div>
  );
};

export default Playlist;
