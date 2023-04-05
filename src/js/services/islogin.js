import { STATE } from '../components/state';

export function islogin() {
  console.log('STATE.user.uid: ', STATE.user.uid);
  if (STATE.user.uid) {
    return true;
  }
  return false;
}
