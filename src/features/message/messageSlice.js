import { createSlice } from '@reduxjs/toolkit';

// export const sendMessage = createAsyncThunk('messages/sendMessage', async (payload1, payload2) => {
//   // const response = a
//   console.log('in send message', payload1, payload2);
//   // return 'test123'
// })

export const messageSlice = createSlice({
  name: 'message',
  initialState: {},
  reducers: {
    getMessageHistory: (state, action) => {
      console.log('action history request sent', action);
    },
    sendMessage: (state, action) => {
      // do nothing since we need the server to respond with the message sent
    },
    messageReceived: (state, action) => {
      console.log('action', action.payload.data)
      
      const newMessage = {
        value: action.payload.data.value,
        user: action.payload.data.user,
        timestamp: action.payload.data.timestamp,
        name: action.payload.data.name,
      };

      console.log('new message', newMessage)

      // if the cid exists the add to it, else create a new key for it in the obj
      if(state.hasOwnProperty([action.payload.data['cid']])) {
        state[action.payload.data['cid']].messages.push(newMessage);
      } else {
        state[action.payload.data['cid']].messages = new Array(newMessage);
      }
    },
    messageHistoryReceived: (state, action) => {
      console.log('history rece', action);
      state[action.payload.data.cid].messages = action.payload.data.history;
    },

    getConvos: () => {
      console.log('get convos sent')
    },

    convos: (state, action) => {
      const newConvos = action.payload.data.reduce((acc, convo) => {
        return {
          ...acc, 
          [convo._id]: {
            messages: convo.messages, 
            users: convo.users,
            nickname: convo.nickname,
          }
        }
      }, {})

      return state = newConvos;
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

export const { 
  messageHistoryReceived, 
  getMessageHistory, 
  sendMessage, 
  messageReceived, 
  getConvos,
  convos
} = messageSlice.actions

export const getMessages = (state) => { return state.messages }


export default messageSlice.reducer;
