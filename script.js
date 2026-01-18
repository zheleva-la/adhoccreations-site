const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");

if (toggle && header) {
  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}
