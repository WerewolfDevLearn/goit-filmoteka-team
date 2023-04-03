export function cardMarkup({id, genreString, title, rating, releaseFullYear, posterPath, classStatus}){
return `<li class="card__item" id="${id}">
              <div class="card__container">
                <img class="card__image" src="${posterPath}" alt="Зображення постера фільму ${title}" loading="lazy"/>
                <div class="card__wrap">
                  <div class="card__activator ${classStatus}">
                    <h2 class="card__name" >${title}</h2>
                  </div>
                </div>
                <div class="card__info">
                <p class="card__genres">${genreString} | ${releaseFullYear}</p>
                <p class="card__rating">${rating}</p>
              </div>
        </li>`
}