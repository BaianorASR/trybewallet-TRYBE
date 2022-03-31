import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { API } from '../../shared/api';
import Input from '../../shared/components/Input';
import Select from '../../shared/components/Select';

const Form = () => {
  const [currencies, setCurrencies] = useState([]);
  const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
  const method = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    API().then(setCurrencies);
  }, []);

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <Input name="value" label="Valor" type="number" register={ register } />
      <Input name="description" label="Descrição" type="text" register={ register } />
      <Select
        name="currency"
        label="Moeda"
        options={ Object.keys(currencies) }
        register={ register }
      />
      <Select
        name="method"
        label="Método de pagamento"
        options={ method }
        register={ register }
      />
      <Select name="tag" label="Tag" options={ tag } register={ register } />
      <button type="submit">Adicionar despesa</button>
    </form>
  );
};
export default Form;
