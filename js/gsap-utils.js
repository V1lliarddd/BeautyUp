import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export function splitTextOnChars(element) {
  return new SplitText(element, { type: "chars" });
}
