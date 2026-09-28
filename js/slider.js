'use strict';

const sliderTrack = document.getElementById('slider-track');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('slider-prev');
const nextBtn = document.getElementById('slider-next');
const dotsContainer = document.getElementById('slider-dots');

let currentSlide = 0;

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('button');
  dot.className = 'slider-dot';
  dot.dataset.index = i;
  dot.setAttribute('aria-label', 'Отзыв ' + (i + 1));
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.slider-dot');

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  }
  if (index >= slides.length) {
    index = 0;
  }

  currentSlide = index;
  sliderTrack.style.transform = 'translateX(-' + currentSlide * 100 + '%)';

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  dots[currentSlide].classList.add('active');
}

prevBtn.addEventListener('click', function () {
  showSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', function () {
  showSlide(currentSlide + 1);
});

dotsContainer.addEventListener('click', function (event) {
  const dot = event.target.closest('.slider-dot');

  if (!dot) {
    return;
  }

  showSlide(Number(dot.dataset.index));
});

showSlide(0);
