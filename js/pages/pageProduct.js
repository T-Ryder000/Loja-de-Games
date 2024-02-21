import saveProduct from '../modules/saveLocalStorage.js'

const pageProduct = games => {
  //Buttons

  const clickPage = document.querySelectorAll('[data-image="product"]') //capa do jogo, quando clicado, mostra a page do product
  const clickPageSearch = document.querySelectorAll(
    '[data-image="productSearch"]'
  ) //capa do jogo do campo de busca, quando clicado, mostra a page do product
  const returnButton = document.querySelector('[data-return="return-home"]') //Botao de retornar para page main

  //Sections, pages e modal

  const sectionSlider = document.querySelector('[data-container="slider"]') // Sessao do slider da pagina
  const sectionProducts = document.querySelector('[data-container="products"]') //Sessao da coleção de jogos
  const sectionFound = document.querySelector('[data-container="found"]') //Sessao da coleção de jogos do campo de busca
  const pageProduct = document.querySelector('[data-container="show-product"]') //page do product
  const pageCart = document.querySelector('[data-section="cart"]') //Page do carrinho de compras

  //Div que será incrementada na page do produto.
  const gameContainer = document.createElement('div')
  gameContainer.classList.add('game-container')
  pageProduct.appendChild(gameContainer) //add essa div a page do produto ("pageProduct")


  //Processing

  const { collections } = games //Desestruturação dos dados Json para uso

  collections.forEach(element => {
    //Functions

    //Função que limpa e add os dados do produto na div que foi criada para a sessao "Show product"
    const dataProcessing = index => {
      //Responsavél pela captura do gameContainer fora do loop
      const game = document.querySelector('.game-container')

      //Add os dados mediante o id do produto clicado
      if (index == element.id) {
        game.innerHTML = `
      <h1 class="game-title">${element.nome}</h1>
      <video src="${element.trailer}" class="game-trailer" poster="${element.poster}" controls>
      Seu navegador não suporta a Tag "VIDEO">
      </video>
      <h2 class="game-value">R$ ${element.preco}</h2>
      <h3 class="game-description">${element.descricao}</h3> 
      <form class="game-form" data-form="pageProduct" action="">
      <button class="game-button" data-button="page-product-add">ADICIONAR AO CARRINHO</button>
      </form>
      `

        //Para tornar os buttons da page main utilizaveis devido ao null q ocorre
        commandsPageProducts()
      }
    }

    //Mostrar a page do produto e o botao return, e esconde a page main
    const showAndHide = () => {
      returnButton.style.visibility = 'visible'
      pageProduct.classList = 'show-product'
      sectionSlider.classList = 'section-slider-hide'
      sectionProducts.classList = 'section-products-hide'
    }

    //Ao contrario da função showAndHide, pelo click do botão return, a page do product é escondida, e a page main é mostrada novamente
    const hidePageProduct = () => {
      const gameTrailer = document.querySelector('.game-trailer') // variavel do video para o trailer
      pauseVideo(gameTrailer)
      returnButton.style.visibility = 'hidden'
      pageProduct.classList = 'show-product-hide'
      sectionSlider.classList = 'section-slider'
      sectionProducts.classList = 'section-products'
      //para limpeza da barra de pesquisa
      const searchBar = document.querySelector('[data-bar="search"]')
      searchBar.value = ''
      //para esconder page do carrinho de compras
      pageCart.classList = 'section-shopping-cart-hide'
    }

    //Função que pausa o video após retornar para a pagina home
    const pauseVideo = gameTrailer => {
      if (gameTrailer) {
        gameTrailer.pause()
      }
    }


    //buttons

    //Varre cada produto e chama as funções mediante o produto que for clicado
    clickPage.forEach((item, index) => {
      item.addEventListener('click', function () {
        dataProcessing(index)
        showAndHide()
        sectionFound.classList = 'section-found-hide'

        productId = index
      })
    })
    //Varre cada produto e chama as funções mediante o produto do campo de busca que for clicado
    clickPageSearch.forEach((item, index) => {
      item.addEventListener('click', function () {
        dataProcessing(index)
        showAndHide()
        sectionFound.classList = 'section-found-hide'

        productId = index
      })
    })

    //Button de retornar que esconde a pagina do produto
    returnButton.addEventListener('click', hidePageProduct)


    //Retira efeito padrão de submit do form da page do produto
    const commandsPageProducts = () => {
      const formAddCartPageProduct = document.querySelector(
        '[data-form="pageProduct"]'
      )
      formAddCartPageProduct.addEventListener('submit', function (e) {
        e.preventDefault()
      })
    }

  })
}

export default pageProduct
