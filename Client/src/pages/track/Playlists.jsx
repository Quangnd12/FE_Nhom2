import React, { useEffect } from "react";
import styled from "styled-components";
import { reducerCases } from "../../utils/Constants";
import { useStateProvider } from "../../utils/StateProvider";

export default function Playlists() {
  const [{ playlists }, dispatch] = useStateProvider();

  useEffect(() => {
    // Simulate fetching playlist data
    const fetchPlaylists = () => {
      // Hardcoded playlist data
      const playlists = [
        { name: "Playlist 1", id: "1" },
        { name: "Playlist 2", id: "2" },
        { name: "Playlist 3", id: "3" },
      ];
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };

    fetchPlaylists();
  }, [dispatch]);

  const changeCurrentPlaylist = (selectedPlaylistId) => {
    dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
  };

  return (
    <Container>
      <ul>
        {playlists.map(({ name, id }) => {
          return (
            <li key={id} onClick={() => changeCurrentPlaylist(id)}>
              {name}
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  color: #b3b3b3;
  height: 100%;
  overflow: hidden;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    height: 55vh;
    max-height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.7rem;
      &-thumb {
        background-color: rgba(255, 255, 255, 0.6);
      }
    }
    li {
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        color: white;
      }
    }
  }
`;
