import {
  animateMainNavBar,
  changeNavBarBackgroundImage,
} from "./gsap-animations";
import { splitNavBarLetters } from "./gsap-utils";

const navigationElements = document.querySelectorAll(
  ".main__navigation-nav-element",
);

const content = document.getElementById("content");

const productName = document.getElementById("main__product-name");

const productDesc = document.getElementById("main__product-desc");

const splitNavigationText = splitNavBarLetters();

navigationElements.forEach((navElement, id) => {
  navElement.addEventListener("mouseover", (e) => {
    animateMainNavBar(navElement, "mouseover", id);
  });
  navElement.addEventListener("mouseout", (e) => {
    animateMainNavBar(navElement, "mouseout", id);
  });
  navElement.addEventListener("click", (e) => {
    changeNavBarBackgroundImage(
      navElement,
      content,
      id,
      productName,
      productDesc,
    );
  });
});
