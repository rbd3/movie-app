import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllMovies } from '../redux/movieSlice';

function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movies, isLoading, error } = useSelector((state) => state.movies);
  const genres = useSelector((state) => state.movies.genres); // Access genres from state

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  // Handle loading state
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  // Handle error state
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  // Find the movie by id
  const movie = movies.find((movie) => movie.id.toString() === id);

  // Handle case where movie is not found
  if (!movie) {
    console.log(`Movie with id ${id} not found in movies array:`, movies);
    return <h2>Movie not found</h2>;
  }

  // Destructure movie object for easier access
  const {
    title,
    vote_average,
    overview,
    poster_path,
    original_language,
    release_date,
    genre_ids,
  } = movie;

  // Map genre_ids to actual genre names using genres fetched
  const movieGenres = genre_ids.map((genre_id) =>
    genres.find((genre) => genre.id === genre_id)?.name
  );

  console.log('Mapped movieGenres:', movieGenres); // Log mapped movieGenres

  return (
    <div className="movie-details">
      <h1>{title}</h1>
      <p>Rating: {vote_average}</p>
      <p>Overview: {overview}</p>
      <p>Language: {original_language}</p>
      <p>Release Date: {release_date}</p>
      <p>Genres: {movieGenres.join(', ')}</p>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
    </div>
  );
}

export default MovieDetails;
