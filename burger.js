
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active-h");
  navMenu.classList.toggle("active-h");
})

document.querySelectorAll('a').forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active-h");
  navMenu.classList.remove("active-h");
}))

document.querySelectorAll("html").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active-h")
  navMenu.classList.remove("active-h")
}));

function preventClose(event) {
  event.stopPropagation()
}