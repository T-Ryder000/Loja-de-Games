const createPageFinal = () => {

//Form e buttons

  const formFinalizePayment = document.querySelector('[data-form="finish"]') //form da finalização de compras
  const buttonFinalizePayment = document.querySelector('[data-button="finalize-payment"]')//button para finalizar pagamento
  const returnButton = document.querySelector('[data-return="return-home"]') //Botao de retornar para page main

//Pages, Sections e modal

  const pageCart = document.querySelector('[data-section="cart"]') //page do carrinho de compras
  const pageFinal = document.querySelector('[data-container="page-final"]') //pagina final de agradecimento
  const sectionSlider = document.querySelector('[data-container="slider"]') // Sessao do slider da pagina
  const sectionProducts = document.querySelector('[data-container="products"]') //Sessao da coleção de jogos
  const containerModal = document.querySelector('[data-container="modal"]') //modal da pagina


//Oculta e apaga o conteudo do carrinho de compras após o pagamento
  const resetContent = () => {
    const paymentCard = document.querySelector('[data-select="card-options"]') //select de cartoes para pagamento
    if (paymentCard.value !== 'Nenhum') {
      containerModal.classList = 'hide-modal'
      pageCart.classList = 'section-shopping-cart-hide'
      returnButton.style.visibility = 'hidden'
      localStorage.clear()
    } else {
      alert('Escolha um cartão como opção de pagamento!')
    }
  }

  
//Cria page de agradecimento após o pagamento
  const createThankYouPage = () => {
    const paymentCard = document.querySelector('[data-select="card-options"]') //select de cartoes para pagamento
    if (paymentCard.value !== 'Nenhum') {
      pageFinal.classList = 'page-to-thank'

      pageFinal.innerHTML = `
    <div class="container-to-thank">
    <div class="text-thank">
      <h1 class="h1-thank">PARABÉNS!</h1>
      <h2 class="h2-thank">A Loja dos Games agradece pela confiaça!</h2>
      <p class="p-thank">
        Sua compra será confirmada, e seu jogo chegará em breve!
      </p>
    </div>
    <form class="form-thank" data-form="thank" action="">
      <button class="button-thank" data-button="thank">
        <spam class="fa-solid fa-arrow-left "></spam>
        <spam class="button-thank-text">Pagina Inicial</spam>
      </button>
    </form>
    </div>
      <img class="img-thank" src="./images/Icon-de-finalização.png"/>
    `

      pageCommands()
    }
  }

  //Função para retornar a pagina inicial
  const returnHome = () => {
    pageFinal.classList = 'page-to-thank-hide'
    sectionSlider.classList = 'section-slider'
    sectionProducts.classList = 'section-products'
    containerModal.innerHTML = ''///////////////Limpando conteudo do modal
  }

  //Evento dos buttons da page de agradecimento
  const pageCommands = () => {
    const formThanks = document.querySelector('[data-form="thank"]')
    const buttonThank = document.querySelector('[data-button="thank"]')
    formThanks.addEventListener('submit', function (e) {
      e.preventDefault()
    })
    buttonThank.addEventListener('click', returnHome)
  }


  //Evento do button de pagamento, ele chama a função de resetar e a pagina de agradecimento
  buttonFinalizePayment.addEventListener('click', function(){
    resetContent()
    createThankYouPage()
  })
  formFinalizePayment.addEventListener('submit', function (e) {
    e.preventDefault()
  })
}

export default createPageFinal
