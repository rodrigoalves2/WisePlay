import api from './api';

export const listPopularMovies = async (page) => {
  let data = null;
  try {
    const response = await api.get(`/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=${page}`);

    data = response.data;
  } catch (error) {
    console.log(error)
  }

  return data;
}

export const getMovieData = async (movieId) => {
  let data = null;
  try {
    const response = await api.get(`/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&append_to_response=release_dates`);

    data = response.data;
  } catch (error) {
    console.log(error)
  }

  return data;
}

export const searchMovie = async (movie, page) => {
  let data = null;
  try {
    const response = await api.get(`/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&query=${movie}&page=${page}`);

    data = response.data;
  } catch (error) {
    console.log(error);
  }

  return data;
}

export const getMovieImages = async (movieId) => {
  let data = null;
  try {
    const response = await api.get(`/movie/${movieId}/images?api_key=${process.env.REACT_APP_API_KEY}`);

    data = response.data;
  } catch (error) {
    console.log(error)
  }

  return data;
}

export const getMovieCast = async (movieId) => {
  let data = null;
  try {
    const response = await api.get(`/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`);

    data = response.data;
  } catch (error) {
    console.log(error)
  }

  return data;
}

export const getMovieVideos = async (movieId) => {
  let data = null;
  try {
    const response = await api.get(`/movie/${movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`);

    data = response.data;
  } catch (error) {
    console.log(error)
  }

  return data;
}

export const getMovieRecommendations = async (movieId) => {
  let data = null;
  try {
    const response = await api.get(`/movie/${movieId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`);

    data = response.data;
  } catch (error) {
    console.log(error)
  }

  return data;
}

export const getSimilarMovies = async (movieId) => {
  let data = null;
  try {
    const response = await api.get(`/movie/${movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`);

    data = response.data;
  } catch (error) {
    console.log(error)
  }

  return data;
}

export const listMoviesByGenre = async (page, movieGenre) => {
  let data = null;
  try {
    const response = await api.get(`/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=${page}&with_genres=${movieGenre}`);

    data = response.data;
  } catch (error) {
    console.log(error)
  }

  return data;
}
