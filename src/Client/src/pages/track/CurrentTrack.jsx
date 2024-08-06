import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlayerControls from "../../components/audio/PlayerControls";
import { Song } from "../../../../Admin/src/services/song";

export default function CurrentTrack() {
  const [currentPlaying, setCurrentPlaying] = useState(null);

  const api="http://localhost:4000/uploads/1722941209720.jpg";
  useEffect(() => {
    const initData = async () => {
      const result = await Song();
      console.log(result);
      setCurrentPlaying(result);
    };

    initData();
  }, []);

  

  return (
    <Container>
      {/* {currentPlaying && ( */}
        <div className="track">
          <div className="track__image">
            <img src={`${api}`} alt="currentPlaying" />
          </div>
          <div className="track__info">
            <h4 className="track__info__track__name">{'nhi'}</h4>
            <h6 className="track__info__track__artists">
              {'artist'}
            </h6>
          </div>
        </div>
      {/* )} */}
      {/* {currentPlaying && (
        <PlayerControls audioUrl={`${api}/${currentPlaying.audio_file}`} />
      )} */}
    </Container>
  );
}

const Container = styled.div`
  .track {
    display: flex;
    align-items: center;
   
    gap: 1rem;
    &__image {
      img {
        width: 70px;
        height: 70px;
        border-radius: 5px;
      }
    }
    &__info {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      &__track__name {
        color: white;
      }
      &__track__artists {
        color: #b3b3b3;
      }
    }
  }
`;
