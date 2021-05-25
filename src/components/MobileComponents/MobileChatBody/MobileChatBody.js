import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { css } from '@emotion/react/macro'
import SyncLoader from "react-spinners/SyncLoader";
import { format } from 'date-fns'
import { motion, AnimatePresence } from 'framer-motion'

import { getFormattedTimestamp, getTimestampInstance } from '../../../utils/format'

import MobileChatMessage from '../MobileChatMessage/MobileChatMessage'
import { useSelector } from 'react-redux'
import { getMessages } from '../../../features/message/messageSlice'

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
    position:relative;
`

const StyledIsTypingWrapper = styled.div`
padding-bottom: 5px;  
`

const StyledProPic = styled.img`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  border-color: white;
`

const TypingAnimationWrapper = styled.div`
  background: #f4eeff;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
`

// const override = css`display: flex`;

export default function MobileChatBody( { cid, currentUser, contacts, membersIsTyping } ) {
  const messagesEndRef = useRef(null);
  const messages = useSelector((state) => getMessages(state, cid));
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])
  
  let prevMessageUserId = null;
  const renderedMessages = messages?.messages ? messages.messages.map((message, idx) => {
    const pictureUrl = currentUser.id !== message.user ? messages.users.find((user) => user.user === message.user)?.picture : currentUser.picture;
    const timestampInstance = getTimestampInstance(message.timestamp);

    const messageJsx = <MobileChatMessage 
      key={idx} 
      name={message.senderName}
      timestamp={timestampInstance ? format(timestampInstance, 'H:mm') : ''}
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

  const getRenderedIsTyping = () => {
    if(membersIsTyping?.length > 0) {
      const typing = membersIsTyping.map((member) => {
        const memberUser = messages?.users.find((user) => user.user === member);
        return (
          <div key={member}>
            <StyledProPic src={memberUser.picture} alt="propic"/>
  
                <TypingAnimationWrapper>
                  <SyncLoader color='#8b4cff' loading={true} size={6} margin={2} />
                </TypingAnimationWrapper>
              

          </div>
        )
      })
      return typing
    }

    return '';
  }

  const renderedIsTyping = getRenderedIsTyping();
  
  return (
    <StyledWrapper>
      {renderedMessages}
      <AnimatePresence>
        {
          renderedIsTyping?.length > 0 &&        
            <motion.div
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
              exit={{ opacity: 0.1}}
            >
              <StyledIsTypingWrapper>{renderedIsTyping}</StyledIsTypingWrapper>
            </motion.div>
           
        }
        </AnimatePresence>
      <div ref={messagesEndRef}></div>
    </StyledWrapper>
  )
}
