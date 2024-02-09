const showModalAndGoToCart = () => {
  const containerModal = document.querySelector('[data-container="modal"]')
  const btnAddCart = document.querySelectorAll('[data-button="add-cart"]') //para os produtos na main
  const btnAddCartCopy = document.querySelectorAll(
    '[data-button="add-cart-copy"]'
  ) //para os produtos na pesquisa
  const formAddCart = document.querySelectorAll('[data-form="product"]') // para a tag form dos produtos
  const bodyContent = document.querySelector('[data-body="content"]') // para tag body

  let continueShoppingButton

  //esconder modal e continuar comprando
  const hideModal = () => {
    bodyContent.classList = '' // retira class
    containerModal.classList = 'hide-modal' // muda classe para esconder modal
  }

  //mostrar modal com destino ao carrinho, ou continuar comprando
  const showModal = () => {
    bodyContent.classList = 'body-modal-pause' // muda classe para parar rolamento da pagina em determinada dimensao
    containerModal.classList = 'show-modal' // muda classe para mostrar modal

    //botao de esconder o modal, chamei ele dentro da função 'showModal' para que o resultado não seja null
    continueShoppingButton = document.querySelector('[data-button="continue"]')
    continueShoppingButton.addEventListener('click', hideModal)

    //form do modal para tirar efeito de carregamento
    const formModal = document.querySelector('[data-form="modal"]')
    formModal.addEventListener('submit', preventDefault)
  }

  //botões tanto dos produtos da sessao main, como da barra de pesquisa
  btnAddCart.forEach(button => {
    button.addEventListener('click', showModal)
  })
  btnAddCartCopy.forEach(button => {
    button.addEventListener('click', showModal)
  })
  ////////

  //tira o efeito padrao
  const preventDefault = e => {
    e.preventDefault()
  }

  //para tirar o carregamento da tag form no momento do click ao botão
  formAddCart.forEach(form => {
    form.addEventListener('submit', function (e) {
      preventDefault(e)
    })
  })
}

export default showModalAndGoToCart
