import resetAndDisplayPageCart from '../modules/resetAndDisplayPageCart.js'

const changeCartValue=()=>{

//Select 

  const selectList = document.querySelectorAll('[data-select="cart-amount"]')

//Chamando array do localStorage

 // Puxa os objetos dos produtos no local storage e os converte novamente
 const objectProductsCart = localStorage.getItem('cartItems')
 // Se o objeto estiver presente, converte em array; senão, inicializa uma array vazia
 const cartItems = JSON.parse(objectProductsCart) || []

//Altera valor da propriedade 'numeroDoSelect' para ajustar valores no carrinho mediante a quantidade do produto

 selectList.forEach((select, index) => {
   select.addEventListener('change', function () {
     const selectedIndex = index // Índice do elemento <select> na lista

     // Verifica se o índice está dentro dos limites do array
     if (selectedIndex >= 0 && selectedIndex < cartItems.length) {
       // Atualiza o valor da propriedade 'numeroDoSelect' do objeto no array com base no índice selecionado
       cartItems[selectedIndex].numeroDoSelect = parseInt(select.value)

       // Atualiza o array no localStorage
       localStorage.setItem('cartItems', JSON.stringify(cartItems))
     }
     //Atualiza a pagina
     resetAndDisplayPageCart()
   })
 })
}

export default changeCartValue

