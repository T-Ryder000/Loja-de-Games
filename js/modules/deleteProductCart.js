import deleteLocalStorage from '../modules/deleteLocalStorage.js'

const deleteProductCart = index => {
  const formModalDelete = document.querySelector('[data-form="delete"]')
  const buttonDeleteYes = document.querySelector('[data-button="delete-yes"]')
  const buttonDeleteNot = document.querySelector('[data-button="delete-not"]')

  const containerModal = document.querySelector('[data-container="modal"]') //modal da pagina
 
  const idProduct = index

  const deleteProduct = () => {
    deleteLocalStorage(idProduct)
    containerModal.classList = 'hide-modal' //tornando o modal oculto
  }

  const closeModalDelete = () => {
    containerModal.classList = 'hide-modal' //tornando o modal oculto
  }

  buttonDeleteYes.addEventListener('click', deleteProduct)
  buttonDeleteNot.addEventListener('click', closeModalDelete)

  formModalDelete.addEventListener('submit', function (e) {
    e.preventDefault()
  })
}

export default deleteProductCart
