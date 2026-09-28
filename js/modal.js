'use strict';

const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');

function openModal(product) {
  modalImg.src = product.image;
  modalImg.alt = product.alt;
  modalTitle.textContent = product.name;
  modalDescription.textContent = product.description;
  modalPrice.textContent = formatPrice(product.price);

  modal.classList.add('open');
  document.body.classList.add('no-scroll');
}

function closeModal() {
  modal.classList.remove('open');
  document.body.classList.remove('no-scroll');
}

cardsContainer.addEventListener('click', function (event) {
  const card = event.target.closest('.card');

  if (!card) {
    return;
  }

  const id = Number(card.dataset.id);
  const product = products.find(function (item) {
    return item.id === id;
  });

  openModal(product);
});

modalCloseBtn.addEventListener('click', function () {
  closeModal();
});

modal.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && modal.classList.contains('open')) {
    closeModal();
  }
});
