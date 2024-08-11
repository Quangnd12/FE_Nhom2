import React, { useContext } from "react";
import { ArtistCard, SongCard, AlbumCard, PlaylistCard, SongsByArtistCard } from "../../components/cards/CardComponents";
import LanguageContext   from "../../contexts/LanguageContext"

const TopResult = ({ searchResults }) => {
  const { artists, songs, albums, playlists, songsByArtist  } = searchResults;
  const {translations} = useContext(LanguageContext)

  // Kiểm tra `songsByArtist` trước khi dùng
  let topResult = artists[0] || songs[0] || albums[0] || playlists[0] || (songsByArtist && songsByArtist[0]);
  

  if (!topResult) return null;

  let CardComponent;
  let cardProps = {};

  if (artists[0] && topResult === artists[0]) {
    CardComponent = ArtistCard;
    cardProps = { artist: topResult };
  } else if (songs[0] && topResult === songs[0]) {
    CardComponent = SongCard;
    cardProps = { song: topResult };
  } else if (albums[0] && topResult === albums[0]) {
    CardComponent = AlbumCard;
    cardProps = { album: topResult };
  } else if (playlists[0] && topResult === playlists[0]) {
    CardComponent = PlaylistCard;
    cardProps = { playlist: topResult };
  } else if (songsByArtist && songsByArtist[0] && topResult === songsByArtist[0]) {
    CardComponent = SongsByArtistCard;
    cardProps = { songsByArtist: topResult };
  } 

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-white">{translations.TopResult}</h2>
      <div className="w-full md:w-1/2 lg:w-1/3">
        {CardComponent ? <CardComponent {...cardProps} /> : <div>No results found</div>}
      </div>
    </div>
  );
};

export default TopResult;
