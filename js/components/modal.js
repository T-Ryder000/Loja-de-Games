const createModal=(games)=>{

  const { collections } = games

  const containerGeneralModal = document.querySelector('[data-container="modal"]')

  const cardModal = document.createElement('div')
  cardModal.classList = "card-modal"

collections.forEach(element => {
  cardModal.innerHTML = `<h2 class="text-modal">Adicionado com sucesso ao seu carrinho de compras!</h2>
  <div class="product-modal">
    <img class="product-modal-image" src="${element.capa}" alt="">
    <div class="product-modal-details">
      <h1 class="product-modal-title">${element.nome}</h1>
      <p class="product-modal-description">${element.descricao}</p>
      <p class="product-modal-value">R$ ${element.preco}</p>
    </div>
  </div>
  <form class="form-modal" data-form="modal">
    <button class="button-modal-continue">Continuar Comprando</button>
    <button class="button-modal-finish">Finalizar compra</button>
  </form>`
});



  containerGeneralModal.appendChild(cardModal)
}

export default createModal