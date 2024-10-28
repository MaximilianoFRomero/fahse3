let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showNextSlide() {
  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  updateSlider();
}

function updateSlider() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Cambia de imagen cada 3 segundos
setInterval(showNextSlide, 3000);
