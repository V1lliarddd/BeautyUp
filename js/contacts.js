import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({ infinite: true });
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

const contactInfo = document.querySelector(".main__contacts");
const contactRowMaxGap = 5;

for (let index = 0; index < 10; index++) {
  const clone = contactInfo.cloneNode(true);
  contactInfo.parentElement.appendChild(clone);
}
