const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");

// add fixed class to navbar
window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
    }
});

// show sidebar
navBtn.addEventListener("click", function () {
    sidebar.classList.add("show-sidebar");
});

// close sidebar
closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
});

// set year
date.innerHTML = new Date().getFullYear();






// var currentIndex = 1;

// function displaySlide(n) {
//   currentIndex = n;
//   var slides = document.getElementsByClassName("slide");
//   var dots = document.getElementsByClassName("dot");
//   var slno = document.getElementById("slide-no");

//   if (currentIndex > slides.length) {
//     currentIndex = 1;
//   }
//   if (currentIndex < 1) {
//     currentIndex = slides.length;
//   }
//   for (var i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//     dots[i].className = dots[i].className.replace(" active", "");
//   }

//   slides[currentIndex - 1].style.display = "block";
//   dots[currentIndex - 1].className = "dot active";
//   slno.innerHTML = currentIndex + "/" + slides.length;
// }

// displaySlide(currentIndex);

// function changeSlide(n) {
//   currentIndex += n;
//   displaySlide(currentIndex);
// }

// function currentSlide(n) {
//   displaySlide(n);
// }




function classSwitcher(){
  slides.forEach(slide => slide.classList.remove("active"))
  points.forEach(point => point.classList.remove("active"))
  slides[active].classList.add("active")
  points[active].classList.add("active")
}
let goNext = () =>{
  active = (active == slides.length - 1) ? 0 : active + 1
  classSwitcher()
}

let goPrev = () => {
  active = (active == 0) ? slides.length - 1 : active - 1
  classSwitcher()
}

let active = 0
let timer = 4000
let slideShow = document.querySelector(".slideshow")
let slides = document.querySelectorAll(".slide")
let points = document.querySelectorAll(".points > span")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")

let runSlideShow = setInterval(goNext, timer)

points.forEach((point, index) => {
  point.addEventListener("click", e => {
      active = index
      classSwitcher()
  })
})

next.addEventListener("click", e => goNext())

prev.addEventListener("click", e => goPrev())

slideShow.addEventListener("mouseover", e => clearInterval(runSlideShow))

slideShow.addEventListener("mouseleave", e => runSlideShow = setInterval(goNext, timer))