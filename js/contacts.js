import {
  animateContactInfoBlock,
  animateTitleOnContactsPage,
} from "./gsap-animations";
import { splitTextOnChars } from "./gsap-utils";

fetch("../ui/header.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("header").innerHTML = html;
    updateNavBar(2);
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

const titleAccent = document.getElementById("contacts__title-accent");

const infoData = new Map();
infoData.set("Адрес", "г.Москва, ул. Пушкина, 21");
infoData.set("Номер телефона", "8(800)-555-35-35");
infoData.set("Email", "beautyUp@mail.ru");
infoData.set("Telegram", "@beautyUpShop");

const titleAccentChars = splitTextOnChars(titleAccent);

animateTitleOnContactsPage(titleAccentChars.chars);

const contactsInfoBlocks = document.querySelectorAll(
  ".contacts__info-block-name",
);

const contactsInfoBlockReveal = document.getElementById(
  "contacts__info-block-hover-reveal",
);
