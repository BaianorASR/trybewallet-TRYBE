/* eslint-disable security/detect-object-injection */
import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import * as S from './style';

type InputProps = {
  type: string;
  label: string;
  name: 'value' | 'description' | 'currency' | 'method' | 'tag';
};

export const Input: FC<InputProps> = ({ type, label, name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <S.InputControl>
      <S.InputLabel htmlFor={name}>{label}</S.InputLabel>
      <S.Input
        id={name}
        type={type}
        {...register(name, {
          required: 'Esse campo é obrigatório',
          minLength: {
            value: name === 'description' ? 4 : 1,
            message: `Mínimo de ${name === 'description' ? 4 : 1} dígitos`,
          },
        })}
      />
      {errors[name] && <S.ErrTooltip>{errors[name]?.message}</S.ErrTooltip>}
    </S.InputControl>
  );
};
