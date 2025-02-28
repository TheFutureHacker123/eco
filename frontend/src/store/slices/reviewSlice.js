import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import reviewService from '../../services/review';

const initialState = {
  reviews: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const submitReview = createAsyncThunk('reviews/submitReview', async (reviewData) => {
  const response = await reviewService.createReview(reviewData);
  return response;
});

export const fetchProductReviews = createAsyncThunk('reviews/fetchProductReviews', async (productId) => {
  const response = await reviewService.getProductReviews(productId);
  return response;
});

const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      })
      .addCase(fetchProductReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  },
});

export default reviewSlice.reducer;