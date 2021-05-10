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
      const { message, unreadMsgCount, cid } = action.response;

      state.data[cid].messages.push(message);
      state.data[cid].unreadMsgCount = unreadMsgCount
    },

    messageReceived: (state, action) => {  
      const { message, chat, user } = action.payload.data;
      
      state.data[chat._id].messages.push(message);
      state.data[chat._id].unreadMsgCount = chat.users.filter((convoUser) => convoUser.user === user._id)[0].unreadMsgCount
    },

    getConvos: (state, action) => {
      const { user } = action.payload;
      console.log('action', action)
      const newConvos = action.response.reduce((acc, convo) => {
        return {
          ...acc, 
          [convo._id]: {
            messages: convo.recentMsgs,
            users: convo?.users,
            nickname: convo.nickname,
            unreadMsgCount: convo.users.filter((convoUser) => convoUser.user === user)[0].unreadMsgCount,
            isGroup: convo.isGroup,
            _id: convo._id,
          }
        }
      }, {})
      state.lastUpdated = new Date().toISOString();
      state.data = newConvos;
    },

    newConvosPushed: (state, action) => {
      const { user, convos } = action.payload.data;
      console.log('action', action)
      const newConvos = convos.reduce((acc, convo) => {
        return {
          ...acc, 
          [convo._id]: {
            messages: convo.recentMsgs, 
            users: convo?.users,
            nickname: convo.nickname,
            unreadMsgCount: convo.users.filter((convoUser) => convoUser.user === user)[0].unreadMsgCount,
            isGroup: convo.isGroup,
            _id: convo._id,
          }
        }
      }, {})
      state.lastUpdated = new Date().toISOString();
      state.data = newConvos;
    },

    createChat: (state, action) => {
      console.log('action in create chat', action)

      //TODO this needs to be implemented
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
        isGroup: chat.isGroup,
        _id: chat._id,
      }

      state.data[chat._id] = data;
    },

    messageSentDiffDevice: (state, action) => {
      console.log('received message from ohter device', action)
      const { message, unreadMsgCount, cid } = action.payload.data;

      state.data[cid].messages.push(message);
      state.data[cid].unreadMsgCount = unreadMsgCount
    }
  }
});

export const { 
  messageHistoryReceived, 
  getMessageHistory, 
  sendMessage, 
  messageReceived, 
  getConvos,
  newConvosPushed,
  messageSentDiffDevice,
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
