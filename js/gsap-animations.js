import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import {
  getElementFullAndShortName,
  getElementNameAndDescription,
  getNavElementProperWidth,
} from "./utils";

gsap.registerPlugin(TextPlugin);

export function animateMainNavBar(navElement, action, id) {
  gsap.killTweensOf(navElement.children);
  gsap
    .timeline()
    .to(navElement.children[0], {
      width:
        action === "mouseover"
          ? getNavElementProperWidth(id).firstWordWidth
          : "30px",
      duration: 0.7,
    })
    .to(
      navElement.children[0],
      {
        text: {
          value:
            action === "mouseover"
              ? getElementFullAndShortName(id, false)[0]
              : getElementFullAndShortName(id, true)[0],
          speed: 0.3,
        },
      },
      "<",
    )
    .to(
      navElement.children[1],
      {
        width:
          action === "mouseover"
            ? getNavElementProperWidth(id).secondWordWidth
            : "30px",
        duration: 0.7,
      },
      "<",
    )
    .to(
      navElement.children[1],
      {
        text: {
          value:
            action === "mouseover"
              ? getElementFullAndShortName(id, false)[1]
              : getElementFullAndShortName(id, true)[1],
          speed: 0.5,
        },
      },
      "<",
    );
}

export function changeNavBarBackgroundImage(
  navElement,
  container,
  id,
  productName,
  productDesc,
) {
  document
    .querySelector(".main__navigation-nav-element--active")
    .classList.remove("main__navigation-nav-element--active");
  navElement.classList.add("main__navigation-nav-element--active");

  gsap
    .timeline()
    .to(container, {
      filter: "blur(20px)",
      duration: 0.5,
    })
    .set(container, {
      backgroundImage: `url(../images/product-${id + 1}.jpg)`,
    })
    .to(container, {
      filter: "blur(0px)",
      duration: 0.5,
    })
    .to(
      productName,
      {
        text: {
          value: getElementNameAndDescription(id)[0],
        },
      },
      "<",
    )
    .to(
      productDesc,
      {
        text: {
          value: getElementNameAndDescription(id)[1],
        },
      },
      "<",
    );
}
