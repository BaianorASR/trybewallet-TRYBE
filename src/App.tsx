import React from 'react';
import { Provider } from 'react-redux';

import AppRoutes from './pages/routes/index.routes';
import ThemeContextProvider from './shared/context/theme';
import store from './store/index.store';
import GlobalStyles from './styles/global';

const App = () => {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ThemeContextProvider>
  );
};

export default App;
