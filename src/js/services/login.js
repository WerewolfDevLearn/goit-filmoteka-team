import { STATE } from '../components/state';
import backdropLogin from '../../templates/backdrop';
const inPoint = document.querySelector('body');
const registrationBtn = document.querySelector('.registrationBtn-container');

registrationBtn.addEventListener('click', loginChoose);

function loginChoose(e) {
  if (e.target.dataset.action === 'signIn') {
    insertMarkup();
    return;
  }
  if (e.target.dataset.action === 'logIn') {
    return;
  }
}

function insertMarkup() {
  inPoint.insertAdjacentHTML('beforebegin', backdropLogin());
}
