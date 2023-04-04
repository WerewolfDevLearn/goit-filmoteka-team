import { STATE } from '../components/state';
import { sinInWithEmailPassword, userCreation } from './firebase/firebaseAPI';
import backdropLogin from '../../templates/backdrop';
import signInForm from '../../templates/singin-form';
import logInForm from '../../templates/login-form';
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
  inPoint.insertAdjacentHTML('afterbegin', backdropLogin());
  const loginFormCon = document.querySelector('.loginFormPlace');
  loginFormCon.insertAdjacentHTML('afterbegin', signInForm());
  const singInForm = document.querySelector('.signIn-form');
  singInForm.addEventListener('submit', oNsubmitHadeler);
  console.dir(singInForm.elements);
}

async function oNsubmitHadeler(event) {
  event.preventDefault();
  const email = event.currentTarget.email.value;
  console.log('email: ', email);
  const password = event.currentTarget.password.value;
  console.log('password: ', password);
  if (email && password) {
    await userCreation(email, password);
  }
}
