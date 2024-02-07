const searchProducts = games => {
  const { collections } = games
  const searchForm = document.querySelector('[data-form="search"]')
  const searchButton = document.querySelector('[data-button="search"]')
  const searchBar = document.querySelector('[data-bar="search"]')
  const deleteValueButton = document.querySelector('[data-delete="value"]')
  const containerSLider = document.querySelector('[data-container="slider"]')

  let containerProductsNames = []

  collections.forEach(item => {
    containerProductsNames.push(item.nome.toLowerCase())
  })

  const productsItems = document.querySelectorAll('[data-item="carousel"]')

  const showProduct = index => {
    productsItems.forEach(nameItem => {
      const item = document.getElementById(`${index}`)

      if (index !== item.id) {
        nameItem.classList = 'product-item-hide'
      }
      if (index !== item.id) {
        item.classList = 'product-item'
      }
      if (index === '') {
        item.classList = 'product-item'
        deleteValue()
      }
    })
  }

  const hideProduct = index => {
    productsItems.forEach(nameItem => {
      nameItem.classList = 'product-item'
      deleteValue()
    })
  }

  const showSearchResult = () => {
    console.log(containerProductsNames)
    const nameValue = searchBar.value.toLowerCase()

    const foundNames = containerProductsNames.filter(name =>
      name.includes(nameValue)
    )

    const index = containerProductsNames.indexOf(foundNames[0])

    if (foundNames.length > 0) {
      console.log(index)
      showProduct(index)
    }
    if (nameValue === '') {
      hideProduct(index)
    }

    // containerProductsNames.some(name =>name.includes(searchBar.value.toLowerCase()))

    hideSlider(searchBar.value)
    showButtonDeleteValue(searchBar.value)
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
    showSearchResult()
    // collections.forEach(element => {

    // })
  }

  //Tira o efeito de envio e carregamento do form
  searchForm.addEventListener('submit', function (e) {
    e.preventDefault()
  })
  searchBar.addEventListener('input', startOperation)
  deleteValueButton.addEventListener('click', deleteValue)
}

export default searchProducts
