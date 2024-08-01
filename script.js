const priceInput = document.querySelector("#price-range");
const priceText = document.querySelector(".price-text");
const priceMonth = document.querySelector(".price-month");
const viewsText = document.querySelector(".views");
const checkbox = document.querySelector("#yearly-billing");

const pricePerVisit = 0.00016;

setPriceInputBackground();
priceInput.addEventListener("input", (event) => {
  setPriceInputBackground();
  setPrice();
});

checkbox.addEventListener("input", (event) => {
  setPrice();
});

function setPrice() {
  viewsText.textContent = priceInput.value;
  let currentPrice = priceInput.value * 1000 * pricePerVisit;
  if (checkbox.checked) {
    currentPrice = currentPrice * 0.75 * 12;
    priceMonth.textContent = "/ year";
  } else {
    priceMonth.textContent = "/ month";
  }
  priceText.textContent = `$${currentPrice.toFixed(2)}`;
}

function setPriceInputBackground() {
  const value =
    ((priceInput.value - priceInput.min) / (priceInput.max - priceInput.min)) *
    100;
  priceInput.style.setProperty("--value", `${value}%`);
}
