import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/MovieDetails/:movieId" element={<MovieDetails />} />
    </Routes>
  );
}

export default App;
