import axios from 'axios';
const apiKey = '7f0dad748ff7b4eb073bc2aebbf95174';

async function getPopMovies(page) {
  try {
    const respons = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&page=${page}&include_adult=false`
    );
    const data = await respons.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getMovieByKeyword(keyword, page) {
  try {
    const respons = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}&page=${page}&include_adult=false`
    );
    const data = await respons.data;
    return data;
  } catch (error) {
    console.log(error);
  }

  `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}&language=en-US&page=1&include_adult=false`;
}

async function getMovieDetails(movieId) {
  try {
    const respons = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
    );
    const data = await respons.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getMovieTrailer(movieId) {
  try {
    const respons = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`
    );
    const data = await respons.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}
const moviesAPI = {
  getPopMovies,
  getMovieByKeyword,
  getMovieDetails,
  getMovieTrailer,
};

export default moviesAPI;
