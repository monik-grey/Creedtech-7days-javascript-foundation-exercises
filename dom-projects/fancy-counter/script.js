const counterValue = document.querySelector(".counter__value");
const increaseBtn = document.querySelector(".counter__button--increase");
const decreaseBtn = document.querySelector(".counter__button--decrease");
const resetBtn = document.querySelector(".counter__reset-button");
const counterTitle = document.querySelector(".counter__title");
const counterCard = document.querySelector(".counter");

let count = 0;
const limit = 5;

function updateCounter() {
  counterValue.textContent = count;

  if (count === limit) {
    counterTitle.textContent = "Limit! Buy Pro for > 5";
    counterCard.classList.add("counter--limit");
  } else {
    counterTitle.textContent = "Fancy Counter";
    counterCard.classList.remove("counter--limit");
  }
}

increaseBtn.addEventListener("click", () => {
  if (count < limit){
  count++;
  }
  updateCounter();
});

// new feature
decreaseBtn.addEventListener("click", () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});