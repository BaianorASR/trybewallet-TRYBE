import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TInitialState = { email: string };

const initialState: TInitialState = {
  email: '',
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    actionSetEmail(state, { payload }: PayloadAction<string>) {
      state.email = payload;
    },
  },
});

export const { actionSetEmail } = user.actions;

export default user.reducer;
