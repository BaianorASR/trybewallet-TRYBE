import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { validations } from '../shared/helpers/LoginValidation';
import { useAppDispatch } from '../store/index.store';
import { actionSetEmail } from '../store/reducers/user.reducer';

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasDisabled, setHasDisabled] = useState(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const set = name === 'email' ? setEmail : setPassword;
    set(value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(actionSetEmail(email));
    navigate('/carteira');
  };

  useEffect(() => {
    setHasDisabled(validations(email, password));
  }, [email, password]);

  return (
    <div>
      <form>
        <input
          name='email'
          data-testid='email-input'
          type='email'
          value={email}
          onChange={handleChange}
        />
        <input
          name='password'
          data-testid='password-input'
          type='password'
          value={password}
          onChange={handleChange}
        />
        <button disabled={hasDisabled} type='submit' onClick={handleSubmit}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
