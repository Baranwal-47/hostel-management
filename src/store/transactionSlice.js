import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [
    {
      id: 1,
      timestamp: 'Aug 2, 2024, 11:09 am',
      hall: 'H1',
      changedBy: 'Username',
      previousValue: 'None',
      newValue: '₹ 500'
    },
    {
      id: 2,
      timestamp: 'Aug 2, 2024, 11:09 am',
      hall: 'H1',
      changedBy: 'Username',
      previousValue: 'None',
      newValue: '₹ 500'
    },
    {
      id: 3,
      timestamp: 'Aug 2, 2024, 11:09 am',
      hall: 'H1',
      changedBy: 'Username',
      previousValue: 'None',
      newValue: '₹ 500'
    },
    {
      id: 4,
      timestamp: 'Aug 2, 2024, 11:09 am',
      hall: 'H1',
      changedBy: 'Username',
      previousValue: 'None',
      newValue: '₹ 0'
    }
  ]
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {}
});

export default transactionSlice.reducer;