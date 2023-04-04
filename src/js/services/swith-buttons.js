const myLibrary = document.querySelector('.js-my-library-btn');
const registrationBtn = document.querySelector('.registrationBtn-container');

export function switchBTNs(boolean) {
  if (boolean) {
    myLibrary.classList.remove('isDisabled-js');
    registrationBtn.classList.add('isDisplayNone-js');
  } else {
    myLibrary.classList.add('isDisabled-js');
    registrationBtn.classList.remove('isDisplayNone-js');
  }
}
