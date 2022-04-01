import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { API } from '../../shared/api';

export const fetchCurrency = createAsyncThunk(
  'wallet/fetchCurrency',
  async () => {
    const response = await API();
    return Object.keys(response);
  },
);

const initialState = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    actionsSetExpenses(state, { payload }) {
      state.expenses.push(payload);
    },
    actionsRemoveExpense(state, { payload }) {
      state.expenses = state.expenses.filter((each) => each.id !== payload);
    },
    actionsEditExpense(state, { payload }) {
      const findTarget = state.expenses.find((each) => each.id === payload);
      state.editor = true;
      state.idToEdit = findTarget;
    },
    actionSaveEdit(state, { payload }) {
      state.expenses = state.expenses
        .map((each) => (each.id === state.idToEdit.id ? payload : each));
      state.editor = false;
      state.idToEdit = 0;
    },
  },
  extraReducers: (builder) => {
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
