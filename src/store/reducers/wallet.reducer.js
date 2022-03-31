import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wallet: '',
};

const wallet = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    actionsSetWallet(state, { payload }) {
      state.email = payload;
    },
  },
});

export const { actionsSetWallet } = wallet.actions;

export default wallet.reducer;
