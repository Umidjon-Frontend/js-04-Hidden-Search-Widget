const searchBox = document.querySelector(".search-box");
const input = document.querySelector(".search-box .input");
const btnSearch = document.querySelector(".search-box .btn-search");

btnSearch.addEventListener("click", () => {
    searchBox.classList.toggle("active");
    input.focus();
});
