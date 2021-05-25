import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import MobileChatHeader from "../MobileChatHeader/MobileChatHeader";
import MobileChatBody from "../MobileChatBody/MobileChatBody";
import MobileChatFooter from "../MobileChatFooter/MobileChatFooter";

import {
  getMessageHistory,
  sendMessage,
  getMessages,
  getConvos,
  getLastUpdatedConvos,
  getUnreadMsgCount,
  sendReadMessages,
  getIsTyping,
} from "../../../features/message/messageSlice";
import { selectUser } from "../../../features/auth/authSlice";
import {
  getContacts,
  selectContacts,
  selectLastUpdated,
} from "../../../features/contact/contactSlice";
import { useSocket } from "../../Contexts/socketContext";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function MobileChatWindow() {
  const isTyping = useRef();
  const timeout = useRef();
  const { socket } = useSocket();
  const { cid } = useParams();
  const messages = useSelector((state) => getMessages(state, cid));
  const user = useSelector(selectUser);
  const unreadMsgCount = useSelector((state) => getUnreadMsgCount(state, cid));
  const lastUpdateConvos = useSelector(getLastUpdatedConvos);
  const lastUpdateContacts = useSelector(selectLastUpdated);
  const contacts = useSelector(selectContacts);
  const membersIsTyping = useSelector((state) => getIsTyping(state, cid));
  console.log("is rerenders");

  // useEffect(() => {

  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  const dispatch = useDispatch();
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    if (socket && !lastUpdateConvos) {
      dispatch(
        getConvos({
          type: "socket",
          eventType: "getConvos",
          data: {
            user: user.id,
          },
          socket: socket,
        })
      );
    }
  }, [dispatch, user, socket, lastUpdateConvos]);

  useEffect(() => {
    if (socket && unreadMsgCount > 0) {
      dispatch(
        sendReadMessages({
          type: "socket",
          eventType: "readMessage",
          data: {
            user: user.id,
            message: messages.messages[messages.messages.length - 1],
            cid,
          },
          socket,
        })
      );
    }
  }, [socket, unreadMsgCount, messages, dispatch, cid, user]);

  useEffect(() => {
    if (socket && !lastUpdateContacts) {
      dispatch(
        getContacts({
          type: "socket",
          eventType: "getContacts",
          data: {
            user: user.id,
          },
          socket,
        })
      );
    }
  }, [user, socket, dispatch, lastUpdateContacts]);

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

  const handlePhoneIconClick = () => {
    dispatch(
      getMessageHistory({
        type: "socket",
        eventType: "messageHistory",
        data: {
          cid,
        },
        socket: socket,
      })
    );
  };

  if (!messages?.users) {
    return <div>Loading...</div>;
  }

  const contact = messages.isGroup
    ? null
    : messages.users.find((convoUser) => user.id !== convoUser.user);

  const pictureUrl = messages.users.find(
    (convoUser) => user.id !== convoUser.user
  ).picture;
  const name =
    messages?.nickname?.length > 0
      ? messages.nickname
      : messages.users
          .filter((convoUser) => user.id !== convoUser.user)
          .map((convoUser) => `${convoUser?.firstName} ${convoUser?.lastName}`)
          .join(", ");

  return (
    <StyledContainer>
      <MobileChatHeader
        cid={cid}
        onPhoneClick={handlePhoneIconClick}
        isGroup={messages?.isGroup}
        pictureUrl={pictureUrl}
        name={name}
      />
      <MobileChatBody
        cid={cid}
        currentUser={user}
        contacts={contacts}
        membersIsTyping={membersIsTyping}
      />
      <MobileChatFooter
        messageInput={messageInput}
        onChange={handleMessageInputChange}
        handleEnterPress={handleEnterPress}
      />
    </StyledContainer>
  );
}
