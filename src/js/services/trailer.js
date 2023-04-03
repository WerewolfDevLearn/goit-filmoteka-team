import YouTubePlayer from 'youtube-player';
import moviesAPI from './api';
import { htmlToElement } from './helpers';
import { removeLoader, setLoader } from './loader';

const bodyElement = document.querySelector('body');

// Finds trailer in the list of movies and returns video key
function getTrailerKey(videos) {
  const officialTrailer = videos.find(el => {
    return el.name.toLowerCase().includes('official trailer');
  });
  if (officialTrailer) return officialTrailer.key;
  const trailer = videos.find(el => el.name.toLowerCase().includes('trailer'));
  if (trailer) return trailer.key;
  if (videos.length) return videos[0].key;
  return '';
}

const TRAILER_MODAL_TEMPLATE = `<div id="trailer-modal" class="trailer-backdrop">
  <div class="trailer-modal">
    <div class="trailer-modal__content">
      <div id="trailer-player" class="trailer-player"></div>
    </div>
  </div>
</div>`;

// Create YouTubePlayer
function createYouTubePlayer(trailerId) {
  youTubePlayer = YouTubePlayer('trailer-player', {
    videoId: trailerId,
    width: '560',
    height: '315',
  });
  youTubePlayer.playVideo();
  youTubePlayer.on('stateChange', event => {
    removeLoader('body');
  });
}

// Shows trailer modal by video key
async function showTrailerModal(key) {
  const modalElement = htmlToElement(TRAILER_MODAL_TEMPLATE);
  bodyElement.appendChild(modalElement);
  if (key) {
    setLoader('body');
    window.requestAnimationFrame(() => {
      createYouTubePlayer(key);
    });
  } else {
    document
      .querySelector('.trailer-player')
      .classList.add('trailer-player--not-found');
  }
}
// Hides movie details modal (when opec trailer)
function hideParentModal() {
  document.querySelector('#details-modal').style.display = 'none';
}
// Shows movie details modal (when close trailer)
function showParentModal() {
  document.querySelector('#details-modal').style.display = null;
}
// Close trailer modal
function closeTrailerModal() {
  removeLoader('body');
  document.querySelector('#trailer-modal').remove();
  showParentModal();
  document.removeEventListener('keydown', closeTrailerModalOnEsc);
  document.removeEventListener('click', closeTrailerModalOnOutsideClick);
}

// Event handler for close modal when clicked on backdrop
function closeTrailerModalOnOutsideClick(event) {
  const isClickInsideModal = document
    .getElementById('trailer-player')
    .contains(event.target);

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
    hideParentModal();
    await showTrailerModal(key);
    document.addEventListener('keydown', closeTrailerModalOnEsc);
    document.addEventListener('click', closeTrailerModalOnOutsideClick);
  } catch (error) {
    console.error(error);
  }
}

export { showTrailer };
