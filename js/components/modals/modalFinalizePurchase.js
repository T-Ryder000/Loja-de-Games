const createModalFinalizePurchase=()=>{

  const valueProductCart = document.querySelector('[data-value="cart-product-total"]') //valor total da compra
  const containerModal = document.querySelector('[data-container="modal"]')//modal da pagina

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

  containerModal.appendChild(cardModal)//add modal a pagina


  const paymentCard = document.querySelector('[data-select="card-options"]')////Numeros do cartão selecionado

  //Exibe numero do cartão mediante mudança no input select
  paymentCard.addEventListener('change', function () {
    const selectedCardText = document.querySelector('[data-card="selected"]')
    selectedCardText.innerHTML = paymentCard.value
  })

}

export default createModalFinalizePurchase