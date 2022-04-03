import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import { TFormData } from '../../../core/Form';
import * as S from './style';

type SelectProps = {
  label: string;
  options: string[];
  name: 'value' | 'description' | 'currency' | 'method' | 'tag';
  register: UseFormRegister<TFormData>;
};

function Select({ label, options, name, register }: SelectProps) {
  return (
    <S.SelectControl>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Select
        {...register(name)}
        required
        name={name}
        id={name}
        defaultValue={options[0]}
      >
        <option hidden disabled />
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
