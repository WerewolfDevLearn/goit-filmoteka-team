import { auth, signOutFunc } from './firebase/firebaseAPI'
import {user} from '../components/state.js'

const myLibrary = document.querySelector('.js-my-library-btn');
const registrationBtn = document.querySelector('.registrationBtn-container');

export function switchBTNs(boolean) {
  if (boolean) {
    myLibrary.classList.remove('isDisabled-js');
    // registrationBtn.classList.add('isDisplayNone-js');
    registrationBtn.children[0].classList.add('isDisplayNone-js');
    registrationBtn.children[1].classList.add('isDisplayNone-js');
    registrationBtn.children[2].classList.remove('isDisplayNone-js')
    registrationBtn.children[2].addEventListener('click', signOutFunc)
  } else {
    myLibrary.classList.add('isDisabled-js');
    // registrationBtn.classList.remove('isDisplayNone-js');
    registrationBtn.children[0].classList.remove('isDisplayNone-js');
    registrationBtn.children[1].classList.remove('isDisplayNone-js');
    registrationBtn.children[2].classList.add('isDisplayNone-js')
    registrationBtn.children[2].removeEventListener('click', signOutFunc)
  }
}
