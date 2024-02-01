import home from "./js/pages/home.js" //importando pagina home
const main = document.querySelector('[data-main="root"]') // variavél da main
//Chama a pagina principal( o home ) ao carregar a pagina
window.addEventListener('DOMContentLoaded', () => {
  main.appendChild(home());
});


//importação dos arquivos javascripts, responsaveis por deixar a pagina dinamica e inclementar a parte do html mediante o necessario.
import { request } from "./js/service/request.js"
import drawSlider from "./js/components/drawSlider.js"
import drawProduct from "./js/components/drawProduct.js"
import products from "./js/modules/products.js"
import slider from "./js/modules/Slider.js"
import pageProduct from "./js/pages/pageProduct.js"


//Responsavél pela requisiçao dos dados Json, e circulação desses dados para as funções que precisam.
request()
.then((games) => {
    drawSlider(games);
    drawProduct(games);
    slider();
    products();
    pageProduct(games);
})
.catch((error) => {
  console.log(`Houve um erro na chamada de dados: ${error}`);
});


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





