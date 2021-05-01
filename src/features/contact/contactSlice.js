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
    }
  }
});

export const { 
  addContact, 
} = contactSlice.actions

export const getContacts = (state) => { 
  return state.contact.data
}

export const getAddContactsError = (state) => { 
  return state.contact.error.addContact
}

export const getAddContactsStatus = (state) => { 
  return state.contact.status.addContact
}

export default contactSlice.reducer;
