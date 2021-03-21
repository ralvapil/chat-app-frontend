import React, { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import MobileChatHeader from '../MobileChatHeader/MobileChatHeader'
import MobileChatBody from '../MobileChatBody/MobileChatBody'
import MobileChatFooter from '../MobileChatFooter/MobileChatFooter'

import { getMessageHistory, messageHistoryReceived, sendMessage, messageReceived, getMessages } from '../../../features/message/messageSlice'
import { selectUser } from '../../../features/auth/authSlice'

import { useSocket } from '../../Contexts/socketContext'; 

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default function MobileChatWindow() {

  const {socket} = useSocket();
  const { cid } = useParams();
  const [messageInput, setMessageInput] = useState('');
  const messages = useSelector((state) => getMessages(state, cid));
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if(socket !== null && !messages) {
      dispatch(getMessageHistory({
        'type': 'socket',
        'eventType': 'messageHistory',
        'data': { 
          cid
        },
        'socket': socket,
      }));
    }
  }, [socket, dispatch, cid])

  const handleSend = () => {
    console.log('sent', messageInput);

    dispatch(sendMessage({
      'type': 'socket',
      'eventType': 'message',
      'data': { 
        message: messageInput, 
        userId: user,
        cid
      },
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

  const handlePhoneIconClick = () => {
    dispatch(getMessageHistory({
      'type': 'socket',
      'eventType': 'messageHistory',
      'data': { 
        cid
      },
      'socket': socket,
    }));
  }

  return (
    <StyledContainer>  
      <MobileChatHeader cid={cid} onPhoneClick={handlePhoneIconClick} name={'Ramanan Alvapillai'}/>
      <MobileChatBody messages={messages} cid={cid} currentUser={user}/>
      <MobileChatFooter 
        messageInput={messageInput} 
        onChange={handleMessageInputChange} 
        handleEnterPress={handleEnterPress}
      />
    </StyledContainer>
  )
}
