const showModalAndGoToCart = () => {
  const containerModal = document.querySelector('[data-container="modal"]')
  const btnAddCart = document.querySelectorAll('[data-button="add-cart"]')
  // const formAddCart = document.querySelector('[data-form="product"]')
  const containerPageProduct = document.querySelector('[data-container="show-product"]')

  const addCart = () => {
    containerPageProduct.classList = 'show-product-hide'
    containerModal.classList = 'show-modal'
    console.log(containerPageProduct)
  }

  btnAddCart.forEach(button => {
    button.addEventListener('click', addCart)
  })
}

export default showModalAndGoToCart
