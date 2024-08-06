import React from "react";
import { GenreCard, ArtistCard, SongCard, AlbumCard, PlaylistCard } from "../../components/cards/CardComponents";

const SearchResults = ({ searchResults }) => {
  const renderSection = (title, items, CardComponent) => {
    if (items.length === 0) return null;
    return (
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-white">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {items.slice(0, 5).map((item) => (
            <CardComponent key={item.id} {...{ [title.toLowerCase().slice(0, -1)]: item }} />
          ))}
        </div>
      </div>
    );
  };

  const { genres, artists, songs, albums, playlists } = searchResults;

  return (
    <div className="space-y-8">
      {renderSection("Artists", artists, ArtistCard)}
      {renderSection("Songs", songs, SongCard)}
      {renderSection("Albums", albums, AlbumCard)}
      {renderSection("Playlists", playlists, PlaylistCard)}
      {renderSection("Genres", genres, GenreCard)}
    </div>
  );
};

export default SearchResults;
