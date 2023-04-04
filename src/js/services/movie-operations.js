export function addMovieToStorage(obj) {
  console.log(`Add Movie ${obj}`);
}

export function removeMovieToStorage(obj) {
  console.log(`Delete Movie ${obj}`);
}

export function btnSwitcher(bool) {
  const librBtnEl = document.querySelector('.js-my-library-btn');
  const signinBtnEl = document.querySelector('.registration-menu-singBtn');
  const loginBtnEl = document.querySelector('.registration-menu-logBtn');

  if (bool) {
    librBtnEl.href = '/library.html';
    librBtnEl.style.cursor = 'pointer';
    signinBtnEl.disabled = false;
    signinBtnEl.style.cursor = 'default';
    loginBtnEl.disabled = false;
    loginBtnEl.style.cursor = 'default';
  } else {
    librBtnEl.href = '#';
    librBtnEl.style.cursor = 'default';
    signinBtnEl.disabled = true;
    signinBtnEl.style.cursor = 'pointer';
    loginBtnEl.disabled = true;
    loginBtnEl.style.cursor = 'pointer';
  }
}
