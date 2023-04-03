import { initializeApp } from 'firebase/app';
import {
  signOut,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { getDatabase, ref, set, child, get, update } from 'firebase/database';
import { STATE } from '../components/state.js';
const firebaseConfig = {
  apiKey: 'AIzaSyD1f7-xsDqjaWiOp-IJkjjzcgXg8ipn8oM',
  authDomain: 'learn-firebase-d73bf.firebaseapp.com',
  databaseURL:
    'https://learn-firebase-d73bf-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'learn-firebase-d73bf',
  storageBucket: 'learn-firebase-d73bf.appspot.com',
  messagingSenderId: '770423622217',
  appId: '1:770423622217:web:ab511cd770f16c86e48d98',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

onAuthStateChanged(auth, user => {
  if (user) {
    STATE.user.uid = `${user.uid}`;
    console.log(`STATE.user.uid при смене состояния ${STATE.user.uid}`);
    onLoginSubmit();
  } else {
    console.log('You are not logged in');
  }
});

// export function sendData(keyLibrary, movieList) {
//   set(ref(database, `users/${STATE.user.uid}`), {
//     [keyLibrary]: movieList,
//   });
// }

export async function updateData(keyLibrary, movieList) {
  await update(ref(database, `users/${STATE.user.uid}`), {
    [keyLibrary]: movieList,
  });
}

export async function getData(keyLibrary) {
  return await get(ref(database, `users/${STATE.user.uid}/${keyLibrary}`))
    .then(snapshot => {
      if (snapshot.val() === null) return '';
      return snapshot.val();
    })
    .catch(err => {
      console.error(err);
    });
}

function onLoginSubmit() {
  signInWithEmailAndPassword(auth, 'pavellyalkov46@gmail.com', '666666')
    .then(userCredential => {
      const user = userCredential.user;
      console.log(`You are logged in. ${user.email}`);
    })
    .catch(err => {
      if (err.code === 'auth/wrong-password') alert('Wrong password!');
      if (err.code === 'auth/user-not-found') alert('User not found!');
      console.log(err);
    });
}
