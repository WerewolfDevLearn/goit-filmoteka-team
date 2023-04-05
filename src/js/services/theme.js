const bodyRef = document.querySelector('body');
const switchRef = document.querySelector('input#theme-switch-control');

const savedTheme = localStorage.getItem('theme');
const savedChecked = localStorage.getItem('checked');

if (savedTheme) {
  bodyRef.classList.add(savedTheme);
  switchRef.checked = JSON.parse(savedChecked);
}

switchRef.addEventListener('change', event => {
  if (event.target.checked) {
    swithedDarkTheme();
  } else {
    swithedWhiteTheme();
  }
});

function swithedWhiteTheme() {
  bodyRef.classList.add('light-theme');
  bodyRef.classList.remove('dark-theme');
  localStorage.setItem('theme', 'light-theme');
  localStorage.setItem('checked', 'false');
}
function swithedDarkTheme() {
  bodyRef.classList.add('dark-theme');
  bodyRef.classList.remove('light-theme');
  localStorage.setItem('theme', 'dark-theme');
  localStorage.setItem('checked', 'true');
}
