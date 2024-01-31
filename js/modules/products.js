const carouselProducts=()=>{

  const containerGeneral = document.querySelectorAll('.products-container') 
  

  let startX = 0

   containerGeneral.forEach((element)=>{

    const productContainerItem = element.querySelector('.product-container-item')
    const btnPrevious = element.querySelector('[data-button="previous"]')
    const btnNext = element.querySelector('[data-button="next"]')

    btnNext.addEventListener('click', function(e){
      productContainerItem.scrollLeft += startX + e.clientX
    })
    btnPrevious.addEventListener('click', function(e){
      productContainerItem.scrollLeft = startX - e.clientX
    })

  })
  
  const productItem = document.querySelectorAll('[data-item="carousel"]')



  




  const preventDefault = (event) => {
    event.preventDefault()
  } 


  productItem.forEach((item)=>{
    // const link = item.querySelector('[data-link="item"]')
    // link.addEventListener('click', preventDefault)
    item.addEventListener('dragstart', preventDefault)
  })

  
  }
  export default carouselProducts