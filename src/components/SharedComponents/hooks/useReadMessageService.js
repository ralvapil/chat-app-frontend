<<<<<<< HEAD
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSocket } from "../../Contexts/socketContext";

import { selectUser } from "../../../features/auth/authSlice";
import {
  getMessages,
  sendReadMessages,
  getUnreadMsgCount,
} from "../../../features/message/messageSlice";

const useReadMessageService = (cid) => {
  const user = useSelector(selectUser);
  const convos = useSelector(getMessages);
  const unreadMsgCount = useSelector((state) => getUnreadMsgCount(state, cid));
  const { socket } = useSocket();
  const dispatch = useDispatch();

  const messages = convos?.[cid];

  useEffect(() => {
    if (socket && unreadMsgCount > 0) {
      dispatch(
        sendReadMessages({
          type: "socket",
          eventType: "readMessage",
=======
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSocket } from '../../Contexts/socketContext'

import { selectUser } from '../../../features/auth/authSlice'
import { getMessages, sendReadMessages, getUnreadMsgCount } from '../../../features/message/messageSlice'

const useReadMessageService = (cid) => {
  const user = useSelector( selectUser )
  const convos = useSelector( getMessages )
  const unreadMsgCount = useSelector((state) => getUnreadMsgCount(state, cid))
  const { socket } = useSocket();
  const dispatch = useDispatch();

  const messages = convos?.[cid]

  useEffect(() => {
    if(socket && unreadMsgCount > 0) {
      dispatch(
        sendReadMessages({
          type: 'socket',
          eventType: 'readMessage',
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
          data: {
            user: user.id,
            message: messages.messages[messages.messages.length - 1],
            cid,
          },
<<<<<<< HEAD
          socket,
        })
      );
    }
  }, [socket, unreadMsgCount, messages, dispatch, cid, user]);
};

export default useReadMessageService;
=======
          socket
        })
      )
    }
  }, [socket, unreadMsgCount, messages, dispatch, cid, user])
}

export default useReadMessageService;
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
