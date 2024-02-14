const addsSliderInteractions = () => {
  //Variaveis do codigo

  const slideContainer = document.querySelector('[data-container="poster"]')
  const slideItems = document.querySelectorAll('[data-item="poster"]')
  const wrapperItems = document.querySelectorAll('[data-item="wrapper"]')

  let currentIndex = 0
  let slideInterval


  //Função que para a alternancia automatica do poster 
  const slideStop=()=>{
    clearInterval(slideInterval)
    wrapperItems.forEach(item => {
      item.classList = 'slider-item'
  })}

  //Função que inicia novamente a alternancia automatica do poster 
  const slideStart=()=>{
    slideInterval = setInterval(autoSlide, 7000)
    showposter(currentIndex)
  }

  //Evento de mouse e touch que chama a funçao que para a alternancia dos posters
  slideContainer.addEventListener('mouseenter', slideStop)
  slideContainer.addEventListener('touchstart', slideStop)

    //Evento de mouse e touch que chama a funçao que inicia novamente a alternancia dos posters
  slideContainer.addEventListener('mouseleave', slideStart)
  slideContainer.addEventListener('touchend', slideStart)
  

  //Função para passar o index atual adiante, e mudar classes mediante isso
  const process = index => {
    currentIndex = index

    // Remove a classe 'active' de todos os itens e add a classe original
    slideItems.forEach(item => {
      item.classList = 'poster-item'
    })
    wrapperItems.forEach(item => {
      item.classList = 'slider-item'
    })

    // Adiciona a classe 'active' ao item clicado
    showposter(currentIndex)
  }

  //Função para adicionar a classe mediante o index passado, para que assim o slide funcione pela mudança de imagens.

  const showposter = index => {
    slideItems[index].classList = 'active-animation'
    wrapperItems[index].classList = 'active-slider'
  }

  //Função responsavel por tornar a mudança de imagens e indices do slide dinamico e automatico

  const autoSlide = () => {
    // Incrementa o índice
    currentIndex = (currentIndex + 1) % slideItems.length
    //remove classe
    process(currentIndex)
    // Exibe o poster correspondente
    showposter(currentIndex)
  }

  //Variavel que chama a função do temporizador para alternar os slides

  slideInterval = setInterval(autoSlide, 7000)

  //ForEach inicial, responsavél por fazer com que o primeiro indice apareça logo de inicio, e por mudar conforme o click nas imagens laterais do slide.

  wrapperItems.forEach((item, index) => {
    // Adiciona a classe 'active-slider' apenas ao primeiro item
    if (index === 0) {
      item.classList = 'active-slider'
      showposter(currentIndex)
    }

    slideItems.forEach((item, index) => {
      // Adiciona a classe 'active' apenas ao primeiro item
      if (index === 0) {
        item.classList = 'active-animation'
        showposter(currentIndex)
      }
    })

    //Muda o index conforme o click, e reseta e inicia novamente o alternador de slides automatico
    item.addEventListener('click', function () {
      clearInterval(slideInterval)
      slideInterval = setInterval(autoSlide, 7000)
      process(index)
    })
  })
}

export default addsSliderInteractions
