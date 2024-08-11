import React, { useContext } from "react";
import CircleCard from "../cards/CircleCard";
import RoundCard from "../cards/RoundCard";
import { Link } from "react-router-dom";
import { UPLOADS_BASE_URL } from "../../config/artistConfig/artistConfig";
import LanguageContext from "../../contexts/LanguageContext";


const RowItems = ({ title, data, type }) => {
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
