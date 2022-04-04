import React, { FC, memo } from 'react';
import { MdNightlight, MdWbSunny } from 'react-icons/md';
import Switch from 'react-switch';

import { useTheme } from '../../shared/hooks';
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
      <S.HeaderLeftContainer>
        <Switch
          name="Switch"
          onChange={toggleTheme}
          checked={theme.name === 'dark'}
          onColor="#1A535C"
          width={30}
          height={16}
          handleDiameter={10}
          checkedIcon={<MdNightlight />}
          uncheckedIcon={<MdWbSunny />}
        />
        <S.HeaderEmail data-testid="email-field">{email}</S.HeaderEmail>
        <p data-testid="total-field">{totalField()}</p>
      </S.HeaderLeftContainer>
    </S.HeaderContainer>
  );
};

export default memo(Header);
