import React from 'react'
import MovieList from './Components/MovieList'
// import ErrorBoundary from './Components/ErrorBoundary'
import { Route, Routes } from 'react-router-dom';
import Search from './Components/Search';
import SearchResults from './Components/SearchResults';
import MovieDetails from './Components/MovieDetails';
import WatchMovie from "./Components/WatchMovie";
import Favorites from "./Components/Favorites";



function App() {

  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/search" element={<Search />} />
      <Route path="/results" element={<SearchResults />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/watch/:id" element={<WatchMovie />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/home" element={<MovieList />} />
    </Routes>
  );
}

export default App
