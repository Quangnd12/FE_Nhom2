import React, { useContext } from "react";
import CircleCard from "../cards/CircleCard";
import RoundCard from "../cards/RoundCard";
import { Link } from "react-router-dom";
import { UPLOADS_BASE_URL } from "../../config/albumConfig/albumConfig";
import LanguageContext from "../../contexts/LanguageContext";

const RowItems1 = ({ title, data }) => {
  const { translations } = useContext(LanguageContext);
  const itemsToShow = data.slice(0, 7); // Hiển thị 7 đối tượng đầu tiên

  return (
    <div className="flex flex-col p-4">
      <div className="flex justify-between">
        <h2 className="rowItemTitle">{title}</h2>
        {data.length > 7 && (
          <Link to="/recent">
            <span className="rowItemSubTitle">{translations.showAll}</span>
          </Link>
        )}
      </div>
      <div className="flex justify-between">
        {itemsToShow.map((item) =>
          item.album_art === "Albums" ? (
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
