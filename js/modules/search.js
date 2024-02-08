const searchProducts = games => {
  const { collections } = games
  const searchForm = document.querySelector('[data-form="search"]')
  const searchButton = document.querySelector('[data-button="search"]')
  const searchBar = document.querySelector('[data-bar="search"]')
  const deleteValueButton = document.querySelector('[data-delete="value"]')
  const containerSLider = document.querySelector('[data-container="slider"]')

  const foundContainer = document.querySelector('[data-container="found"]')
  const resultText = document.querySelector('[data-search="result-text"]')
  const sectionProducts = document.querySelector('[data-container="products"]')
  //array de produtos que será incrementada
  let containerProductsNames = []
  collections.forEach(item => {
    containerProductsNames.push(item.nome.toLowerCase())
  })
  const productsItems = document.querySelectorAll('[data-found="item"]')

  //Mostra os produtos encontrados e filtrados e esconde os que não foram.
  const showFilteredProducts = names => {
    productsItems.forEach(nameItem => {
      const item = document.getElementById(`${nameItem.id}`)

      if (names.includes(nameItem.id)) {
        item.classList.remove('product-item-hide')
        item.classList.add('product-item')

        sectionProducts.classList = 'section-products-hide'
        foundContainer.classList = 'section-found'

        resultText.innerHTML = `Quantidade de produtos encontrados: ${names.length}`
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
      deleteValue()
      sectionProducts.classList = 'section-products'
      foundContainer.classList = 'section-found-hide'
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
      containerSLider.classList = 'section-slider-hide'
    } else {
      containerSLider.classList = 'section-slider'
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
    productsItems.forEach(e => {
      e.classList = 'product-item'
    })

    searchBar.value = ''
    hideSlider(searchBar.value)
  }

  const startOperation = () => {
    filterSearchData()
    hideSlider(searchBar.value)
    showButtonDeleteValue(searchBar.value)
  }

  //Tira o efeito de envio e carregamento do form
  searchForm.addEventListener('submit', function (e) {
    e.preventDefault()
  })
  searchBar.addEventListener('input', startOperation)
  deleteValueButton.addEventListener('click', deleteValue)
}

export default searchProducts
