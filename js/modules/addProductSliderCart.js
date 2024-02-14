import saveProduct from './saveLocalStorage.js'
import createPageCart from '../pages/pageCart.js'
import resetAndDisplayPageCart from './resetAndDisplayPageCart.js'

const addProductFromSliderToCart = games => {
  const returnButton = document.querySelector('[data-return="return-home"]') //Botao de retornar para page main
  const btnAddCartSlider = document.querySelectorAll('[data-button="button"]') //Produtos do slider
  const formAddCartSlider = document.querySelectorAll('[data-form="slider"]') //form dos sliders na main

  const sectionSlider = document.querySelector('[data-container="slider"]') // Sessao do slider da pagina
  const sectionProducts = document.querySelector('[data-container="products"]') //Sessao da coleção de jogos
  const pageCart = document.querySelector('[data-section="cart"]') //Page do carrinho de compras

  //Functions

  //Exibir page carrinho de compras
  const showShoppingCart = () => {
    //mostrar button de retornar ao main
    returnButton.style.visibility = 'visible'
    //esconder page main
    sectionSlider.classList = 'section-slider-hide'
    sectionProducts.classList = 'section-products-hide'
    //mostrar page do carrinho de compras
    pageCart.classList = 'section-shopping-cart'

    createPageCart()
    resetAndDisplayPageCart()
  }

  const { collections } = games

  const lastSixElements = collections.length - 7 // variavel que condiciona o slider a mostrar sempre os ultimos 6 elementos do banco json

  collections.forEach(element => {
    //Cria objeto e envia dados para serem salvos no local storage
    const createProductToSave = index => {
      const value = index + (lastSixElements + 1) //Para mudar o 'index' para o id referente ao item correto do slider clicado.(Pois o slider está referenciando os ultimos items do banco de dados Json, mas o 'index' entrega numeros iniciais)

      if (value === element.id) {
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

    //Commands buttons add ao carrinho de compras
    btnAddCartSlider.forEach((button, index) => {
      button.addEventListener('click', function () {
        createProductToSave(index)
        showShoppingCart()
      })
      button.addEventListener('touchstart', function () {
        createProductToSave(index)
        showShoppingCart()
      })
    })

    //commands form

    //Tirar o efeito padrao de submit dos forms
    const preventDefault = event => {
      event.preventDefault()
    }

    //form da page main
    formAddCartSlider.forEach(form => {
      form.addEventListener('submit', function (e) {
        preventDefault(e)
      })
    })
  })
}

export default addProductFromSliderToCart
