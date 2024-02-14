import createModalFinalizePurchase from '../components/modals/modalFinalizePurchase.js'
import createPageFinal from '../pages/pageFinal.js'

const finalizePurchase = () => {
  const buttonFinalize = document.querySelector('[data-button="cart-completion"]') //Botao para finalizar compra
  const formFinalize = document.querySelector('[data-form="cart-completion"]') //form para finalizar compra

  const containerModal = document.querySelector('[data-container="modal"]') //modal da pagina


  //Chama modal de finalização de compra
  const finalizationModalCall = () => {
    containerModal.classList = 'show-modal' //tornando o modal visivel

    //Cria o modal de finalização
    createModalFinalizePurchase()
    

    //Fecha modal de finalização de compra
    const closeModalFinish = document.querySelector('[data-close="finish"]')
    closeModalFinish.addEventListener('click', function(){
      containerModal.classList = 'hide-modal' 
      containerModal.innerHTML = ''
    })

    //função de criar e mostrar pagina de agradecimento
    createPageFinal()
  }

  buttonFinalize.addEventListener('click', finalizationModalCall )//Chama modal para finalizar compra

  //tira evento de envio padrao
  formFinalize.addEventListener('submit', function (e) {
    e.preventDefault()
  })
}

export default finalizePurchase
