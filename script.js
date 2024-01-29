import { get } from "./js/get.js"
import home from "./js/home.js"
import products from "./js/products.js"

get()
.then((games)=>{
  home(games)
  products()
})
.catch((error)=>{
 console.log(`Houve um erro na chamada de dados: ${error}`)
})





