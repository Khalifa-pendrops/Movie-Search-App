import React, { Suspense, lazy } from "react";
const MovieList = lazy(() => import("./Components/MovieList"));
// import MovieList from './Components/MovieList'
// import ErrorBoundary from './Components/ErrorBoundary'
import { Route, Routes } from "react-router-dom";
// import Search from "./Components/Search";
import SearchResults from "./Components/SearchResults";
import MovieDetails from "./Components/MovieDetails";
import WatchMovie from "./Components/WatchMovie";
import Favorites from "./Components/Favorites";

function App() {
  return (
    <Suspense fallback={<div>Loading...please wait</div>}>
      <Routes>
        <Route path="/" element={<MovieList />} />
        {/* <Route path="/search" element={<MovieDetails />} /> */}
        <Route path="/results" element={<SearchResults />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/watch/:id" element={<WatchMovie />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Suspense>
  );
}

export default App;
