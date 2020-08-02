import { useState } from 'react';

function useForm(valoresIniciais) {
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

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
