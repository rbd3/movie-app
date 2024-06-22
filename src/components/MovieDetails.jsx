import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchAllMovies } from '../redux/movieSlice';
import {
  MovieDetailsContainer,
  BackButton,
  DetailsContainer,
  Headings,
  NameDetails,
  Rating,
  MovieMain,
  MoviePoster,
  SummarySection,
  Summary,
  Season,
  Type,
} from '../assets/MovieDetails.styles';

function MovieDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movies, genres, isLoading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  // Handle loading state
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  const movie = movies.find((movie) => movie.id.toString() === id);

  if (!movie) {
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

  console.log('Mapped movieGenres:', movieGenres);

  return (
    <MovieDetailsContainer>
      <Link to="/">
        <BackButton>
          <i className="fa-solid fa-arrow-left" />
          Back
        </BackButton>
      </Link>
      <DetailsContainer>
        <Headings>
          <NameDetails>{title}</NameDetails>
          <Rating>
            <h3>Rating: {vote_average}</h3>
          </Rating>
        </Headings>
        <MovieMain>
          <MoviePoster src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
          <SummarySection>
            <Summary>{overview}</Summary>
            <Season>Language: {original_language}</Season>
            <Type>Release Date: {release_date}</Type>
        
          </SummarySection>
        </MovieMain>
      </DetailsContainer>
    </MovieDetailsContainer>
  );
}

export default MovieDetails;
