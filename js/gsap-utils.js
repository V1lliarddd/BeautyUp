import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export function splitNavBarLetters() {
  const splitNavigationText = new SplitText(`#main__navigation-nav-element`, {
    type: "chars",
  });
  return splitNavigationText;
}
