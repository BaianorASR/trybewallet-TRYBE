import React, { FC, memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { validations } from '../../shared/helpers/LoginValidation';
import { useAppDispatch } from '../../store/index.store';
import { actionSetEmail } from '../../store/reducers/user.reducer';
import * as S from './styles';

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

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(actionSetEmail(email));
    navigate('/carteira');
  };

  useEffect(() => {
    setHasDisabled(validations(email, password));
  }, [email, password]);

  return (
    <S.LoginContainer>
      <S.LoginForm>
        <S.LoginTitle>BaiWallet</S.LoginTitle>
        <S.LoginLabel>
          Email
          <S.LoginInput
            name="email"
            placeholder="usuario@email.com"
            data-testid="email-input"
            type="email"
            value={email}
            onChange={handleChange}
          />
        </S.LoginLabel>
        <S.LoginLabel>
          Senha
          <S.LoginInput
            placeholder="digite sua senha"
            name="password"
            data-testid="password-input"
            type="password"
            value={password}
            onChange={handleChange}
          />
        </S.LoginLabel>
        <S.LoginButton disabled={hasDisabled} onClick={handleSubmit}>
          Entrar
        </S.LoginButton>
      </S.LoginForm>
    </S.LoginContainer>
  );
};

export default memo(Login);
