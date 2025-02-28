import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import paymentService from '../../services/payment';

const initialState = {
  payments: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const processPayment = createAsyncThunk('payments/processPayment', async (paymentData) => {
  const response = await paymentService.processPayment(paymentData);
  return response;
});

export const fetchPaymentDetails = createAsyncThunk('payments/fetchPaymentDetails', async () => {
  const response = await paymentService.getPaymentDetails();
  return response;
});

const paymentSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(processPayment.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(processPayment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.payments.push(action.payload);
      })
      .addCase(processPayment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchPaymentDetails.fulfilled, (state, action) => {
        state.payments = action.payload;
      });
  },
});

export default paymentSlice.reducer;