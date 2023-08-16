const cards = document.querySelectorAll("article[data-id='card']");

const handleCardClick = function (event) {
  if (event.target.tagName === "A") return;
  const headerTitle = this.querySelector("h3").textContent.trim();
  alert(`Kliknąłeś w kartę ${headerTitle}.`);
};

cards.forEach((card) =>
  card.addEventListener("click", function (event) {
    handleCardClick.call(this, event);
  })
);
