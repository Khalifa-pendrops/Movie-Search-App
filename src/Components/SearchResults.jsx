import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import "./Movies.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const query = useQuery();
  const searchTerm = query.get("query");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=b5d5c542cf406e00c3a5afa8a711e711&language=en-US&query=${searchTerm}&page=1`
        );

        if (response.data && response.data.results) {
          setMovies(response.data.results);
        } else {
          setMovies([]);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    if (searchTerm) {
      fetchMovies();
    }
  }, [searchTerm]);

  return (
    <div>
      {error ? <p>{error}</p> : null}
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
            />
            <p>{movie.overview}</p>
            <Link to={`/movie/${movie.id}`}>View Details</Link>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default SearchResults;
