import {
  animateContactInfoBlock,
  animateTitleOnContactsPage,
} from "./gsap-animations";
import { splitTextOnChars } from "./gsap-utils";

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
