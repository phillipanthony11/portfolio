window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("nav-bar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function openModalOne() {
  document.getElementById("modal1").style.display = "flex";
}
S;
function closeModalOne() {
  document.getElementById("modal1").style.display = "none";
}

var slideIndex = 1;
showSlidesOne(slideIndex);

function plusSlidesOne(n) {
  showSlidesOne((slideIndex += n));
}

function currentSlideOne(n) {
  showSlidesOne((slideIndex = n));
}

function showSlidesOne(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("demo1");
  var captionText = document.getElementsByClassName("caption1");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

function openModalTwo() {
  document.getElementById("modal2").style.display = "flex";
}

function closeModalTwo() {
  document.getElementById("modal2").style.display = "none";
}

var slideIndex = 1;
showSlidesTwo(slideIndex);

function plusSlidesTwo(n) {
  showSlidesTwo((slideIndex += n));
}

function currentSlideTwo(n) {
  showSlidesTwo((slideIndex = n));
}

function showSlidesTwo(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("demo2");
  var captionText = document.getElementsByClassName("caption2");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

function openModalThree() {
  document.getElementById("modal3").style.display = "flex"; //block
}

function closeModalThree() {
  document.getElementById("modal3").style.display = "none";
}

var slideIndex = 1;
showSlidesThree(slideIndex);

function plusSlidesThree(n) {
  showSlidesThree((slideIndex += n));
}

function currentSlideThree(n) {
  showSlidesThree((slideIndex = n));
}

function showSlidesThree(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("demo3");
  var captionText = document.getElementsByClassName("caption3");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex"; //block
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// function openModalFour() {
//   document.getElementById("modal4").style.display = "block";
// }

// function closeModalFour() {
//   document.getElementById("modal4").style.display = "none";
// }

// var slideIndex = 1;
// showSlidesFour(slideIndex);

// function plusSlidesFour(n) {
//   showSlidesFour((slideIndex += n));
// }

// function currentSlideFour(n) {
//   showSlidesFour((slideIndex = n));
// }

// function showSlidesFour(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides4");
//   var dots = document.getElementsByClassName("demo4");
//   var captionText = document.getElementsByClassName("caption4");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   console.log(slides);
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   captionText.innerHTML = dots[slideIndex - 1].alt;
// }

// function openModalFive() {
//   document.getElementById("modal5").style.display = "block";
// }

// function closeModalFive() {
//   document.getElementById("modal5").style.display = "none";
// }

// var slideIndex = 1;
// showSlidesFive(slideIndex);

// function plusSlidesFive(n) {
//   showSlidesFive((slideIndex += n));
// }

// function currentSlideFive(n) {
//   showSlidesFive((slideIndex = n));
// }

// function showSlidesFive(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides5");
//   var dots = document.getElementsByClassName("demo5");
//   var captionText = document.getElementsByClassName("caption5");
// if (n > slides.length) {
//   slideIndex = 1;
// }
// if (n < 1) {
//   slideIndex = slides.length;
// }
// for (i = 0; i < slides.length; i++) {
//   slides[i].style.display = "none";
// }
// for (i = 0; i < dots.length; i++) {
//   dots[i].className = dots[i].className.replace(" active", "");
// }
// slides[slideIndex - 1].style.display = "block";
// dots[slideIndex - 1].className += " active";
// captionText.innerHTML = dots[slideIndex - 1].alt;
// }
var aboutSection = document.getElementById("about-section");
var portfolioSection = document.getElementById("portfolio-section");
var contactSection = document.getElementById("contact-section");
var about = document.getElementById("about");
var contact = document.getElementById("contact");
var portfolio = document.getElementById("portfolio");

function activeTab() {
  var boundTopAbout = about.getBoundingClientRect().top;
  var boundTopPortfolio = portfolio.getBoundingClientRect().top;
  var boundTopContact = contact.getBoundingClientRect().top;

  console.log("about-top:" + about.getBoundingClientRect().top);
  console.log("portfolio-top:" + portfolio.getBoundingClientRect().top);

  console.log("contact-top:" + contact.getBoundingClientRect().top);

  if (
    boundTopAbout <= 200 &&
    !portfolioSection.classList.contains("please-work-hover") &&
    !contactSection.classList.contains("please-work-hover")
  ) {
    aboutSection.classList.add("please-work-hover");
  }
  if (boundTopAbout <= -about.offsetHeight || boundTopAbout >= 201) {
    aboutSection.classList.remove("please-work-hover");
  }
  if (
    boundTopPortfolio <= 150 &&
    !aboutSection.classList.contains("please-work-hover") &&
    !contactSection.classList.contains("please-work-hover")
  ) {
    portfolioSection.classList.add("please-work-hover");
  }
  if (
    boundTopPortfolio <= -portfolio.offsetHeight ||
    boundTopPortfolio >= 151
  ) {
    portfolioSection.classList.remove("please-work-hover");
  }
  if (
    boundTopContact <= 160 &&
    !portfolioSection.classList.contains("please-work-hover") &&
    !aboutSection.classList.contains("please-work-hover")
  ) {
    contactSection.classList.add("please-work-hover");
  }
  if (boundTopContact >= 161) {
    contactSection.classList.remove("please-work-hover");
  }
}

window.addEventListener("scroll", activeTab);

function jumpToPortfolio() {
  const portfolio = document.getElementById("portfolio");
  const portfolioPosition = portfolio.getBoundingClientRect().top;
  const test = window.scrollY;

  const navBar = document.getElementById("nav-bar");
  const navBarHeight = navBar.offsetHeight;
  if (navBar.classList.contains("sticky")) {
    window.scroll({
      top: portfolioPosition + test,
      behavior: "smooth",
    });
  } else {
    window.scroll({
      top: portfolioPosition + test - navBarHeight,
      behavior: "smooth",
    });
  }
}

function jumpToAbout() {
  const about = document.getElementById("about");
  const aboutPosition = about.getBoundingClientRect().top;
  const test = window.scrollY;

  const navBar = document.getElementById("nav-bar");
  const navBarHeight = navBar.offsetHeight;
  if (navBar.classList.contains("sticky")) {
    window.scroll({
      top: aboutPosition + test,
      behavior: "smooth",
    });
  } else {
    window.scroll({
      top: aboutPosition + test - navBarHeight,
      behavior: "smooth",
    });
  }
}

function jumpToContact() {
  const contact = document.getElementById("contact");
  const contactPosition = contact.getBoundingClientRect().top;
  const test = window.scrollY;

  const navBar = document.getElementById("nav-bar");
  const navBarHeight = navBar.offsetHeight;
  if (navBar.classList.contains("sticky")) {
    window.scroll({
      top: contactPosition + test,
      behavior: "smooth",
    });
  } else {
    window.scroll({
      top: contactPosition + test - navBarHeight,
      behavior: "smooth",
    });
  }
}
