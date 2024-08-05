import React, { useRef, useState, useEffect } from 'react';
import { Box, Flex, Icon, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text, useColorModeValue } from '@chakra-ui/react';
import { MdPlayArrow, MdPause } from 'react-icons/md';

const AudioPlayer = ({ audioUrl }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioUrl) {
      audioElement.src = audioUrl;
      audioElement.play().then(() => setIsPlaying(true)).catch((error) => {
        console.error('Error playing audio:', error);
      });

      audioElement.addEventListener('loadedmetadata', () => {
        setDuration(audioElement.duration);
      });

      audioElement.addEventListener('timeupdate', () => {
        setCurrentTime(audioElement.currentTime);
      });

      return () => {
        audioElement.pause();
        audioElement.src = "";
      };
    } else {
      audioElement.pause();
    }
  }, [audioUrl]);

  const handlePlayPause = () => {
    const audioElement = audioRef.current;
    if (isPlaying) {
      audioElement.pause();
      setIsPlaying(false);
    } else {
      audioElement.play().then(() => setIsPlaying(true)).catch((error) => {
        console.error('Error playing audio:', error);
      });
    }
  };

  const handleSliderChange = (value) => {
    const audioElement = audioRef.current;
    audioElement.currentTime = value;
    setCurrentTime(value);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <Box
      position="fixed"
      bottom={0}
      right={0}
      width="80%"
      p={4}
      boxShadow='0px 40px 58px -20px rgba(112, 144, 176, 0.26)'
      borderRadius="md"
      bg={useColorModeValue('gray.100', 'gray.700')}
    >
      <audio ref={audioRef} src={audioUrl} />
      <Flex alignItems="center" justifyContent="space-between">
        <Icon
          as={isPlaying ? MdPause : MdPlayArrow}
          width="24px"
          height="24px"
          cursor="pointer"
          onClick={handlePlayPause}
        />
        <Slider
          aria-label="audio-progress"
          value={currentTime}
          min={0}
          max={duration}
          onChange={handleSliderChange}
          mx={4}
          flex="1"
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Text>{formatTime(currentTime)} / {formatTime(duration)}</Text>
      </Flex>
    </Box>
  );
};

export default AudioPlayer;
