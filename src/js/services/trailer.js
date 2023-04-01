import moviesAPI from './api';

const trailerPlayer = document.getElementById('trailer-player');
const modal = document.querySelector('#trailer-modal');

// Finds trailer in the list of movies and returns video key
function getTrailerKey(videos) {
  const officialTrailer = videos.find(el => {
    return el.name.toLowerCase().includes('official trailer');
  });
  if (officialTrailer) return officialTrailer.key;
  const trailer = videos.find(el => el.name.toLowerCase().includes('trailer'));
  if (trailer) return trailer.key;
  if (videos.length) return videos[0].key;
  throw new Error('Oops! Trailer not found.');
}

// Shows trailer modal by video key
function showTrailerModal(key) {
  modal.classList.remove('trailer-modal--hidden');
  trailerPlayer.setAttribute(
    'src',
    `https://www.youtube.com/embed/${key}?showinfo=0&enablejsapi=1&modestbranding=1`
  );
}
// Close trailer modal
function closeTrailerModal() {
  modal.classList.add('trailer-modal--hidden');
  trailerPlayer.setAttribute('src', '');
  document.removeEventListener('keydown', closeTrailerModalOnEsc);
  document.removeEventListener('click', closeTrailerModalOnOutsideClick);
}

// Event handler for close modal when clicked on backdrop
function closeTrailerModalOnOutsideClick(event) {
  const isClickInsideModal = trailerPlayer.contains(event.target);

  if (!isClickInsideModal) {
    closeTrailerModal();
  }
}

// Event handler for close modal when esc button pressed
function closeTrailerModalOnEsc(event) {
  if (event.key === 'Escape') {
    event.stopImmediatePropagation();
    closeTrailerModal();
  }
}

// Main function to open trailer modal
async function showTrailer(movieId) {
  try {
    const { results } = await moviesAPI.getRelatedVideos(movieId);
    const key = getTrailerKey(results);
    showTrailerModal(key);
    document.addEventListener('keydown', closeTrailerModalOnEsc);
    document.addEventListener('click', closeTrailerModalOnOutsideClick);
  } catch (error) {
    console.error(error); // TODO change conole log to error nofitication
  }
}

export { showTrailer };
