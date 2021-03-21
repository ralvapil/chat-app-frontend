import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import MobileChatMessage from '../MobileChatMessage/MobileChatMessage'

const StyledWrapper = styled.div`
    margin-top: 100px;
    margin-bottom: 60px;
    padding-left: 30px;
    padding-right: 30px;
    height: calc(100vh - 190px);
    overflow-y: scroll;
    display: flex;
    flex-direction: column;

`

export default function MobileChatBody( { messages, cid, currentUser } ) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    console.log('mesage changes')
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  let prevMessageUserId = null;
    console.log('messages here', messages)
  const renderedMessages = messages?.messages ? messages.messages.map((message, idx) => {
    const messageJsx = <MobileChatMessage 
      key={idx} 
      name={message.name}
      timestamp={message.timestamp}
      isNotCurrentUser={message.user !== currentUser}
      userIsDifferentThanPrevious = {message.user !== prevMessageUserId}
      isLastMessage={idx === messages.messages.length - 1}
    >
      {message.value}
    </MobileChatMessage>
      console.log('prevmess', prevMessageUserId)
      console.log('message user', message.user)
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
