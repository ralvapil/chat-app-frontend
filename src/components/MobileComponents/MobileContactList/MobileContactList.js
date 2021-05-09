import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

import { getContacts, selectContacts, selectLastUpdated } from '../../../features/contact/contactSlice'
import { selectUser } from '../../../features/auth/authSlice'
import { createChat } from '../../../features/message/messageSlice'
import { useSocket } from '../../Contexts/socketContext'; 
import MobileChatMenuHeader from "../MobileChatMenuHeader/MobileChatMenuHeader"

export default function MobileChatRequestList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { socket } = useSocket();

  const user = useSelector(selectUser);
  const contacts = useSelector(selectContacts);
  const lastUpdated = useSelector(selectLastUpdated);

  useEffect(() => {
    if(socket && !lastUpdated) {
      dispatch(
        getContacts({
          type: 'socket',
          eventType: 'getContacts',
          data: { 
            user
          },
          socket,
        })
      )
    }
  },[user, socket, dispatch, lastUpdated])

  const handleMessageIconClick = () => {
    history.push('/chats')
  }

  const handleInboxIconClick = () => {
    history.push('/contacts')
  }

  const handleContactClick = async (contactUserId, chatId) => {
    console.log('contact', contactUserId)

    //TODO: this needs to be made into a determined call

    // it will already know if a chat exists, so it will need to be
    // a request to create the chcat if not exists
    // then return back the chat id 
    // then do the history re locate to the chat
    
    if(!chatId) {
      console.log('no chat id', chatId)
      chatId = await socket.emitSocket('createChat', {
        user: user,
        members: [contactUserId]
      })
    }

    return history.push(`/chat/${chatId}`)

    // chat doesnt exist in store
    // send request to create it
  }

  const contactIds = Object.keys(contacts);
  const contactList = contactIds?.length ? contactIds.map((contactId) => {
    const contact = contacts[contactId];
    console.log('contact', contact)
    return (
      <div key={contactId} onClick={() => handleContactClick(contact.user, contact?.chat_id)}>
        <span>{contact.firstName}</span>
        <span>{contact.lastName}</span>
      </div>
    )
  }) : '';

  return (
    <>
      <MobileChatMenuHeader 
        selected='inbox' 
        handleMessageIconClick={handleMessageIconClick} 
        handleInboxIconClick={handleInboxIconClick}
    /> 
    {contactList}
   </>
  )
}
