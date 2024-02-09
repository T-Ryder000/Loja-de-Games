const createModal = games => {
  const { collections } = games

  const btnAddCart = document.querySelectorAll('[data-button="add-cart"]') //para os produtos na main
  const btnAddCartCopy = document.querySelectorAll(
    '[data-button="add-cart-copy"]'
  ) //para os produtos na pesquisa

  const containerGeneralModal = document.querySelector(
    '[data-container="modal"]'
  )
  const cardModal = document.createElement('div')
  cardModal.classList = 'card-modal'

   

  collections.forEach(element => {
    const showClickedProduct = index => {
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
          <button class="button-modal-continue">Continuar Comprando</button>
          <button class="button-modal-finish">Finalizar compra</button>
        </form>`
      }
    }

    // let gameForCart

    const createProductToSave = index => {
      let cartItems = []
      if (index === element.id) {
        const gameForCart = {
          nome: `${element.nome}`,
          preco: `${element.preco}`,
          capa: `${element.capa}`,
          id: index
        }
        cartItems.push(JSON.stringify(gameForCart))
        saveProduct(cartItems)
      }
      localStorage.setItem('index', index )
    
    }

    const saveProduct = cartItems => {
      console.log(cartItems)
      localStorage.setItem('cartItems', cartItems )
    }

    btnAddCart.forEach((button, index) => {
      button.addEventListener('click', function () {
        showClickedProduct(index)
        createProductToSave(index)
      })
    })

    btnAddCartCopy.forEach((button, index) => {
      button.addEventListener('click', function () {
        showClickedProduct(index)
        createProductToSave(index)
      })
    })
  })

  containerGeneralModal.appendChild(cardModal)
}

export default createModal
