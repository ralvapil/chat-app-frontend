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
      const contactList = action.response;

      if(!contactList) {
        state.error.addContact = 'User not found.'
        state.status.addContact = 'unsuccessful'
      } else {
        state.error.addContact = '';
        state.data = contactList.contacts
        state.status.addContact = 'success'
      }
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
  }
});

export const { 
  addContact, 
  getContacts,
  checkChatExists,
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
