/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TemplateBase from '../../../components/TempateBase';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/UseForm';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    console.log('opa');

    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (respostaServer) => {
        const response = await respostaServer.json();
        console.log(response);
        setCategorias([
          ...response,
        ]);
      });
  }, [

  ]);

  return (
    <TemplateBase>
      <h1>
        Cadastro de Categoria:
        { values.titulo }
      </h1>

      <form onSubmit={function handleSubmit(infoEvento) {
        infoEvento.preventDefault();
        // console.log("tentativa de enviar o form")
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="nome da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loaging ...
        </div>
      )}

      <ul>
        {categorias.map((categorias) => (
          <li key={`${categorias.titulo}`}>
            {categorias.titulo}
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para a Home
      </Link>
    </TemplateBase>
  );
}

export default CadastroCategoria;
