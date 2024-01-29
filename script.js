import { request } from "./js/request.js"
import home from "./js/home.js"
import products from "./js/products.js"

request()
.then((games)=>{
  home(games)
  products()
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




