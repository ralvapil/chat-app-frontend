<<<<<<< HEAD
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

import useMessengerData from "../../SharedComponents/hooks/useMessengerData";
import ChatList from "../../SharedComponents/components/ChatList/ChatList";
import ChatWindow from "../../SharedComponents/components/ChatWindow/ChatWindow";
import ContactList from "../../SharedComponents/components/ContactList/ContactList";
=======
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

import useMessengerData from '../../SharedComponents/hooks/useMessengerData'
import ChatList from '../../SharedComponents/components/ChatList/ChatList'
import ChatWindow from '../../SharedComponents/components/ChatWindow/ChatWindow'
import ContactList from '../../SharedComponents/components/ContactList/ContactList';

>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const ListContainer = styled.div`
  width: 400px;
  height: 100vh;
<<<<<<< HEAD
`;
=======
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const Container = styled.div`
  display: flex;
  flex-direction: row;
<<<<<<< HEAD
`;
=======
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

export default function DesktopWindow() {
  const { cid } = useParams();
  const { pathname } = useLocation();
<<<<<<< HEAD
  const { socket, user, convos, contacts } = useMessengerData();

  return (
    <Container>
      <ListContainer>
        {pathname === "/chats" || pathname.substring(0, 5) === "/chat" ? (
          <ChatList user={user} convos={convos} />
        ) : (
          <ContactList user={user} socket={socket} contacts={contacts} />
        )}
=======
  const {
    socket,
    user,
    convos,
    contacts
  } = useMessengerData();
  
  return (
    <Container>
      <ListContainer>
        {
          pathname === '/chats' || pathname.substring(0, 5) === '/chat' ?         <ChatList 
          user={user}
          convos={convos}
        /> : 
        <ContactList 
          user={user}
          socket={socket}
          contacts={contacts}
        />
        }
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
      </ListContainer>
      <ChatWindow
        messages={convos?.[cid]}
        user={user}
        cid={cid}
        socket={socket}
      />
    </Container>
  );
}
