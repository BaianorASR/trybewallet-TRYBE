import { FC } from 'react';

import * as S from './style';

type SelectProps = {
  testid: string;
  label: string;
  options: string[];
  name: string;
  onChange: () => void;
  value: string;
};

const Select: FC<SelectProps> = ({ testid, label, options, name, onChange, value }) => (
  <div>
    <S.Label htmlFor={name}>
      {label}
      <select
        value={value}
        onChange={onChange}
        required
        data-testid={testid}
        name={name}
        id={name}
      >
        {options.map((each, i) => (
          <option key={i} value={each}>
            {each}
          </option>
        ))}
      </select>
    </S.Label>
  </div>
);

export default Select;
