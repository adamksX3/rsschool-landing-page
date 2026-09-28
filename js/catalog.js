'use strict';

const cardsContainer = document.getElementById('catalog-cards');

function formatPrice(price) {
  return price.toFixed(2).replace('.', ',') + ' руб.';
}

function createCard(product) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.id = product.id;

  card.innerHTML = `
    <img src="${product.image}" alt="${product.alt}" />
    <div class="card-body">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="params">
        <span>${product.sizes[0].name}</span>
      </div>
      <div class="card-footer">
        <span class="price">${formatPrice(product.price)}</span>
        <button class="btn btn-outline btn-small">Подробнее</button>
      </div>
    </div>
  `;

  return card;
}

function renderCards(category) {
  cardsContainer.innerHTML = '';

  for (let i = 0; i < products.length; i++) {
    if (products[i].category === category) {
      const card = createCard(products[i]);
      cardsContainer.appendChild(card);
    }
  }
}

renderCards('coffee');

const categoryLinks = document.querySelectorAll('.categories a');

for (let i = 0; i < categoryLinks.length; i++) {
  categoryLinks[i].addEventListener('click', function (event) {
    event.preventDefault();

    for (let j = 0; j < categoryLinks.length; j++) {
      categoryLinks[j].classList.remove('active');
    }
    this.classList.add('active');

    const category = this.dataset.category;
    renderCards(category);
  });
}
