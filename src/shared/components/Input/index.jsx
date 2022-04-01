import PropTypes from 'prop-types';
import React from 'react';

import * as S from './style';

const Input = ({ testid, type, label, name, onChange, value }) => (
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

Input.propTypes = {
  testid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
