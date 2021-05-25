<<<<<<< HEAD
import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import getChatListItems from "../../../../utils/data-formatters/formatChatList";

export default function ChatList({ convos, user }) {
  const history = useHistory();

  const handleConvoClick = (cid) => {
    history.push(`/chat/${cid}`);
  };

  return (
    <>
      <Header myPictureUrl={user.picture} heading="Chats" />
      {getChatListItems(convos, user, handleConvoClick)}
      <Footer />
    </>
  );
=======
import React from 'react'
import {useHistory} from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import getChatListItems from '../../../../utils/data-formatters/formatChatList'

export default function ChatList({convos, user}) {
  const history = useHistory();

  const handleConvoClick = (cid) => {
    history.push(`/chat/${cid}`)
  }
  
  return (
    <>
      <Header
        myPictureUrl={user.picture}
        heading="Chats"
      />
        {getChatListItems(convos, user, handleConvoClick)}
      <Footer />
    </>
  )
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
}
