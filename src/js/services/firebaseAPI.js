import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import Notiflix from 'notiflix';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyByAukmJ5Yo4o9t1pc8FBHvkFo0KdjDApc',
  authDomain: 'filmoteka-project-fs68.firebaseapp.com',
  databaseURL: 'https://filmoteka-project-fs68-default-rtdb.firebaseio.com',
  projectId: 'filmoteka-project-fs68',
  storageBucket: 'filmoteka-project-fs68.appspot.com',
  messagingSenderId: '1069764300171',
  appId: '1:1069764300171:web:533bf861599d47020bb38e',
  measurementId: 'G-M6CDPKFPXK',
  databaseURL: 'https://filmoteka-project-fs68-default-rtdb.firebaseio.com/',
};
export const app = initializeApp(firebaseConfig);

function signUpWithGoogle(app) {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(app);

  // Sign in Firebase using popup auth and Google as the identity provider.
  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      localStorage.setItem('auth', JSON.stringify(token));

      const user = result.user;
      const database = getDatabase(app);
      const userRef = ref(database, 'user/' + user.uid);
      set(userRef, {
        userName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      }).then(() => {
        const watchedMoviesRef = ref(database, `watchedMovies/${user.uid}`);
        set(watchedMoviesRef, {
          movies: [],
        });

        const toWatchMoviesRef = ref(database, `toWatchMovies/${user.uid}`);
        set(toWatchMoviesRef, {
          movies: [],
        });

        location.reload();
      });
    })
    .catch(error => {
      // Handle Errors here.
      const errorMessage = error.message;

      Notify.failure(`${errorMessage}`);
    });
}

// Вийти з аккаунта гугл
function signOutFromGoogle(app) {
  const auth = getAuth(app);

  signOut(auth)
    .then(() => {
      localStorage.removeItem('auth');

      location.href = 'index.html';
    })
    .catch(error => {
      Notify.failure(`${error.message}`);
    });
}

const isAuth = localStorage.getItem('auth');
// const googleSignUp = document.querySelector('.registration-menu-singBtn');
// const googleSignOut = document.querySelector('.registration-menu-logBtn');
// const myLibrary = document.querySelector('.js-my-library-btn');

// Перевірка чи авторизований користувач, якщо так, то приховувати (або показувати) кнопки з хедеру
// if (!isAuth) {
//   googleSignOut.style.display = 'none';
//   myLibrary.style.display = 'none';
// } else if (isAuth) {
//   googleSignOut.style.display = 'block';
//   googleSignUp.style.display = 'none';
// }

// Додавання фільму до списку подивлених
function addToWatchedMovies(app, movie) {
  const user = getUser(app);
  const database = getDatabase(app);
  const watchedMoviesRef = ref(database, `watchedMovies/${user.uid}/movies`);

  push(watchedMoviesRef, movie);
}

// Видалення фільму зі списку подивлених
function removeFromWatchedMovies(app, movieId) {
  const user = getUser(app);
  const database = getDatabase(app);
  const watchedMoviesRef = ref(database, `watchedMovies/${user.uid}/movies`);

  const query = orderByChild(watchedMoviesRef, 'id').equalTo(movieId);

  get(query).then(snapshot => {
    snapshot.forEach(childSnapshot => {
      const movieRef = ref(childSnapshot.ref);
      remove(movieRef)
        .then(() => {
          console.log(`Movie with id ${movieId} removed from watched list`);
        })
        .catch(error => {
          console.log(
            `Error removing movie with id ${movieId}: ${error.message}`
          );
        });
    });
  });
}

export { signUpWithGoogle, signOutFromGoogle };
