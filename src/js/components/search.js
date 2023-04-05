import { STATE } from './state';
import differentFetch from '../services/different-fetchs';
import { toggleNotification } from '../services/togle-notification';
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

    STATE.movies = respons.results;
    console.log(STATE);
    galleryEl.innerHTML = '';
    appendCardsMarkup(createCardMarkup(STATE.movies));
  } catch (error) {
    console.log(error);
  }
}
