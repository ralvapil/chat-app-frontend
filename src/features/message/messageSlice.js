import { createSlice, current } from '@reduxjs/toolkit';
import equal from "fast-deep-equal/es6";

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
      const { message, user } = action.payload.data;
      const { chat: cid } = message;

      if(state.data.hasOwnProperty(cid)) {
        state.data[cid].messages.push(message)
        state.data[cid].unreadMsgCount = user.unreadMsgCount
      } else {
        //create a new key in the store for the convo
        state.data[cid] = {
          messages: [message],
          users: message.chat.users,
          nickname: message.chat.nickname,
          unreadMsgCount: user.unreadMsgCount
        }
      }
    },

    getConvos: (state, action) => {
      const { user } = action.payload;
      const newConvos = action.response.reduce((acc, convo) => {
        return {
          ...acc, 
          [convo._id]: {
            messages: convo.recentMsgs, 
            users: convo?.users,
            nickname: convo.nickname,
            unreadMsgCount: convo.users.filter((convoUser) => convoUser.user === user)[0].unreadMsgCount,
            _id: convo._id,
          }
        }
      }, {})
      state.lastUpdated = new Date().toISOString();
      state.data = newConvos;
    },

    sendReadMessages: (state, action) => {
      const chat = action.response;
      const {user} = action.payload;

      // update chat data in slice
      const data = {
        messages: chat.recentMsgs,
        users: chat.users,
        nickname: chat.nickname,
        unreadMsgCount: chat.users.filter((convoUser) => convoUser.user === user)[0].unreadMsgCount,
        _id: chat._id,
      }

      state.data[chat._id] = data;
    }
    
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
export const getUnreadMsgCount = (state, cid) => {
  return state.messages?.data[cid]?.unreadMsgCount
}



export default messageSlice.reducer;
