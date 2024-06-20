import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api_key = '285ea9c26bc7074ceb487c0231e3a252';
const baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;

const initialState = {
  movies: [],
  categories: [],
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

    const totalPages = 5; // Adjust the number of pages to fetch as needed
    let movies = [];
    for (let page = 1; page <= totalPages; page++) {
      const pageMovies = await fetchMoviesFromPage(page);
      movies = [...movies, ...pageMovies];
    }
    return movies;
  } catch (error) {
    throw new Error('Failed to fetch movies');
  }
});

export const fetchMovieDetails = createAsyncThunk('movies/fetchDetails', async (imdbID) => {
  try {
    const response = await axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=31b548ac`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movie details');
  }
});

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addReview: (state, action) => {
      const { imdbID, review } = action.payload;
      if (!state.reviews[imdbID]) {
        state.reviews[imdbID] = [];
      }
      state.reviews[imdbID].push(review);
    },
    editReview: (state, action) => {
      const { imdbID, reviewIndex, updatedReview } = action.payload;
      if (state.reviews[imdbID] && state.reviews[imdbID][reviewIndex]) {
        state.reviews[imdbID][reviewIndex] = updatedReview;
      }
    },
    deleteReview: (state, action) => {
      const { imdbID, reviewIndex } = action.payload;
      if (state.reviews[imdbID]) {
        state.reviews[imdbID].splice(reviewIndex, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;

        const genresSet = new Set();
        action.payload.forEach((movie) => {
          if (movie.genre_ids) {
            movie.genre_ids.forEach((genre) => {
              genresSet.add(genre);
            });
          }
        });
        state.categories = Array.from(genresSet);
      })
      .addCase(fetchAllMovies.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Failed to fetch movies';
      })
      .addCase(fetchMovieDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;

        const genresSet = new Set();
        action.payload.forEach((movie) => {
          if (movie.genre_ids) {
            movie.genre_ids.forEach((genre) => {
              genresSet.add(genre);
            });
          }
        });
        state.categories = Array.from(genresSet);
      })
      .addCase(fetchMovieDetails.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Failed to fetch movie details';
      });
  },
});

export const { addReview, editReview, deleteReview } = movieSlice.actions;
export default movieSlice.reducer;
