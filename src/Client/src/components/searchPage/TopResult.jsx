import React from "react";
import { ArtistCard, SongCard, AlbumCard, PlaylistCard } from "../../components/cards/CardComponents";

const TopResult = ({ searchResults }) => {
  const { artists, songs, albums, playlists } = searchResults;
  let topResult = artists[0] || songs[0] || albums[0] || playlists[0];
  
  if (!topResult) return null;

  let CardComponent;
  if (artists[0]) CardComponent = ArtistCard;
  else if (songs[0]) CardComponent = SongCard;
  else if (albums[0]) CardComponent = AlbumCard;
  else CardComponent = PlaylistCard;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-white">Top result</h2>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <CardComponent {...{ [CardComponent.name.toLowerCase().replace('card', '')]: topResult }} />
      </div>
    </div>
  );
};

export default TopResult;
