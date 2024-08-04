import React from "react";
import CircleCard from "../cards/CircleCard";
import RoundCard from "../cards/RoundCard";
import { Link } from "react-router-dom";

const RowItems = ({ title, data, type }) => {
  return (
    <div className="flex flex-col p-4">
      <div className="flex justify-between">
        <h2 className="rowItemTitle">{title}</h2>
        <span className="rowItemSubTitle">Show all</span>
      </div>
      <Link to={"/artist"}>
        <div className="grid grid-cols-6">
          {data.map(item =>
            type === "Artist" ? (
              <CircleCard
                key={item.id}
                image={item.image}
                name={item.name ?? item.title}
                title={item.title}
              />
            ) : (
              <RoundCard
                key={item.id}
                image={item.image}
                name={item.name}
                title={item.title}
              />
            ),
          )}
        </div>
      </Link>
    </div>
  );
};

export default RowItems;
