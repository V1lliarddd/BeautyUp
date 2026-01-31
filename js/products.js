fetch("../ui/header.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("header").innerHTML = html;
    updateNavBar(1);
  });

fetch("../ui/footer.html")
  .then((res) => res.text())
  .then((html) => (document.getElementById("footer").innerHTML = html));

function updateNavBar(pageIndex) {
  const navigationElements = document.querySelectorAll(
    ".header__nav-bar-element",
  );
  document
    .querySelector(".header__nav-bar-element--active")
    .classList.remove("header__nav-bar-element--active");

  navigationElements[pageIndex].classList.add(
    "header__nav-bar-element--active",
  );
}
