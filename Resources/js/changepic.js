var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Slideshow function
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var circle = document.getElementsByClassName("circle");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circle.length; i++) {
      circle[i].className = circle[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  circle[slideIndex-1].className += " active";
}
