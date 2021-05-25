import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import SyncLoader from "react-spinners/SyncLoader";
import { motion, AnimatePresence } from 'framer-motion'

import getRenderMessages from '../../../../../utils/data-formatters/getRenderedMessages'

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

export default function MessagesContainer( { messages, currentUser, membersIsTyping } ) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])
  
  const renderedMessages = getRenderMessages(messages, currentUser);

  const getRenderedIsTypingIcon = () => {
    if(membersIsTyping?.length > 0) {
      return membersIsTyping.map((member) => {
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
    }

    return '';
  }

  const renderedIsTyping = getRenderedIsTypingIcon();
  
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
