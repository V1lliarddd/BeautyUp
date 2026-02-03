import { toggleBurgerMenuAnimation } from "./gsap-animations";

export function toggleBurgerMenu() {
  document.addEventListener("DOMContentLoaded", () => {
    const openBurgerMenuBtn = document.getElementById("menu__burger-icon-open");
    const burgerMenu = document.getElementById("burger-menu");
    openBurgerMenuBtn.addEventListener("click", () => {
      toggleBurgerMenuAnimation(burgerMenu);
    });
  });
}
