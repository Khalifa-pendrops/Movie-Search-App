// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import "./Movies.css";
// import { Link } from "react-router-dom";

// function WatchMovie() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/movie/${id}?api_key=b5d5c542cf406e00c3a5afa8a711e711&language=en-US`
//         );
//         setMovie(response.data);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchMovieDetails();
//   }, [id]);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="d-container">
//       <div className="nav-items">
//         <Link to="/" className="linked-tag">
//           <h1 className="header-text">
//             Khali<span className="logo-colored">Fa</span>
//           </h1>
//         </Link>
//         <h4 className="welcome-text">Welcome to my Movie Search Web App!</h4>
//       </div>
//       <h1 className="watch-header">Watching {movie.title}</h1>
//       {/* Embed a hypothetical video player */}
//       <video controls autoPlay loop muted poster={movie.backdrop_path}>
//         <source
//           src={`https://api.themoviedb.org/3/movie/${id}/watch?api_key=b5d5c542cf406e00c3a5afa8a711e711`}
//           type="video/mp4"
//         />
//         <source
//           src={`https://api.themoviedb.org/3/movie/${id}/watch?api_key=b5d5c542cf406e00c3a5afa8a711e711`}
//           type="video/webm"
//         />
//         <source
//           src={`https://api.themoviedb.org/3/movie/${id}/watch?api_key=b5d5c542cf406e00c3a5afa8a711e711`}
//           type="video/ogg"
//         />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// }

// export default WatchMovie;
