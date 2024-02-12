import deleteLocalStorage from '../modules/deleteLocalStorage.js'
import changeCartValue from '../modules/changeCartValue.js'
import finalizePurchase from '../modules/finalizePurchase.js'

const createPageCart = () => {
  // Seleciona o elemento no DOM onde o carrinho será adicionado
  const pageCart = document.querySelector('[data-section="cart"]')

  // Cria um contêiner para o carrinho
  const containerCart = document.createElement('div')
  containerCart.classList.add('container-cart')
  containerCart.setAttribute('data-container', 'cart')

  // Puxa os objetos dos produtos no local storage e os converte novamente
  const objectProductsCart = localStorage.getItem('cartItems')
  // Se o objeto estiver presente, converte em array; senão, inicializa uma array vazia
  const cartItems = JSON.parse(objectProductsCart) || []

  // Criar HTML para cada produto no carrinho usando o método map
  const productsHTML = cartItems
    .map(
      gameForCart => `
    <div class="cart-product" data-product="cart">
      <!-- Detalhes do produto -->
      <div class="cart-details">
        <img class="cart-img-product" src="${gameForCart.capa}" />
        <h1 class="cart-name-product">${gameForCart.nome}</h1>
      </div>
      <!-- Gerenciamento do produto no carrinho -->
      <div class="cart-manager">
        <form class="form-product-quantity">
          <!-- Opções de quantidade do produto -->
          <select class="product-quantity" data-select="cart-amount" name="number-products" id="number-products">
            <option data-select="option" value="0">${gameForCart.numeroDoSelect}</option>
            <option data-select="option" value="1">1</option>
            <option data-select="option" value="2">2</option>
            <option data-select="option" value="3">3</option>
            <option data-select="option" value="4">4</option>
            <option data-select="option" value="5">5</option>
          </select>
        </form>
        <!-- Valor do produto -->
        <h3 class="cart-value-product" data-value="cart-product">R$ ${(
          gameForCart.preco * gameForCart.numeroDoSelect
        ).toFixed(2)}</h3>
        <!-- Ícone de lixeira para excluir o produto do carrinho -->
        <i class="fa-solid fa-trash-can cart-delete-product" data-button="cart-delete"></i>
      </div>
    </div>
  `
    )
    .join('') // O método join une as strings geradas pelo map em uma única string

  // Monta a estrutura completa do carrinho

  containerCart.innerHTML = `
    <div class="container-cart-products">
      <h3 class="text-cart-products">PRODUTOS NO CARRINHO</h3>
      ${productsHTML}  <!-- Adiciona o HTML gerado para cada produto no carrinho -->
    </div>
    <div class="container-cart-completion">
      <div class="container-cart-value">
        <div class="total-sum-container">
          <h3 class="text-subvalue">VALOR TOTAL</h3>
          <!-- Valor total do carrinho, calculado pela função calculateTotal -->
          <h3 class="value-total" data-value="cart-product-total">R$ ${calculateTotal(
            cartItems
          )}</h3>
        </div>
        <form class="form-cart-completion" data-form="cart-completion" action="">
          <button class="button-completion" data-button="cart-completion">Finalizar compra</button>
        </form>
      </div>
    </div>
  `

  // Adiciona o container do carrinho a seção no DOM
  pageCart.appendChild(containerCart)

  //chama função de finalizar compra
  finalizePurchase()
  //chama função de alterar quantidades do produto
  changeCartValue()

  //Botao para apagar produto do carrinho
  const buttonDeleteProductCard = document.querySelectorAll(
    '[data-button="cart-delete"]'
  )
  buttonDeleteProductCard.forEach((del, index) => {
    del.addEventListener('click', function () {
      deleteLocalStorage(index)
    })
  })
}

// Função auxiliar para calcular o valor total do carrinho
const calculateTotal = cartItems => {
  // Usa o método reduce para somar os valores dos produtos no carrinho
  const total = cartItems.reduce((sum, item) => sum + parseFloat((
    item.preco * item.numeroDoSelect
  ).toFixed(2)), 0)
  // Converte o total para uma string formatada com duas casas decimais
  return total.toFixed(2)
}

export default createPageCart
