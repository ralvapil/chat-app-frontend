import React from 'react'
import styled from 'styled-components'
import { UserOutlined, MessageOutlined, PlusCircleOutlined } from '@ant-design/icons';
import Dropdown from '../../SharedComponents/Dropdown/Dropdown'

const StyledHeader = styled.h1`
    font-size: 32px;
    color: #2D3F65;
    font-weight: 400;
    margin-bottom: 0px;
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
    margin-top: 40px;
  `

  const StyledButtonSubContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    height: 100%;
  `

  const StyledAddButtonSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  position: relative;
`

  const StyledHeaderSubContainer = styled.div`
    height: 100%;
    width: 86%;
    padding-top: 10px;
  `

  const StyledTopContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `

  const StyledMessageOutlined = styled(MessageOutlined)`
    color: ${props => props.selected === 'chats' ? 'rgba(251, 109, 98, 0.7)' : 'rgba(221, 221, 221, 0.6)'};
    font-size: 36px;
  `

  const StyledInboxOutlined = styled(UserOutlined)`
    color: ${props => props.selected !== 'chats' ? 'rgba(251, 109, 98, 0.7)' : 'rgba(221, 221, 221, 0.6)'};
    font-size: 40px;
  `
  
  const StyledPlusCircleOutlined = styled(PlusCircleOutlined)`
    color: rgba(221, 221, 221, 0.6);
    font-size: 34px;
  `

export default function MobileChatMenuHeader( {selected = 'chats', handleMessageIconClick, handleInboxIconClick}) {
  return (
    <StyledHeaderContainer>
      <StyledHeaderSubContainer>
        <StyledTopContainer>
          <StyledHeader>
            Chats
          </StyledHeader>
          <StyledAddButtonSubContainer>
            <Dropdown />
          </StyledAddButtonSubContainer>
        </StyledTopContainer>
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
