import { createSlice, current } from '@reduxjs/toolkit';
import equal from "fast-deep-equal/es6";

// export const sendMessage = createAsyncThunk('messages/sendMessage', async (payload1, payload2) => {
//   // const response = a
//   console.log('in send message', payload1, payload2);
//   // return 'test123'
// })

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    lastUpdated: null,
    data: {},
  },
  reducers: {
    getMessageHistory: (state, action) => {
      const convo = action.response;

      const convoHistory = {
        messages: convo.recentMsgs, 
        users: convo?.users,
        nickname: convo.nickname,
      }

      if(state.hasOwnProperty(action.response._id)) {
        if(!equal(state.data[action.response._id], convoHistory)) {
          state.data[convo._id] = convoHistory;
        }
      } else {
        state.data[convo._id] = convoHistory;
      }
    },
    sendMessage: (state, action) => {
      // do nothing since we need the server to respond with the message sent in the 'messageReceived' reducer
    },
    messageReceived: (state, action) => {   
      const { message } = action.payload.data;
      const { chat: cid } = message;

      if(state.data.hasOwnProperty(cid)) {
        state.data[cid].messages.push(message)
      } 

      // TODO add case for if cid does NOT exist, what do with message
    },
    getConvos: (state, action) => {
      const newConvos = action.response.reduce((acc, convo) => {
        // console.log('convo diff occurred', state[convo._id])
        // compare to see if we need to replace it
        return {
          ...acc, 
          [convo._id]: {
            messages: convo.recentMsgs, 
            users: convo?.users,
            nickname: convo.nickname,
          }
        }
      }, {})
      state.lastUpdated = new Date().toISOString();
      state.data = newConvos;
    },
    sendReadMessages: (state, action) => {
      // using cid update read count in slice
      console.log('in send read messages', action);


    }
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
  }
});

export const { 
  messageHistoryReceived, 
  getMessageHistory, 
  sendMessage, 
  messageReceived, 
  getConvos,
  convos,
  sendReadMessages,
} = messageSlice.actions

export const getMessages = (state, cid) => { 
  return cid ? state.messages.data[cid] : state.messages.data
}
export const getLastUpdatedConvos = (state) => {
  return state.messages.lastUpdated
}


export default messageSlice.reducer;
