'use strict';

const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const modalSizes = document.getElementById('modal-sizes');
const modalAdditives = document.getElementById('modal-additives');

let currentProduct = null;
let selectedSize = 0;
let selectedAdditives = [];

function renderOptions() {
  modalSizes.innerHTML = '';
  for (let i = 0; i < currentProduct.sizes.length; i++) {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = currentProduct.sizes[i].name;
    btn.dataset.index = i;
    if (i === selectedSize) {
      btn.classList.add('active');
    }
    modalSizes.appendChild(btn);
  }

  modalAdditives.innerHTML = '';
  for (let i = 0; i < currentProduct.additives.length; i++) {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = currentProduct.additives[i].name;
    btn.dataset.index = i;
    if (selectedAdditives.includes(i)) {
      btn.classList.add('active');
    }
    modalAdditives.appendChild(btn);
  }
}

function updatePrice() {
  let total = currentProduct.price;
  total += currentProduct.sizes[selectedSize].add;

  for (let i = 0; i < selectedAdditives.length; i++) {
    const index = selectedAdditives[i];
    total += currentProduct.additives[index].add;
  }

  modalPrice.textContent = formatPrice(total);
}

function openModal(product) {
  currentProduct = product;
  selectedSize = 0;
  selectedAdditives = [];

  modalImg.src = product.image;
  modalImg.alt = product.alt;
  modalTitle.textContent = product.name;
  modalDescription.textContent = product.description;

  renderOptions();
  updatePrice();

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

modalSizes.addEventListener('click', function (event) {
  const btn = event.target.closest('.option');

  if (!btn) {
    return;
  }

  selectedSize = Number(btn.dataset.index);
  renderOptions();
  updatePrice();
});

modalAdditives.addEventListener('click', function (event) {
  const btn = event.target.closest('.option');

  if (!btn) {
    return;
  }

  const index = Number(btn.dataset.index);

  if (selectedAdditives.includes(index)) {
    selectedAdditives = selectedAdditives.filter(function (item) {
      return item !== index;
    });
  } else {
    selectedAdditives.push(index);
  }

  renderOptions();
  updatePrice();
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
