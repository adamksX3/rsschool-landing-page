'use strict';

const burgerBtn = document.querySelector('.burger');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list a');

function openMenu() {
  navList.classList.add('open');
  document.body.classList.add('no-scroll');
  burgerBtn.textContent = '✕';
}

function closeMenu() {
  navList.classList.remove('open');
  document.body.classList.remove('no-scroll');
  burgerBtn.textContent = '☰';
}

burgerBtn.addEventListener('click', function () {
  if (navList.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
    closeMenu();
  });
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});
