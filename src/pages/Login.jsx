import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { validations } from '../shared/helpers/LoginValidation';
import { actionSetEmail } from '../store/reducers/user.reducer';

const Login = ({ history: { push } }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasDisabled, setHasDisabled] = useState(true);

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    const set = name === 'email' ? setEmail : setPassword;
    set(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionSetEmail(email));
    push('/carteira');
  };

  useEffect(() => {
    setHasDisabled(validations(email, password));
  }, [email, password]);

  return (
    <div>
      <form>
        <input
          label="Email"
          name="email"
          data-testid="email-input"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <input
          label="Password"
          name="password"
          data-testid="password-input"
          type="password"
          value={password}
          onChange={handleChange}
        />
        <button disabled={hasDisabled} onClick={handleSubmit} type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Login;
