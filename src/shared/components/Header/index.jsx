import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const { email } = useSelector((state) => state.user);
  return (
    <header>
      <h1>TrybeWallet</h1>
      <div>
        <h2 data-testid="email-field">
          User:
          {email}
        </h2>
        <h3 data-testid="total-field">
          {0}
          <span data-testid="header-currency-field">BRL</span>
        </h3>
      </div>
    </header>
  );
};

export default Header;
