import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

import useMessengerData from '../../SharedComponents/hooks/useMessengerData'
import ChatList from '../../SharedComponents/components/ChatList/ChatList'
import ChatWindow from '../../SharedComponents/components/ChatWindow/ChatWindow'
import ContactList from '../../SharedComponents/components/ContactList/ContactList';


const ListContainer = styled.div`
  width: 400px;
  height: 100vh;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export default function DesktopWindow() {
  const { cid } = useParams();
  const { pathname } = useLocation();
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
