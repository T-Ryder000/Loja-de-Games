import saveProduct from '../../modules/saveLocalstorage.js'

const createModalToAddCart = (games, index) => {
  console.log(index)

  const { collections } = games

  const containerModal = document.querySelector('[data-container="modal"]') //modal da pagina
  const cardModal = document.createElement('div')
  cardModal.classList = 'card-modal'

  containerModal.innerHTML = ''
  
  collections.forEach(element => {

    if (index === element.id) {
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
          <button class="button-modal-continue" data-button="continue">Continuar Comprando</button>
          <button class="button-modal-finish" data-button="finish">Finalizar compra</button>
        </form>`
    }
    containerModal.appendChild(cardModal)
    

    //Cria objeto e envia dados para serem salvos no local storage
    const createProductToSave = index => {
      if (index === element.id) {
        const gameForCart = {
          nome: `${element.nome}`,
          preco: `${element.preco}`,
          capa: `${element.capa}`,
          id: index,
          numeroDoSelect: 1
        }
        //função importada
        saveProduct(gameForCart)
      }
    }

    createProductToSave(index)
  })
}

export default createModalToAddCart
