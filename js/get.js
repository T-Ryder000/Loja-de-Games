export const get = ()=>{

  return new Promise((resolve, reject)=>{
    fetch('./json/dados.json')
    .then((response)=>{
     return response.json()
    }).then((result)=>{
      resolve(result.games)
    })
    .catch((error)=>{
      reject(error.message)
    })
  })


}