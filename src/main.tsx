import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from './App';
import store from './store/index.store';
import GlobalStyles from './styles/global';
import { dark, light } from './styles/themes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
