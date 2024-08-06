

export const Durations = (songsList, api) => {
    const fetchDurationPromises = songsList.map((song) => 
      new Promise((resolve) => {
        const audio = new Audio(`${api}${song.audio_file}`);
        audio.addEventListener('loadedmetadata', () => {
          resolve({ id: song.id, duration: audio.duration });
        });
      })
    );
  
    return Promise.all(fetchDurationPromises).then((durations) => {
      return durations.reduce((acc, { id, duration }) => {
        acc[id] = duration;
        return acc;
      }, {});
    });
  };
  