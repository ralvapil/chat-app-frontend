import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import MobileChatMessage from '../MobileChatMessage/MobileChatMessage'
import { useSelector } from 'react-redux'
import { getMessages } from '../../../features/message/messageSlice'
import { current } from 'immer'

const StyledWrapper = styled.div`
    margin-top: 84px;
    padding-top: 10px;
    margin-bottom: 60px;
    padding-left: 15px;
    padding-right: 15px;
    height: calc(100vh - 160px);
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
`

export default function MobileChatBody( { cid, currentUser, contacts } ) {
  const messagesEndRef = useRef(null);
  const messages = useSelector((state) => getMessages(state, cid));

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])
  
  let prevMessageUserId = null;
  const renderedMessages = messages?.messages ? messages.messages.map((message, idx) => {
    const pictureUrl = currentUser.id !== message.user ? contacts[message.user]?.picture : currentUser.picture;
    
    const messageJsx = <MobileChatMessage 
      key={idx} 
      name={message.senderName}
      timestamp={message.timestamp}
      isNotCurrentUser={message.user !== currentUser.id}
      userIsDifferentThanPrevious = {message.user !== prevMessageUserId}
      isLastMessage={idx === messages.messages.length - 1}
      pictureUrl={pictureUrl}
    >
      {message.value}
    </MobileChatMessage>
    if(prevMessageUserId !== message.user) {
      prevMessageUserId = message.user;
    }

    return messageJsx;
  }) : '';
  
  return (
    <StyledWrapper>
      {renderedMessages}
      {/* <div style={{borderRadius: '50%', width: '32px', height: '32px', background:'green', alignSelf: 'flex-end', marginRight: '-14px', marginTop: '1px'}}></div> */}
      <div ref={messagesEndRef}></div>
    </StyledWrapper>
  )
}
