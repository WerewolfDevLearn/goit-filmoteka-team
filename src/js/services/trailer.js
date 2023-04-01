import moviesAPI from './api';

const trailerPlayer = document.getElementById('trailer-player');
const modal = document.querySelector('#trailer-modal');

function getTrailerKey(videos) {
  const officialTrailer = videos.find(el => {
    return el.name.toLowerCase().includes('official trailer');
  });
  if (officialTrailer) return officialTrailer.key;
  const trailer = videos.find(el => el.name.toLowerCase().includes('trailer'));
  if (trailer) return trailer.key;
  if (videos.length) return videos[0].key;
}

function showTrailerModal(key) {
  modal.classList.remove('trailer-modal--hidden');
  console.log(trailerPlayer);
  trailerPlayer.setAttribute('src', `https://www.youtube.com/embed/${key}`);

  const closeButton = modal.querySelector('#close-modal');
  closeButton.addEventListener('click', () => {
    modal.classList.add('trailer-modal--hidden');
    trailerPlayer.setAttribute('src', '');
  });
}

document.addEventListener('click', event => {
  const isClickInsideModal = trailerPlayer.contains(event.target);

  if (!isClickInsideModal) {
    modal.classList.add('trailer-modal--hidden');
    trailerPlayer.setAttribute('src', '');
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    modal.classList.add('trailer-modal--hidden');
    trailerPlayer.setAttribute('src', '');
  }
});

async function showTrailer(movieId) {
  const { results } = await moviesAPI.getMovieTrailer(movieId);
  console.log(results);
  const key = getTrailerKey(results);
  console.log(key);
  showTrailerModal(key);
}

export { showTrailer };
