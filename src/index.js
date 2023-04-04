import { STATE } from './js/components/state';
import differentFetch from './js/services/different-fetchs';
import {
  createCardMarkup,
  appendCardsMarkup,
} from './js/services/createCardMarkup';
import { startPage } from './js/components/pagination/pagination.js';
import { removeGlobalLoader } from './js/services/loader';
import { showTrailer } from './js/services/trailer';
import { refs, createFilmModal } from './js/services/modal-film';
import toggleModal from './js/components/team-modal';
const teamModalOpen = document.querySelector('[data-open-modal-team]');
teamModalOpen.addEventListener('click', toggleModal);
import {
  userCreation,
  sinInWithEmailPassword,
  signOut,
  signInWithGoogle,
} from './js/services/firebase/firebaseAPI.js';

import {
  writeUserData,
  getUserData,
} from './js/services/firebase/firebaseDatabase';
window.addEventListener('load', removeGlobalLoader);
refs.filmCardListEl.addEventListener('click', createFilmModal);
get(STATE.page);

async function get(page) {
  const date = await differentFetch(page);
  stateModify(date);
  startPage(STATE.totalResults);
  appendCardsMarkup(createCardMarkup(STATE.movies));
}
function stateModify(date) {
  STATE.movies = date.results;
  STATE.totalResults = date.total_results;
}

// const googleSignUp = document.querySelector('.registration-menu-singBtn');
// const googleSignOut = document.querySelector('.registration-menu-logBtn');

// googleSignUp.addEventListener('click', signUpWithGoogle);
// googleSignOut.addEventListener('click', signOutFromGoogle);

// const email = 'werewolfdev@gmail.com';
// const password = 'qwert2';

// // signOut(email, password);
// // userCreation(email, password);
async function foo(data) {
  await signInWithGoogle();
  // console.log(STATE);
  writeUserData(data);
}
foo(STATE.user);
async function getuzer(uid) {
  const gettedUser = await getUserData(uid);
  console.log('gettedUser: ', gettedUser);
  const user = {
    uid: gettedUser.uid,
    movies: gettedUser.movies,
  };
  console.log('user: ', user);
  // STATE.user = gettedUser;
  //   console.log(STATE);
}
const uid = '2Gyhw9T2zQaEJGbYLjPemy2zQOw2';
getuzer(uid);
