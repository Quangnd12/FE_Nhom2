import React, { useEffect, useState } from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Song } from "../../../../Admin/src/services/song";
import PlayerControls from "../../components/audio/PlayerControls";
import './track.css';
import { Durations } from "Client/src/components/audio/duration";

export default function Body({ headerBackground }) {
  const [songs, setSongs] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState({
    title: "Playlist Name",
    description: "Playlist Description",
    image: "http://localhost:4000/uploads/1722844320307.jpg",
    tracks: []
  });
  const [trackDurations, setTrackDurations] = useState({});
  const [currentTrack, setCurrentTrack] = useState(null);

  const api = "http://localhost:4000/uploads/";

  useEffect(() => {

    initData();
  }, []);

  const initData = async () => {
    const result = await Song();
    console.log(result);
    setSongs(result);
    const durations = await Durations(result, api);
    setTrackDurations(durations);
  };

  const playTrack = (track) => {
    console.log(`Playing track: ${track.title}`);
    setCurrentTrack(track);
  };

  const msToMinutesAndSeconds = (ms) => {
    const minutes = Math.floor(ms / 60);
    const seconds = Math.floor(ms % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className={`container ${headerBackground ? "header-background" : ""}`}>
      {selectedPlaylist && (
        <>
          <div className="playlist">
            <div className="image">
              <img src={selectedPlaylist.image} alt="selected playlist" />
            </div>
            <div className="details">
              <span className="type">PLAYLIST</span>
              <h1 className="title">{selectedPlaylist.title}</h1>
              <p className="description">{selectedPlaylist.description}</p>
            </div>
          </div>
          <div className="list">
            <div className="header-row">
              <div className="col">
                <span>#</span>
              </div>
              <div className="col">
                <span>TITLE</span>
              </div>
              <div className="col">
                <span>ALBUM</span>
              </div>
              <div className="col">
                <span>
                  <AiFillClockCircle />
                </span>
              </div>
            </div>
            <div className="tracks">
              {songs.map((song, index) => (
                <div
                  className="row"
                  key={song.id}
                  onClick={() => playTrack(song)}
                >
                  <div className="col">
                    <span>{index + 1}</span>
                  </div>
                  <div className="col detail">
                    <div className="image">
                      <img src={`${api}${song.cover_image}`} alt="track" />
                    </div>
                    <div className="info">
                      <span className="name">{song.title}</span>
                      <span>{song.artist_name}</span>
                    </div>
                  </div>
                  <div className="col">
                    <Link to={'/artist'}><span>{song.album_title}</span></Link>
                  </div>
                  <div className="col">
                    <span>
                      {trackDurations[song.id]
                        ? msToMinutesAndSeconds(trackDurations[song.id])
                        : "Loading..."}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {currentTrack && (
        <PlayerControls audioUrl={`${api}${currentTrack.audio_file}`} />
      )}
    </div>
  );
}
