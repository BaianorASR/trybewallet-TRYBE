import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import ThemeContextProvider from './shared/context/theme';
import store from './store/index.store';

ReactDOM.render(
  <ThemeContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeContextProvider>,
  document.querySelector('#root'),
);
