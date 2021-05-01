import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import messageReducer from '../features/message/messageSlice';
import authReducer from '../features/auth/authSlice';
import contactReducer from '../features/contact/contactSlice';
import { socketMiddleware } from './middleware/socketMiddleware';

export default configureStore({
  middleware: [socketMiddleware, ...getDefaultMiddleware()],
  reducer: {
    messages: messageReducer,
    auth: authReducer,
    contact: contactReducer,
  },
});
