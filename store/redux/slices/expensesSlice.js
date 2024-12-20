import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dummyExpenses: [
    {
      id: 'e1',
      description: 'A pair of shoes',
      amount: 59.99,
      date: new Date('2021-12-19'),
    },
    {
      id: 'e2',
      description: 'A pair of trousers',
      amount: 89.29,
      date: new Date('2022-01-05'),
    },
    {
      id: 'e3',
      description: 'Some Bananas',
      amount: 5.99,
      date: new Date('2021-12-01'),
    },
    {
      id: 'e4',
      description: 'A book',
      amount: 14.99,
      date: new Date('2022-02-19'),
    },
    {
      id: 'e5',
      description: 'Another book',
      amount: 18.59,
      date: new Date('2022-02-19'),
    },
    {
      id: 'e6',
      description: 'A pair of shoes',
      amount: 59.99,
      date: new Date('2021-12-19'),
    },
    {
      id: 'e7',
      description: 'A pair of trousers',
      amount: 89.29,
      date: new Date('2022-01-05'),
    },
    {
      id: 'e8',
      description: 'Some Bananas',
      amount: 5.99,
      date: new Date('2021-12-01'),
    },
    {
      id: 'e9',
      description: 'A book',
      amount: 14.99,
      date: new Date('2022-02-19'),
    },
    {
      id: 'e10',
      description: 'Another book',
      amount: 18.59,
      date: new Date('2022-02-19'),
    },
  ],
};
const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpenses: (state, action) => {
      state.dummyExpenses.push(action.payload)
    },
    deleteExpenses: (state, action) => {
      state.dummyExpenses = state.dummyExpenses.filter(expense => expense.id !== action.payload)
    },
    updateExpenses: (state, action) => {
      const {id, updateExpenses} = action.payload;
      const index = state.dummyExpenses.findIndex(expense => expense.id === id)
      if(index !== -1){
        state.dummyExpenses[index] = {...state.dummyExpenses[index], ...updateExpenses}
      }
    },
  },
});

export const { addExpenses, deleteExpenses, updateExpenses } =
  expensesSlice.actions;

export default expensesSlice.reducer;
