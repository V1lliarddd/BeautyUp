import {
  animateSliderSection,
  changeBgColorOnSlider,
  changeProductName,
} from "./gsap-animations";
import { getModuleElement } from "./utils";

getModuleElement("header", 1);
getModuleElement("footer");

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
