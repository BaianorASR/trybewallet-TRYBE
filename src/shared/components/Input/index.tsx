import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import { TFormData } from '../../../core/Form';
import * as S from './style';

type InputProps = {
  type: string;
  label: string;
  name: 'value' | 'description' | 'currency' | 'method' | 'tag';

  register: UseFormRegister<TFormData>;
};

function Input({ type, label, name, register }: InputProps) {
  return (
    <S.InputControl>
      <S.InputLabel htmlFor={name}>{label}</S.InputLabel>
      <S.Input id={name} type={type} {...register(name)} />
    </S.InputControl>
  );
}

export default Input;
