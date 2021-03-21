import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { selectIsAuthorized, selectUser } from '../../features/auth/authSlice'
import { messageReceived } from '../../features/message/messageSlice'

import { Socket } from "../../Socket";

const socketContext = React.createContext();

function SocketProvider( {children} ) {
  const [socket, setSocket] = useState(null);
  const user = useSelector(selectUser);
  const isAuthorized = useSelector(selectIsAuthorized);
  const dispatch = useDispatch();

  useEffect(() => {
    if(user && isAuthorized) {
      console.log('socket is being created for', user);
  
      const socketInstance = new Socket(dispatch, messageReceived, user);
      setSocket(socketInstance);

      return () => socketInstance.closeSocket();
    }
  }, [dispatch, user, isAuthorized])

  const value = {socket, setSocket}

  return <socketContext.Provider value={value}>{children}</socketContext.Provider>
}

function useSocket() {
  const context = React.useContext(socketContext)

  if(context === undefined) {
    throw new Error('useSocket must be within a SocketProvider')
  }

  return context;
}

export {SocketProvider, useSocket}