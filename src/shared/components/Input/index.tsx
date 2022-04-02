import React from 'react';

import * as S from './style';

type InputProps = {
  testid: string;
  type: string;
  label: string;
  name: string;
  onChange: ({ target: { value, name } }: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

function Input({ testid, type, label, name, onChange, value }: InputProps) {
  return (
    <S.InputControl>
      <S.Input
        required
        value={value}
        data-testid={testid}
        name={name}
        id={name}
        type={type}
        onChange={onChange}
      />
      <S.InputLabel htmlFor={name}>{label}</S.InputLabel>
    </S.InputControl>
  );
}

export default Input;
