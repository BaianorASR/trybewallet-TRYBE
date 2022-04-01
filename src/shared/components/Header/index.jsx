import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const { user: { email }, wallet: { expenses } } = useSelector((state) => state);
  return (
    <header>
      <h1>TrybeWallet</h1>
      <div>
        <h2 data-testid="email-field">
          User:
          {email}
        </h2>
        <p data-testid="total-field">
          {
            expenses.reduce((acc, curr) => acc
            + (+curr.value * +curr.exchangeRates[curr.currency].ask),
            0).toFixed(2)
          }
        </p>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    </header>
  );
};

export default Header;
