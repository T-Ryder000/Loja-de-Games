import resetAndDisplayPageCart from '../modules/resetAndDisplayPageCart.js'

const changeCartValue = () => {
  // Seleciona os elementos
  const selectList = document.querySelectorAll('[data-select="cart-amount"]')

  // Obtém os itens do carrinho do armazenamento local
  const objectProductsCart = localStorage.getItem('cartItems')
  const cartItems = JSON.parse(objectProductsCart) || []

  // Adiciona um ouvinte de evento de mudança para cada elemento de seleção
  selectList.forEach((select, index) => {
    // const selectOption = select.querySelectorAll('[data-select="option"]')
    select.addEventListener('change', function (e) {
      const selectedIndex = e.target.selectedIndex
      console.log(selectedIndex)

      console.log(select.options[1])
      select.options[selectedIndex].selected = true

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

// import resetAndDisplayPageCart from '../modules/resetAndDisplayPageCart.js';

// const changeCartValue = () => {
//   // Seleciona os elementos
//   const selectList = document.querySelectorAll('[data-select="cart-amount"]');
//   const formSelect = document.querySelector('[data-form="select"]');

//   formSelect.addEventListener('submit', e => {
//     e.preventDefault();
//   });

//   // Obtém os itens do carrinho do armazenamento local
//   const objectProductsCart = localStorage.getItem('cartItems');
//   const cartItems = JSON.parse(objectProductsCart) || [];

//   // Adiciona um ouvinte de evento de mudança para cada elemento de seleção
//   selectList.forEach((select, index) => {
//     select.addEventListener('change', function (e) {
//       const selectedIndex = index;

//       // Remove o atributo 'selected' de todas as opções
//       select.querySelectorAll('option').forEach(option => {
//         option.removeAttribute('selected');
//       });

//       // Adiciona o atributo 'selected' à opção selecionada
//       const selectedOption = e.target.options[parseInt(select.value) - 1];
//       selectedOption.setAttribute('selected', 'true');

//       if (selectedIndex >= 0 && selectedIndex < cartItems.length) {
//         cartItems[selectedIndex].numeroDoSelect = parseInt(select.value);
//         localStorage.setItem('cartItems', JSON.stringify(cartItems));
//       }

//       resetAndDisplayPageCart();
//     });
//   });
// };

// export default changeCartValue;
