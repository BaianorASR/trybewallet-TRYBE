import { FC } from 'react';

import { useAppSelector } from '../../../store/index.store';

const Header: FC = () => {
  const {
    user: { email },
    wallet: { expenses },
  } = useAppSelector((state) => state);

  const totalField = () =>
    expenses
      .reduce((acc, curr) => {
        const stringToNumber = +curr.value * +curr.exchangeRates[curr.currency].ask;
        return acc + stringToNumber;
      }, 0)
      .toFixed(2);

  return (
    <header>
      <h1>TrybeWallet</h1>
      <div>
        <h2 data-testid="email-field">{email}</h2>
        <p data-testid="total-field">{totalField()}</p>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    </header>
  );
};

export default Header;
