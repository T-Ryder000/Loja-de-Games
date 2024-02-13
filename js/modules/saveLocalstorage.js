
import resetAndDisplayPageCart from '../modules/resetAndDisplayPageCart.js'

const saveProduct = gameForCart => {

  const containerModal = document.querySelector('[data-container="modal"]') //modal da pagina

  let cartItems = []

  // Verifica se há itens no localStorage
  if (localStorage.hasOwnProperty('cartItems')) {
    const objectProductsCart = localStorage.getItem('cartItems')
    cartItems = JSON.parse(objectProductsCart)

    // Verifica se o jogo já está no carrinho
    const isGameInCart = cartItems.some(item => item.id === gameForCart.id);

    //Se o jogo estiver no carrinho, irá avisar
    if (isGameInCart) {
      containerModal.innerHTML = `
      <div class="modal-existing-product">
        <div class="container-text-existing-product">
          <h1 class="text-existing-product">Esse produto já encontra-se no carrinho!<h1>
          <h2 class="text-existing-product">Deseja ir até o carrinho compras?</h2>
        </div>
        <form class="form-existing-product">
          <button class="button-see-product">Sim</button>
          <button class="button-see-product-not">Não</button>
        </form>  
      </div>
      `
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


// if (!Array.isArray(cartItems)) {
//   // Se cartItems não for uma array (pode ser nulo ou undefined), inicializamos como uma array vazia
//   cartItems = []
// }
