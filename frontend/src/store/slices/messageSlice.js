import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import messageService from '../../services/message';

const initialState = {
  messages: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const sendMessage = createAsyncThunk('messages/sendMessage', async (messageData) => {
  const response = await messageService.sendMessage(messageData);
  return response;
});

export const fetchMessages = createAsyncThunk('messages/fetchMessages', async () => {
  const response = await messageService.getMessages();
  return response;
});

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.messages.push(action.payload);
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.messages = action.payload;
      });
  },
});

export default messageSlice.reducer;