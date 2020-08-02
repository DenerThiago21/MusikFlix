import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
  console.log(config.URL_BACKEND);

  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaServer) => {
      if (respostaServer.ok) {
        const response = await respostaServer.json();
        return response;
      }

      throw new Error('Não foi possível comunicar com o servidor!');
    });
}

function getAllWithVideos() {
  console.log(config.URL_BACKEND);

  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaServer) => {
      if (respostaServer.ok) {
        const response = await respostaServer.json();
        return response;
      }

      throw new Error('Não foi possível comunicar com o servidor!');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
