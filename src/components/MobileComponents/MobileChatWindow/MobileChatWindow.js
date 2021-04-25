import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import MobileChatHeader from '../MobileChatHeader/MobileChatHeader'
import MobileChatBody from '../MobileChatBody/MobileChatBody'
import MobileChatFooter from '../MobileChatFooter/MobileChatFooter'

import { 
  getMessageHistory, 
  sendMessage, 
  getMessages,
  getConvos,
  getLastUpdatedConvos,
  getUnreadMsgCount,
  sendReadMessages,
} from '../../../features/message/messageSlice'
import { selectUser } from '../../../features/auth/authSlice'
import { useSocket } from '../../Contexts/socketContext'; 

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default function MobileChatWindow() {

  const {socket} = useSocket();
  const { cid } = useParams();
  const messages = useSelector((state) => getMessages(state, cid));
  const user = useSelector(selectUser);
  const unreadMsgCount = useSelector((state) => getUnreadMsgCount(state, cid))
  const lastUpdateConvos = useSelector( getLastUpdatedConvos )

  const dispatch = useDispatch();
  const [messageInput, setMessageInput] = useState('');
  
  useEffect(() => {
    if(socket && !lastUpdateConvos) {
      dispatch(
        getConvos({
          'type': 'socket',
          'eventType': 'getConvos',
          'data': { 
            user
          },
          'socket': socket,
        }) 
      )
    }
  }, [dispatch, user, socket, lastUpdateConvos])

  useEffect(() => {
    if(socket && unreadMsgCount > 0) {
      dispatch(
        sendReadMessages({
          type: 'socket',
          eventType: 'readMessage',
          data: {
            user,
            message: messages.messages[messages.messages.length - 1],
            cid,
          },
          socket
        })
      )
    }
  }, [socket, unreadMsgCount, messages, dispatch, cid, user])

  const handleSend = () => {
    dispatch(sendMessage({
      'type': 'socket',
      'eventType': 'sendMessage',
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
    <StyledContainer onFocus={()=> console.log('imfocused')}>  
      <MobileChatHeader cid={cid} onPhoneClick={handlePhoneIconClick} name={'Ramanan Alvapillai'}/>
      <MobileChatBody cid={cid} currentUser={user}/>
      <MobileChatFooter 
        messageInput={messageInput} 
        onChange={handleMessageInputChange} 
        handleEnterPress={handleEnterPress}
      />
    </StyledContainer>
  )
}
