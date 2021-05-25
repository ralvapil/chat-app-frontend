import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import {
  sendMessage,
  getIsTyping,
} from "../../../../features/message/messageSlice";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MessagesContainer from "./MessagesContainer/MessagesContainer";

import { getConvoNickname } from "../../../../utils/data-formatters/formatChatList";
import useReadMessageService from "../../hooks/useReadMessageService";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 400px);
  border-left: 1px solid #f8f8f8;
`;

const StyledNoChat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100vw - 400px);
  height: 100vh;
`;

export default function ChatWindow({ messages, user, cid, socket }) {
  const [messageInput, setMessageInput] = useState("");
  const isTyping = useRef();
  const timeout = useRef();
  useReadMessageService(cid);

  const dispatch = useDispatch();
  const membersIsTyping = useSelector((state) => getIsTyping(state, cid));

  const handleSend = () => {
    dispatch(
      sendMessage({
        type: "socket",
        eventType: "sendMessage",
        data: {
          message: messageInput,
          userId: user.id,
          cid,
        },
        socket: socket,
      })
    );

    setMessageInput("");
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const sendHasEndedTyping = () => {
    isTyping.current = false;
    socket.emitSocket("typingEnd", { user: user.id, cid: cid });
  };

  const handleMessageInputChange = (e) => {
    if (!isTyping.current) {
      isTyping.current = true;
      socket.emitSocket("typing", { user: user.id, cid: cid });
      timeout.current = setTimeout(sendHasEndedTyping, 500);
      // setMessageInput(() => setMessageInput(e.target.value));
    } else {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(sendHasEndedTyping, 500);
    }

    setMessageInput(e.target.value);
  };

  if (!messages?.users) {
    return <StyledNoChat>No chat selected.</StyledNoChat>;
  }

  const pictureUrl = messages.users.find(
    (convoUser) => user.id !== convoUser.user
  ).picture;
  const name = getConvoNickname(messages, user);

  return (
    <StyledContainer>
      <Header isGroup={messages?.isGroup} pictureUrl={pictureUrl} name={name} />
      <MessagesContainer
        messages={messages}
        currentUser={user}
        membersIsTyping={membersIsTyping}
      />
      <Footer
        messageInput={messageInput}
        onChange={handleMessageInputChange}
        handleEnterPress={handleEnterPress}
      />
    </StyledContainer>
  );
}
