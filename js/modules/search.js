const searchProducts = games => {
  const searchButton = document.querySelector('[data-button="search"]')
  const searchBar = document.querySelector('[data-bar="search"]')

  const containerSLider = document.querySelector('[data-container="slider"]')
  const deleteValueButton = document.querySelector('[data-delete="value"]')

  const showSearchResult = event => {
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
    searchBar.value = ''
    hideSlider(searchBar.value)
  }

  searchBar.addEventListener('input', showSearchResult)
  deleteValueButton.addEventListener('click', deleteValue)
}

export default searchProducts
