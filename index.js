const nav = document.querySelector("nav");
const ul = nav.querySelector("ul");
const openBars = nav.querySelector(".fa-bars");
const closebars = nav.querySelector(".fa-xmark");

openBars.onclick = () => {
  ul.classList.toggle("menu");
};
closebars.onclick = () => {
  ul.classList.toggle("menu");
};

// change the background of the home section
const homesection = document.querySelector(".homesection");

var images = [
  "./images/bgimages/1.jpg",
  "./images/bgimages/2.jpg",
  "./images/bgimages/3.jpg",
  "./images/bgimages/4.jpg",
  "./images/bgimages/5.jpg",
  "./images/bgimages/6.jpg",
  "./images/bgimages/7.jpg",
  "./images/bgimages/8.jpg",
  "./images/bgimages/9.jpg",
  "./images/bgimages/10.jpg",
  "./images/bgimages/11.jpg",
];



// change the navigation to sticky on scroll

var prevoius = window.pageYOffset;
window.onscroll = () => {
  var current = window.pageYOffset;

  if (prevoius > current) {
    nav.style.top = "0";
    document.querySelector(".image").style.backgroundColor = "white";
    nav.style.transition = "1s";
  } else {
    nav.style.top = "-70px";
  }
  prevoius = current;
};

// pre;loader
var preloader = document.querySelector("#preloader");

const preloaderfunction = () => {
  preloader.style.display = "none";
};
window.addEventListener("load", preloaderfunction);

// smooth scroll

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hidden = document.querySelectorAll(".hidden");
hidden.forEach((el) => {
  observer.observe(el);
});

const page = window.location;
