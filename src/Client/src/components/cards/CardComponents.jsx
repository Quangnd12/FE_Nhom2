import React from "react";
import { Link } from "react-router-dom";

const API_BASE_URL = 'http://localhost:4000';

// Card component cho Genre
export const GenreCard = ({ genre }) => (
  <Link to={`/genre/${encodeURIComponent(genre.name)}`} className="no-underline">
    <div
      key={genre.id}
      className="bg-gradient-to-r from-zinc-400 to-gray-800 text-white w-full h-48 cursor-pointer rounded-lg text-left relative p-4 overflow-hidden"
    >
      <img
        src={`${API_BASE_URL}/uploads/${genre.cover_art}`}
        alt={genre.name}
        className="absolute w-48 h-full object-cover shadow-2xl transform rotate-12 -right-8 -bottom-8"
      />
      <span className="relative text-lg font-bold">{genre.name}</span>
    </div>
  </Link>
);

// Card component cho Artist
export const ArtistCard = ({ artist }) => (
  <Link to={`/artist/${artist.id}`} className="no-underline">
    <div
      key={artist.id}
      className="bg-gradient-to-r from-zinc-400 to-gray-800 text-white w-full h-48 cursor-pointer rounded-lg text-left relative p-4 overflow-hidden"
    >
      <img
        src={`${API_BASE_URL}/uploads/${artist.image}`}
        alt={artist.name}
        className="absolute w-48 h-full object-cover shadow-2xl transform rotate-12 -right-8 -bottom-8"
      />
      <span className="relative text-lg font-bold">{artist.name}</span>
    </div>
  </Link>
);

// Card component cho Song
export const SongCard = ({ song }) => (
  <Link to={`/song/${encodeURIComponent(song.title)}`} className="no-underline">
    <div
      key={song.id}
      className="bg-gradient-to-r from-zinc-400 to-gray-800 text-white w-full h-48 cursor-pointer rounded-lg text-left relative p-4 overflow-hidden"
    >
      <img
        src={`${API_BASE_URL}/uploads/${song.image}`}
        alt={song.title}
        className="absolute w-48 h-full object-cover shadow-2xl transform rotate-12 -right-8 -bottom-8"
      />
      <span className="relative text-lg font-bold">{song.title}</span>
    </div>
  </Link>
);

// Card component cho Album
export const AlbumCard = ({ album }) => (
  <Link to={`/album/${encodeURIComponent(album.title)}`} className="no-underline">
    <div
      key={album.id}
      className="bg-gradient-to-r from-zinc-400 to-gray-800 text-white w-full h-48 cursor-pointer rounded-lg text-left relative p-4 overflow-hidden"
    >
      <img
        src={`${API_BASE_URL}/uploads/${album.cover_art}`}
        alt={album.title}
        className="absolute w-48 h-full object-cover shadow-2xl transform rotate-12 -right-8 -bottom-8"
      />
      <span className="relative text-lg font-bold">{album.title}</span>
    </div>
  </Link>
);

// Card component cho Playlist
export const PlaylistCard = ({ playlist }) => (
  <Link to={`/playlist/${encodeURIComponent(playlist.title)}`} className="no-underline">
    <div
      key={playlist.id}
      className="bg-gradient-to-r from-zinc-400 to-gray-800 text-white w-full h-48 cursor-pointer rounded-lg text-left relative p-4 overflow-hidden"
    >
      <img
        src={`${API_BASE_URL}/uploads/${playlist.cover_art}`}
        alt={playlist.title}
        className="absolute w-48 h-full object-cover shadow-2xl transform rotate-12 -right-8 -bottom-8"
      />
      <span className="relative text-lg font-bold">{playlist.title}</span>
    </div>
  </Link>
);
