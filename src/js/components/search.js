const searchForm = document.querySelector('.blockHome');
console.log(searchForm);
const inputQuere = searchForm[0];
const buttonQuere = searchForm[1];

searchForm.addEventListener('click', handlerSearch);
function handlerSearch(e) {
  e.preventDefault();
  inputQuere.value;
}
