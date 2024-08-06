import React from "react";
import { GenreCard } from "../../components/cards/CardComponents";

const BrowseGenres = ({ genres }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-white">Browse all</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {genres.map((genre) => (
          <GenreCard key={genre.id} genre={genre} />
        ))}
      </div>
    </div>
  );
};

export default BrowseGenres;
