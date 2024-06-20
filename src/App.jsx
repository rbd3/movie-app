import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import MovieGenres from './components/MovieGenres';
import Menu from './components/Menu';

function App() {
  return (
    <>
    <Menu />
    <Routes>
      <Route path="/MovieGenres" element={<MovieGenres />} />
      <Route path="/" element={<MovieList />} />
      <Route path="/MovieDetails/:id" element={<MovieDetails />} />
    </Routes>
    </>
  );
}

export default App;
