function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttons.classList.remove('floating-buttons--hidden');
  } else {
    buttons.classList.add('floating-buttons--hidden');
  }
}

window.onscroll = function () {
  scrollFunction();
};

const homeBtn = document.querySelector('.js-home-btn');
const scrollTopBtn = document.querySelector('.js-scroll-btn');
const buttons = document.querySelector('.js-floating-buttons');

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

homeBtn.addEventListener('click', () => {
  // add home function
});
scrollTopBtn.addEventListener('click', scrollToTop);
