let changeThemeButtons = document.querySelectorAll('.theme-change');

changeThemeButtons.forEach(button => {
  button.addEventListener('click', function () {
    applyTheme(this.dataset.theme);
    localStorage.setItem('theme', this.dataset.theme);
  });
});

function applyTheme(themeName) {
  let themeUrl = `css/_${themeName}-theme.css`;
  document.querySelector('[title="theme"]').setAttribute('href', themeUrl);
}

let activeTheme = localStorage.getItem('theme');
if (activeTheme === null) {
  applyTheme('light');
} else {
  applyTheme(activeTheme);
}
