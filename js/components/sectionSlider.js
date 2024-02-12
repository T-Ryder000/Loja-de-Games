import addSliderCart from '../modules/addSliderCart.js'

const createAndAddSliderSection = games => {

  const { collections } = games

  const lastSixElements = collections.length - 7 // variavel que condiciona o slider a mostrar sempre os ultimos 6 elementos do banco json
 
  //Container dos posters
  const posterContainer = document.querySelector('[data-container="poster"]')

  //Container wrapper
  const containerSlideItem = document.querySelector(
    '[data-container="wrapper"]'
  )

  // Verifica se o elemento containerWrapper foi encontrado no documento.
  if (!containerSlideItem) {
    console.error(
      'Elemento "containerSlideItem" não foi encontrado no documento.'
    )
    return
  }

  collections.forEach(element => {
    // Criação dos posters e inclusão

    const posterItem = document.createElement('div')
    posterItem.classList.add('poster-item')
    posterItem.setAttribute('data-item', 'poster')

    posterItem.innerHTML = `
    <img class="poster-image" src="${element.poster}" alt="">
    
    <div class="poster-details">
      <div class="poster-title-container">
        <h1 class="poster-title">${element.nome}</h1>
      </div>
      <div class="poster-description">
        <p class="poster-description-text1">JÁ DISPONIVEL</p>
        <p class="poster-description-text2">${element.descricao}</p>
      </div>
      <div class="poster-acquire">
        <p class="poster-acquire-text">A partir de R$ ${element.preco}</p>
        <form class="poster-acquire-form" data-form="slider" action="">
          <button class="poster-acquire-buy" data-button="button" >COMPRE AGORA</button>
          <button class="poster-acquire-save"><spam class="poster-acquire-save-text">PARA A LISTA DE DESEJOS  </spam><i class="fa-solid fa-bookmark"></i></button>
        </form>
      </div>
    </div>
    `


    if (element.id > lastSixElements) {
      posterContainer.appendChild(posterItem)
    }

    //Criação do slideItem e inclusão

    const slideItem = document.createElement('li')
    slideItem.classList.add('slider-item')
    slideItem.setAttribute('data-item', 'wrapper')

    slideItem.innerHTML = `
    <img class="slider-image" src="${element.capa}" alt="">
    <h1 class="slider-title">${element.nome}</h1>
    `

    if (element.id > lastSixElements) {
      containerSlideItem.appendChild(slideItem)
    }
  })

  addSliderCart(games)
}

export default createAndAddSliderSection
