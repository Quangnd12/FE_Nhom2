import React, { useState, useEffect } from 'react';
import ContentCard from '../../components/cards/Content';
import { SongNew } from "../../../../Admin/src/services/song"

const Content = () => {
  const [songNews, setSongnews] = useState([]);

  useEffect(() => {
    InitData();
  }, [])

  const InitData = async () => {
    try {
      const result = await SongNew();
      setSongnews(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-zinc-800 text-white p-8">
      <div className="flex flex-col items-start justify-between">
        <h1 className="text-2xl font-bold mb-2">What's New</h1>
        <p className="text-gray-400 mb-4">The latest releases from artists, podcasts, and shows you follow.</p>
      </div>

      <div className="flex gap-4 mt-4">
        <button className="bg-gray-800 border border-white text-white px-4 py-2 rounded-full">Music</button>
        <button className="bg-gray-800 border border-white text-white px-4 py-2 rounded-full">Podcasts & Shows</button>
      </div>

      {songNews.map((item, index) => (
        <ContentCard key={index} {...item} />
      ))}
  

    </div>


  );
};

export default Content;