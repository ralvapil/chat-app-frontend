export const socketMiddleware = storeAPI => next => action => {

  if(action.payload?.type === 'socket') {
    console.log('is socket')
    action.payload.socket.emitSocket('test', action.payload.data);

    delete action.payload.socket;
  }

  console.log('dispatching', action.payload)
  // let result = next(action)
  console.log('next state', storeAPI.getState())
  return next(action)
}