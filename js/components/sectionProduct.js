const createAndAddProductSection = games => {
  //variavel do container que irá conter as seções e seus produtos
  const sectionProducts = document.querySelector('[data-container="products"]')
  // Verifica se o elemento .section-products foi encontrado no documento.
  if (!sectionProducts) {
    console.error('Elemento .section-products não foi encontrado no documento.')
    return
  }
  // Cria as seções de produtos e add a pagina principal
  for (let i = 1; i <= 3; i++) {
    const productContainerItem = document.createElement('div')
    productContainerItem.classList.add('products-container')
    productContainerItem.innerHTML = `
      <button class="fa-solid fa-chevron-left btn-previous" data-button="previous"></button>
      <button class="fa-solid fa-chevron-right btn-next" data-button="next"></button>
      <ul class="product-container-item" data-container="carousel${i}"></ul>
    `
    sectionProducts.appendChild(productContainerItem)
  }

  //Pega os dados do arquivo json passados pelo parametro da função geral
  const { collections } = games
  //varre os dados json e os incrementa nos elementos da seção
  collections.forEach(element => {
    // Cria elementos das seções
    const itemElement = document.createElement('li')
    itemElement.classList.add('product-item')
    itemElement.setAttribute('data-item', 'carousel')
    itemElement.innerHTML = `
      <a class="product-item-link" href="#page-top" data-link="item">
        <img class="product-image" src="${element.capa}" alt="">
        <div class="product-description">
          <h1 class="product-title" data-item="name">${element.nome}</h1>
          <form class="product-form" data-form="product" action="">
            <button class="product-add" data-button="add-cart"><i class="fa-solid fa-cart-plus"></i> Add</button>
            <legend class="product-value">R$ ${element.preco}</legend>
          </form>
        </div>
      </a>
    `


    // Adiciona os elementos dos itens as seções.
    if (element.id < 5) {
      sectionProducts
        .querySelector('[data-container="carousel1"]')
        .appendChild(itemElement)
    } else if (element.id > 4 && element.id < 10) {
      sectionProducts
        .querySelector('[data-container="carousel2"]')
        .appendChild(itemElement)
    } else if (element.id > 9) {
      sectionProducts
        .querySelector('[data-container="carousel3"]')
        .appendChild(itemElement)
    }


    //copia para uso em outras partes do projeto, para que não haja conflito
    const itemCopy = document.createElement('li')
    itemCopy.classList.add('product-item')
    itemCopy.setAttribute('data-found', 'item')
    itemCopy.id = element.nome.toLowerCase() //o id é o proprio nome do produto, para ser comparado com o valor passado e encontrado no momento da pesquisa, mediante a logica do arquivo 'search.js', o toLowerCase é para que não haja diferenças e problemas entre os caracteres maiusulos e minusculos.
    itemCopy.innerHTML = `
      <a class="product-item-link" href="#page-top" data-link="item">
        <img class="product-image" src="${element.capa}" alt="">
        <div class="product-description">
          <h1 class="product-title" data-item="name">${element.nome}</h1>
          <form class="product-form" data-form="product" action="">
            <button class="product-add" data-button="add-cart"><i class="fa-solid fa-cart-plus"></i> Add</button>
            <legend class="product-value">R$ ${element.preco}</legend>
          </form>
        </div>
      </a>
    `
 
    //add produtos para section dos encontrados na pesquisa
    const foundContaineritems = document.querySelector('[data-search="found"]')
    foundContaineritems.appendChild(itemCopy)



  })
}

export default createAndAddProductSection
