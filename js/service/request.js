export const request = () => new Promise((resolve, reject) => {
  fetch('./json/dados.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }
      return response.json();
    })
    .then((result) => resolve(result.games))
    .catch((error) => reject(error.message));
});
