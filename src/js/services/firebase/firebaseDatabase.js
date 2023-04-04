import { getDatabase, ref, set, child, get, update } from 'firebase/database';
import { STATE } from '../../components/state.js';

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
