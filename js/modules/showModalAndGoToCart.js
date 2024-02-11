const showModalAndGoToCart = () => {
  //buttons

  const logoPage = document.querySelectorAll('[data-img="logo"]') //logo da page para retornar ao main

  const btnAddCart = document.querySelectorAll('[data-button="add-cart"]') //Produtos na main
  const btnAddCartCopy = document.querySelectorAll(
    '[data-button="add-cart-copy"]'
  ) //Produtos na pesquisa

  //Body, sections, modal e pages

  const bodyContent = document.querySelector('[data-body="content"]') //Body
  const containerSLider = document.querySelector('.section-slider') // Sessao do slider da pagina
  const sectionProducts = document.querySelector('.section-products') //Sessao da coleção de jogos
  const containerModal = document.querySelector('[data-container="modal"]') //Container do modal
  const sectionCart = document.querySelector('[data-section="cart"]') //Page do carrinho de compras

  //Form

  const formAddCart = document.querySelectorAll('[data-form="product"]') //form dos produtos na main

  //Functions

  //redirecionar pagina ao topo
  const scrollTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  //Ocultar page carrinho de compras
  const hideShoppingCart = () => {
    //mostra page main
    containerSLider.classList = 'section-slider'
    sectionProducts.classList = 'section-products'

    //esconder page carrinho de compras
    sectionCart.classList = 'section-shopping-cart-hide'
  }

  //Exibir page carrinho de compras
  const showShoppingCart = () => {
    //esconder modal
    hideModal()
    //esconder page main
    containerSLider.classList = 'section-slider-hide'
    sectionProducts.classList = 'section-products-hide'
    //mostrar page do carrinho de compras
    sectionCart.classList = 'section-shopping-cart'

    scrollTop()
  }

  //Ocultar modal
  const hideModal = () => {
    bodyContent.classList = '' //Essa classe só estava no body, para corrigir o rolamento do modal no mobile
    containerModal.classList = 'hide-modal'
  }

  //Exibir modal
  const showModal = () => {
    bodyContent.classList = 'body-modal-pause' //muda classe para corrigir o rolamento do modal no mobile
    containerModal.classList = 'show-modal'
    modalCommands()
  }

  //Commands buttons page do carrinho de compras

  //buttons do modal (chamei ele dentro da função para que o resultado não seja null)
  const modalCommands = () => {
    const continueShoppingButton = document.querySelector(
      '[data-button="continue"]'
    ) //botao de ocultar o modal
    const buttonForCart = document.querySelector('[data-button="finish"]') //botao para a page do carrinho de compras
    const formModal = document.querySelector('[data-form="modal"]') //form do modal
    continueShoppingButton.addEventListener('click', hideModal)
    formModal.addEventListener('submit', preventDefault)
    buttonForCart.addEventListener('click', showShoppingCart)
  }

  //Commands buttons modal

  //buttons da page main (para chamar o modal ou ir direto ao carrinho de compras)
  btnAddCart.forEach(button => {
    button.addEventListener('click', showModal)
  })
  btnAddCartCopy.forEach(button => {
    button.addEventListener('click', showModal)
  })

  //Commands logo

  //Logo para retornar ao main
  logoPage.forEach(hide => {
    hide.addEventListener('click', hideShoppingCart)
  })

  //commands form

  //Tirar o efeito padrao de submit dos forms
  const preventDefault = event => {
    event.preventDefault()
  }

  //form da page main
  formAddCart.forEach(form => {
    form.addEventListener('submit', function (e) {
      preventDefault(e)
    })
  })
}



export default showModalAndGoToCart


