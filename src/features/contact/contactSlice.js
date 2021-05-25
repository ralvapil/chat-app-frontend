import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    lastUpdated: null,
    data: {},
    error: {
      addContact: ''
    },
    status: {
      addContact: ''
    }
  },
  reducers: {
    addContact: (state, action) => {
      console.log('test', action)
      if(action.response == null) {
        state.error.addContact = "Oops... a server error occured. Try again later."
        state.status.addContact = 'unsuccessful'

        return;
      }

      const {status, data} = action.response;

      if(!data?.contacts) {
        state.error.addContact = "Hmm... We can't seem to find anyone with that email."
        state.status.addContact = 'unsuccessful'

        return
      } 

      if(status === 'failed') {
        state.error.addContact = "Already on your friends list."
        state.status.addContact = 'unsuccessful'

        return
      }

      const newContactList = data.contacts.reduce((acc, contact) => {
        return {
          ...acc, 
          [contact.user._id]: {
            firstName: contact.user.firstName,
            lastName:  contact.user.lastName,
            user: contact.user._id,
            chat_id: contact?.chat?._id.length ?  contact.chat._id : null,
            picture: contact.user.picture
          }
        }
      }, {})
      console.log('new', newContactList)
      state.data = newContactList
      state.lastUpdated = new Date().toISOString();

      state.error.addContact = '';
      state.status.addContact = 'success'
    },
    getContacts: (state, action) => {
      console.log('getcontacts', action)
      const newContactList = action.response.reduce((acc, contact) => {
        return {
          ...acc, 
          [contact.user]: {
            firstName: contact.firstName,
            lastName:  contact.lastName,
            user: contact.user,
            chat_id: contact?.chat?._id.length ?  contact.chat._id : null,
            picture: contact.picture
          }
        }
      }, {})

      state.data = newContactList
      state.lastUpdated = new Date().toISOString();
    },
    checkChatExists: (state, action) => {
      // no response as this is send to the server 
      // to create the chat if not exists before letting the user
      // got to the chat view window for the contact
      // a new copy of chats will be pushed to the two users
    },
    clearErrorStatus: (state) => {
      state.error.addContact = '';
      state.status.addContact = '';
    }
  }
});

export const { 
  addContact, 
  getContacts,
  checkChatExists,
  clearErrorStatus,
} = contactSlice.actions

export const selectContacts = (state) => { 
  return state.contact.data
}

export const selectLastUpdated = (state) => { 
  return state.contact.lastUpdated
}

export const getAddContactsError = (state) => { 
  return state.contact.error.addContact
}

export const getAddContactsStatus = (state) => { 
  return state.contact.status.addContact
}

export default contactSlice.reducer;
