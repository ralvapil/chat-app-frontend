<<<<<<< HEAD
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import style from "styled-components";
import Header from "../ChatList/Header/Header";
import Footer from "../ChatList/Footer/Footer";
=======
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import style from 'styled-components'
import Header from "../ChatList/Header/Header"
import Footer from '../ChatList/Footer/Footer';
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const StyleContact = style.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 13px;
  padding-bottom: 13px;
  border-bottom: 2px solid #f8f8f8;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
<<<<<<< HEAD
`;
=======
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const List = style.div`
  max-height: calc(100vh - 94px - 80px);
  overflow: scroll;
  overflow-x: hidden;
<<<<<<< HEAD
`;
=======
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const StyledProPic = style.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  border: 1px solid white;
<<<<<<< HEAD
`;
=======
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const StyledName = style.span`
  font-size: 17px;
  font-weight: 500;
  padding-left: 12px;
  color: #55596a;
  
<<<<<<< HEAD
`;
=======
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

export default function ContactList({ user, socket, contacts }) {
  const history = useHistory();

  const handleMessageIconClick = () => {
<<<<<<< HEAD
    history.push("/chats");
  };

  const handleInboxIconClick = () => {
    history.push("/contacts");
  };

  const handleContactClick = async (contactUserId, chatId) => {
=======
    history.push('/chats')
  }

  const handleInboxIconClick = () => {
    history.push('/contacts')
  }

  const handleContactClick = async (contactUserId, chatId) => {

>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
    //TODO: this needs to be made into a determined call

    // it will already know if a chat exists, so it will need to be
    // a request to create the chcat if not exists
<<<<<<< HEAD
    // then return back the chat id
    // then do the history re locate to the chat

    if (!chatId) {
      chatId = await socket.emitSocket("createChat", {
        user: user.id,
        members: [contactUserId],
      });
    }

    return history.push(`/chat/${chatId}`);

    // chat doesnt exist in store
    // send request to create it
  };

  const contactIds = Object.keys(contacts);
  const contactList = contactIds?.length
    ? contactIds.map((contactId) => {
        const test = 50;
        let arr = [];
        const contact = contacts[contactId];

        for (let i = 0; i < test; i++) {
          arr[i] = (
            <StyleContact
              key={contactId}
              onClick={() => handleContactClick(contact.user, contact?.chat_id)}
            >
              <StyledProPic src={contact.picture} />
              <StyledName>
                {`${contact.firstName} ${contact.lastName}`}
              </StyledName>
            </StyleContact>
          );
        }

        return arr;
      })
    : "";

  return (
    <>
      <Header heading="Contacts" myPictureUrl={user.picture} />
      <List>{contactList}</List>
      <Footer section="contacts" />
    </>
  );
=======
    // then return back the chat id 
    // then do the history re locate to the chat
    
    if(!chatId) {
      chatId = await socket.emitSocket('createChat', {
        user: user.id,
        members: [contactUserId]
      })
    }

    return history.push(`/chat/${chatId}`)

    // chat doesnt exist in store
    // send request to create it
  }

  const contactIds = Object.keys(contacts);
  const contactList = contactIds?.length ? contactIds.map((contactId) => {

    const test = 50;
    let arr = [];
    const contact = contacts[contactId];

    for(let i = 0; i  < test; i++) {
        arr[i] = (
          <StyleContact key={contactId} onClick={() => handleContactClick(contact.user, contact?.chat_id)}>
            <StyledProPic src={contact.picture} />
            <StyledName>
              {`${contact.firstName} ${contact.lastName}`}
            </StyledName>
          </StyleContact>
        )
    }

    return (
      arr
    )
  }) : '';

  return (
    <>
      <Header 
        heading="Contacts"
        myPictureUrl={user.picture}
      /> 
      <List>
        {contactList}
      </List>
      <Footer section="contacts"/>
    </>
  )
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
}
