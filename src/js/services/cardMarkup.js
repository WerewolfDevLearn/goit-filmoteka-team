export function cardMarkup({id, genreString, title, rating, releaseFullYear, posterPath}){
return `<li class="card__item" id="${id}">
              <div class="card__link">
                <img class="card__image" src="${posterPath}" alt="Зображення постера фільму ${title}" loading="lazy"/>
                <h2 class="card__name">${title}</h2>
                <div class="card__info">
                <p class="card__genres">${genreString} | ${releaseFullYear}</p>
                <p class="card__rating">${rating}</p>
              </div>
        </li>`
}