var slideIndex = 0;
console.log("Ik doe het");
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("SlideFoto");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}
