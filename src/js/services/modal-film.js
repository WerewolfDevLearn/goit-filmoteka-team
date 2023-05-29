import renderBackdrop from '../../templates/backdrop.hbs';
import renderModal from '../../templates/modal.hbs';
import moviesAPI from '../../js/services/api';
import { normalizeData } from '../utiles/normalize';
import { showTrailer } from '../../js/services/trailer';
import { save, load } from './library-storage';
import { async } from '@firebase/util';
import { STATE } from '../components/state';

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
  // Rating
  ratioContainerEl: '',
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

const IS_HIDDEN = 'visually-hidden';

// MovieModal
export async function createFilmModal(e) {
  if (load('STATE')) {
    const respons = load('STATE').user.movies;
    STATE.user.movies = { ...respons };
  }

  // Get FilmID
  filmId = e.target.closest('.card__item').id;
  // Remove FilmCardGallery Listner
  refs.filmCardListEl.removeEventListener('click', createFilmModal);
  // Create Backdrop
  refs.bodyEl.insertAdjacentHTML('beforeend', renderBackdrop());
  refs.filmBackdropEl = document.querySelector('.backdrop');
  // Create Modal
  try {
    const data = await moviesAPI.getMovieDetails(filmId);
    const normData = normalizeData(data);
    // Add data to state
    STATE.currentMovie = { ...data };
    // Add data to state
    refs.filmBackdropEl.insertAdjacentHTML('afterbegin', renderModal(normData));
    // Vote Percentage
    refs.ratioContainerEl = document.querySelector('.persentage');
    renderRatio(normData.vote_average);
  } catch (error) {
    console.log(error);
  }
  // Select Button Elements
  btnElSelect();
  // Show/Hide Buttons
  btnElShowHide();
  // Create YouTubePlayer
  try {
    const videos = await moviesAPI.getRelatedVideos(filmId);
    const trailerId = getTrailerId(videos);
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
  console.log(STATE);
  if (STATE.user.movies.watched.find(i => i.id === STATE.currentMovie.id)) {
    refs.btnAddWatchedEl.classList.add(IS_HIDDEN);
    refs.btnRemoveWatchedEl.classList.remove(IS_HIDDEN);
  } else {
    refs.btnRemoveWatchedEl.classList.add(IS_HIDDEN);
    refs.btnAddWatchedEl.classList.remove(IS_HIDDEN);
  }
  if (STATE.user.movies.qeue.find(i => i.id === STATE.currentMovie.id)) {
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
      // { watched: true };

      addMovieToLocalStorageWathced();
      e.target.classList.toggle(IS_HIDDEN);
      refs.btnRemoveWatchedEl.classList.toggle(IS_HIDDEN);

      // MovieData Operation
      // addMovieToStorage(filmId);
      // removeMovieToStorage(filmId);
      break;
    case DATA[1]:
      // { queue : true };

      addMovieToLocalStorageQeue();
      e.target.classList.toggle(IS_HIDDEN);
      refs.btnRemoveQueueEl.classList.toggle(IS_HIDDEN);

      // MovieData Operation

      break;
    case DATA[2]:
      removeMovieFromLocalStorageWathced();
      e.target.classList.toggle(IS_HIDDEN);
      refs.btnAddWatchedEl.classList.toggle(IS_HIDDEN);

      // MovieData Operation

      break;
    case DATA[3]:
      removeMovieFromLocalStorageQeue();
      e.target.classList.toggle(IS_HIDDEN);
      refs.btnAddQueueEl.classList.toggle(IS_HIDDEN);

      // MovieData Operation}

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

// Vote Percentage
function renderRatio(rating) {
  const fullStarCount = Math.floor(rating);
  const percentage = (rating - fullStarCount) * 100;
  const halfStar = rating - fullStarCount > 0;

  for (let i = 0; i < 10; i += 1) {
    const starEl = document.createElement('div');
    starEl.classList.add('persentage__star');
    if (i < fullStarCount) {
      starEl.classList.add('persentage__star-full');
    } else if (halfStar && i === fullStarCount) {
      starEl.style.background =
        `linear-gradient(to right, #ff6b01 ${percentage}%,` +
        `#ffffff ${1 - percentage}%)`;
    }
    refs.ratioContainerEl.appendChild(starEl);
  }
}

function addMovieToLocalStorageWathced() {
  STATE.user.movies.watched.push(STATE.currentMovie);

  save('STATE', STATE);
}
function addMovieToLocalStorageQeue() {
  STATE.user.movies.qeue.push(STATE.currentMovie);
  save('STATE', STATE);
}
function removeMovieFromLocalStorageWathced() {
  const finalarr = STATE.user.movies.watched.filter(
    i => i.id !== STATE.currentMovie.id
  );

  STATE.user.movies.watched = [...finalarr];

  save('STATE', STATE);
}
function removeMovieFromLocalStorageQeue() {
  const finalarr = STATE.user.movies.qeue.filter(
    i => i.id !== STATE.currentMovie.id
  );
  STATE.user.movies.qeue = [...finalarr];

  save('STATE', STATE);
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
//  const normData = normalizeData(data);
//     refs.filmBackdropEl.insertAdjacentHTML('afterbegin', renderModal(normData));
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

// // Normalize Data
// function normalizeData({
//   poster_path,
//   original_title,
//   vote_average,
//   vote_count,
//   popularity,
//   genres,
//   overview,
// }) {
//   return {
//     poster_path,
//     original_title,
//     vote_average: Number(vote_average).toFixed(1),
//     vote_count: Number(vote_count),
//     popularity: Number(popularity).toFixed(0),
//     genres,
//     overview,
//   };
// }

// // Vote Percentage
// function renderRatio(rating) {
//   const ratingStarsContainer = document.createElement('div');
//   ratingStarsContainer.classList.add('rating-stars-container');

//   const fullStarCount = Math.floor(rating);
//   const percentage = (rating - fullStarCount) * 100;
//   const halfStar = rating - fullStarCount > 0;
//   for (let i = 0; i < 10; i++) {
//     const star = document.createElement('div');
//     star.classList.add('rating-star');
//     if (i < fullStarCount) {
//       star.classList.add('full');
//     } else if (halfStar && i === fullStarCount) {
//       star.style.background =
//         `linear-gradient(to right, #ff6b01 ${percentage}%,` +
//         `#f7f7f7 ${1 - percentage}%)`;
//     }
//     ratingStarsContainer.appendChild(star);
//   }
//   refs.ratioContainerEl.appendChild(ratingStarsContainer);
// }

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
//     const normData = normalizeData(data);
//     // Add data to state
//     STATE.currentMovie = data;
//
//     // Add data to state
//     refs.filmBackdropEl.insertAdjacentHTML('afterbegin', renderModal(normData));
//     // Vote Percentage
//     refs.ratioContainerEl = document.querySelector('.persentage');
//     renderRatio(normData.vote_average);
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
//     const trailerId = getTrailerId(videos);
//   } catch (error) {
//     console.log(error);
//     refs.btnViewTrailer.textContent = error;
//     refs.btnViewTrailer.disabled = true;
//   }
//   // Add Modal Listners
//   refs.filmModalCloseBtnlEl.addEventListener('click', closeFilmModal);
//   refs.filmBackdropEl.addEventListener('click', closeFilmModal);
//   addEventListener('keydown', closeFilmModal);
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

// // On Button Click
// function onBtnClick(e) {
//   switch (e.target.dataset.modal) {
//     case DATA[0]:
//       addMovieToLocalStorage(KEY_LIBRIARY[0], filmId);
//       if (JSON.parse(localStorage.getItem(KEY_LIBRIARY[0])).includes(filmId)) {
//         e.target.classList.toggle(IS_HIDDEN);
//         refs.btnRemoveWatchedEl.classList.toggle(IS_HIDDEN);
//       }
//       // MovieData Operation
//       addMovieToStorage(filmId);
//       removeMovieToStorage(filmId);
//       break;
//     case DATA[1]:
//       addMovieToLocalStorage(KEY_LIBRIARY[1], filmId);
//       if (JSON.parse(localStorage.getItem(KEY_LIBRIARY[1])).includes(filmId)) {
//         e.target.classList.toggle(IS_HIDDEN);
//         refs.btnRemoveQueueEl.classList.toggle(IS_HIDDEN);
//       }
//       // MovieData Operation
//       addMovieToStorage(filmId);
//       removeMovieToStorage(filmId);
//       break;
//     case DATA[2]:
//       removeMovieFromLocalStorage(KEY_LIBRIARY[0], filmId);
//       e.target.classList.toggle(IS_HIDDEN);
//       refs.btnAddWatchedEl.classList.toggle(IS_HIDDEN);
//       // MovieData Operation
//       addMovieToStorage(filmId);
//       removeMovieToStorage(filmId);
//       break;
//     case DATA[3]:
//       removeMovieFromLocalStorage(KEY_LIBRIARY[1], filmId);
//       e.target.classList.toggle(IS_HIDDEN);
//       refs.btnAddQueueEl.classList.toggle(IS_HIDDEN);
//       // MovieData Operation
//       addMovieToStorage(filmId);
//       removeMovieToStorage(filmId);
//       break;
//     case 'trailer':
//       showTrailer(filmId);
//       break;
//   }
// }

// // Close FilmModal
// function closeFilmModal(e) {
//   if (
//     e.code === 'Escape' ||
//     e.target.className === 'backdrop' ||
//     e.currentTarget.dataset.modal === 'close'
//   ) {
//     // Remove
//     refs.filmBackdropEl.remove();
//     refs.filmModalCloseBtnlEl.removeEventListener('click', closeFilmModal);
//     refs.filmBackdropEl.removeEventListener('click', closeFilmModal);
//     removeEventListener('keydown', closeFilmModal);

//     // Add FilmCardGallery Listner
//     refs.filmCardListEl.addEventListener('click', createFilmModal);
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

// // Vote Percentage
// function renderRatio(rating) {
//   const fullStarCount = Math.floor(rating);
//   const percentage = (rating - fullStarCount) * 100;
//   const halfStar = rating - fullStarCount > 0;

//   for (let i = 0; i < 10; i += 1) {
//     const starEl = document.createElement('div');
//     starEl.classList.add('persentage__star');
//     if (i < fullStarCount) {
//       starEl.classList.add('persentage__star-full');
//     } else if (halfStar && i === fullStarCount) {
//       starEl.style.background =
//         `linear-gradient(to right, #ff6b01 ${percentage}%,` +
//         `#ffffff ${1 - percentage}%)`;
//     }
//     refs.ratioContainerEl.appendChild(starEl);
//   }
// }
