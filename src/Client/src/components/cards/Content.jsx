import React from "react";
import PlusIcon from "../Icons/PlusIcon";
import PlayIcon from "../Icons/PlayIcon";
import formatDate from "Admin/src/components/formatDate";

const ContentCard = ({ cover_image, title, artist_name, release_date }) => {

  const api = "http://localhost:4000/uploads";

  return (
    <div className="mt-6">
      <div className="flex items-center bg-zinc-800 p-4 rounded-lg cursor-pointer hover:bg-zinc-700 transition-colors duration-300" tabIndex={0}>
        <img src={`${api}/${cover_image}`} alt={title} className="w-[100px] h-[100px] object-cover mr-4" />
        <div className="flex flex-col justify-between">
          <div className="text-left">
            <p className="font-semibold">{title}</p>
            <p>{artist_name}</p>
            <p className="text-[13px]">{formatDate(release_date)}</p>
          </div>
          <div className="flex space-x-6 mt-2">
            <PlusIcon className="h-6 w-6 cursor-pointer hover:scale-110 transition-transform duration-200" />
            <PlayIcon className="text-white h-6 w-6 cursor-pointer hover:scale-110 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;