const drawSlider= (games) => {
  const { collections } = games;

  //Container dos Banners
  const posterContainer = document.querySelector('[data-container="poster"]');


  //Container wrapper
  const containerSlideItem = document.querySelector('[data-container="wrapper"]')
  
  // Verifica se o elemento containerWrapper foi encontrado no documento.
  if (!containerSlideItem) {
    console.error('Elemento "containerSlideItem" não foi encontrado no documento.');
    return;
  }



  collections.forEach(element => {
  // Criação dos Banners e inclusão

    const bannerItem = document.createElement('div');
    bannerItem.classList.add('poster-item');
    bannerItem.setAttribute('data-item', 'poster');

    bannerItem.innerHTML = `
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
        <form class="poster-acquire-form" action="">
          <button class="poster-acquire-buy">COMPRE AGORA</button>
          <button class="poster-acquire-save"><spam class="poster-acquire-save-text">PARA A LISTA DE DESEJOS  </spam><i class="fa-solid fa-bookmark"></i></button>
        </form>
      </div>
    </div>
    `;

    if (element.id > 8 ){
      posterContainer.appendChild(bannerItem);
    }


    //Criação do slideItem e inclusão

    const slideItem = document.createElement('li')
    slideItem.classList.add('slider-item')
    slideItem.setAttribute('data-item', 'wrapper')

    slideItem.innerHTML = `
    <img class="slider-image" src="${element.capa}" alt="">
    <h1 class="slider-title">${element.nome}</h1>
    `


    if(element.id > 8){
      containerSlideItem.appendChild(slideItem)
    }

  })

}

export default drawSlider