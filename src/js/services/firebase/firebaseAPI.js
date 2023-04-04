import { STATE } from '../../components/state';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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
    console.log('STATE: ', STATE);
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
    console.log('STATE: ', STATE);
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
    console.log('STATE: ', STATE);
  } catch (error) {
    const errorCode = error.code;
    console.log('signOut errorCode: ', errorCode);
    const errorMessage = error.message;
    console.log('signOut errorMessage: ', errorMessage);
  }
}
console.log('ura');
