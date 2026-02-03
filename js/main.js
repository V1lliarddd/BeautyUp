import { changeNavBarBackgroundImage } from "./gsap-animations";
import { toggleBurgerMenu } from "./header";
import { getModuleElement } from "./utils";

await getModuleElement("header", 0);
await getModuleElement("footer");
toggleBurgerMenu();

const navigationElements = document.querySelectorAll(
  ".main__navigation-nav-element",
);

const content = document.getElementById("content");

const productName = document.getElementById("main__product-name");

const productDesc = document.getElementById("main__product-desc");

navigationElements.forEach((navElement, id) => {
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
