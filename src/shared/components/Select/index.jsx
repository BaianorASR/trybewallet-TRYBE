import PropTypes from 'prop-types';
import React from 'react';

import * as S from './style';

const Select = ({ label, options, name, register }) => (
  <div>
    <S.Label htmlFor={ name }>
      {label}
      <S.Select { ...register(name) } name={ name } id={ name }>
        {options.map((each, i) => <option key={ i } value="">{each}</option>)}
      </S.Select>
    </S.Label>
  </div>
);

Select.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};

Select.defaultProps = {
  options: [],
};

export default Select;
