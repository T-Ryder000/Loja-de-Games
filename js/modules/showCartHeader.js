
import resetAndDisplayPageCart from"../modules/resetAndDisplayPageCart.js"

const showCart = () => {
  const formCart = document.querySelector('[data-form="cart-header"]')
  const btnCart = document.querySelector('[data-button="cart-header"]')
  const returnButton = document.querySelector('[data-return="return-home"]') //Botao de retornar para page main

  const sectionSlider = document.querySelector('[data-container="slider"]') // Sessao do slider da pagina
  const sectionProducts = document.querySelector('[data-container="products"]') //Sessao da coleção de jogos
  const sectionFound = document.querySelector('[data-container="found"]') //Sessao da coleção de jogos do campo de busca
  const pageProduct = document.querySelector('[data-container="show-product"]') //page do product
  const pageCart = document.querySelector('[data-section="cart"]') //Page do carrinho de compras
  const pageFinal = document.querySelector('[data-container="page-final"]') //pagina final de agradecimento

//esconde tudo e mostra page do carrinho de compras
  btnCart.addEventListener('click', () => {
    resetAndDisplayPageCart()
    pageProduct.classList = 'show-product-hide'
    sectionSlider.classList = 'section-slider-hide'
    sectionProducts.classList = 'section-products-hide'
    sectionFound.classList = 'section-found-hide'
    pageFinal.classList = 'page-to-thank-hide'
    pageCart.classList = 'section-shopping-cart'
    returnButton.style.visibility = 'visible'
  })
  formCart.addEventListener('submit', e => {
    e.preventDefault()
  })
}

export default showCart
