import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import MobileChatHeader from '../MobileChatHeader/MobileChatHeader'
import MobileChatBody from '../MobileChatBody/MobileChatBody'
import MobileChatFooter from '../MobileChatFooter/MobileChatFooter'

import { sendMessage, messageReceived, getMessages } from '../../../features/message/messageSlice'
import { Socket } from '../../../Socket';

let socket;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default function MobileChatWindow() {
  const { cid } = useParams();
  const [messageInput, setMessageInput] = useState('');
  const messages = useSelector(getMessages);
  const dispatch = useDispatch();

  useEffect(() => {
    socket = new Socket(dispatch, messageReceived, cid);
    console.log('effect is running')

    return () => socket.closeSocket();
  }, [dispatch])

  const handleSend = () => {
    console.log('sent', messageInput);

    dispatch(sendMessage({
      'type': 'socket',
      'data': { message: messageInput, cid},
      'socket': socket,
    }));

    setMessageInput('');
  }

  const handleEnterPress = (e) => {
    if(e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  }

  const handleMessageInputChange = (e) => { 
    setMessageInput(() => setMessageInput(e.target.value));
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>  
      <MobileChatHeader cid={cid} />
      <MobileChatBody messages={messages} cid={cid}/>
      <MobileChatFooter 
        messageInput={messageInput} 
        onChange={handleMessageInputChange} 
        handleEnterPress={handleEnterPress}
      />
    </div>
  )
}
