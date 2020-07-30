import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TemplateBase from '../../../components/TempateBase';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, val) {
    setValues({
      ...values,
      [key]: val,
    });
  }

  // função que pega o atributo name de cada campo e o valor também de forma genérica
  function handleChange(evento) {
    /* const {getAttribute, value} = evento.target;
    setValue(
      getAttribute('name'),
      value
    ) */
    setValue(
      evento.target.getAttribute('name'),
      evento.target.value,
    );
  }

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
        { values.nome }
      </h1>

      <form onSubmit={function handleSubmit(infoEvento) {
        infoEvento.preventDefault();
        // console.log("tentativa de enviar o form")
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
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
          <li key={`${categorias.nome}`}>
            {categorias.nome}
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
