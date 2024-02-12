const pageFinal = () => {
  const modal = document.querySelector('[data-container="modal"]') //modal da pagina
  const pageCart = document.querySelector('[data-section="cart"]') //page do carrinho de compras
  const returnButton = document.querySelector('[data-return="return-home"]') //Botao de retornar para page main

  const formFinalizePayment = document.querySelector('[data-form="finish"]') //form da finalização de compras
  const buttonFinalizePayment = document.querySelector(
    '[data-button="finalize-payment"]'
  ) //button para finalizar as compras


  const resetContent = () => {
    const paymentCard = document.querySelector('[data-select="card-options"]') //select de cartoes para pagamento
    if (paymentCard.value !== "Nenhum") {
      modal.classList = 'hide-modal'
      pageCart.classList = 'section-shopping-cart-hide'
      returnButton.style.visibility = 'hidden'
      localStorage.clear()
    }
    else{
      alert('Escolha um cartão como opção de pagamento!')
    }
  }

  const createThankYouPage=()=>{
    
  }

  buttonFinalizePayment.addEventListener('click', resetContent)

  formFinalizePayment.addEventListener('submit', function (e) {
    e.preventDefault()
  })
}

export default pageFinal
