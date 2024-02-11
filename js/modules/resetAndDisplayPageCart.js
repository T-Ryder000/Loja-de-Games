import createPageCart from '../pages/pageCart.js'

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

export default resetAndDisplayPageCart 

