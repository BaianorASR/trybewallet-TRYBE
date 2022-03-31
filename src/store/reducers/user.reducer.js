import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    actionSetEmail(state, { payload }) {
      state.email = payload;
    },
  },
});

export const { actionSetEmail } = user.actions;

export default user.reducer;
