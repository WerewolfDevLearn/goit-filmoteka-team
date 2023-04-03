import renderBackdrop from '../../templates/backdrop.hbs';
import renderModal from '../../templates/modal.hbs';
import moviesAPI from '../../js/services/api';
import { showTrailer } from '../../js/services/trailer';
import { addMovieToLocalStorage } from './library-storage';
import { removeMovieFromLocalStorage } from './library-storage';

// Refs
export const refs = {
  bodyEl: document.querySelector('body'),
  // Modal
  filmCardListEl: document.querySelector('.gallery'),
  filmBackdropEl: '',
  filmModalEl: '',
  youTubePlayerEl: '',
  // Buttons
  filmModalCloseBtnlEl: '',
  btnAddWatchedEl: '',
  btnAddQueueEl: '',
  btnRemoveWatchedEl: '',
  btnRemoveQueueEl: '',
  btnViewTrailer: '',
};

// Const
let filmId = null;
const DATA = [
  'add-watched',
  'add-queue',
  'remove-watched',
  'remove-queue',
  'trailer',
];
const KEY_LIBRIARY = ['watched', 'queue'];
const IS_HIDDEN = 'visually-hidden';

export async function createFilmModal(e) {
  // Get FilmID
  filmId = e.target.closest('.card__item').id;
  // Remove FilmCardGallery Listner
  refs.filmCardListEl.removeEventListener('click', createFilmModal);
  // Create Backdrop
  refs.bodyEl.insertAdjacentHTML('beforeend', renderBackdrop());
  refs.filmBackdropEl = document.querySelector('.backdrop');

  try {
    // Fetch MovieDetails
    const data = await moviesAPI.getMovieDetails(filmId);
    // Create Modal
    refs.filmBackdropEl.insertAdjacentHTML('afterbegin', renderModal(data));
  } catch (error) {
    console.log(error);
  }
  // Select Button Elements
  btnElSelect();
  // Show/Hide Buttons
  btnElShowHide();
  try {
    const videos = await moviesAPI.getRelatedVideos(filmId);
    console.log(videos);
    const trailerId = getTrailerId(videos);
    console.log(trailerId);
  } catch (error) {
    console.log(error);
    refs.btnViewTrailer.textContent = error;
    refs.btnViewTrailer.disabled = true;
  }
  // Add Modal Listners
  refs.filmModalCloseBtnlEl.addEventListener('click', closeFilmModal);
  refs.filmBackdropEl.addEventListener('click', closeFilmModal);
  addEventListener('keydown', closeFilmModal);
  refs.filmModalEl.addEventListener('click', onBtnClick);
}

// Select Button Elements
function btnElSelect() {
  refs.filmModalEl = document.querySelector('[data-modal="modal"]');
  refs.filmModalCloseBtnlEl = document.querySelector('.modal__close');
  refs.btnAddWatchedEl = document.querySelector(`[data-modal=${DATA[0]}]`);
  refs.btnAddQueueEl = document.querySelector(`[data-modal=${DATA[1]}]`);
  refs.btnRemoveWatchedEl = document.querySelector(`[data-modal=${DATA[2]}]`);
  refs.btnRemoveQueueEl = document.querySelector(`[data-modal=${DATA[3]}]`);
  refs.btnViewTrailer = document.querySelector(`[data-modal=${DATA[4]}]`);
}

// Show/Hide Buttons
function btnElShowHide() {
  if (JSON.parse(localStorage.getItem(KEY_LIBRIARY[0]))?.includes(filmId)) {
    refs.btnAddWatchedEl.classList.add(IS_HIDDEN);
    refs.btnRemoveWatchedEl.classList.remove(IS_HIDDEN);
  } else {
    refs.btnRemoveWatchedEl.classList.add(IS_HIDDEN);
    refs.btnAddWatchedEl.classList.remove(IS_HIDDEN);
  }
  if (JSON.parse(localStorage.getItem(KEY_LIBRIARY[1]))?.includes(filmId)) {
    refs.btnAddQueueEl.classList.add(IS_HIDDEN);
    refs.btnRemoveQueueEl.classList.remove(IS_HIDDEN);
  } else {
    refs.btnRemoveQueueEl.classList.add(IS_HIDDEN);
    refs.btnAddQueueEl.classList.remove(IS_HIDDEN);
  }
}

// On Button Click
function onBtnClick(e) {
  switch (e.target.dataset.modal) {
    case DATA[0]:
      addMovieToLocalStorage(KEY_LIBRIARY[0], filmId);
      if (JSON.parse(localStorage.getItem(KEY_LIBRIARY[0])).includes(filmId)) {
        e.target.classList.toggle(IS_HIDDEN);
        refs.btnRemoveWatchedEl.classList.toggle(IS_HIDDEN);
      }
      break;
    case DATA[1]:
      addMovieToLocalStorage(KEY_LIBRIARY[1], filmId);
      if (JSON.parse(localStorage.getItem(KEY_LIBRIARY[1])).includes(filmId)) {
        e.target.classList.toggle(IS_HIDDEN);
        refs.btnRemoveQueueEl.classList.toggle(IS_HIDDEN);
      }
      break;
    case DATA[2]:
      removeMovieFromLocalStorage(KEY_LIBRIARY[0], filmId);
      e.target.classList.toggle(IS_HIDDEN);
      refs.btnAddWatchedEl.classList.toggle(IS_HIDDEN);
      break;
    case DATA[3]:
      removeMovieFromLocalStorage(KEY_LIBRIARY[1], filmId);
      e.target.classList.toggle(IS_HIDDEN);
      refs.btnAddQueueEl.classList.toggle(IS_HIDDEN);
      break;
    case 'trailer':
      showTrailer(filmId);
      break;
  }
}

// Close FilmModal
function closeFilmModal(e) {
  if (
    e.code === 'Escape' ||
    e.target.className === 'backdrop' ||
    e.currentTarget.dataset.modal === 'close'
  ) {
    // Remove
    refs.filmBackdropEl.remove();
    refs.filmModalCloseBtnlEl.removeEventListener('click', closeFilmModal);
    refs.filmBackdropEl.removeEventListener('click', closeFilmModal);
    removeEventListener('keydown', closeFilmModal);

    // Add FilmCardGallery Listner
    refs.filmCardListEl.addEventListener('click', createFilmModal);
  }
}

// TrailerId
function getTrailerId(videos) {
  const officialTrailer = videos.results.find(el =>
    el.name.toLowerCase().includes('official trailer')
  );
  if (officialTrailer) return officialTrailer.key;
  const trailer = videos.results.find(el =>
    el.name.toLowerCase().includes('trailer')
  );
  if (trailer) return trailer.key;
  if (videos.length) return videos[0].key;
  throw new Error('Oops! Trailer is not available');
}

// -------------------------------------------------------------------------------------------- //
// Alternative version with YouTubePlayer
// -------------------------------------------------------------------------------------------- //

// import YouTubePlayer from 'youtube-player';

// import renderBackdrop from '../../templates/backdrop.hbs';
// import renderModal from '../../templates/modal.hbs';
// import moviesAPI from '../../js/services/api';
// import { addMovieToLocalStorage } from './library-storage';
// import { removeMovieFromLocalStorage } from './library-storage';

// // Refs
// export const refs = {
//   bodyEl: document.querySelector('body'),
//   // Modal
//   filmCardListEl: document.querySelector('.gallery'),
//   filmBackdropEl: '',
//   filmModalEl: '',
//   youTubePlayerEl: '',
//   // Buttons
//   filmModalCloseBtnlEl: '',
//   btnAddWatchedEl: '',
//   btnAddQueueEl: '',
//   btnRemoveWatchedEl: '',
//   btnRemoveQueueEl: '',
//   btnViewTrailer: '',
// };

// // Const
// let filmId = null;
// const DATA = [
//   'add-watched',
//   'add-queue',
//   'remove-watched',
//   'remove-queue',
//   'trailer',
// ];
// const KEY_LIBRIARY = ['watched', 'queue'];
// const IS_HIDDEN = 'visually-hidden';
// let youTubePlayer = null;
// let trailerId = null;

// export async function createFilmModal(e) {
//   // Get FilmID
//   filmId = e.target.closest('.card__item').id;
//   // Remove FilmCardGallery Listner
//   refs.filmCardListEl.removeEventListener('click', createFilmModal);
//   // Create Backdrop
//   refs.bodyEl.insertAdjacentHTML('beforeend', renderBackdrop());
//   refs.filmBackdropEl = document.querySelector('.backdrop');
//   // Create Modal
//   try {
//     const data = await moviesAPI.getMovieDetails(filmId);
//     refs.filmBackdropEl.insertAdjacentHTML('afterbegin', renderModal(data));
//   } catch (error) {
//     console.log(error);
//   }
//   // Select Button Elements
//   btnElSelect();
//   // Show/Hide Buttons
//   btnElShowHide();
//   // Create YouTubePlayer
//   try {
//     const videos = await moviesAPI.getRelatedVideos(filmId);
//     trailerId = getTrailerId(videos);
//     createYouTubePlayer(trailerId);
//   } catch (error) {
//     refs.btnViewTrailer.textContent = error;
//     refs.btnViewTrailer.disabled = true;
//   }
//   // Add Modal Listners
//   refs.filmModalCloseBtnlEl.addEventListener('click', closeFilmModal);
//   refs.filmBackdropEl.addEventListener('click', closeFilmModal);
//   refs.filmBackdropEl.addEventListener('click', hideYouTubePlayer);
//   addEventListener('keydown', closeFilmModal);
//   addEventListener('keydown', hideYouTubePlayer);
//   refs.filmModalEl.addEventListener('click', onBtnClick);
// }

// // Select Button Elements
// function btnElSelect() {
//   refs.filmModalEl = document.querySelector('[data-modal="modal"]');
//   refs.filmModalCloseBtnlEl = document.querySelector('.modal__close');
//   refs.btnAddWatchedEl = document.querySelector(`[data-modal=${DATA[0]}]`);
//   refs.btnAddQueueEl = document.querySelector(`[data-modal=${DATA[1]}]`);
//   refs.btnRemoveWatchedEl = document.querySelector(`[data-modal=${DATA[2]}]`);
//   refs.btnRemoveQueueEl = document.querySelector(`[data-modal=${DATA[3]}]`);
//   refs.btnViewTrailer = document.querySelector(`[data-modal=${DATA[4]}]`);
// }

// // Show/Hide Buttons
// function btnElShowHide() {
//   if (JSON.parse(localStorage.getItem(KEY_LIBRIARY[0]))?.includes(filmId)) {
//     refs.btnAddWatchedEl.classList.add(IS_HIDDEN);
//     refs.btnRemoveWatchedEl.classList.remove(IS_HIDDEN);
//   } else {
//     refs.btnRemoveWatchedEl.classList.add(IS_HIDDEN);
//     refs.btnAddWatchedEl.classList.remove(IS_HIDDEN);
//   }
//   if (JSON.parse(localStorage.getItem(KEY_LIBRIARY[1]))?.includes(filmId)) {
//     refs.btnAddQueueEl.classList.add(IS_HIDDEN);
//     refs.btnRemoveQueueEl.classList.remove(IS_HIDDEN);
//   } else {
//     refs.btnRemoveQueueEl.classList.add(IS_HIDDEN);
//     refs.btnAddQueueEl.classList.remove(IS_HIDDEN);
//   }
// }

// // Create YouTubePlayer
// function createYouTubePlayer(trailerId) {
//   youTubePlayer = YouTubePlayer('video-player', {
//     videoId: trailerId,
//     width: refs.filmModalEl.clientWidth,
//     height: refs.filmModalEl.clientHeight,
//   });
// }

// // On Button Click
// function onBtnClick(e) {
//   switch (e.target.dataset.modal) {
//     case DATA[0]:
//       addMovieToLocalStorage(KEY_LIBRIARY[0], filmId);
//       if (JSON.parse(localStorage.getItem(KEY_LIBRIARY[0])).includes(filmId)) {
//         e.target.classList.toggle(IS_HIDDEN);
//         refs.btnRemoveWatchedEl.classList.toggle(IS_HIDDEN);
//       }
//       break;
//     case DATA[1]:
//       addMovieToLocalStorage(KEY_LIBRIARY[1], filmId);
//       if (JSON.parse(localStorage.getItem(KEY_LIBRIARY[1])).includes(filmId)) {
//         e.target.classList.toggle(IS_HIDDEN);
//         refs.btnRemoveQueueEl.classList.toggle(IS_HIDDEN);
//       }
//       break;
//     case DATA[2]:
//       removeMovieFromLocalStorage(KEY_LIBRIARY[0], filmId);
//       e.target.classList.toggle(IS_HIDDEN);
//       refs.btnAddWatchedEl.classList.toggle(IS_HIDDEN);
//       break;
//     case DATA[3]:
//       removeMovieFromLocalStorage(KEY_LIBRIARY[1], filmId);
//       e.target.classList.toggle(IS_HIDDEN);
//       refs.btnAddQueueEl.classList.toggle(IS_HIDDEN);
//       break;
//     case 'trailer':
//       youTubePlayer.playVideo();
//       refs.youTubePlayerEl = refs.filmBackdropEl.querySelector('iframe');
//       refs.youTubePlayerEl.classList.toggle('visually-hidden');
//       refs.filmModalEl.classList.toggle('visually-hidden');
//       e.target.closest('.btn__trailer').blur();
//       youTubePlayer.on('stateChange', e => refs.youTubePlayerEl.blur());
//       break;
//   }
// }

// // Close FilmModal
// function closeFilmModal(e) {
//   if (refs.youTubePlayerEl.clientWidth > 1) return;

//   if (
//     e.code === 'Escape' ||
//     e.target.className === 'backdrop' ||
//     e.currentTarget.dataset.modal === 'close'
//   ) {
//     // Remove
//     refs.filmBackdropEl.remove();
//     refs.filmModalCloseBtnlEl.removeEventListener('click', closeFilmModal);
//     refs.filmBackdropEl.removeEventListener('click', closeFilmModal);
//     refs.filmBackdropEl.removeEventListener('click', hideYouTubePlayer);
//     removeEventListener('keydown', closeFilmModal);
//     removeEventListener('keydown', hideYouTubePlayer);
//     // Add FilmCardGallery Listner
//     refs.filmCardListEl.addEventListener('click', createFilmModal);
//   }
// }

// // // Hide YouTubePlayer
// function hideYouTubePlayer(e) {
//   if (e.code === 'Escape' || e.target.className === 'backdrop') {
//     refs.youTubePlayerEl.classList.add('visually-hidden');
//     refs.filmModalEl.classList.toggle('visually-hidden');
//     youTubePlayer.stopVideo();
//   }
// }

// // TrailerId
// function getTrailerId(videos) {
//   const officialTrailer = videos.results.find(el =>
//     el.name.toLowerCase().includes('official trailer')
//   );
//   if (officialTrailer) return officialTrailer.key;
//   const trailer = videos.results.find(el =>
//     el.name.toLowerCase().includes('trailer')
//   );
//   if (trailer) return trailer.key;
//   if (videos.length) return videos[0].key;
//   throw new Error('Oops! Trailer is not available');
// }
