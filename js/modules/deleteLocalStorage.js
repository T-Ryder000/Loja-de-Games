import createPageCart from '../pages/pageCart.js'

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

const resetAndDisplayPageCart = () => {
  const sectionCart = document.querySelector('[data-section="cart"]');
  while (sectionCart.firstChild) {
    sectionCart.removeChild(sectionCart.firstChild);
  }

  //(Artimanhas) Add novamente texto h2 da pagina do carrinho, q acaba sendo removido por causa do removeChild acima.
  const h2 = document.createElement('h2')
  h2.classList.add('text-checkout-cart')
  h2.innerHTML = 'CONFIRA'
  sectionCart.appendChild(h2)

  createPageCart()
}

export default deleteLocalStorage
