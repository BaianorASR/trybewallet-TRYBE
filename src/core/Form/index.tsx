import React, { FC, memo, useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { Input, Select } from '../../shared/components';
import { useAppDispatch, useAppSelector } from '../../store/index.store';
import * as A from '../../store/reducers';
import { initialState, method, tag } from './data';
import * as S from './styles';

export type TFormData = typeof initialState;

const Form: FC = () => {
  const { currencies, currentEdit, editor } = useAppSelector(state => state.wallet);
  const dispatch = useAppDispatch();
  const methods = useForm<TFormData>();
  const { reset, handleSubmit } = methods;

  useEffect(() => {
    if (editor && currentEdit) reset(currentEdit);
  }, [currentEdit, editor, reset]);

  const onSubmit: SubmitHandler<TFormData> = async (data, event) => {
    event?.target.reset();
    if (editor) {
      dispatch(A.actionSaveEdit(data));
      return;
    }
    dispatch(A.fetchAddExpense(data));
  };

  return (
    <FormProvider {...methods}>
      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input name="value" label="Valor" type="number" />
        <Input name="description" label="Descrição" type="text" />
        <Select name="currency" label="Moeda" options={currencies} />
        <Select name="method" label="Método de pagamento" options={method} />
        <Select name="tag" label="Tag" options={tag} />
        <S.FormButton type="submit" editor={editor}>
          {editor ? 'Editar despesa' : 'Adicionar despesa'}
        </S.FormButton>
      </S.FormContainer>
    </FormProvider>
  );
};

export default memo(Form);
