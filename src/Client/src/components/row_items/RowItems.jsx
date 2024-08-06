import React from "react";
import CircleCard from "../cards/CircleCard";
import RoundCard from "../cards/RoundCard";
import { Link } from "react-router-dom";
import { UPLOADS_BASE_URL } from "../../config/artistConfig/artistConfig";

const RowItems = ({ title, data }) => {
  return (
    <div className="flex flex-col p-4">
      <div className="flex justify-between">
        <h2 className="rowItemTitle">{title}</h2>
        <span className="rowItemSubTitle">Show all</span>
      </div>
      <div className="flex justify-between">
        {data.map((item) =>
          item.artist_art ? (
            <Link to={`/artist/${item.id}`} key={item.id}>
              <CircleCard
                image={`${UPLOADS_BASE_URL}${item.artist_art}`}
                name={item.name}
                title={item.role}
              />
            </Link>
          ) : (
            <Link to={`/artist/${item.id}`} key={item.id}>
              <RoundCard
                image={`${UPLOADS_BASE_URL}${item.artist_art}`}
                name={item.name}
                title={item.role}
              />
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default RowItems;
