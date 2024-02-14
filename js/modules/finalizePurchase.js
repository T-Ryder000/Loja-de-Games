import createModalFinalizePurchase from '../components/modals/modalFinalizePurchase.js'
import createPageFinal from '../pages/pageFinal.js'

const finalizePurchase = () => {
  const buttonFinalize = document.querySelector('[data-button="cart-completion"]') //Botao para finalizar compra
  const formFinalize = document.querySelector('[data-form="cart-completion"]') //form para finalizar compra

  const containerModal = document.querySelector('[data-container="modal"]') //modal da pagina

  let cartItems = [] //Para guardar itens do local storage

  //Chama modal de finalização de compra
  const finalizationModalCall = () => {

    //verificando se há produtos no carrinho de compras
    if (localStorage.hasOwnProperty('cartItems')) {
      const objectProductsCart = localStorage.getItem('cartItems')
      cartItems = JSON.parse(objectProductsCart)
  
      //Se haver produtos no carrinho, irá avisar
      if (cartItems != '') {

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

      } else if (cartItems == '') {
        alert('Não há produtos no carrinho!')
      } 
    }
  }

  buttonFinalize.addEventListener('click', finalizationModalCall )//Chama modal para finalizar compra

  //tira evento de envio padrao
  formFinalize.addEventListener('submit', function (e) {
    e.preventDefault()
  })
}

export default finalizePurchase
