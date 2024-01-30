const toChange = ()=>{

  import pageProduct from "./pages/pageProduct";

const { collections } = games;


collections.forEach(element => {

const main = document.querySelector('[data-main="root"]')

const init = ()=>{
  main.innerHTML = ''
  window.addEventListener('hashchange',()=>{
    switch(window.location.hash){
      case " ":
        main.appendChild();
        break;
      case `${element.nome}`:
        main.appendChild(pageProduct())
        break;
      default: 
        main.appendChild(home());
    }
  })
}

window.addEventListener('load', ()=>{
 main.appendChild()
 init()
})

  })

}

export default toChange