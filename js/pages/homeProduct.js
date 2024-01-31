const homeProduct=()=>{

  const sectionGeneral = document.createElement('section')
  sectionGeneral.classList.add('section-general')

  const templateInitial = `
  <div class="show-product" data-container="show-product">
  </div>
  `

   sectionGeneral.innerHTML = templateInitial



   return sectionGeneral
}

export default homeProduct