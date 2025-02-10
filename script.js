const nav = document.querySelector(".header ul");
const sl = document.querySelector(".socialLinks");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");

//opens the menu by clicking the menu icon
menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
  sl.classList.toggle("active");
});

//closes the menu by clicking the navigation
nav.addEventListener("click", () => {
  menu.classList.remove("active");
  nav.classList.remove("active");
  sl.classList.remove("active");
});

//closes the navigation by clicking the main body
main.addEventListener("click", () => {
  menu.classList.remove("active");
  nav.classList.remove("active");
  sl.classList.remove("active");
});

//animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hidden = document.querySelectorAll(".hidden");
hidden.forEach((e1) => observer.observe(e1));

//alerting user that the function is unavailable
const unavailable = document.querySelector(".notAvailable");

if (unavailable) {
  unavailable.addEventListener("click", (event) => {
    alert("Resume Not Available for Now, Thank You!");
  });
}
