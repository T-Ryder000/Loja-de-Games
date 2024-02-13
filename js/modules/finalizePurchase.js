import resetAndDisplayPageCart from '../modules/resetAndDisplayPageCart.js'

import createPageFinal from '../pages/pageFinal.js'

const finalizePurchase = () => {
  const buttonFinalize = document.querySelector(
    '[data-button="cart-completion"]'
  ) //Botao para finalizar compra
  const formFinalize = document.querySelector('[data-form="cart-completion"]') //form para finalizar compra

  const valueProductCart = document.querySelector(
    '[data-value="cart-product-total"]'
  ) //valor total da compra

  const containerModal = document.querySelector('[data-container="modal"]') //modal da pagina

  let paymentCard //Numeros do cartão selecionado

  //cria modal de finalização de compra
  const createModalFinish = () => {
    containerModal.classList = 'show-modal' //tornando o modal visivel

    const cardModal = document.createElement('div')
    cardModal.classList = 'card-modal'
    containerModal.innerHTML = ''

    cardModal.innerHTML = `
      <form class="form-finish" data-form="finish">
        <i class="fa-solid fa-x button-close-finish" data-close="finish"></i>
        <label class="label-finish" data-label="cardOptions">Escolha um cartão de crédito:</label>
        <select class="select-finish" data-select="card-options" name="cardOptions" required>
          <option value="Nenhum" selected>Nenhum</option>
          <option value="XXXX-XXXX-XXXX-4201">Visa</option>
          <option value="XXXX-XXXX-XXXX-3569">MasterCard</option>
          <option value="XXXX-XXXX-XXXX-7988">American Express</option>
        </select>
        <p class="card-text" data-card="value">Cartão selecionado:  </p>
        <p class="card-text-number" data-card="selected"></p>
        <p class="card-text" data-card="value">Valor da compra: ${valueProductCart.textContent}</p>
    
        <button class="finalize-payment" data-button="finalize-payment">Finalizar Pagamento</button>
      </form>
    `

    containerModal.appendChild(cardModal)

    //Exibir numero do conteudo mediante mudança no input select
    paymentCard = document.querySelector('[data-select="card-options"]')

    paymentCard.addEventListener('change', function () {
      const selectedCardText = document.querySelector('[data-card="selected"]')
      selectedCardText.innerHTML = paymentCard.value
    })

    //add conteudo no modal
    containerModal.appendChild(cardModal)


    //Fecha modal de finalização de compra
    const closeModalFinish = document.querySelector('[data-close="finish"]')
    closeModalFinish.addEventListener('click', function(){
      containerModal.classList = 'hide-modal' 
      containerModal.innerHTML = ''
    })

    //função de criar e mostrar pagina de agradecimento
    createPageFinal()
  }

  buttonFinalize.addEventListener('click', createModalFinish)


  formFinalize.addEventListener('submit', function (e) {
    e.preventDefault()
  })
}

export default finalizePurchase
