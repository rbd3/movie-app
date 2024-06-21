import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api_key = '285ea9c26bc7074ceb487c0231e3a252';
const baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;
const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}`;
const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`;

const initialState = {
  movies: [],
  genres: [],
  isLoading: true,
  error: '',
  reviews: {},
};

export const fetchAllMovies = createAsyncThunk('movies/fetchAll', async () => {
  try {
    const fetchMoviesFromPage = async (page) => {
      const response = await axios.get(`${baseUrl}&page=${page}`);
      return response.data.results;
    };

    const fetchGenres = async () => {
      const response = await axios.get(genresUrl);
      return response.data.genres;
    };

    const totalPages = 5;
    let movies = [];
    for (let page = 1; page <= totalPages; page++) {
      const pageMovies = await fetchMoviesFromPage(page);
      movies = [...movies, ...pageMovies];
    }

    const genres = await fetchGenres();
    return { movies, genres };
  } catch (error) {
    throw new Error('Failed to fetch movies');
  }
});

export const searchMovies = createAsyncThunk('movies/search', async (query) => {
  try {
    const response = await axios.get(`${searchUrl}&query=${query}`);
    return response.data.results;
  } catch (error) {
    throw new Error('Failed to search movies');
  }
});

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload.movies;

        const genresSet = new Set();
        action.payload.movies.forEach((movie) => {
          if (movie.genre_ids) {
            movie.genre_ids.forEach((genre) => {
              genresSet.add(genre);
            });
          }
        });
        state.genres = Array.from(genresSet);
      })
      .addCase(fetchAllMovies.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Failed to fetch movies';
      })
      .addCase(searchMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
      })
      .addCase(searchMovies.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Failed to search movies';
      });
  },
});

export const { addReview, editReview, deleteReview } = movieSlice.actions;

export default movieSlice.reducer;
