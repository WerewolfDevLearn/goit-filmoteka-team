import { removeGlobalLoader } from '../services/loader';
window.addEventListener('load', removeGlobalLoader);

import { createbigCardMarkup } from '../services/createCardMarkup';
import { bigCardMarkup } from '../services/cardMarkup';
import { switchBTNs } from '../services/swith-buttons';
import { save, load } from '../services/library-storage';
import { refs, createFilmModal } from '../services/modal-film';
const library = document.querySelector('.isDisabled-js');
library.classList.remove('isDisabled-js');

import '../components/team-modal';
import '../services/swith-buttons';
import '../services/theme';
import { STATE } from './state';

const gallery = document.querySelector('.gallery');
const galleryLibraryBG = document.querySelector(
  '.library_background_contsiner'
);
const watchBTN = document.querySelector("[data-action='watched']");
const qeueBTN = document.querySelector("[data-action='queue']");

watchBTN.addEventListener('click', watchHandler);
qeueBTN.addEventListener('click', qeueHandler);
refs.filmCardListEl.addEventListener('click', createFilmModal);

const lsrespons = load('STATE');
console.log(lsrespons);

function watchHandler() {
  const loaded = load('STATE');
  const watchedMV = loaded.user.movies.watched;
  if (watchedMV) {
    galleryLibraryBG.classList.add('visually-hidden');
  }
  gallery.innerHTML = '';
  gallery.insertAdjacentHTML('afterbegin', createbigCardMarkup(watchedMV));
}

function qeueHandler() {
  const loaded = load('STATE');
  const qeueMV = loaded.user.movies.qeue;
  if (qeueMV) {
    galleryLibraryBG.classList.add('visually-hidden');
  }
  gallery.innerHTML = '';
  gallery.insertAdjacentHTML('afterbegin', createbigCardMarkup(qeueMV));
}
