import React, { FC, memo, useCallback, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { API } from '../../shared/api';
import Input from '../../shared/components/Input';
import Select from '../../shared/components/Select';
import { useAppDispatch, useAppSelector } from '../../store/index.store';
import { actionSaveEdit, actionsSetExpenses } from '../../store/reducers/wallet.reducer';
import * as S from './styles';

const initialState = {
  value: '',
  description: '',
  currency: '',
  method: '',
  tag: '',
};

export type TFormData = typeof initialState;

const Form: FC = () => {
  const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
  const method = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];

  const { currencies, currentEdit, editor } = useAppSelector(state => state.wallet);
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<TFormData>();

  const editExpense = useCallback(() => {
    currentEdit && reset(currentEdit);
  }, [currentEdit]);

  useEffect(() => {
    if (editor) editExpense();
  }, [editExpense, editor]);

  const onSubmit: SubmitHandler<TFormData> = async (data, event) => {
    event?.target.reset();
    const sync = { id: uuidv4(), ...data, exchangeRates: await API() };
    dispatch(actionsSetExpenses(sync));
  };

  const onEdit: SubmitHandler<TFormData> = (data, event) => {
    event?.target.reset();
    dispatch(actionSaveEdit(data));
  };

  return (
    <S.FormContainer onSubmit={handleSubmit(editor ? onEdit : onSubmit)}>
      <Input {...{ register }} name="value" label="Valor" type="number" />
      <Input {...{ register }} name="description" label="Descrição" type="text" />
      <Select {...{ register }} name="currency" label="Moeda" options={currencies} />
      <Select
        {...{ register }}
        name="method"
        label="Método de pagamento"
        options={method}
      />
      <Select {...{ register }} name="tag" label="Tag" options={tag} />
      <S.FormButton type="submit">
        {editor ? 'Editar despesa' : 'Adicionar despesa'}
      </S.FormButton>
    </S.FormContainer>
  );
};

export default memo(Form);
