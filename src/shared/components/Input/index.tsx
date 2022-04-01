import { FC } from 'react';

import * as S from './style';

type InputProps = {
  testid: string;
  type: string;
  label: string;
  name: string;
  onChange: () => void;
  value: string;
};

const Input: FC<InputProps> = ({ testid, type, label, name, onChange, value }) => (
  <div>
    <S.InputLabel htmlFor={name}>{label}</S.InputLabel>
    <S.Input
      value={value}
      required
      data-testid={testid}
      name={name}
      id={name}
      type={type}
      onChange={onChange}
    />
  </div>
);

export default Input;
