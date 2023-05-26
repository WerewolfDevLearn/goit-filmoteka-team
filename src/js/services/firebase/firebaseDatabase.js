import { STATE } from '../../components/state.js';
import { firebaseConfig } from './firebase-config.js';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, child, get, onValue } from 'firebase/database';
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export async function writeUserData(data) {
  try {
    const setdata = await set(ref(database, `users/${data.uid}`), data);
    console.log(setdata);
  } catch (error) {
    const errorCode = error.code;
    console.log('writeUserData errorCode: ', errorCode);
    const errorMessage = error.message;
    console.log('writeUserData errorMessage: ', errorMessage);
  }
}
export async function getUserData(userId) {
  try {
    const database = getDatabase(app);

    console.log('userId: ', userId);
    const data = await get(ref(database, 'users/' + userId));
    onValue(data, snapshot => {
      const resp = snapshot.val();
      console.log(resp);
    });
  } catch (error) {
    const errorCode = error.code;
    console.log('getUserData errorCode: ', errorCode);
    const errorMessage = error.message;
    console.log('getUserData errorMessage: ', errorMessage);
  }
}
