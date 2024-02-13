
import resetAndDisplayPageCart from '../modules/resetAndDisplayPageCart.js'

const saveProduct = gameForCart => {

  console.log(gameForCart)

  let cartItems = []

  // Verifica se há itens no localStorage
  if (localStorage.hasOwnProperty('cartItems')) {
    const objectProductsCart = localStorage.getItem('cartItems')
    cartItems = JSON.parse(objectProductsCart)

    // Verifica se o jogo já está no carrinho
    const isGameInCart = cartItems.some(item => item.id === gameForCart.id);

    //Se o jogo estiver no carrinho, irá avisar
    if (isGameInCart) {
      console.log('Este jogo já está no carrinho.');
    } else {
      // Adiciona o jogo ao carrinho
      cartItems.push(gameForCart)
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
      resetAndDisplayPageCart()
    }
  } else {
    // Se não há nenhum item no localStorage, inicializa com o jogo
    cartItems.push(gameForCart)
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    resetAndDisplayPageCart()
  }
}

export default saveProduct
