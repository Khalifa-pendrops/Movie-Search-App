import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Movies.css";
import Header from "./Header";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
      <div className="fav-main-container">
          <Header />
      <div className="d-container fav-container">
        <h1 className="fav-header">Favorite Movies</h1>
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <div key={movie.id} className="fav-details">
              <h2 className="fav-title">
                Movie Title:{" "}
                <span className="fav-title2">
                  <i>{movie.title}</i>
                </span>
              </h2>
              <Link to={`/movie/${movie.id}`} className="linked-tag tag">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>No favorite movies yet.</p>
        )}
      </div>
    </div>
  );
}

export default Favorites;
