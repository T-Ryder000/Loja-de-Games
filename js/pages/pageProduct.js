import saveProduct from '../modules/saveLocalStorage.js'

const pageProduct = games => {
  //Buttons

  const clickPage = document.querySelectorAll('[data-image="product"]') //capa do jogo, quando clicado, mostra a page do product
  const clickPageCopy = document.querySelectorAll('[data-image="productCopy"]') //capa do jogo do campo de busca, quando clicado, mostra a page do product
  const returnButton = document.querySelector('[data-return="return-home"]') //Botao de retornar para page main

  //Sections e pages

  const containerSLider = document.querySelector('.section-slider') // Sessao do slider da pagina
  const sectionProducts = document.querySelector('.section-products') //Sessao da coleção de jogos
  const foundContainer = document.querySelector('[data-container="found"]') //Sessao da coleção de jogos do campo de busca
  const showProduct = document.querySelector('[data-container="show-product"]') //page do product

  //Div que será incrementada na page do produto.
  const gameContainer = document.createElement('div')
  gameContainer.classList.add('game-container')
  showProduct.appendChild(gameContainer) //add essa div a page do produto ("ShowProduct")

  let productId; //index do product clicado

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
      showProduct.classList = 'show-product'
      containerSLider.classList = 'section-slider-hide'
      sectionProducts.classList = 'section-products-hide'
    }

    //Ao contrario da função showAndHide, pelo click do botão return, a page do product é escondida, e a page main é mostrada novamente
    const hidePageProduct = () => {
      const gameTrailer = document.querySelector('.game-trailer') // variavel do video para o trailer
      pauseVideo(gameTrailer)
      returnButton.style.visibility = 'hidden'
      showProduct.classList = 'show-product-hide'
      containerSLider.classList = 'section-slider'
      sectionProducts.classList = 'section-products'
      //para limpeza da barra de pesquisa
      const searchBar = document.querySelector('[data-bar="search"]')
      searchBar.value = ''
    }

    //Função que pausa o video após retornar para a pagina home
    const pauseVideo = gameTrailer => {
      if (gameTrailer) {
        gameTrailer.pause()
      }
    }


    //Cria objeto e envia dados para serem salvos no local storage
    const createProductToSave = index => {
      if (index === element.id) {
        const gameForCart = {
          nome: `${element.nome}`,
          preco: `${element.preco}`,
          capa: `${element.capa}`,
          id: index
        }
        //função importada
        saveProduct(gameForCart)
        }
      }


//Commands buttons da page product

    const commandsPageProducts=()=>{
      //Button para ocultar page do product e ir ao Carrinho de Compras
      const btnAddCartPageProduct = document.querySelector('[data-button="page-product-add"]') //Add product ao carrinho
      btnAddCartPageProduct.addEventListener('click',function(){
         hidePageProduct()
         createProductToSave(productId)
        })
      //form da page product
      const formAddCartPageProduct = document.querySelector('[data-form="pageProduct"]') //form da page dos produtos
      formAddCartPageProduct.addEventListener('submit', function(e){
          e.preventDefault()
      })
    }



    //buttons

    //Varre cada produto e chama as funções mediante o produto que for clicado
    clickPage.forEach((item, index) => {
      item.addEventListener('click', function () {
        dataProcessing(index)
        showAndHide()
        foundContainer.classList = 'section-found-hide'

        productId = index
      })
    })
    //Varre cada produto e chama as funções mediante o produto do campo de busca que for clicado
    clickPageCopy.forEach((item, index) => {
      item.addEventListener('click', function () {
        dataProcessing(index)
        showAndHide()
        foundContainer.classList = 'section-found-hide'

        productId = index
      })
    })

    //Button de retornar que esconde a pagina do produto
    returnButton.addEventListener('click', hidePageProduct)


  })
}

export default pageProduct
