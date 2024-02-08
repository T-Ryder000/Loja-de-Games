const createMainPageTemplate = () => {
  //Aqui é a sessao principal da pagina, o home. Ela é criada e retornada para ser add por um appenchild no script principal( script.js).

  const sectionGeneral = document.createElement('section')
  sectionGeneral.classList.add('section-general')

  const templateInitial = `
      <!-- Sessao do Slider inicial -->
      <section class="section-slider" data-container="slider">  
      <div class="poster-container" data-container="poster">
      </div>
      <div class="wrapper" >
        <ul class="slider-container" data-container="wrapper"></ul>
      </div> 
      </section>
      <!-- Sessao de pagina do produto escondida -->
      <section class="show-product" data-container="show-product">
      </section>
      <!-- Sessao da coleção de jogos -->
      <section class="section-products" data-container="products">
        <h2 class="section-products-title">Galeria de Jogos</h2>
      </section>
      <!-- Sessao da coleção de jogos encontrados na pesquisa -->
      <section class="section-found-hide" data-container="found">
        <h2 class="section-products-title" data-search="result-text"></h2>
        <ul class="section-found-search" data-search="found"></ul>
      </section>
  `
  sectionGeneral.innerHTML = templateInitial

  return sectionGeneral
}

export default createMainPageTemplate
