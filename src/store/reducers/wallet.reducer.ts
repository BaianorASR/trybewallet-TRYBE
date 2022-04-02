import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { API } from '../../shared/api';

import type { expenses } from '../../shared/types/@types.store';

export const fetchCurrency = createAsyncThunk('wallet/fetchCurrency', async () => {
  const response = await API();
  return Object.keys(response);
});

type InitialState = {
  currencies: [] | string[];
  expenses: expenses[];
  editor: boolean;
  currentEdit: undefined | expenses;
};

const initialState: InitialState = {
  currencies: [],
  expenses: [] as expenses[],
  editor: false,
  currentEdit: undefined,
};

const wallet = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    actionsSetExpenses(state, { payload }: PayloadAction<expenses>) {
      state.expenses.push(payload);
    },
    actionsRemoveExpense(state, { payload }) {
      state.expenses = state.expenses.filter(each => each.id !== payload);
    },
    actionsEditExpense(state, { payload }) {
      const findTarget = state.expenses?.find(each => each.id === payload);
      state.editor = true;
      state.currentEdit = findTarget;
    },
    actionSaveEdit(state, { payload }) {
      state.expenses = state.expenses.map(each =>
        each.id === state.currentEdit?.id ? payload : each,
      );
      state.editor = false;
      state.currentEdit = undefined;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCurrency.fulfilled, (state, action) => {
      state.currencies = action.payload;
    });
  },
});

export const {
  actionsSetExpenses,
  actionsRemoveExpense,
  actionsEditExpense,
  actionSaveEdit,
} = wallet.actions;

export default wallet.reducer;
