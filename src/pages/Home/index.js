import React from 'react';
import TemplateBase from '../../components/TempateBase';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Caroussel from '../../components/Caroussel';



function Home() {
  return (
      <TemplateBase >

        <BannerMain 
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"Musica que estou tirando no momento!"}
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
        />

      </ TemplateBase>
  );
}

export default Home;
