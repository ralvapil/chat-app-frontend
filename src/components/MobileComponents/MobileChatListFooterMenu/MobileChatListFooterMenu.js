import React from 'react'
import styled from 'styled-components'
import Dropdown from '../../SharedComponents/Dropdown/Dropdown'
import { MessageCircle, User } from 'react-feather'

const Container = styled.div`
  height: 96px;
  width: 100%;
  background: #fcfcfc;
  position: fixed;
  bottom: 0;
`

const InnerContainer = styled.div`
  height: 96px;
  width: 100%;
  background: white;
  border-radius: 24px 24px 0px 0px;
  border: 1px solid #f9f9f9;
  box-shadow: 0px -2px 5px 0px rgba(200, 200, 200, 0.2);
  position: relative;
`

const StyledItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const StyledFooterChatIcon = styled(MessageCircle)`
  color: #4b38ff;
`

const StyledFooterUserIcon = styled(User)`
  color: #cfd0d7; 
`

const StyledMenuButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const StyledFooterIconLabel = styled.label`
  color: ${props => props.section === 'chats' ? 'rgb(0,106,255)' : '#cfd0d7'};
  font-size: 12px;
  padding-top: 6px;
  font-family: Gibson-Regular;
`

export default function MobileChatListFooterMenu() {
  return (
    <Container>
      <InnerContainer>
        <Dropdown />
        <StyledMenuButtonsContainer>
          <StyledItemContainer>
            <StyledFooterChatIcon size='20' strokeWidth="3"/>
            <StyledFooterIconLabel section="chats" >Chats</StyledFooterIconLabel>
          </StyledItemContainer>
          <StyledItemContainer>
            <StyledFooterUserIcon size='20' strokeWidth="3"/>
            <StyledFooterIconLabel section="contacts">Contacts</StyledFooterIconLabel>
          </StyledItemContainer>
        </StyledMenuButtonsContainer>
      </InnerContainer>
    </Container>
  )
}
