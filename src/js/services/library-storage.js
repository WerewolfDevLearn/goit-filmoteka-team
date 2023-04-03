import { getData, sendData, updateData } from './firebaseDatabase';
import { STATE } from '../components/state.js';
// function of adding new movie to localStorage
async function addMovieToLocalStorage(keyLibrary, movieId) {
  const movieList = [];
  try {
    // checking for values
    const isEmpty = await getData(keyLibrary);
    console.log(isEmpty);
    console.log(`isEmpty after begin: ${isEmpty}`);
    // if the array is empty - write down the first key and the array
    if (isEmpty !== '') {
      // if there is any data - we check whether the array contains such a value
      if (isEmpty.includes(movieId)) {
        return;
      }
      const moviesFromDb = await getData(keyLibrary);
      moviesFromDb.push(movieId);
      localStorage.setItem(`${keyLibrary}`, JSON.stringify(moviesFromDb));
      await updateData(keyLibrary, moviesFromDb);
      // setState()
      return;
    }
    // if there is no movie, we add movie

    movieList.push(movieId);
    await updateData(keyLibrary, movieList);
    // setState()
    console.log(STATE.user.movies);
    localStorage.setItem(`${keyLibrary}`, JSON.stringify(movieList));
  } catch (error) {
    console.log(error);
  }
}
// function of deleting the movie from the localStorage
async function removeMovieFromLocalStorage(keyLibrary, movieId) {
  try {
    const arrMovieId = await getData(keyLibrary);
    // looking for the index of the element to delete
    const index = arrMovieId.indexOf(movieId);
    // remove an element from the array
    if (index !== -1) {
      arrMovieId.splice(index, 1);
      // updated array in LocalStorage
      await updateData(keyLibrary, arrMovieId);
      localStorage.setItem(`${keyLibrary}`, JSON.stringify(arrMovieId));
    }
  } catch (error) {
    console.log(error);
  }
}

function setState(obj) {
  STATE.user.movies.push(obj);
}

export { addMovieToLocalStorage, removeMovieFromLocalStorage };
