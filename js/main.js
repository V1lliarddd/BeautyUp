import { changeNavBarBackgroundImage } from "./gsap-animations";
import { getModuleElement } from "./utils";
import { toggleBurgerMenu } from "./header";

await getModuleElement("header", 0);
await getModuleElement("footer");
await toggleBurgerMenu();

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
