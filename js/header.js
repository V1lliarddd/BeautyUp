import { toggleBurgerMenuAnimation } from "./gsap-animations";

export async function toggleBurgerMenu() {
  const openBurgerMenuBtn = document.querySelector(".menu__burger-icon-open");
  const closeBurgerMenuBtn = document.querySelector(".menu__burger-icon-close");
  const burgerMenu = document.querySelector(".burger-menu");
  openBurgerMenuBtn.addEventListener("click", () => {
    toggleBurgerMenuAnimation(burgerMenu, "open");
  });
  closeBurgerMenuBtn.addEventListener("click", () => {
    toggleBurgerMenuAnimation(burgerMenu, "close");
  });
}
