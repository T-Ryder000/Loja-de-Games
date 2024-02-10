import createPageCart from '../pages/pageCart.js'

const saveProduct = gameForCart => {
  let cartItems = []

  if (localStorage.hasOwnProperty('cartItems')) {
    const objectProductsCart = localStorage.getItem('cartItems')
    cartItems = JSON.parse(objectProductsCart)
  }
  if (!Array.isArray(cartItems)) {
    // Se cartItems não for uma array (pode ser nulo ou undefined), inicializamos como uma array vazia
    cartItems = []
  }
  cartItems.push(gameForCart)
  localStorage.setItem('cartItems', JSON.stringify(cartItems))

    const containerCart = document.querySelector('[data-container="cart"]')
    if (containerCart) {
      containerCart.innerHTML = ''
    }
    createPageCart()


  
}

export default saveProduct
