var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var i=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=i);var n=i("329sq");i("eSZ1C");var a=i("hRQuy"),o=i("dwnmo"),l=i("g8QMV");i("6WJPL"),i("dBMb9");var d=i("2bQ3f");i("7fUyS");var s=i("gBKt4");i("ahn2g"),i("6WJPL"),i("iAg3j"),window.addEventListener("load",n.removeGlobalLoader);document.querySelector(".isDisabled-js").classList.remove("isDisabled-js");const c=document.querySelector(".gallery"),u=document.querySelector(".library_background_contsiner"),v=document.querySelector("[data-action='watched']"),f=document.querySelector("[data-action='queue']");function g(e){return e.map((({id:e,genres:t,title:r,vote_average:i,vote_count:n,release_date:d,popularity:s,original_title:c,overview:u,poster_path:v})=>{const f=function(e){if(e.length<=33){return"isNoActive"}return"isActive"}(r.split("")),g=(0,l.default)(v),p=d.split("-")[0],y=i.toFixed(1),L=(0,a.genresSearchBig)(t);return(0,o.cardMarkup)({id:e,genreString:L,title:r,rating:y,vote_count:n,releaseFullYear:p,posterPath:g,classStatus:f,popularity:s,original_title:c,overview:u})})).join("")}v.addEventListener("click",(function(){const e=(0,d.load)("STATE").user.movies.watched;e&&u.classList.add("visually-hidden");c.innerHTML="",c.insertAdjacentHTML("afterbegin",g(e))})),f.addEventListener("click",(function(){const e=(0,d.load)("STATE").user.movies.qeue;e&&u.classList.add("visually-hidden");c.innerHTML="",c.insertAdjacentHTML("afterbegin",g(e))})),s.refs.filmCardListEl.addEventListener("click",s.createFilmModal);
//# sourceMappingURL=library.606ccbb0.js.map
