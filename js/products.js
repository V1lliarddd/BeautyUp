import {
  animateSliderSection,
  changeBgColorOnSlider,
  changeProductName,
} from "./gsap-animations";

fetch("../ui/header.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("header").innerHTML = html;
    updateNavBar(1);
  });

fetch("../ui/footer.html")
  .then((res) => res.text())
  .then((html) => (document.getElementById("footer").innerHTML = html));

function updateNavBar(pageIndex) {
  const navigationElements = document.querySelectorAll(
    ".header__nav-bar-element",
  );
  document
    .querySelector(".header__nav-bar-element--active")
    .classList.remove("header__nav-bar-element--active");

  navigationElements[pageIndex].classList.add(
    "header__nav-bar-element--active",
  );
}

function placeProducts() {
  const cards = document.querySelectorAll(".card");
  const scrollSection = document.querySelector(".scroll-section");
  const cardsGap = 15;
  const cardsScrollSectionWidth =
    cards.length * cards[0].offsetWidth + (cards.length - 1) * cardsGap;

  const cardsScrollSection =
    (scrollSection.style.width = `${cardsScrollSectionWidth}px`);
  cards.forEach((card, index) => {
    if (index === 0) {
      card.style.left = `${index * card.offsetWidth}px`;
    } else {
      card.style.left = `${index * card.offsetWidth + index * cardsGap}px`;
    }
    card.addEventListener("mouseover", () => {
      changeBgColorOnSlider(card);
      changeProductName(card);
    });
  });

  animateSliderSection();
}

placeProducts();
