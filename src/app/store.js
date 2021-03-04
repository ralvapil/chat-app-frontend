import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import messageReducer from '../features/message/messageSlice';
import { socketMiddleware } from './middleware/socketMiddleware';

export default configureStore({
  middleware: [socketMiddleware, ...getDefaultMiddleware()],
  reducer: {
    messages: messageReducer,
  },
});
