import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objetoVideo) {
  console.log(objetoVideo);

  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoVideo),
  })
    .then(async (respostaServer) => {
      if (respostaServer.ok) {
        const response = await respostaServer.json();
        return response;
      }

      throw new Error('Não foi possível cadastrar o video!');
    });
}

export default {
  create,
};
