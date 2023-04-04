import { STATE } from '../../components/state.js';
import { firebaseConfig } from './firebase-config.js';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set, child, get, update } from 'firebase/database';
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
console.log('database: ', database);
