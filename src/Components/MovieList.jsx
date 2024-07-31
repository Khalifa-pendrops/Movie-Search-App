import React, { useState, useEffect } from "react";
import "./Movies.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching movies...");

    const fetchData = async () => {
      try {
        const popularResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=b5d5c542cf406e00c3a5afa8a711e711&language=en-US&page=1`
        );
        const topRatedResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=b5d5c542cf406e00c3a5afa8a711e711&language=en-US&page=1`
        );
        const upcomingResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=b5d5c542cf406e00c3a5afa8a711e711&language=en-US&page=1`
        );
        const nowPlayingResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=b5d5c542cf406e00c3a5afa8a711e711&language=en-US&page=1`
        );
        // const movieIdResponse = await axios.get(
        //   `https://api.themoviedb.org/3/movie/{movie_id}?api_key=b5d5c542cf406e00c3a5afa8a711e711&language=en-US&page=1`
        // );

        console.log("topRatedResponse", topRatedResponse);
        console.log("upcomingResponse", upcomingResponse);
        console.log("popularResponse", popularResponse);
        console.log("nowPlayingResponse", popularResponse);
        //   console.log("movieIdResponse", popularResponse);

        const combinedMovies = [
          ...popularResponse.data.results,
          ...topRatedResponse.data.results,
          ...upcomingResponse.data.results,
          //   ...nowPlayingResponse.data.results,
          //   ...movieIdResponse.data.results,
        ];

        setMovies(combinedMovies);
      } catch (error) {
        console.log("Error fetching movies:", error);
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <Header />
      <div className="search">
        <input
          className="search-bar"
          type="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for movies..."
        />
        <Link to="/search" className="linked-tag">
          <button>Search Movies</button>
        </Link>
        <Link to="/favorites" className="linked-tag">
          <button>View Favorites</button>
        </Link>
      </div>
      <div className="movie-row">
        {error ? <p>{error}</p> : null}
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <Link to={`/movie/${movie.id}`} className="linked-tag">
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

export default MovieList;
