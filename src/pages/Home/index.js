import React, { useEffect, useState } from 'react';
import TemplateBase from '../../components/TempateBase';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Caroussel from '../../components/Caroussel';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  // http://localhost:8080/categorias?_embed=videos
  return (
    <TemplateBase paddingAll={0}>
      {dadosIniciais.length === 0 && (<div> Loaging ... </div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Musica que estou tirando no momento!"
              />

              <Caroussel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }
        return (
          <Caroussel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Musica que estou tirando no momento!"
      />

      <Caroussel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Caroussel
        category={dadosIniciais.categorias[1]}
      />

      <Caroussel
        category={dadosIniciais.categorias[2]}
      />

      <Caroussel
        category={dadosIniciais.categorias[3]}
      />

      <Caroussel
        category={dadosIniciais.categorias[4]}
      /> */}

    </TemplateBase>
  );
}

export default Home;
