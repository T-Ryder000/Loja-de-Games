const drawProduct = (games) => {
  const { collections } = games;

  const sectionProducts = document.querySelector('.section-products');

  // Verifica se o elemento .section-products foi encontrado no documento.
  if (!sectionProducts) {
    console.error('Elemento .section-products não foi encontrado no documento.');
    return;
  }

  // Criação de seções
  for (let i = 1; i <= 3; i++) {
    const productContainerItem = document.createElement('div');
    productContainerItem.classList.add('products-container');

    productContainerItem.innerHTML = `
      <button class="fa-solid fa-chevron-left btn-previous" data-button="previous"></button>
      <button class="fa-solid fa-chevron-right btn-next" data-button="next"></button>
      <ul class="product-container-item" data-container="carousel${i}"></ul>
    `;

    sectionProducts.appendChild(productContainerItem);
  }

  // Adiciona itens as seções.
  collections.forEach(element => {
    const itemElement = document.createElement('li');
    itemElement.classList.add('product-item');
    itemElement.setAttribute('data-item', 'carousel');

    itemElement.innerHTML = `
      <a class="product-item-link" href="/#" data-link="item">
        <img class="product-image" src="${element.capa}" alt="">
        <div class="product-description">
          <h1 class="product-title">${element.nome}</h1>
          <form class="product-form" action="">
            <button class="product-add"><i class="fa-solid fa-cart-plus"></i> Add</button>
            <legend class="product-value">R$ ${element.preco}</legend>
          </form>
        </div>
      </a>
    `;

    // Adiciona os elementos dos itens as seções.
    if (element.id < 6) {
      sectionProducts.querySelector('[data-container="carousel1"]').appendChild(itemElement);
    } else if (element.id > 5 && element.id < 11) {
      sectionProducts.querySelector('[data-container="carousel2"]').appendChild(itemElement);
    } else if (element.id > 10) {
      sectionProducts.querySelector('[data-container="carousel3"]').appendChild(itemElement);
    }
  });
};

export default drawProduct;
