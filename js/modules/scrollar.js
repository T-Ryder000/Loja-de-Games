const scrollar=()=>{


const buttonScrollar = document.querySelector('[data-button="scrollar"]');//Botão que scrolla a pagina

window.addEventListener('scroll', function() {
  const scroll = window.scrollY || document.documentElement.scrollTop;

  //Só aparece após scrollar 200px para baixo, e some caso o contrario.
  if (scroll >= 200) {
    buttonScrollar.style.display = "block";
  } else {
    buttonScrollar.style.display = "none";
  }
});

}

export default scrollar