const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  navlist.classList.toggle("active");
};

const sr = ScrollReveal({
  distance: "75px",
  duration: 2700,
  reset: true,
});

sr.reveal(".home-text", { delay: 350, origin: "left" });
sr.reveal(".home-img", { delay: 350, origin: "right" });

sr.reveal(".sub-service, .about, .portfolio, .service, .cta,.contact, .annual-projects, .awarness, .mission-section, .sect, .aware-sect", {
  delay: 200,
  origin: "bottom",
});
