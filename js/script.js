var btn = document.querySelector(".button-search-form");
var form = document.querySelector(".search-form");

var datein = form.querySelector("[name=datein]");
var dateout = form.querySelector("[name=dateout]");
var adult = form.querySelector("[name=adult]");
var child = form.querySelector("[name=child]");


btn.addEventListener("click", function(evt) {
evt.preventDefault( );
form.classList.toggle("open-search-form");
})

form.addEventListener("submit", function (evt) {
  if (!datein.value || !dateout.value || !adult.value || !child.value) {
    evt.preventDefault();
    console.log("Нужно внести данные для поиска");
  }
});
