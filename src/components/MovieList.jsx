import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMovies, searchMovies } from '../redux/movieSlice';
import { MoviesListContainer, FilterContainer, SearchContainer } from '../assets/Movies.styles';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const MoviesList = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, error } = useSelector((state) => state.movies);
  const navigate = useNavigate();
  const [sortCriteria, setSortCriteria] = useState('rating');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  const handleMovieDetails = (movieId) => {
    navigate(`/MovieDetails/${movieId}`);
  };

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim() !== '') {
      dispatch(searchMovies(searchQuery));
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  const sortMovies = (movies) => {
    switch (sortCriteria) {
      case 'rating':
        return [...movies].sort((a, b) => b.vote_average - a.vote_average);
      case 'release_date':
        return [...movies].sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
      case 'popularity':
        return [...movies].sort((a, b) => b.popularity - a.popularity);
      default:
        return movies;
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const sortedMovies = sortMovies(movies);

  return (
    <MoviesListContainer>
      <FilterContainer>
        <span>Sort By</span>
        <select onChange={handleSortChange}>
          <option value="rating">Rating</option>
          <option value="release_date">Release Date</option>
          <option value="popularity">Popularity</option>
        </select>
        <SearchContainer>
          <input 
            type="text" 
            value={searchQuery} 
            onChange={handleSearchChange} 
            onKeyDown={handleKeyDown} 
            placeholder="Search movies..."
          />
          <button onClick={handleSearchSubmit}>Search</button>
        </SearchContainer>
      </FilterContainer>
      <div className="movies-list">
        <div className="movies-container">
          {sortedMovies.map((movie) => (
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
              <p className="movie-attribute">
                {sortCriteria === 'rating' && `Rating: ${movie.vote_average}`}
                {sortCriteria === 'release_date' && `Release Date: ${movie.release_date}`}
                {sortCriteria === 'popularity' && `Popularity: ${movie.popularity}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MoviesListContainer>
  );
};

export default MoviesList;
