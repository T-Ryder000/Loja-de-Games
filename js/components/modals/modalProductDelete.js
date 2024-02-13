import deleteProductCart from '../../modules/deleteProductCart.js'

const createModalDelete = index => {
  const containerModal = document.querySelector('[data-container="modal"]') //modal da pagina
  containerModal.classList = 'show-modal' //tornando o modal visivel

  const cardModal = document.createElement('div')
  cardModal.classList = 'card-modal'
  containerModal.innerHTML = ''

  cardModal.innerHTML = `
      <h2 class="text-delete">Tem certeza que deseja retirar esse produto do carrinho?</h2>
      <form class="form-delete-product" data-form="delete">
        <button class="button-delete-yes" data-button="delete-yes">Sim</button>
        <button class="button-delete-not" data-button="delete-not">Não</button>
      </form>
    `
  containerModal.appendChild(cardModal)
  deleteProductCart(index)
}

export default createModalDelete
