import React from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import Dropdown from '../../SharedComponents/components/Dropdown/Dropdown';
import { MessageCircle, User } from 'react-feather';

const Container = styled.div`
  height: 84px;
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: 0;
`;

const InnerContainer = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  border-radius: 24px 24px 0px 0px;
  border: 1px solid #f9f9f9;
  box-shadow: 0px -2px 5px 0px rgba(200, 200, 200, 0.6);
  position: relative;
`;

const StyledItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const StyledFooterChatIcon = styled(MessageCircle)`
  color: ${(props) => (props.pathname === '/chats' ? 'dodgerblue' : '#cfd0d7')};
`;

const StyledFooterUserIcon = styled(User)`
  color: ${(props) =>
    props.pathname === '/contacts' ? 'dodgerblue' : '#cfd0d7'};
`;

const StyledMenuButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const StyledFooterChatIconLabel = styled.label`
  color: ${(props) =>
    props.pathname === '/chats' ? 'rgb(0,106,255)' : '#cfd0d7'};
  font-size: 12px;
  padding-top: 6px;
`;

const StyledFooterContactIconLabel = styled.label`
  color: ${(props) =>
    props.pathname === '/contacts' ? 'rgb(0,106,255)' : '#cfd0d7'};
  font-size: 12px;
  padding-top: 6px;
`;

export default function MobileChatListFooterMenu(section) {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <Container>
      <InnerContainer>
        <Dropdown />
        <StyledMenuButtonsContainer>
          <StyledItemContainer onClick={() => history.push(`/chats`)}>
            <StyledFooterChatIcon
              pathname={pathname}
              size="20"
              strokeWidth="3"
            />
            <StyledFooterChatIconLabel pathname={pathname}>
              Chats
            </StyledFooterChatIconLabel>
          </StyledItemContainer>
          <StyledItemContainer onClick={() => history.push(`/contacts`)}>
            <StyledFooterUserIcon
              pathname={pathname}
              size="20"
              strokeWidth="3"
            />
            <StyledFooterContactIconLabel pathname={pathname}>
              Contacts
            </StyledFooterContactIconLabel>
          </StyledItemContainer>
        </StyledMenuButtonsContainer>
      </InnerContainer>
    </Container>
  );
}
