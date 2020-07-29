import React from 'react';
import TemplateBase from '../../../components/TempateBase';
import { Link } from 'react-router-dom';

function CadastroVideo ()
{
  return(
    <TemplateBase>
        <h1>Cadastro de Vídeo Novo!</h1>

        <Link to="/cadastro/categoria">
            Cadastrar Categoria
        </Link>
    </TemplateBase>
  );
}

export default CadastroVideo;