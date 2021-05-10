import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { getContacts, selectContacts, selectLastUpdated } from '../../../features/contact/contactSlice'
import { getConvos, getMessages, getLastUpdatedConvos } from "../../../features/message/messageSlice"
import { selectUser } from "../../../features/auth/authSlice"
import MobileChatListItem from "../MobileChatListItem/MobileChatListItem"
import MobileChatMenuHeader from "../MobileChatMenuHeader/MobileChatMenuHeader"
import { useSocket } from '../../Contexts/socketContext'; 
import MobileChatListFooterMenu from '../MobileChatListFooterMenu/MobileChatListFooterMenu'

export default function MobileChatListWindow() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { socket } = useSocket();

  const user = useSelector( selectUser )
  console.log('user', user)
  const convos = useSelector( getMessages )
  const contacts = useSelector(selectContacts);

  const lastUpdateConvos = useSelector( getLastUpdatedConvos )
  const lastupdatedContacts = useSelector(selectLastUpdated);

  useEffect(() => {
    if(socket && !lastUpdateConvos) {
      dispatch(
        getConvos({
          'type': 'socket',
          'eventType': 'getConvos',
          'data': { 
            user: user.id
          },
          'socket': socket,
        }) 
      )
    }
  }, [dispatch, user, socket, lastUpdateConvos])

  useEffect(() => {
    if(socket && !lastupdatedContacts) {
      dispatch(
        getContacts({
          type: 'socket',
          eventType: 'getContacts',
          data: { 
            user: user.id
          },
          socket,
        })
      )
    }
  },[user, socket, dispatch, lastupdatedContacts])

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
    history.push('/contacts')
  }

  const chatIdList = Object.keys(convos);

  const chats = chatIdList.map((cid) => {
    const currentConvo = convos[cid]
    const lastMessage = currentConvo?.messages[currentConvo.messages?.length - 1]?.value ? 
      currentConvo.messages[currentConvo.messages.length - 1]?.value : 
      '';

    const contact = currentConvo.isGroup ? null : currentConvo.users.find((convoUser) =>  user.id !== convoUser.user);
    const pictureUrl = contacts[contact.user]?.picture
      console.log('url', pictureUrl)
    const convoName = 
      currentConvo?.nickname?.length > 0 
      ? currentConvo.nickname 
      : currentConvo.users
        .filter((convoUser) =>  user.id !== convoUser.user)
        .map(
          (convoUser) => `${convoUser?.firstName} ${convoUser?.lastName}`
        )
        .join(', ');

    const timestamp = '12:36';

    return <MobileChatListItem 
      key={cid}
      preview={lastMessage} 
      name={convoName}
      timestamp={timestamp}
      handleConvoClick={() => handleConvoClick(cid)}
      unreadMsgCount={currentConvo.unreadMsgCount || 0}
      picture={pictureUrl}
      isGroup={currentConvo.isGroup}
    />
  })
  return (
    <>
     <MobileChatMenuHeader 
      myPictureUrl={user.picture}
      heading="Chats"
     /> 
      <div style={{maxHeight: 'calc(100vh - 94px - 80px)', overflow: 'scroll',}}>
        {chats}
        {chats}
        {chats}
        {chats}
        {chats}
        {chats}
      </div>
      <MobileChatListFooterMenu />
    </>
  )
}
