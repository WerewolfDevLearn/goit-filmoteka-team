var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r);var i=r("329sq");r("eSZ1C"),r("hRQuy"),r("dwnmo");var n=r("g8QMV");r("6WJPL");var l=r("dBMb9"),o=r("2bQ3f");r("7fUyS");var s=r("gBKt4");window.addEventListener("load",i.removeGlobalLoader);document.querySelector(".isDisabled-js").classList.remove("isDisabled-js");document.querySelector(".gallery");const c=document.querySelector("[data-action='watched']"),d=document.querySelector("[data-action='queue']");function u(e){return console.log(e),e.map((({id:e,genre_ids:t,title:a,vote_average:r,vote_count:i,popularity:l,original_title:o,overview:s,poster_path:c})=>{const d=(0,n.default)(c);return function({id:e,genreString:t,title:a,rating:r,vote_count:i,releaseFullYear:n,posterPath:l,classStatus:o,popularity:s,original_title:c,overview:d}){return`<li class="card__item" id="${e}">\n              <div class="card__container">\n                <img class="card__image" src="${l}" alt="Зображення постера фільму ${a}" loading="lazy"/>\n                <div class="card__wrap">\n                  <div class="card__activator ${o}">\n                    <h2 class="card__name">${a}</h2>\n                  </div>\n                </div>\n                <div class="card__info">\n                <p class="card__rating">Vote / Votes ${r} / ${i}</p>\n                <p class="card__popularity">Popularity ${s}</p>\n                <p class="card__originaltitle">Original Title ${c}</p>\n                <p class="card__genres">Genre ${t}</p>\n                <p class="card__about">About ${d}</p>\n              </div>\n        </li>`}({id:e,genreString:genreString,title:a,rating:rating,vote_count:i,releaseFullYear:releaseFullYear,posterPath:d,classStatus:classStatus,popularity:l,original_title:o,overview:s})})).join("")}c.addEventListener("click",(function(){const e=(0,o.load)("STATE").user.movies.watched;u(e),console.log("createbigCardMarkup(watchedMV);: ",u(e))})),d.addEventListener("click",(function(){u(l.STATE.user.movies.qeue)})),s.refs.filmCardListEl.addEventListener("click",s.createFilmModal);
//# sourceMappingURL=library.0f14870d.js.map
