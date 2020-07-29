import React from 'react';
import TemplateBase from '../../../components/TempateBase';
import { Link } from 'react-router-dom';

function CadastroCategoria ()
{
  return(
    <TemplateBase>
        <h1>Cadastro de Categoria!</h1>

        <Link to="/">
            Ir para a Home
        </Link>
    </TemplateBase>
  );
}

export default CadastroCategoria;