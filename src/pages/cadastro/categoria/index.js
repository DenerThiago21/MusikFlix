import React, { useState } from 'react';
import TemplateBase from '../../../components/TempateBase';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
 
function CadastroCategoria ()
{
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais); 

  function setValue(key, val)
  {
    setValues({
      ...values,
      [key]: val,
    });
  }

  // função que pega o atributo name de cada campo e o valor também de forma genérica
  function handleChange (evento) {
    /*const {getAttribute, value} = evento.target;
    setValue(
      getAttribute('name'),
      value
    )*/
    setValue(
      evento.target.getAttribute('name'),
      evento.target.value,
    ); 
  }

  return(
    <TemplateBase>
        <h1>Cadastro de Categoria: { values.nome }</h1>

        <form onSubmit={function handleSubmit(infoEvento){
          infoEvento.preventDefault();
          //console.log("tentativa de enviar o form")
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais);
        }}>
          
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
        
         { /*
          <div>
            <label>
              Descrição:
              <textarea 
                type="text" 
                value={values.descricao}
                name="descricao"
                onChange={handleChange}
              />
            </label>
          </div>*/}

          <FormField 
            label="Cor"
            type="color" 
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />
         
          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map((categorias, indice) => {
            return (
              <li key={`${categorias}${indice}`}>
                {categorias.nome}
              </li>
            );
          })}
        </ul>
        <Link to="/">
            Ir para a Home
        </Link>
    </TemplateBase>
  );
}

export default CadastroCategoria;