import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import { getElementInfo } from "./utils";

gsap.registerPlugin(TextPlugin);

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
  navElement.style.backgroundColor = getElementInfo(id)[2];

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
          value: getElementInfo(id)[0],
        },
      },
      "<",
    )
    .to(
      productDesc,
      {
        text: {
          value: getElementInfo(id)[1],
        },
      },
      "<",
    );
}

export function animateTitleOnContactsPage(chars) {
  gsap.timeline().fromTo(
    chars,
    {
      opacity: 0,
      y: -30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.2,
    },
  );
}

export function animateContactInfoBlock(
  infoBlockText,
  infoBlockDataMap,
  infoBlockReveal,
  action,
) {
  gsap.fromTo(infoBlockReveal, {}, {});
}
