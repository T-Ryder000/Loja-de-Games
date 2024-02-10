const createPageCart = ()=>{


const sectionCart = document.querySelector('[data-section="cart"]')
const buttonForCart = document.querySelector('[data-button="finish"]')

const containerCart = document.createElement('div')
containerCart.classList.add('container-cart')
containerCart.setAttribute('data-container', 'cart')
containerCart.innerHTML  =` <div class="container-cart-products">
  <h3 class="text-cart-products">PRODUTOS NO CARRINHO</h3>
  <div class="cart-product" data-product="cart">
    <div class="cart-details">
      <img
        class="cart-img-product"
        src="./images/capa/Bully Scholarship Edition.jpg"
      />
      <h1 class="cart-name-product">bully schorlation edition</h1>
    </div>
    <div class="cart-manager">
      <form class="form-product-quantity">
        <select class="product-quantity" data-select="cart-amount" name="number-products" id="number-products">
          <option data-select="option" value="1">1</option>
          <option data-select="option" value="2">2</option>
          <option data-select="option" value="3">3</option>
          <option data-select="option" value="4">4</option>
          <option data-select="option" value="5">5</option>
        </select>
      </form>
      <h3 class="cart-value-product" data-value="cart-product">R$ 35.49</h3>
      <i class="fa-solid fa-trash-can cart-delete-product"  data-button="cart-delete" ></i>
    </div>
  </div>
  </div>
  <div class="container-cart-completion">
    <div class="container-cart-value">
      <div class="total-sum-container">
        <h3 class="text-subvalue">VALOR TOTAL</h3>
        <h3 class="value-total" data-value="cart-product-total">R$ 35.49</h3>
      </div>
      <form class="form-cart-completion" data-form="cart-completion" action="">
        <button class="button-completion" data-button="cart-completion">Finalizar compra</button>
      </form>
    </div>
  </div>
  `

  sectionCart.appendChild(containerCart)

}

export default createPageCart