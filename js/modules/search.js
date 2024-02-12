const searchProducts = games => {
  const { collections } = games

  //buttons
  const logoPage = document.querySelectorAll('[data-img="logo"]') //logo da page para retornar ao main
  const returnButton = document.querySelector('[data-return="return-home"]') //Botao de retornar para page main

  const searchButton = document.querySelector('[data-button="search"]') //button para pesquisar
  const deleteValueButton = document.querySelector('[data-delete="value"]')
  const searchBar = document.querySelector('[data-bar="search"]') //campo de busca

  //Tag de texto
  const resultText = document.querySelector('[data-search="result-text"]') //h2 q mostra o numero de produtos encontrados

  //pages e sections
  const pageProduct = document.querySelector('[data-container="show-product"]') //page do product
  const pageCart = document.querySelector('[data-section="cart"]') //Page do carrinho de compras
  const sectionSlider = document.querySelector('[data-container="slider"]') //Sessao do slider
  const sectionProducts = document.querySelector('[data-container="products"]') //Sessao dos produtos da main
  const sectionFound = document.querySelector('[data-container="found"]') //Sessao dos produtos da pesquisa

  //form
  const searchForm = document.querySelector('[data-form="search"]')

  //array de produtos que será incrementada
  let containerProductsNames = []
  collections.forEach(item => {
    containerProductsNames.push(item.nome.toLowerCase())
  })
  const productsItems = document.querySelectorAll('[data-found="item"]')

  //Mostra os produtos encontrados e filtrados e esconde os que não foram.
  const showFilteredProducts = names => {
    resultText.innerHTML = `Quantidade de produtos encontrados: ${names.length}`

    productsItems.forEach(nameItem => {
      const item = document.getElementById(`${nameItem.id}`)

      if (names.includes(nameItem.id)) {
        item.classList.remove('product-item-hide')
        item.classList.add('product-item')

        sectionProducts.classList = 'section-products-hide'
        sectionFound.classList = 'section-found'
      } else {
        item.classList.remove('product-item')
        item.classList.add('product-item-hide')
      }
    })
  }

  //Restaura a exibição dos produtos mediante a barra de pesquisa está vazia
  const productRestoration = () => {
    productsItems.forEach(nameItem => {
      nameItem.classList = 'product-item'
      sectionProducts.classList = 'section-products'
      sectionFound.classList = 'section-found-hide'
    })
  }

  //função que filtra os dados e os passa adiante para serem mostrados
  const filterSearchData = () => {
    const nameValue = searchBar.value.toLowerCase()
    //Cria um novo array contendo os nomes que tenham relação com o valor q está sendo passado na barra de pesquisa.
    const foundNames = containerProductsNames.filter(name =>
      name.includes(nameValue)
    )
    if (foundNames.length > -1) {
      showFilteredProducts(foundNames)
    }
    if (nameValue === '') {     
      productRestoration()
    }
  }

  //funcao que exibe a sessao slider mediante ter algo escrito ou nao no input de pesquisa
  const hideSlider = valueInput => {
    if (valueInput !== '') {
      sectionSlider.classList = 'section-slider-hide'
    } else {
      sectionSlider.classList = 'section-slider'
    }
  }

  //funcao que exibe botao de delete mediante ter algo escrito ou nao no input de pesquisa
  const showButtonDeleteValue = valueInput => {
    if (valueInput !== '') {
      deleteValueButton.classList.remove('search-delete-header-hide')
      deleteValueButton.classList.add('search-delete-header')
    } else {
      deleteValueButton.classList.remove('search-delete-header')
      deleteValueButton.classList.add('search-delete-header-hide')
    }
  }

  //funcao que deleta o texto da barra de pesquisar pelo botao de delete
  const deleteValue = () => {
    searchBar.value = ''
    showButtonDeleteValue(searchBar.value)
    if (
      pageProduct.classList != 'show-product' &&
      pageCart.classList != 'section-shopping-cart'
    ) {
      hideSlider(searchBar.value)
      sectionProducts.classList = 'section-products'
      sectionFound.classList = 'section-found-hide'
    }
  }

  //Função que esconde page dos produtos e page do carrinho de compras
  const showProductFound = () => {
    pageProduct.classList = 'show-product-hide'
    pageCart.classList = 'section-shopping-cart-hide'
    filterSearchData()
    returnButton.style.visibility = 'hidden'
  }
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      showProductFound()
    }
  }
  const startOperation = () => {
    if (
      pageProduct.classList != 'show-product' &&
      pageCart.classList != 'section-shopping-cart'
    ) {
      filterSearchData()
      hideSlider(searchBar.value)
    }
    showButtonDeleteValue(searchBar.value)
  }

  //Tira o efeito de envio e carregamento do form
  searchForm.addEventListener('submit', function (e) {
    e.preventDefault()
  })
  searchBar.addEventListener('input', startOperation)
  searchBar.addEventListener('keydown', handleKeyPress) //Função da tecla 'enter' do teclado
  deleteValueButton.addEventListener('click', deleteValue)

  searchButton.addEventListener('click', showProductFound)

  logoPage.forEach(logo => {
    logo.addEventListener('click', deleteValue)
    logo.addEventListener('click', showProductFound)
  })

  returnButton.addEventListener('click', productRestoration)
}

export default searchProducts
