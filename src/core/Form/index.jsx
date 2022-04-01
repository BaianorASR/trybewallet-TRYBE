import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { API } from '../../shared/api';
import Input from '../../shared/components/Input';
import Select from '../../shared/components/Select';
import { actionSaveEdit, actionsSetExpenses } from '../../store/reducers/wallet.reducer';

const Form = () => {
  const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
  const method = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  const initialState = {
    value: '',
    description: '',
    currency: '',
    method: '',
    tag: '',
  };

  const { currencies, expenses, idToEdit, editor } = useSelector((state) => state.wallet);

  const { register } = useForm();

  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialState);

  const editExpense = useCallback(() => {
    setFormData(idToEdit);
  }, [idToEdit]);

  useEffect(() => {
    if (editor) editExpense();
  }, [editExpense, editor]);

  const onSubmit = async () => {
    const sync = { id: expenses.length, ...formData, exchangeRates: await API() };
    dispatch(actionsSetExpenses(sync));
    setFormData(initialState);
  };

  const submitEdits = () => {
    dispatch(actionSaveEdit(formData));
    setFormData(initialState);
  };

  const handleChange = ({ target: { value, name } }) => {
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  return (
    <form>
      <Input
        value={ formData.value }
        testid="value-input"
        name="value"
        label="Valor"
        type="number"
        register={ register }
        onChange={ handleChange }
      />

      <Input
        value={ formData.description }
        testid="description-input"
        name="description"
        label="Descrição"
        type="text"
        register={ register }
        onChange={ handleChange }
      />
      <Select
        value={ formData.currency }
        testid="currency-input"
        name="currency"
        label="Moeda"
        options={ currencies }
        register={ register }
        onChange={ handleChange }
      />
      <Select
        value={ formData.method }
        testid="method-input"
        name="method"
        label="Método de pagamento"
        options={ method }
        register={ register }
        onChange={ handleChange }
      />
      <Select
        value={ formData.tag }
        testid="tag-input"
        name="tag"
        label="Tag"
        options={ tag }
        register={ register }
        onChange={ handleChange }
      />
      {!editor ? (
        <button
          onClick={ onSubmit }
          type="button"
        >
          Adicionar despesa
        </button>
      ) : (
        <button
          onClick={ submitEdits }
          type="button"
        >
          Editar despesa
        </button>
      )}
    </form>
  );
};
export default Form;
