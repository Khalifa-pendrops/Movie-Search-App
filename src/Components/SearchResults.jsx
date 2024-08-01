
import React from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "./Header";

function SearchResults() {
  const location = useLocation();
  const { filteredMovies } = location.state || {};

  if (!filteredMovies || filteredMovies.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <div>
      <Header />
      <div className="movie-row center">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <Link to={`/movie/${movie.id}`} className="linked-tag center2">
              <h2>{movie.title}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
              />
              <p className="about-movie">{movie.overview}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;

