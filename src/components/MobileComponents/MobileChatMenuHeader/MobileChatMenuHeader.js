import React from 'react'
import styled from 'styled-components'
import { InboxOutlined, MessageOutlined } from '@ant-design/icons';

export default function MobileChatMenuHeader( {selected = 'chats', handleMessageIconClick, handleInboxIconClick}) {
  const StyledHeader = styled.h1`
    font-size: 32px;
    color: #2D3F65;
    font-weight: 400;
  `

  const StyledHeaderContainer = styled.div`
    height: 180px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(225,225,225, 0.3);
  `

  const StyledButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 90px;
    padding-top: 5%;
  `

  const StyledButtonSubContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    height: 100%;
  `

  const StyledHeaderSubContainer = styled.div`
    height: 140px;
    width: 86%;
  `

  const StyledMessageOutlined = styled(MessageOutlined)`
    color: ${props => props.selected === 'chats' ? 'rgba(251, 109, 98, 0.7)' : 'rgba(221, 221, 221, 0.6)'};
    font-size: 36px;
  `

  const StyledInboxOutlined = styled(InboxOutlined)`
    color: ${props => props.selected !== 'chats' ? 'rgba(251, 109, 98, 0.7)' : 'rgba(221, 221, 221, 0.6)'};
    font-size: 42px;
  `

  return (
    <StyledHeaderContainer>
      <StyledHeaderSubContainer>
        <StyledHeader>
          Chats
        </StyledHeader>
        <StyledButtonContainer>
          <StyledButtonSubContainer onClick={handleMessageIconClick}>
            <StyledMessageOutlined selected={selected} />
          </StyledButtonSubContainer>
          <StyledButtonSubContainer onClick={handleInboxIconClick}>
            <StyledInboxOutlined selected={selected} />
          </StyledButtonSubContainer>
        </StyledButtonContainer>
      </StyledHeaderSubContainer>
  </StyledHeaderContainer>
  )
}
