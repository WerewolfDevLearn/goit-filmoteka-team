// const modal = document.getElementById('modal'); // это запрос на тренировочную модалку
const openModalBtn = document.getElementById('open-modal');
const closeBtn = document.querySelector('.close-btn');
const movieRating = document.querySelector('.movie-rating');
const apiKey = '7f0dad748ff7b4eb073bc2aebbf95174';

// В этой функции свойство display модального окна устанавливается на block, чтобы показать модальное окно.
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  const movieId = 125; // Заменить 123 на id фильма, данные которого нужно получить

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

      // Проверяем, должна ли звезда быть заполненной или пустой, сравнивая значение переменной i с округленным
      // значением переменной rating.Если i меньше, чем округленное значение rating, то звезда должна быть
      // заполнена, и мы добавляем к ней класс full.
      for (let i = 0; i < 10; i++) {
        const star = document.createElement('div');
        star.classList.add('rating-star');
        if (i < fullStarCount) {
          star.classList.add('full');
        } else if (halfStar && i === fullStarCount) {
          star.style.background = `linear-gradient(to right, #ffdd00 50%, transparent 50%)`;
        }
        // добавляем элемент звезды в родительский элемент ratingStarsContainer.
        ratingStarsContainer.appendChild(star);
      }
      // добавляем элементы ratingNumber и ratingStarsContainer в родительский элемент ratingElement.
      ratingElement.appendChild(ratingNumber);
      ratingElement.appendChild(ratingStarsContainer);

      // добавляем элемент ratingElement в родительский элемент movieRating.
      movieRating.appendChild(ratingElement);

      // устанавливаем display: block для movieRating, чтобы отобразить рейтинг фильма.
      movieRating.style.display = 'block';
    })
    .catch(error => console.error(error));
});

// Функция, добавленная в слушатель событий кнопки closeBtn, вызывается при нажатии на кнопку закрытия
// модального окна. В этой функции свойство display модального окна устанавливается на none, чтобы скрыть
// модальное окно. Затем контейнер movieRating очищается, чтобы удалить рейтинг фильма.
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
