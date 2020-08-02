import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TemplateBase from '../../../components/TempateBase';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/UseForm';
import Button from '../../../components/Button';
import VideosRepository from '../../../repositories/videos';
import CategoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({

  });

  useEffect(() => {
    CategoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <TemplateBase>
      <h1>Cadastro de Vídeo Novo!</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Vídeo cadastrado com sucesso!!!');

        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);
        console.log(categoriaEscolhida);
        VideosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >

        <FormField
          label="Título do vídeo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL do vídeo"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </TemplateBase>
  );
}

export default CadastroVideo;
