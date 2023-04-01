// function of adding new movie to localStorage
function addMovieToLocalStorage(keyLibrary, movieId) {
  const movieList = [];

  try {
    // checking for values
    const isEmpty = localStorage.getItem(`${keyLibrary}`);
    // if the array is empty - write down the first key and the array
    if (!isEmpty) {
      movieList.push(movieId);
      localStorage.setItem(`${keyLibrary}`, JSON.stringify(movieList));
      return;
    }
    // if there is any data - we check whether the array contains such a value
    if (isEmpty.includes(movieId)) {
      return;
    }
    // if there is no movie, we add movie
    const arrMovieId = JSON.parse(localStorage.getItem(`${keyLibrary}`));
    arrMovieId.push(movieId);
    localStorage.setItem(`${keyLibrary}`, JSON.stringify(arrMovieId));
  } catch (error) {
    console.log(error);
  }
}

// function of deleting the movie from the localStorage
function removeMovieFromLocalStorage(keyLibrary, movieId) {
  try {
    const arrMovieId = JSON.parse(localStorage.getItem(`${keyLibrary}`));
    // looking for the index of the element to delete
    const index = arrMovieId.indexOf(movieId);
    // remove an element from the array
    if (index !== -1) {
      arrMovieId.splice(index, 1);
      // updated array in LocalStorage
      localStorage.setItem(`${keyLibrary}`, JSON.stringify(arrMovieId));
    }
  } catch (error) {
    console.log(error);
  }
}

export { addMovieToLocalStorage, removeMovieFromLocalStorage };
