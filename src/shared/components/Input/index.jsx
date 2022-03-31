import PropTypes from 'prop-types';
import React from 'react';

import * as S from './style';

const Input = ({ type, label, register, name }) => (
  <div>
    <S.InputLabel htmlFor={ name }>{label}</S.InputLabel>
    <S.Input
      { ...register(name) }
      name={ name }
      id={ name }
      type={ type }
    />
  </div>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};

export default Input;
