import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GenreCard } from "../../components/cards/CardComponents";
import LanguageContext from "../../contexts/LanguageContext";

const BrowseGenres = ({ genres }) => {
  const { translations } = useContext(LanguageContext);
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-white">
        {translations.Browse}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {genres.map((genre) => (
          <Link key={genre.id} to={`/genre/${genre.name}`}>
            <GenreCard genre={genre} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrowseGenres;
