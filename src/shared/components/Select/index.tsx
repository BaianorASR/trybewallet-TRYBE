import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { TFormData } from '../../../core/Form';
import * as S from './style';

type SelectProps = {
  label: string;
  options: string[];
  name: 'value' | 'description' | 'currency' | 'method' | 'tag';
  register: UseFormRegister<TFormData>;
  errors: FieldErrors<TFormData>;
};

function Select({ label, options, name, register, errors }: SelectProps) {
  return (
    <S.SelectControl>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Select
        {...register(name, {
          required: true,
        })}
        required
        name={name}
        id={name}
      >
        <option hidden disabled></option>
        {options.map(each => (
          <option key={each} value={each}>
            {each}
          </option>
        ))}
      </S.Select>
    </S.SelectControl>
  );
}

export default Select;
