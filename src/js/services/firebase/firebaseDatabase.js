import { STATE } from '../../components/state.js';
import { firebaseConfig } from './firebase-config.js';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set, child, get, update } from 'firebase/database';
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export async function writeUserData(data) {
  try {
    const setdata = await set(ref(database, `users/${data.uid}`), data);
  } catch (error) {
    const errorCode = error.code;
    console.log('writeUserData errorCode: ', errorCode);
    const errorMessage = error.message;
    console.log('writeUserData errorMessage: ', errorMessage);
  }
}
export async function getUserData(userId) {
  try {
    return (respons = await get(ref(database, 'users/' + userId)).then(
      snapshot => snapshot.val()
    ));
  } catch (error) {
    const errorCode = error.code;
    console.log('getUserData errorCode: ', errorCode);
    const errorMessage = error.message;
    console.log('getUserData errorMessage: ', errorMessage);
  }
}
