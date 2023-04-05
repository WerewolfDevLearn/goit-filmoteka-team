import { STATE } from '../../components/state';
import { firebaseConfig } from './firebase-config';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { islogin } from '../islogin';
import { switchBTNs } from '../swith-buttons';
import { save } from '../library-storage';
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// ↓↓↓ Это для гугл авторизации
export const provider = new GoogleAuthProvider()

export async function userCreation(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log('user: ', user);
    STATE.user.uid = userCredential.user.uid;
    save('STATE', STATE);
    console.log('STATE: ', STATE);
    switchBTNs(islogin(STATE.user.uid));
    return STATE;
  } catch (error) {
    const errorCode = error.code;
    console.log('userCreation errorCode: ', errorCode);
    const errorMessage = error.message;
    console.log('userCreation errorMessage: ', errorMessage);
  }
}

export async function sinInWithEmailPassword(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user.uid);
    STATE.user.uid = userCredential.user.uid;
    save('STATE', STATE);
    switchBTNs(islogin(STATE.user.uid));
    return STATE;
  } catch (error) {
    const errorCode = error.code;
    console.log('sinInWithEmailPassword errorCode: ', errorCode);
    const errorMessage = error.message;
    console.log('sinInWithEmailPassword errorMessage: ', errorMessage);
  }
}

export async function signInWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    STATE.user.uid = userCredential.user.uid;
    console.log('STATE: ', STATE);
    save('STATE', STATE);
    switchBTNs(islogin(STATE.user.uid));
    return STATE;
  } catch (error) {
    const errorCode = error.code;
    console.log('userCreation errorCode: ', errorCode);
    const errorMessage = error.message;
    console.log('userCreation errorMessage: ', errorMessage);
  }
}

export async function signOut() {
  try {
    const response = await signOut(auth);
    STATE.user = { uid: '', movies: [] };
    switchBTNs(islogin(STATE.user.uid));
    console.log('STATE: ', STATE);
    localStorage.removeItem('STATE')
    return STATE;
  } catch (error) {
    const errorCode = error.code;
    console.log('signOut errorCode: ', errorCode);
    const errorMessage = error.message;
    console.log('signOut errorMessage: ', errorMessage);
  }
}
