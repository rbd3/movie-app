import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import MovieGenres from './components/MovieGenres';

function App() {
  return (
    <Routes>
      <Route path="/MovieGenres" element={<MovieGenres />} />
      <Route path="/" element={<MovieList />} />
      <Route path="/MovieDetails/:id" element={<MovieDetails />} />
    </Routes>
  );
}

export default App;
