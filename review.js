let slideIndex = 0;

function moveSlide(n) {
  const slides = document.getElementsByClassName("carousel-slide");
  slideIndex += n;
  if (slideIndex >= slides.length) {slideIndex = 0}
  if (slideIndex < 0) {slideIndex = slides.length - 1}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "flex"; // Adjust display to 'flex'
}

document.querySelector('.container-prev').addEventListener('click', function() {
  moveSlide(-1);
});

document.querySelector('.container-next').addEventListener('click', function() {
  moveSlide(1);
});

moveSlide(0); // Show first slide by default
