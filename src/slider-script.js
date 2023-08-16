const slides = document.querySelectorAll("#hero article");
const btnRight = document.querySelector("button[data-id='btn-right']");
const btnLeft = document.querySelector("button[data-id='btn-left']");

let currentSlide = 0;

const goToSlide = function (slideNum) {
  slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - slideNum)}%)`;
    if (idx === slideNum) {
      slide.classList.remove("opacity-0");
    } else {
      slide.classList.add("opacity-0");
    }
  });
};

const goRight = function () {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
    goToSlide(currentSlide);
  } else {
    currentSlide++;
    goToSlide(currentSlide);
  }
};

const goLeft = function () {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
    goToSlide(currentSlide);
  } else {
    currentSlide--;
    goToSlide(currentSlide);
  }
};

btnRight.addEventListener("click", goRight);
btnLeft.addEventListener("click", goLeft);

goToSlide(0);
