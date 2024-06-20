import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMovies } from '../redux/movieSlice';
import { MoviesListContainer } from '../assets/ Movies.styles';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const MoviesList = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, error } = useSelector((state) => state.movies);
  const navigate = useNavigate();

  const handleMovieDetails = (movieId) => {
    navigate(`/MovieDetails/${movieId}`);
  };

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <MoviesListContainer>
      <div className="movies-list">
        <div className="movies-container">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-item">
              <button
                type="button"
                onClick={() => handleMovieDetails(movie.id)}
                aria-label="View more info"
                className="details-btn"
              >
                <BsArrowRightCircle />
              </button>
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-image"
                />
              )}

                <h2 className="movie-name">{movie.title}</h2>
                <p className="movie-rating">{movie.vote_average}</p>
              
            </div>
          ))}
        </div>
      </div>
    </MoviesListContainer>
  );
};

export default MoviesList;
