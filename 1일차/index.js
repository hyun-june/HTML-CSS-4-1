const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");

let searchInputStatus = false;

searchBtn.addEventListener("click", () => {
  searchInputStatus = !searchInputStatus;
  if (!searchInputStatus) {
    searchInput.style.display = "none";
  } else {
    searchInput.style.display = "block";
  }
});

const infoBtn = document.getElementById("info-btn");
const infoIcon = document.getElementById("info-icon");
const table = document.querySelector("table");

let infoStatus = false;

infoBtn.addEventListener("click", () => {
  infoStatus = !infoStatus;
  if (!infoStatus) {
    table.style.display = "none";
    infoIcon.textContent = "▶";
  } else {
    table.style.display = "table";
    infoIcon.textContent = "▼";
  }
});
