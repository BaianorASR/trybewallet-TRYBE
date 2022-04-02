import React, { FC, memo, useCallback, useEffect, useState } from 'react';

import { API } from '../../shared/api';
import Input from '../../shared/components/Input';
import Select from '../../shared/components/Select';
import { useAppDispatch, useAppSelector } from '../../store/index.store';
import { actionSaveEdit, actionsSetExpenses } from '../../store/reducers/wallet.reducer';
import * as S from './styles';

const Form: FC = () => {
  const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
  const method = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  const initialState = {
    value: '',
    description: '',
    currency: '',
    method: '',
    tag: '',
  };
  const { currencies, expenses, currentEdit, editor } = useAppSelector(
    state => state.wallet,
  );
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState(initialState);

  const editExpense = useCallback(() => {
    currentEdit && setFormData(currentEdit);
  }, [currentEdit]);

  useEffect(() => {
    if (editor) editExpense();
  }, [editExpense, editor]);

  const onSubmit = async () => {
    const sync = { id: expenses?.length, ...formData, exchangeRates: await API() };
    dispatch(actionsSetExpenses(sync));
    setFormData(initialState);
  };

  const submitEdits = () => {
    dispatch(actionSaveEdit(formData));
    setFormData(initialState);
  };

  const handleChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(previous => ({ ...previous, [name]: value }));
  };

  return (
    <S.FormContainer>
      <Input
        value={formData.value}
        testid="value-input"
        name="value"
        label="Valor"
        type="number"
        onChange={handleChange}
      />

      <Input
        value={formData.description}
        testid="description-input"
        name="description"
        label="Descrição"
        type="text"
        onChange={handleChange}
      />
      <Select
        value={formData.currency}
        testid="currency-input"
        name="currency"
        label="Moeda"
        options={currencies}
        onChange={handleChange}
      />
      <Select
        value={formData.method}
        testid="method-input"
        name="method"
        label="Método de pagamento"
        options={method}
        onChange={handleChange}
      />
      <Select
        value={formData.tag}
        testid="tag-input"
        name="tag"
        label="Tag"
        options={tag}
        onChange={handleChange}
      />
      {!editor ? (
        <S.FormButton onClick={onSubmit} type="button">
          Adicionar despesa
        </S.FormButton>
      ) : (
        <S.FormButton onClick={submitEdits} type="button">
          Editar despesa
        </S.FormButton>
      )}
    </S.FormContainer>
  );
};

export default memo(Form);
