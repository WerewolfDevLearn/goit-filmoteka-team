const inputEl = document.querySelector('.header-search');
const line = 'Movie search';
const speed = 150;
const breakTime = 7000;
let i = 0;

export function ticker() {
  setTimeout(() => {
    if (i < line.length) {
      i += 1;
      inputEl.placeholder = line.substring(0, i);
      ticker();
    } else {
      setTimeout(tickerBreakTimeSetter, breakTime);
    }
    return;
  }, speed);
}

export function tickerBreakTimeSetter() {
  inputEl.placeholder = ' ';
  i = 0;
  ticker();
}
