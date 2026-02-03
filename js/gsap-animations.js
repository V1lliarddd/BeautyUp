import gsap from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import { getElementInfo } from "./utils";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export function toggleBurgerMenuAnimation(burgerMenu) {
  gsap
    .timeline()
    .set(burgerMenu, {
      display: "block",
      width: "100%",
      height: "100%",
    })
    .to(burgerMenu, {
      top: 0,
      duration: 0.5,
    });
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
  navElement.style.backgroundColor = getElementInfo(id)[2];

  gsap
    .timeline()
    .to(container, {
      filter: "blur(20px)",
      duration: 0.5,
    })
    .set(container, {
      backgroundImage: `url(../images/index/product-${id + 1}.jpg)`,
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

export function animateSliderSection() {
  const container = document.querySelector(".scroll-container");
  const scrollSection = document.querySelector(".scroll-section");
  const cards = document.querySelectorAll(".card");

  const cardsLength = cards.length;
  const containerWidth = container.offsetWidth;
  const scrollSectionWidth = scrollSection.offsetWidth;

  if (!container || !scrollSection || cardsLength === 0) return;

  function recalculateScrollValue() {
    return scrollSectionWidth - containerWidth;
  }

  container.style.overflowX = "hidden";
  gsap.to(scrollSection, {
    x: () => -1 * recalculateScrollValue(),
    scrollTrigger: {
      trigger: ".container",
      start: "top top",
      end: () => {
        `+=${recalculateScrollValue()}`;
      },
      scrub: 2,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      // onUpdate: () => {
      //   console.log(scrollSection.getBoundingClientRect().left);
      // },
    },
  });
}

export function changeBgColorOnSlider(card) {
  const containerContent = document.querySelector(".container__content");
  gsap.to(containerContent, {
    backgroundColor: card.dataset.bgColor,
    duration: 0.5,
  });
}

export function changeProductName(card) {
  const productNameElement = document.querySelector(".product-info__name");
  gsap.to(productNameElement, {
    text: {
      value: `${card.dataset.name}`,
      speed: 0.7,
    },
  });
}
