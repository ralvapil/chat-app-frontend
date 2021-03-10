import React, { useEffect, useContext } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useSocket } from '../../Contexts/useSocket'
import { selectIsAuthorized, selectUser } from '../../../features/auth/authSlice'
import { messageHistoryReceived, messageReceived } from '../../../features/message/messageSlice'

import { Socket } from '../../../Socket';

export default function SocketInitializer( {children} ) {
  const user = useSelector(selectUser);
  const isAuthorized = useSelector(selectIsAuthorized);
  const { setSocketInstance } = useSocket();
  
  const dispatch = useDispatch();

  useEffect(() => {
    if(user && isAuthorized) {
      console.log('socket is being created for', user);
    
      const socket = new Socket(dispatch, messageReceived, user, messageHistoryReceived);
      setSocketInstance(socket);

      return () => socket.closeSocket();
    }
    console.log('effect is running')
  }, [dispatch, user, isAuthorized, setSocketInstance])

  return (
    <>
      {children}
    </>
  )
}
