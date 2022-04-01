import PropTypes from 'prop-types';
import React from 'react';

import * as S from './style';

const Select = ({ testid, label, options, name, onChange, value }) => (
  <div>
    <S.Label htmlFor={ name }>
      {label}
      <select
        value={ value }
        onChange={ onChange }
        required
        data-testid={ testid }
        name={ name }
        id={ name }
      >
        {options.map((each, i) => <option key={ i } value={ each }>{each}</option>)}
      </select>
    </S.Label>
  </div>
);

Select.propTypes = {
  testid: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

Select.defaultProps = {
  options: [],
};

export default Select;
