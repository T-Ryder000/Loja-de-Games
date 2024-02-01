const pageProduct=(games)=>{

  // variaveis

  const sectionInit = document.querySelector('.section-init') // Sessao do slider da pagina
  const sectionProducts = document.querySelector('.section-products') // sessao da coleção de jogos
  const product = document.querySelectorAll('[data-item="carousel"]') //variavel dos Jogos da coleção
  const returnButton =document.querySelector('[data-return="return-home"]')// botão escondido, que aparece quando se está na pagina do jogo, para ele retornar ao home.
  const showProduct = document.querySelector('[data-container="show-product"]')//sessao escondida da pagina que mostra os dados do produto, ela aparecerá quando houver um click em um item no home.


  const gameContainer = document.createElement('div')//Criando div que será incrementada na sessao escondida do produto.
  gameContainer.classList.add('game-container')//Add uma classe a essa div
  showProduct.appendChild(gameContainer)//add essa div a sessao escondida "ShowProduct"

  //processamento

  const { collections } = games; //Desestruturação dos dados Json e logo em seguida um forEach para usa-los nos destalhes dos produtos.

  collections.forEach(element => {
    
  //Função que limpa e add os dados do produto na div que foi criada para a sessao "Show product"
  const dataProcessing=(index)=>{

    //Responsavél pela captura do gameContainer fora do loop
    const game = document.querySelector('.game-container') 

    //Add os dados mediante o id do porduto clicado
    if(index == element.id){
      game.innerHTML=`
      <h1 class="game-title">${element.nome}</h1>
      <video src="${element.trailer}" class="game-trailer" poster="${element.poster}" controls>
      Seu navegador não suporta a Tag "VIDEO">
      </video>
      <h2 class="game-value">R$ ${element.preco}</h2>
      <h3 class="game-description">${element.descricao}</h3> 
      <form class="game-form" action="////#">
      <button class="game-button">ADICIONAR AO CARRINHO</button>
      </form>
      `
      }

    }

  //Responsavel por mostrar o produto e o botao return, ao mesmo tempo que esconde o resto do componentes do main(slider e coleção de produtos)
  const showAndHide=()=>{
      returnButton.style.visibility = "visible"
      showProduct.style.display="flex"
      sectionInit.style.display="none"
      sectionProducts.style.display="none"
  }

  //Varre cada produto e chama as funções mediante o produto que for clicado
  product.forEach((item, index)=>{
    item.addEventListener('click', function(){
      dataProcessing(index) 
      showAndHide()

      // const gameTrailerIframe = document.querySelector('.game-trailer-iframe iframe')
      // pausarIframe(gameTrailerIframe)
    }) 
  })

  //Função que pausa o video após retornar para a pagina home
  const pauseVideo=(gameTrailer)=>{
    if(gameTrailer){
      gameTrailer.pause()
    }

  }

  //Faz o efeito contrario da função showAndHide, mediante o click do botão return, a pagina do item é escondida, e o home é mostrado novamente  
  returnButton.addEventListener('click', ()=>{
    const gameTrailer = document.querySelector('.game-trailer')// variavel do video para o trailer
    pauseVideo(gameTrailer)
    returnButton.style.visibility = "hidden"
    showProduct.style.display="none"
    sectionInit.style.display="flex"
    sectionProducts.style.display="flex"
  })
});

}


export default pageProduct