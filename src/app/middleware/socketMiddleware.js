
export const socketMiddleware = storeAPI => next => async action => {

  if(action.payload?.type === 'socket') {
    console.log('is socket', action.payload.eventType)
    // console.log('middleware socket', action.payload.socket)
    action.response = null;
    action.response = await action.payload.socket.emitSocket(action.payload.eventType, action.payload.data);
    console.log('after promise line', action.response)
    delete action.payload.socket;
  }

  console.log('dispatching', action.payload)
  // let result = next(action)
  console.log('next state', storeAPI.getState())
  return next(action)
} 