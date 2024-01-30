const pageProduct = ()=>{

  const { collections } = games;

  collections.forEach(element => {

  const gameContainer = document.createElement('div')
  gameContainer.classList.add('game-container')

  const template = `
  <h1 class="game-title">${element.nome}</h1>
  <video class="game-trailer">${element.trailer}</video>
  <p class="game-description">${element.descricao}</p> 
  <form class="game-form" action="">
  <button class="game-button">ADICIONAR AO CARRINHO</button>
  </form>
  `
  gameContainer.innerHTML = template

  return gameContainer
 })
}


export default pageProduct