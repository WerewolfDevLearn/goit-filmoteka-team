function getGenres(arr) {
  const arrOfGenres = arr.map(item => item.name);
  const genreString = arrOfGenres.join(' ');
  return genreString;
}

export default getGenres;
