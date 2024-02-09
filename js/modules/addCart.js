const showModalAndGoToCart = () => {
  const containerModal = document.querySelector('[data-container="modal"]')
  const btnAddCart = document.querySelectorAll('[data-button="add-cart"]') //para os produtos na main
  const btnAddCartCopy = document.querySelectorAll(
    '[data-button="add-cart-copy"]'
  ) //para os produtos na pesquisa
  const formAddCart = document.querySelectorAll('[data-form="product"]')

  const containerPageProduct = document.querySelector(
    '[data-container="show-product"]'
  )

  const formProduct = document.querySelectorAll('[data-form="product]')

  const addCart = () => {
    const productTopLink = document.querySelectorAll('[data-link="item"]')
    productTopLink.forEach(e => {
      console.log(e)
      e.href = ''
    }) //observação

    
    containerPageProduct.classList = 'show-product-hide'
    containerModal.classList = 'show-modal'
  }

  btnAddCart.forEach(button => {
    button.addEventListener('click', addCart)
  })
  btnAddCartCopy.forEach(button => {
    button.addEventListener('click', addCart)
  })

  const preventDefault = e => {
    e.preventDefault()
  }

  formAddCart.forEach(form => {
    form.addEventListener('submit', function (e) {
      preventDefault(e)
    })
  })
}

export default showModalAndGoToCart
