import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { getConvos, getMessages } from "../../../features/message/messageSlice"
import { selectUser } from "../../../features/auth/authSlice"
import MobileChatListItem from "../MobileChatListItem/MobileChatListItem"
import MobileChatMenuHeader from "../MobileChatMenuHeader/MobileChatMenuHeader"
import { useSocket } from '../../Contexts/socketContext'; 
import { current } from 'immer'

export default function MobileChatListWindow() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { socket } = useSocket();

  const user = useSelector( selectUser )
  const convos = useSelector( getMessages )

  console.log('socket instance', socket)

  useEffect(() => {
    if(socket !== null) {
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
  }, [dispatch, user, socket])

  // const data = [
  //   { 
  //     preview: 'This is preview text',
  //     name: 'Roderick Amfee',
  //     timestamp: '12:46',
  //   },
  //   { 
  //     preview: 'This is preview text',
  //     name: 'Roderick Amfee',
  //     timestamp: '12:46',
  //   },
  //   { 
  //     preview: 'This is preview text',
  //     name: 'Roderick Amfee',
  //     timestamp: '12:46',
  //   },
  //   { 
  //     preview: 'This is preview text',
  //     name: 'Roderick Amfee',
  //     timestamp: '12:46',
  //   },
  //   { 
  //     preview: 'This is preview text',
  //     name: 'Roderick Amfee',
  //     timestamp: '12:46',
  //   },
  //   {       
  //     preview: 'This is preview text',
  //     name: 'Roderick Amfee',
  //     timestamp: '12:46',
  //   },
  //   { 
  //     preview: 'This is preview text',
  //     name: 'Roderick Amfee',
  //     timestamp: '12:46',
  //   },
  //   { 
  //     preview: 'This is preview text',
  //     name: 'Roderick Amfee',
  //     timestamp: '12:46',
  //   },
  //   { 
  //     preview: 'This is preview text',
  //     name: 'Roderick Amfee',
  //     timestamp: '12:46',
  //   },
  //   { 
  //     preview: 'This is preview text',
  //     name: 'Roderick Amfee',
  //     timestamp: '12:46',
  //   },
  //   { 
  //     preview: 'This is preview text',
  //     name: 'Roderick Amfee',
  //     timestamp: '12:46',
  //   },
  //   { 
  //     preview: 'This is preview text',
  //     name: 'Roderick Amfee',
  //     timestamp: '12:46',
  //   },
  // ];



  const handleConvoClick = (cid) => {
    history.push(`/chat/${cid}`)
  }

  const handleMessageIconClick = () => {
    history.push('/chats')
  }

  const handleInboxIconClick = () => {
    history.push('/requests')
  }

  const chatIdList = Object.keys(convos);

  const chats = chatIdList.map((cid) => {
    const currentConvo = convos[cid]
    const lastMessage = currentConvo.messages[currentConvo.messages.length - 1].value;

    const convoName = 
      currentConvo?.nickname.length > 0 
      ? currentConvo.nickname 
      : currentConvo.users
        .filter((convoUser) => user !== convoUser._id)
        .map(
          (convoUser) => `${convoUser?.firstName} ${convoUser?.lastName}`
        )
        .join(', ');

    const timestamp = '12:36';

    return <MobileChatListItem 
      preview={lastMessage} 
      name={convoName}
      timestamp={timestamp}
      handleConvoClick={() => handleConvoClick(cid)}
    />
  })
  return (
    <>
     <MobileChatMenuHeader 
      selected='chats'
      handleMessageIconClick={handleMessageIconClick}
      handleInboxIconClick={handleInboxIconClick}
     /> 
      <div>
        {chats}
      </div>
    </>
  )
}
