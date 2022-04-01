import { configureStore } from '@reduxjs/toolkit';

import user from './reducers/user.reducer';
import wallet from './reducers/wallet.reducer';

const store = configureStore({
  reducer: { user, wallet },
  devTools: true,
});

export default store;
