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
};

// Const
let filmId = null;
const DATA = ['add-watched', 'add-queue', 'remove-watched', 'remove-queue'];
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
  // Add Modal Listners
  refs.filmModalCloseBtnlEl.addEventListener('click', closeFilmModal);
  refs.filmBackdropEl.addEventListener('click', closeFilmModal);
  addEventListener('keydown', closeFilmModal);
  refs.filmModalEl.addEventListener('click', onBtnClick);
}

// Select Button Elements
function btnElSelect() {
  refs.filmModalCloseBtnlEl = document.querySelector('.modal__close');
  refs.filmModalEl = document.querySelector('[data-modal="modal"]');

  refs.btnAddWatchedEl = document.querySelector(`[data-modal=${DATA[0]}]`);
  refs.btnAddQueueEl = document.querySelector(`[data-modal=${DATA[1]}]`);
  refs.btnRemoveWatchedEl = document.querySelector(`[data-modal=${DATA[2]}]`);
  refs.btnRemoveQueueEl = document.querySelector(`[data-modal=${DATA[3]}]`);
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
