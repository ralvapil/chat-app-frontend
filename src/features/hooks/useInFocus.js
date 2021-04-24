import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { useSocket } from '../../components/Contexts/socketContext'
import { sendReadMessages, getMessages } from '../message/messageSlice';
import { selectUser } from '../auth/authSlice'

export const useInFocus = () => {
  const dispatch = useDispatch();
  const socket = useSocket();
  const { cid } = useParams();
  const messages = useSelector((state) => getMessages(state, cid));
  const user = useSelector(selectUser);
  console.log('in messages', messages)
  const onFocus = useCallback(
    () => {
      if(socket && messages?.messages?.length > 0) {
        console.log('messages in', messages)
        return dispatch(sendReadMessages({
          'type': 'socket',
          'eventType': 'readMessage',
          'data': { 
            lastMessage_id: messages.messages[messages.messages.length - 1]._id,
            userId: user,
            cid
          },
          'socket': socket,
        }))
      }
    },
    [socket, messages, cid, dispatch, user]
  )

  useEffect(() => {
    window.addEventListener('focus', onFocus);
    return () => {
      window.removeEventListener('focus', onFocus);
    }
  }, [onFocus])

  useEffect(() => {
    onFocus();
  }, [onFocus])
}