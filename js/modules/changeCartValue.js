import resetAndDisplayPageCart from '../modules/resetAndDisplayPageCart.js'

const changeCartValue = () => {
  // Seleciona os elementos
  const selectList = document.querySelectorAll('[data-select="cart-amount"]')

  // Obtém os itens do carrinho do armazenamento local
  const objectProductsCart = localStorage.getItem('cartItems')
  const cartItems = JSON.parse(objectProductsCart) || []




  // Adiciona um ouvinte de evento de mudança para cada elemento de seleção
  selectList.forEach((select, index) => {

    //Faz com que a option do select fique selecionada mediante a quantidade escolhida do produto
    cartItems.forEach(element=>{
      const formSelect = document.getElementById(`${element.id}`)
      const selectItem = formSelect.querySelector('[data-select="cart-amount"]')
      const numberSelect = element.numeroDoSelect
      console.log(numberSelect)
      const option = selectItem.querySelector(`[value="${element.numeroDoSelect}"]`)
      console.log(option.value)
      if(option.value == numberSelect){
        option.selected = true
      }
    })


    select.addEventListener('change', function (e) {
      const selectedIndex = e.target.selectedIndex + 1
      // console.log(selectedIndex)

      // const option = select.querySelector(`[value="${selectedIndex}"]`)
      // console.log(option)
      // option.selected = true

      // Atualiza o valor da propriedade 'numeroDoSelect' do objeto no array com base no índice selecionado
      if (index >= 0 && index < cartItems.length) {
        cartItems[index].numeroDoSelect = parseInt(select.value)
        // Atualiza o array no localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
      }
      // Atualiza a página
      resetAndDisplayPageCart()
    })
  })
}

export default changeCartValue
