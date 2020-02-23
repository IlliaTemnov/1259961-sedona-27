var link = document.querySelector(".buttonreserve");
var popup = document.querySelector(".search-form");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("lift-down");
    popup.classList.toggle("lift-up");
});
