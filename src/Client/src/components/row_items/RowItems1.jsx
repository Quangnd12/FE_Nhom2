import React from "react";
import CircleCard from "../cards/CircleCard"; // Nếu bạn có thể sử dụng một card cụ thể cho album, hãy điều chỉnh cho phù hợp
import RoundCard from "../cards/RoundCard";  // Nếu bạn có thể sử dụng một card cụ thể cho album, hãy điều chỉnh cho phù hợp
import { Link } from "react-router-dom";
import { UPLOADS_BASE_URL } from "../../config/albumConfig/albumConfig";

const RowItems1 = ({ title, data }) => {
  return (
    <div className="flex flex-col p-4">
      <div className="flex justify-between">
        <h2 className="rowItemTitle">{title}</h2>
        <span className="rowItemSubTitle">Show all</span>
      </div>
      <div className="flex justify-between">
        {data.map((item) =>
          item.artist_name === "Albums" ? (
            <Link to={`/album/${item.id}`} key={item.id}>
              <CircleCard
                image={`${UPLOADS_BASE_URL}${item.album_art}`}
                name={item.title}
                title={item.artist_name}
              />
            </Link>
          ) : (
            <Link to={`/album/${item.id}`} key={item.id}>
              <RoundCard
                image={`${UPLOADS_BASE_URL}${item.album_art}`}
                name={item.title}
                title={item.artist_name}
              />
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default RowItems1;
