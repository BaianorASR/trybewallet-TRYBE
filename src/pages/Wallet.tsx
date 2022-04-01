import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';

import Form from '../core/Form';
import Table from '../core/Table';
import Header from '../shared/components/Header';
import { fetchCurrency } from '../store/reducers/wallet.reducer';

const Wallet = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Form />
      <Table />
    </div>
  );
};
export default Wallet;
