
const textarea = document.querySelector(".textarea");
const wordsEl = document.querySelector(".stat__number--words");
const charactersEl = document.querySelector(".stat__number--characters");
const twitterEl = document.querySelector(".stat__number--twitter");
const facebookEl = document.querySelector(".stat__number--facebook");

const twitterLimit = 280;
const facebookLimit = 2200;

textarea.addEventListener("input", function () {
  let text = textarea.value;

  // NEW FEATURES ADDED: Stop typing after Facebook limit 
  if (text.length > facebookLimit) {
    text = text.slice(0, facebookLimit);
    textarea.value = text;
  }

  // Character count
  const characters = text.length;
  charactersEl.textContent = characters;

  // Word count
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  wordsEl.textContent = words;

  // Remaining limits
  const twitterRemaining = Math.max(0, twitterLimit - characters);
  const facebookRemaining = Math.max(0, facebookLimit - characters);

  twitterEl.textContent = twitterRemaining;
  facebookEl.textContent = facebookRemaining;

  // NEW FEATURES ADDED
  // Turn Twitter red when limit reached
  if (characters >= twitterLimit) {
    twitterEl.classList.add("stat__number--limit");
  } else {
    twitterEl.classList.remove("stat__number--limit");
  }

  // Turn Facebook red when limit reached
  if (characters >= facebookLimit) {
    facebookEl.classList.add("stat__number--limit");
  } else {
    facebookEl.classList.remove("stat__number--limit");
  }
});