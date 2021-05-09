import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid rgba(225,225,225, 0.1)  */
  /* margin-left: 30px; */
  /* margin-right: 30px; */
`

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding-top: 4px;
  padding-bottom: 5px;
  padding-left: 15px;
`

const StyleProfilePicContainer = styled.div`
  height: 100%;
  padding-right: 10px;
`

const StyledMetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  align-items: flex-end;
`

const StyledTimeStamp = styled.span`
  font-size: 12px;
  font-weight: 300;
  text-align: right;
  color: #676767;
`

const StyledName = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: #2D3F65;
`

const StyledPreviewText = styled.div`
  padding-top: 5px;
  font-size: 14px;
  font-weight: ${props => (props.isUnread ? 500 : 300)};
  color: #676767;
`

const ProfilePicPlaceholder = styled.div`
  background: lightgrey;
  border-radius: 50%;
  height: 70px;
  width: 70px;
`

const ProfilePic = styled.img`
  border-radius: 50%;
  height: 70px;
  width: 70px;
  border: 1px solid white;
`

const StyledSubContainer = styled.div`
  height: 70px;
  width: 86%;
  display: flex;
`

const StyledUnReadMsgCount = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(251, 109, 98, 0.7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-top: 6px;
`

export default function MobileChatListItem( {preview, name, timestamp, handleConvoClick, unreadMsgCount, picture, isGroup} ) {

  return (
    <StyledContainer onClick={handleConvoClick}>
      <StyledSubContainer>
        <StyleProfilePicContainer>
          <>
            {
              isGroup ? <ProfilePicPlaceholder/> : <ProfilePic src={picture} alt="Profile" />
            }
          </>
        </StyleProfilePicContainer>
        <StyledTextContainer>
          <StyledName>
            {name}
          </StyledName>
          <StyledPreviewText isUnread={unreadMsgCount > 0}>
            {preview.length > 23 ? preview.substring(0, 20) + '...' : preview}
          </StyledPreviewText>
        </StyledTextContainer>
        <StyledMetaContainer>
          <StyledTimeStamp>
            {timestamp}
          </StyledTimeStamp>
          {
            unreadMsgCount > 0 ? <StyledUnReadMsgCount>{unreadMsgCount}</StyledUnReadMsgCount> : ''
          }
          
        </StyledMetaContainer>
      </StyledSubContainer>
    </StyledContainer>
  )
}
