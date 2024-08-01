import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./Movies.css";
import { Link } from "react-router-dom";
import Header from "./Header";

function MovieDetails() {
  const { id } = useParams();
    const [movie, setMovie] = useState(null);
     const [trailer, setTrailer] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=b5d5c542cf406e00c3a5afa8a711e711&language=en-US`
        );
        setMovie(response.data);
      } catch (error) {
        setError(error.message);
      }
      };
      
          const fetchTrailer = async () => {
            try {
              const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}/videos?api_key=b5d5c542cf406e00c3a5afa8a711e711&language=en-US`
              );
              const trailerData = response.data.results.find(
                (video) => video.type === "Trailer" && video.site === "YouTube"
              );
              setTrailer(trailerData);
            } catch (error) {
              setError(error.message);
            }
          };

      fetchMovieDetails();
      fetchTrailer();
  }, [id]);
    

  
    
    const handleWatch = () => {
            if (trailer) {
              window.open(
                `https://www.youtube.com/watch?v=${trailer.key}`,
                "_blank"
              );
            } else {
              alert("Trailer not available");
            }
        // navigate(`/watch/${id}`);
    };

    const handleDownload = () => {
        alert("Sorry, this functionality is not available. No vex!")
        // navigate(`/download/${id}, "_blank`);
    };

    const handleAddToFavorites = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        if (!favorites.find((fav) => fav.id === movie.id)) {
            favorites.push(movie);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            alert("Movie added to favorites!");
        } else {
            alert("Movie is already in your favorites!");
        }
    };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
      <div>
          <Header />
      <div className="d-container smaller-screen">
        <div className="m-details">
          <h1>{movie.title}</h1>
          <img className="detail-vid"
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
          />
          <p>{movie.overview}</p>
        </div>
        <div className="btns">
          <button onClick={handleWatch}>Watch</button>
          <button onClick={handleDownload}>Download</button>
          <button onClick={handleAddToFavorites}>Add to Favorites</button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
