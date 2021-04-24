
export const socketMiddleware = storeAPI => next => async action => {
  console.log('action', action)
  if(action.payload?.type === 'socket') {
    // console.log('middleware socket', action.payload.socket)
    action.response = null;
    action.response = await action.payload.socket.emitSocket(action.payload.eventType, action.payload.data);
    delete action.payload.socket;
  }

  return next(action)
} 