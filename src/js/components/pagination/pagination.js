import { STATE } from '../state.js';
import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import '../../../sass/components/_tui-pagination.scss';
import {
  paginDesktopOptions,
  paginMobileOptions,
} from './pagination-options.js';
import differentFetch from '../../services/different-fetchs.js';
import {
  createCardMarkup,
  appendCardsMarkup,
} from '../../services/createCardMarkup.js';
const galleryEl = document.querySelector('.gallery');
const paginationContainer = document.querySelector('#tui-pagination-container');

let options = null;
if (window.screen.width <= 480) {
  options = paginMobileOptions;
} else {
  options = paginDesktopOptions;
}

const pagination = new Pagination(paginationContainer, options);

pagination.on('beforeMove', loadMore);

pagination.on('afterMove', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
export function startPage(date) {
  pagination.reset(date);
}

async function loadMore(event) {
  console.log(STATE.movies);

  const currentPage = event.page;
  STATE.page = currentPage;
  const date = await differentFetch(STATE.page);
  STATE.movies = date.results;
  console.log(STATE.movies);
  galleryEl.innerHTML = '';
  appendCardsMarkup(createCardMarkup(STATE.movies));
}
