import { configureStore } from '@reduxjs/toolkit';

import user from './reducers/user.reducer';

const store = configureStore({
  reducer: { user },
  devTools: true,
});

export default store;
