export function cardMarkup({
  id,
  genreString,
  title,
  rating,
  releaseFullYear,
  posterPath,
  classStatus,
}) {
  return `<li class="card__item" id="${id}">
              <div class="card__container">
                <img class="card__image" src="${posterPath}" alt="Зображення постера фільму ${title}" loading="lazy"/>
                <div class="card__wrap">
                  <div class="card__activator ${classStatus}">
                    <h2 class="card__name">${title}</h2>
                  </div>
                </div>
                <div class="card__info">
                <p class="card__genres">${genreString} | ${releaseFullYear}</p>
                <p class="card__rating">${rating}</p>
              </div>
        </li>`;
}
export function bigCardMarkup({
  id,
  genreString,
  title,
  rating,
  vote_count,
  releaseFullYear,
  posterPath,
  classStatus,
  popularity,
  original_title,
  overview,
}) {
  return `<li class="card__item" id="${id}">
              <div class="card__container">
                <img class="card__image" src="${posterPath}" alt="Зображення постера фільму ${title}" loading="lazy"/>
                <div class="card__wrap">
                  <div class="card__activator ${classStatus}">
                    <h2 class="card__name">${title}</h2>
                  </div>
                </div>
                <div class="card__info">
                <p class="card__rating">Vote / Votes ${rating} / ${vote_count}</p>
                <p class="card__popularity">Popularity ${popularity}</p>
                <p class="card__originaltitle">Original Title ${original_title}</p>
                <p class="card__genres">Genre ${genreString}</p>
                <p class="card__about">About ${overview}</p>
              </div>
        </li>`;
}
