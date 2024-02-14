import resetAndDisplayPageCart from '../modules/resetAndDisplayPageCart.js'
import createModalToAddCart from '../components/modals/modalToAddCart.js'
import createModalProdcutExisting from '../components/modals/modalProductExisting.js'
const showCreatedModal = games => {
  //buttons

  const logoPage = document.querySelectorAll('[data-img="logo"]') //logo da page para retornar ao main
  const returnButton = document.querySelector('[data-return="return-home"]') //Botao de retornar para page main

  const btnAddCart = document.querySelectorAll('[data-button="add-cart"]') //Produtos na main
  const btnAddCartCopy = document.querySelectorAll(
    '[data-button="add-cart-copy"]'
  ) //Produtos na pesquisa

  //Body, sections, modal e pages

  const bodyContent = document.querySelector('[data-body="content"]') //Body
  const sectionSlider = document.querySelector('[data-container="slider"]') // Sessao do slider da pagina
  const sectionProducts = document.querySelector('[data-container="products"]') //Sessao da coleção de jogos
  const sectionFound = document.querySelector('[data-container="found"]') //Sessao dos produtos da pesquisa
  const containerModal = document.querySelector('[data-container="modal"]') //Container do modal
  const pageCart = document.querySelector('[data-section="cart"]') //Page do carrinho de compras

  //Form

  const formAddCartProducts = document.querySelectorAll('[data-form="product"]') //form dos produtos na main

  //Functions

  //redirecionar pagina ao topo
  const scrollTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  //Ocultar page carrinho de compras
  const hideShoppingCart = () => {
    //mostra page main
    sectionSlider.classList = 'section-slider'
    sectionProducts.classList = 'section-products'

    //esconder page carrinho de compras
    pageCart.classList = 'section-shopping-cart-hide'
  }

  //Exibir page carrinho de compras
  const showShoppingCart = () => {
    //mostrar button de retornar ao main
    returnButton.style.visibility = 'visible'
    //esconder modal
    hideModal()
    //esconder page main
    sectionSlider.classList = 'section-slider-hide'
    sectionProducts.classList = 'section-products-hide'
    //esconder produtos da pesquisa
    sectionFound.classList = 'section-found-hide'
    //mostrar page do carrinho de compras
    pageCart.classList = 'section-shopping-cart'

    resetAndDisplayPageCart()
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
  }

  let cartItems = [] //Para guardar itens do local storage

  //Exibe diferentes modais mediante o produto já existir no carrinho ou não
  const showClickedProduct = index => {
    // Verifica se há itens no localStorage
    if (localStorage.hasOwnProperty('cartItems')) {
      const objectProductsCart = localStorage.getItem('cartItems')
      cartItems = JSON.parse(objectProductsCart)
      // Verifica se o jogo já está no carrinho
      const isGameInCart = cartItems.some(item => item.id === index)
      console.log(isGameInCart)
      //Se o jogo estiver no carrinho, irá avisar
      if (isGameInCart === true) {
        createModalProdcutExisting(index)
      } else if (isGameInCart === false) {
        createModalToAddCart(games, index)
      } 
    } else{
      createModalToAddCart(games, index)
    }
    modalCommands()
  }

  //Commands buttons page do carrinho de compras

  //buttons do modal (chamei ele dentro da função para que o resultado não seja null)
  const modalCommands = () => {
    const formModal = document.querySelector('[data-form="modal"]') //form do modal
    const buttonForCart = document.querySelector('[data-button="finish"]') //botao para a page do carrinho de compras
    const ButtonContinueShopping = document.querySelector(
      '[data-button="continue"]'
    ) //botao de ocultar o modal

      formModal.addEventListener('submit', preventDefault)
      buttonForCart.addEventListener('click', showShoppingCart)
      ButtonContinueShopping.addEventListener('click', hideModal)
  }

  //Commands buttons modal

  //buttons da page main (para chamar o modal ou ir direto ao carrinho de compras)

  btnAddCart.forEach((button, index) => {
    button.addEventListener('click', function () {
      showClickedProduct(index)
      showModal()
    })
  })

  btnAddCartCopy.forEach((button, index) => {
    button.addEventListener('click', function () {
      showClickedProduct(index)
      showModal()
    })
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
  formAddCartProducts.forEach(form => {
    form.addEventListener('submit', function (e) {
      preventDefault(e)
    })
  })
}

export default showCreatedModal
