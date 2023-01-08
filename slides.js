
let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");

showSlides();

function showSlides() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function currentSlide(no) {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex = no;
  slides[no - 1].style.display = "block";
}

function plusSlides(n) {
  let newslideIndex = slideIndex + n;
  if (newslideIndex < 7 && newslideIndex > 0) {
    currentSlide(newslideIndex);
  }
  else if (newslideIndex == 7) {
    currentSlide(1);
  }
  else if (newslideIndex == 0) {
    currentSlide(6);
  }
}


