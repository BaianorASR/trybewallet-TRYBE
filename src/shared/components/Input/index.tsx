import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { TFormData } from '../../../core/Form';
import * as S from './style';

type InputProps = {
  type: string;
  label: string;
  name: 'value' | 'description' | 'currency' | 'method' | 'tag';

  register: UseFormRegister<TFormData>;
  errors: FieldErrors<TFormData>;
};

function Input({ type, label, name, register, errors }: InputProps) {
  return (
    <S.InputControl>
      <S.InputLabel htmlFor={name}>{label}</S.InputLabel>
      <S.Input
        id={name}
        type={type}
        {...register(name, {
          required: 'preencha esta campo!',
          minLength: {
            value: 5,
            message: 'comprimento mínimo de 5 carácteres',
          },
        })}
      />
      {errors[name] && <S.ErrTooltip>{errors[name]?.message}</S.ErrTooltip>}
    </S.InputControl>
  );
}

export default Input;
