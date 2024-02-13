const createModalProdcutExisting=()=>{
  const containerModal = document.querySelector('[data-container="modal"]') //modal da pagina

  const cardModal = document.createElement('div')
  cardModal.classList = 'card-modal'
  containerModal.innerHTML = ''


    cardModal.innerHTML = `
      <div class="modal-existing-product">
        <div class="container-text-existing-product">
          <h1 class="text-existing-product">Esse produto já encontra-se no carrinho!<h1>
          <h2 class="text-existing-product">Deseja ir até o carrinho compras?</h2>
        </div>
        <form class="form-existing-product" data-form="modal">
          <button class="button-see-product" data-button="finish">Sim</button>
          <button class="button-see-product-not"  data-button="continue">Não</button>
        </form>  
      </div>
    `

    containerModal.appendChild(cardModal)
}

export default createModalProdcutExisting