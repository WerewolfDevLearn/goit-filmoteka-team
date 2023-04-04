const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('open-modal');
const closeBtn = document.querySelector('.close-btn');
const movieRating = document.querySelector('.movie-rating');
const apiKey = '7f0dad748ff7b4eb073bc2aebbf95174';

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  const movieId = 129; // Заменить 123 на id фильма, данные которого нужно получить

  fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
  )
    .then(response => response.json())
    .then(data => {
      const rating = data.vote_average;
      const ratingElement = document.createElement('div');
      ratingElement.classList.add('movie-rating');

      const ratingNumber = document.createElement('div');
      ratingNumber.classList.add('rating-number');
      ratingNumber.textContent = rating.toFixed(1);

      const ratingStarsContainer = document.createElement('div');
      ratingStarsContainer.classList.add('rating-stars-container');

      const fullStarCount = Math.floor(rating);
      const halfStar = rating - fullStarCount > 0;

      for (let i = 0; i < 10; i++) {
        const star = document.createElement('div');
        star.classList.add('rating-star');
        if (i < fullStarCount) {
          star.classList.add('full');
        } else if (halfStar && i === fullStarCount) {
          star.style.background = `linear-gradient(to right, #ff6b01 50%, transparent 50%)`;
        }
        ratingStarsContainer.appendChild(star);
      }
      // ratingElement.appendChild(ratingNumber);   // отображает цифры рядом с кружочками
      ratingElement.appendChild(ratingStarsContainer);
      movieRating.innerHTML = '';
      movieRating.appendChild(ratingElement);

      movieRating.style.display = 'block';
    })
    .catch(error => console.error(error));
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  movieRating.innerHTML = '';
});
window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
    movieRating.innerHTML = '';
  }
});
