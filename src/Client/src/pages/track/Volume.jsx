import React from 'react';
import styled from 'styled-components';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const Volume = ({ volume, onVolumeChange }) => {
  const handleVolumeChange = (e) => {
    onVolumeChange(e);
  };

  return (
    <VolumeContainer>
      {volume === 0 ? (
        <FaVolumeMute className="icon" />
      ) : (
        <FaVolumeUp className="icon" />
      )}
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="volume-slider"
      />
    </VolumeContainer>
  );
};

const VolumeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .icon {
    color: white;
    font-size: 1.5rem;
  }

  .volume-slider {
    width: 100px;
    cursor: pointer;
    appearance: none;
    background: #535353;
    height: 4px;
    border-radius: 2px;

    &::-webkit-slider-thumb {
      appearance: none;
      background: #1db954;
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }

    &::-moz-range-thumb {
      background: #1db954;
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }
  }
`;

export default Volume;
