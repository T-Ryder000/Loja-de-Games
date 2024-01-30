import { request } from "./js/request.js"
import drawSlider from "./js/drawSlider.js"
import drawProduct from "./js/drawProduct.js"
import products from "./js/products.js"
import slider from "./js/Slider.js"
import pageProduct from "./js/pages/pageProduct.js"

import toChange from "./js/toChangePage.js"

request()
.then((games)=>{
  drawSlider(games)
  slider()
  drawProduct(games)
  products()
  pageProduct(games)
  toChange(games)
})
.catch((error)=>{
 console.log(`Houve um erro na chamada de dados: ${error}`)
})



//Botão que scrolla a pagina, só aparece após scrollar 200px e some caso o contrario.

const buttonScrollar = document.querySelector('.scrollar');

window.addEventListener('scroll', function() {
  const scroll = window.scrollY || document.documentElement.scrollTop;

  if (scroll >= 200) {
    buttonScrollar.style.display = "block";
  } else {
    buttonScrollar.style.display = "none";
  }
});





