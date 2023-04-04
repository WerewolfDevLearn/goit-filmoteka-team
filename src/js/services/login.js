import { STATE } from '../components/state';
import {
  sinInWithEmailPassword,
  userCreation,
  signInWithGoogle,
  onAuthStateChanged,
  app,
  auth,
} from './firebase/firebaseAPI';
import backdropLogin from '../../templates/backdrop';

let backdrop = null;
let loginForm = null;
let signupForm = null;
let signoutBtn = null;
let userProfile = null;
let loginMsgError = null;

const inPoint = document.querySelector('body');
const registrationBtn = document.querySelector('.registrationBtn-container');
registrationBtn.addEventListener('click', loginChoose);

// Это кнопки хедера
function loginChoose(e) {
  if (e.target.dataset.action === 'signIn') {
    inPoint.insertAdjacentHTML('afterbegin', backdropLogin());
    backdrop = document.querySelector('.auth__backdrop');
    console.dir(backdrop);
    backdrop.addEventListener('click', authModalEvents);
    showSignupForm();
  } else if (e.target.dataset.action === 'logIn') {
    inPoint.insertAdjacentHTML('afterbegin', backdropLogin());
    backdrop = document.querySelector('.auth__backdrop');
    backdrop.addEventListener('click', authModalEvents);
    showLoginForm();
  }
}

function authModalEvents(e) {
  if (!e.target.closest('.auth__wrap') || e.target.closest('.close-btn'))
    closeAuthModal();

  if (e.target.closest('.show-password-icon')) toggleShowPassword();

  if (e.target.closest('#linkSigninAccount')) showLoginForm();
  else if (e.target.closest('#linkCreateAccount')) showSignupForm();

  if (e.target.closest('.login-with-google-btn')) signinWithGoogle();
}

function toggleShowPassword() {
  const showIcon = document.querySelector('.show-password-icon');
  const inputPassword = document.querySelector('.form__input[name="password"]');
  const type =
    inputPassword.getAttribute('type') === 'password' ? 'text' : 'password';
  inputPassword.setAttribute('type', type);
  if (type === 'password') {
    showIcon.firstElementChild.setAttribute(
      'href',
      './images/icons.svg#icon-not-show-password'
    );
  } else if (type === 'text') {
    showIcon.firstElementChild.setAttribute(
      'href',
      './images/icons.svg#icon-show-password'
    );
  }
}

function closeAuthModal() {
  backdrop.remove();
  backdrop.removeEventListener('click', authModalEvents);
}

function showSignupForm() {
  backdrop.firstElementChild.innerHTML = `<button class="close-btn">
	<img src="./images/close.svg" alt="" />
</button>
<form class="auth__form" id="signup">
	<h1 class="form__title">Sign Up</h1>
	<div class="signup-form__message-error"></div>
	<div class="form__input-group">
		<input
			type="email"
			name="email"
			class="form__input"
			placeholder="E-mail"
		/>
		<svg class="email-icon">
							<use href="./images/icons.svg#icon-email-form"></use>
						</svg>
	</div>
	<div class="form__input-group">
		<input
			type="password"
			name="password"
			class="form__input"
			placeholder="Password"
		>
		<svg class="password-icon">
							<use href="./images/icons.svg#icon-password"></use>
						</svg>
		<svg class="show-password-icon">
			<use href="./images/icons.svg#icon-not-show-password"></use>
		</svg>
	</div>
	<button class="form__btn-submit" type="submit">Sign Up</button
	><button class="login-with-google-btn" type="button">
		Sign Up with Google
	</button>
	<p class="form__text">
		Already have account? <a
			href="#"
			class="form__link"
			id="linkSigninAccount"
			>Log In</a
		>
	</p>
	</form>`;
  signupForm = document.getElementById('signup');
  signupForm.addEventListener('submit', onSignupSubmit);
}

function showLoginForm() {
  backdrop.firstElementChild.innerHTML = `
	<button class="close-btn">
					<img src="./images/close.svg" alt="" />
				</button>
				<form class="auth__form" id="login">
					<h1 class="form__title">Log In</h1>
					<div class="login-form__message-error"></div>
					<div class="form__input-group">
						<input
							type="email"
							name="email"
							class="form__input"
							placeholder="E-mail"
						/>
						<svg class="email-icon">
							<use href="./images/icons.svg#icon-email"></use>
						</svg>
						<div class="form__input-error-message is-hidden">Invalid email</div>
					</div>
					<div class="form__input-group">
						<input
							type="password"
							name="password"
							class="form__input"
							placeholder="Password"
						/>
						<svg class="password-icon">
							<use href="./images/icons.svg#icon-password"></use>
						</svg>
						<svg class="show-password-icon">
			<use href="./images/icons.svg#icon-not-show-password"></use>
		</svg>
		</div>
					<button class="form__btn-submit" type="submit">Log In</button>
					<button class="login-with-google-btn" type="button">
						Log In with Google
					</button>
					<p class="form__text">
						Don't have account?
						<a href="#" class="form__link" id="linkCreateAccount"
							>Create account</a
						>
					</p>
				</form>`;
  loginForm = document.getElementById('login');
  loginForm.addEventListener('submit', onLoginSubmit);
}

function onLoginSubmit(e) {
  e.preventDefault();

  loginForm = document.getElementById('login');
  loginMsgError = document.querySelector('.login-form__message-error');
  const { email, password } = loginForm.elements;

  console.log(email.value, password.value.trim());

  // signInWithEmailAndPassword(auth, email.value, password.value.trim())
  sinInWithEmailPassword()
    .then(() => {
      alert(`You are logged in.`);
      closeAuthModal();
      loginMsgError.textContent = '';
      loginForm.reset();
      signupForm.reset();
    })
    .catch(err => {
      if (
        err.code === 'auth/wrong-password' ||
        err.code === 'auth/user-not-found'
      ) {
        loginMsgError.textContent = 'Incorrect email or password';
      }
      // console.log(err)
    });
}

function onSignupSubmit(e) {
  e.preventDefault();

  signupForm = document.getElementById('signup');
  signupMsgError = document.querySelector('.signup-form__message-error');
  const { email, password } = signupForm.elements;
  console.log(email.value, password.value.trim());

  userCreation(email.value, password.value)
    .then(() => {
      alert(`User created!`);
      closeAuthModal();
      signupMsgError.textContent = '';
    })
    .catch(err => {
      if (err.code === 'auth/email-already-in-use')
        signupMsgError.textContent = 'Email Already in use';
      if (err.code === 'auth/weak-password') {
        signupMsgError.textContent = 'Password should be at least 6 characters';
      }
      // console.log(err)
    });
}

function signinWithGoogle() {
  // signInWithPopup(auth, provider)
  signInWithGoogle()
    .then(result => {
      alert(`You are signed in with Google`);
      closeAuthModal();
    })
    .catch(err => {
      if (
        err.code === 'auth/popup-closed-by-user' ||
        err.code === 'auth/cancelled-popup-request'
      ) {
        return;
      }
      alert(err.code);
      console.log(err);
    });
}

function renderUserProfile(user) {
  authList.classList.add('is-hidden');
  userProfile = document.querySelector('.user-info');
  userProfile.classList.remove('is-hidden');
  userProfile.innerHTML = `
	<button class="btn-signout">Sign out</button>
	<p class="user-email">Email: ${auth.currentUser.email}</p>`;
  signoutBtn = document.querySelector('.btn-signout');
  signoutBtn.addEventListener('click', () => {
    signOut(auth)
      .then(() => {
        console.log('Ты вышел🐷. А куда?🤓 А зачем?');
        window.location.reload();
      })
      .catch(err => console.log(err));
  });
}

// onAuthStateChanged(auth, user => {
//   if (user) {
//     renderUserProfile(user);
//   } else {
//     console.log('Ты не вошел🤡');
//   }
// });