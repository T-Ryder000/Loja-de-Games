import resetAndDisplayPageCart from '../modules/resetAndDisplayPageCart.js'

const deleteLocalStorage = index => {
  const objectProductsCart = localStorage.getItem('cartItems')
  let cartItems = JSON.parse(objectProductsCart) || []

  if (cartItems.length > index) {
    const deletedItem = cartItems.splice(index, 1)[0]
    console.log(`Item excluído:`, deletedItem)

    // Atualiza a array no localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems))

    // Resetar e exibir novamente a página do carrinho
    resetAndDisplayPageCart()
  } else {
    console.error(`Índice fora dos limites. Nenhum item excluído.`)
  }
}

export default deleteLocalStorage
