import { createSlice } from '@reduxjs/toolkit';

// export const sendMessage = createAsyncThunk('messages/sendMessage', async (payload1, payload2) => {
//   // const response = a
//   console.log('in send message', payload1, payload2);
//   // return 'test123'
// })

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    messages: {},
    status: null,
  },
  reducers: {
    sendMessage: (state, action) => {
      console.log('action', action.payload.data.message)

      // if the cid exists the add to it, else create a new key for it in the obj
      if(state.messages.hasOwnProperty([action.payload.data['cid']])) {
        state.messages[action.payload.data['cid']].push(action.payload.data.message);
      } else {
        state.messages[action.payload.data['cid']] = new Array(action.payload.data.message);
      }
    },
    messageReceived: (state, action) => {
      if(state.messages.hasOwnProperty([action.payload.data['cid']])) {
        state.messages[action.payload.data['cid']].push(action.payload.data.message);
      } else {
        state.messages[action.payload.data['cid']] = [action.payload.data.message];
      }
    }
  },
  // extraReducers: {
  //   [sendMessage.pending]: (state, action) => {
  //     state.status = 'loading';
  //   },
  //   [sendMessage.fulfilled]: (state, action) => {
  //     state.status = 'succeeded'
  //     // Add any fetched posts to the array
  //     state.posts = state.posts.concat(action.payload)
  //   },
  //   [sendMessage.rejected]: (state, action) => {
  //     state.status = 'failed'
  //     state.error = action.error.message
  //   }
  // }
});

export const { sendMessage, messageReceived } = messageSlice.actions

export const getMessages = (state) => { return state.messages.messages }

export default messageSlice.reducer;
