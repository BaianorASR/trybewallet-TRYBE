import React from 'react';

import * as S from './style';

type SelectProps = {
  testid: string;
  label: string;
  options: string[];
  name: string;
  onChange: ({ target: { value, name } }: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
};

function Select({ testid, label, options, name, onChange, value }: SelectProps) {
  return (
    <S.SelectControl>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Select
        required
        value={value}
        data-testid={testid}
        name={name}
        id={name}
        onChange={onChange}
      >
        <option hidden disabled selected value=""></option>
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
