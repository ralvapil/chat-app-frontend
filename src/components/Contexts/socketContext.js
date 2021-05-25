<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectIsAuthorized, selectUser } from "../../features/auth/authSlice";
import {
  messageReceived,
  newConvosPushed,
  messageSentDiffDevice,
  memberIsTyping,
  memberIsTypingEnd,
} from "../../features/message/messageSlice";
=======
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { selectIsAuthorized, selectUser } from '../../features/auth/authSlice'
import { messageReceived, newConvosPushed, messageSentDiffDevice, memberIsTyping, memberIsTypingEnd} from '../../features/message/messageSlice'
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

import { Socket } from "../../Socket";

const socketContext = React.createContext();

function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);
  const user = useSelector(selectUser);
  const isAuthorized = useSelector(selectIsAuthorized);
  const dispatch = useDispatch();

  useEffect(() => {
<<<<<<< HEAD
    if (user?.id && isAuthorized) {
      console.log("socket is being created for", user.id);

      const socketInstance = new Socket(
        dispatch,
        messageReceived,
        newConvosPushed,
        messageSentDiffDevice,
        memberIsTyping,
        memberIsTypingEnd,
        user.id
=======
    if(user?.id && isAuthorized) {
      console.log('socket is being created for', user.id);
  
      const socketInstance = new Socket(
        dispatch,
        messageReceived, 
        newConvosPushed, 
        messageSentDiffDevice, 
        memberIsTyping, 
        memberIsTypingEnd,
        user.id, 
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
      );

      setSocket(socketInstance);

      return () => socketInstance.closeSocket();
    }
  }, [dispatch, user.id, isAuthorized]);

  const value = { socket, setSocket };

  return (
    <socketContext.Provider value={value}>{children}</socketContext.Provider>
  );
}

function useSocket() {
  const context = React.useContext(socketContext);

  if (context === undefined) {
    throw new Error("useSocket must be within a SocketProvider");
  }

  return context;
}

export { SocketProvider, useSocket };
