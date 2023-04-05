import { STATE } from './state';
import differentFetch from '../services/different-fetchs';

import {
  appendCardsMarkup,
  createCardMarkup,
} from '../services/createCardMarkup.js';
const galleryEl = document.querySelector('.gallery');
const searchForm = document.querySelector('.blockHome');
const inputQuere = searchForm[0];

searchForm.addEventListener('submit', handlerSearch);

async function handlerSearch(e) {
  e.preventDefault();
  try {
    STATE.keyword = inputQuere.value;
    const respons = await differentFetch(STATE.page);
    const flag = respons.results.length;
    console.log('flag: ', flag);

    if (!flag) {
      toggleNotification(flag);
    } else {
      STATE.movies = respons.results;
      console.log('STATE.movies: ', STATE.movies);
      galleryEl.innerHTML = '';

      appendCardsMarkup(createCardMarkup(STATE.movies));
    }
  } catch (error) {
    console.log(error);
  }
}

function toggleNotification(flag) {
  const notifyEl = document.querySelector('.notification');
  console.log(flag);
  if (flag) {
    console.log('step1');

    notifyEl.classList.add('opacityZero');
    return;
  }
  console.log('step2');
  notifyEl.classList.remove('opacityZero');
  setTimeout(() => {
    notifyEl.classList.add('opacityZero');
  }, 5000);
  return;
}
