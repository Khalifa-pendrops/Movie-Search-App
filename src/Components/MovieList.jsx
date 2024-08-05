import React, { useState, useEffect } from "react";
import "./Movies.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

        const combinedMovies = [
          ...popularResponse.data.results,
          ...topRatedResponse.data.results,
          ...upcomingResponse.data.results,
          ...nowPlayingResponse.data.results,
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

  const handleSearch = () => {
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
      navigate("/results", { state: { filteredMovies } });
  };

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
        <Link to="/results" className="linked-tag">
          <button onClick={handleSearch}>Search Movies</button>
        </Link>

        <Link to="/favorites" className="linked-tag">
          <button>View Favorites</button>
        </Link>
      </div>
      <div className="movie-row">
        {error ? <p>{error}</p> : null}
        {movies.map((movie) => (
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
