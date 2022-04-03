import React, { memo, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';

import Form from '../../core/Form';
import Header from '../../core/Header';
import Table from '../../core/Table';
import { fetchCurrency } from '../../store/reducers/wallet.reducer';
import LayoutWallet from '../../styles/layouts/Wallet';
import * as S from './styles';

const Wallet = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  return (
    <LayoutWallet>
      <Header />
      <Form />
      <S.WalletMain>
        <Table />
      </S.WalletMain>
    </LayoutWallet>
  );
};

export default memo(Wallet);
