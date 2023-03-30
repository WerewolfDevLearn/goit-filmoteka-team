import posterPH from '../../images/logo.svg';

const imagePath = 'https://image.tmdb.org/t/p/w500';
const defaultPath = posterPH;
// 'https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-768x768.png';

export default function getPosterPath(urlPart) {
  if (urlPart) {
    let posterPath = `${imagePath}${urlPart}`;
    return posterPath;
  }
  let posterPath = defaultPath;
  return posterPath;
}
