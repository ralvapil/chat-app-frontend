<<<<<<< HEAD
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import SyncLoader from "react-spinners/SyncLoader";
import { motion, AnimatePresence } from "framer-motion";

import getRenderMessages from "../../../../../utils/data-formatters/getRenderedMessages";
=======
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import SyncLoader from "react-spinners/SyncLoader";
import { motion, AnimatePresence } from 'framer-motion'

import getRenderMessages from '../../../../../utils/data-formatters/getRenderedMessages'
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

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
<<<<<<< HEAD
  position: relative;
`;

const StyledIsTypingWrapper = styled.div`
  padding-bottom: 5px;
`;
=======
  position:relative;
`

const StyledIsTypingWrapper = styled.div`
padding-bottom: 5px;  
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const StyledProPic = styled.img`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  border-color: white;
<<<<<<< HEAD
`;
=======
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const TypingAnimationWrapper = styled.div`
  background: #f4eeff;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
<<<<<<< HEAD
`;

export default function MessagesContainer({
  messages,
  currentUser,
  membersIsTyping,
}) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const renderedMessages = getRenderMessages(messages, currentUser);

  const getRenderedIsTypingIcon = () => {
    if (membersIsTyping?.length > 0) {
=======
`

export default function MessagesContainer( { messages, currentUser, membersIsTyping } ) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])
  
  const renderedMessages = getRenderMessages(messages, currentUser);

  const getRenderedIsTypingIcon = () => {
    if(membersIsTyping?.length > 0) {
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
      return membersIsTyping.map((member) => {
        const memberUser = messages?.users.find((user) => user.user === member);
        return (
          <div key={member}>
<<<<<<< HEAD
            <StyledProPic src={memberUser.picture} alt="propic" />
            <TypingAnimationWrapper>
              <SyncLoader color="#8b4cff" loading={true} size={6} margin={2} />
            </TypingAnimationWrapper>
          </div>
        );
      });
    }

    return "";
  };

  const renderedIsTyping = getRenderedIsTypingIcon();

=======
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
  
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
  return (
    <StyledWrapper>
      {renderedMessages}
      <AnimatePresence>
<<<<<<< HEAD
        {renderedIsTyping?.length > 0 && (
          <motion.div
            initial={{ opacity: 0.1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            exit={{ opacity: 0.1 }}
          >
            <StyledIsTypingWrapper>{renderedIsTyping}</StyledIsTypingWrapper>
          </motion.div>
        )}
      </AnimatePresence>
      <div ref={messagesEndRef}></div>
    </StyledWrapper>
  );
=======
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
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
}
