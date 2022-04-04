/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { API } from '../../shared/api';

import type { Expenses, FormSubmitExpense } from '../../shared/types/@types.store';

export const fetchCurrency = createAsyncThunk('wallet/fetchCurrency', async () => {
  const response = await API();
  return Object.keys(response);
});

export const fetchAddExpense = createAsyncThunk(
  'wallet/fetchAddExpense',
  async (data: Omit<FormSubmitExpense, 'id'>) => {
    const response = await API();
    return { id: uuidv4(), ...data, exchangeRates: response };
  },
);

type InitialState = {
  currencies: [] | string[];
  expenses: Expenses[];
  editor: boolean;
  currentEdit: undefined | Expenses | FormSubmitExpense;
};

const initialState: InitialState = {
  currencies: [],
  expenses: [] as Expenses[],
  editor: false,
  currentEdit: undefined,
};

const wallet = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    actionRemoveExpense(state, { payload }: PayloadAction<string>) {
      state.expenses = state.expenses.filter(each => each.id !== payload);
    },
    actionEditExpense(state, { payload }: PayloadAction<string>) {
      const findTarget = state.expenses?.find(each => each.id === payload);
      state.editor = true;
      state.currentEdit = findTarget;
    },
    actionSaveEdit(state, { payload }: PayloadAction<FormSubmitExpense>) {
      state.expenses = state.expenses.map(each =>
        each.id === state.currentEdit?.id ? { ...each, ...payload } : each,
      );
      state.editor = false;
      state.currentEdit = undefined;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      fetchCurrency.fulfilled,
      (state, { payload }: PayloadAction<string[]>) => {
        state.currencies = payload;
      },
    );
    builder.addCase(
      fetchAddExpense.fulfilled,
      (state, { payload }: PayloadAction<Expenses>) => {
        state.expenses.push(payload);
      },
    );
  },
});

export const { actionRemoveExpense, actionEditExpense, actionSaveEdit } = wallet.actions;

export default wallet.reducer;
