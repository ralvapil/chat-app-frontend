import React, { useState, useCallback } from 'react';
// import {socketContext} from './socketContext'

export const useSocket = () => {
  const [socket, setSocket] = useState(null);

  const setSocketInstance = useCallback((currentSocket) => {
    setSocket(currentSocket);
  }, [])

  return {
    socket,
    setSocketInstance
  }
}