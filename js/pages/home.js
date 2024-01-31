const home=()=>{

  //Aqui é a sessao principal da pagina, o home. Ela é criada e retornada para ser add por um appenchild no script principal( script.js).

  const sectionGeneral = document.createElement('section')
  sectionGeneral.classList.add('section-general')

  const templateInitial = `
      <!-- Sessao do Slider inicial -->
      <section class="section-init">  
      <div class="poster-container" data-container="poster">
      </div>
      <div class="wrapper" >
        <ul class="slider-container" data-container="wrapper"></ul>
      </div> 
      </section>
      <section class="show-product" data-container="show-product">
      </section>
      <!-- Sessao da coleção de jogos -->
      <section class="section-products">
        <h2 class="section-products-title">Galeria de Jogos</h2>
      </section>
  `
   sectionGeneral.innerHTML = templateInitial

   return sectionGeneral
}

export default home