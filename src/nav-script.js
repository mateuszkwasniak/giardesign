//nav

const offerDropdown = document.querySelector("div[data-id='offer-dropdown']");
const offerArrow = document.querySelector("div[data-id='offer-dropdown'] img");
const offerLinks = document.querySelector("ul[data-id='offer-links']");
const searchButton = document.querySelector("button[data-id='search-btn']");
const searchInput = document.querySelector(
  "button[data-id='search-btn'] + input"
);

const toggleOfferDropdown = () => {
  offerArrow.classList.toggle("rotate-180");
  offerLinks.classList.toggle("opacity-0");
  offerLinks.classList.toggle("-translate-y-5");
};

const toggleSearchInput = () => {
  searchInput.classList.toggle("scale-x-0");
  searchInput.classList.toggle("w-0");
};

offerDropdown.addEventListener("click", toggleOfferDropdown);
searchButton.addEventListener("click", toggleSearchInput);
