import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const API_BASE_URL = 'http://localhost:4000';

// Component tổng quát cho Card
const Card = ({ to, imageSrc, altText, title, className }) => (
  <Link to={to} className="no-underline">
    <div
      className={`bg-gradient-to-r from-zinc-400 to-gray-800 text-white w-full h-48 cursor-pointer rounded-lg text-left relative p-4 overflow-hidden ${className}`}
    >
      <img
        src={imageSrc}
        alt={altText}
        loading="lazy"
        className="absolute w-48 h-full object-cover shadow-2xl transform rotate-12 -right-8 -bottom-8"
      />
      <span className="relative text-lg font-bold">{title}</span>
    </div>
  </Link>
);

Card.propTypes = {
  to: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

// Card component cho Genre
export const GenreCard = ({ genre }) => (
  <Card 
    to={`/genre/${encodeURIComponent(genre.name)}`} 
    imageSrc={`${API_BASE_URL}/uploads/${genre.cover_art}`} 
    altText={genre.name} 
    title={genre.name} 
  />
);

// Card component cho Artist
export const ArtistCard = ({ artist }) => (
  <Card 
    to={`/artist/${artist.id}`} 
    imageSrc={`${API_BASE_URL}/uploads/${artist.image}`} 
    altText={artist.name} 
    title={artist.name} 
  />
);

// Card component cho Song
export const SongCard = ({ song }) => (
  <Card 
    to={`/song/${encodeURIComponent(song.title)}`} 
    imageSrc={`${API_BASE_URL}/uploads/${song.cover_image}`} 
    altText={song.title} 
    title={song.title} 
  />
);

// Card component cho Album
export const AlbumCard = ({ album }) => (
  <Card 
    to={`/album/${encodeURIComponent(album.title)}`} 
    imageSrc={`${API_BASE_URL}/uploads/${album.album_art}`} 
    altText={album.title} 
    title={album.title} 
  />
);

// Card component cho Playlist
export const PlaylistCard = ({ playlist }) => (
  <Card 
    to={`/playlist/${encodeURIComponent(playlist.title)}`} 
    imageSrc={`${API_BASE_URL}/uploads/${playlist.cover_art}`} 
    altText={playlist.title} 
    title={playlist.title} 
  />
);

// Card component cho SongsByArtist
export const SongsByArtistCard = ({ song }) => (
  <Card 
    to={`/song/${encodeURIComponent(song.title)}`} 
    imageSrc={`${API_BASE_URL}/uploads/${song.cover_image}`} 
    altText={song.title} 
    title={song.title} 
    className="h-24 p-2"
  />
);
