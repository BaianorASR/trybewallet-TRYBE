/* eslint-disable security/detect-object-injection */
import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import * as S from './style';

// import { UseFormRegister } from 'react-hook-form';

// import type { TFormData } from '../../../core/Form';

type SelectProps = {
  label: string;
  options: string[];
  name: 'value' | 'description' | 'currency' | 'method' | 'tag';
  // register: UseFormRegister<TFormData>;
};

export const Select: FC<SelectProps> = ({ label, options, name }) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  if (name === 'currency') setValue(name, 'USD');

  return (
    <S.SelectControl>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Select
        {...register(name, {
          required: 'Este Campo é obrigatório',
        })}
        required
        name={name}
        id={name}
        defaultValue={options[0]}
      >
        {options.map(each => (
          <option key={each} value={each}>
            {each}
          </option>
        ))}
      </S.Select>
      {errors[name] && <S.ErrTooltip>{errors[name].message}</S.ErrTooltip>}
    </S.SelectControl>
  );
};

export default Select;
