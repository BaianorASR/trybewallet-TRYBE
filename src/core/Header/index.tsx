import React, { FC } from 'react';
import Switch from 'react-switch';

import useTheme from '../../shared/hooks/useTheme';
import { useAppSelector } from '../../store/index.store';
import * as S from './styles';

const Header: FC = () => {
  const {
    user: { email },
    wallet: { expenses },
  } = useAppSelector(state => state);

  const { theme, toggleTheme } = useTheme();

  const totalField = () =>
    expenses
      ?.reduce((accumulator, current) => {
        const stringToNumber =
          Number(current.value) * Number(current.exchangeRates[current.currency].ask);
        return accumulator + stringToNumber;
      }, 0)
      .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <S.HeaderContainer>
      <S.HeaderTitle>
        BaiWallet
        <S.HeaderLogo />
      </S.HeaderTitle>
      <div>
        <Switch onChange={toggleTheme} checked={theme.name === 'dark'} />
        <h2 data-testid="email-field">{email}</h2>
        <p data-testid="total-field">{totalField()}</p>
      </div>
    </S.HeaderContainer>
  );
};

export default Header;
