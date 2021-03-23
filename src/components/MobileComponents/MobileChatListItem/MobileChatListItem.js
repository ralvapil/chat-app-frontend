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
  display: flex; 
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 25%;
  height: 100%;
`

const StyledTimeStampContainer = styled.span`
  padding-top: 4px;
  width: 20%;
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
  font-weight: 300;
  color: #676767;
`

const ProfilePic = styled.div`
  background: lightgrey;
  border-radius: 50%;
  height: 70px;
  width: 70px;
`

const StyledSubContainer = styled.div`
  height: 70px;
  width: 86%;
  display: flex;
`

export default function MobileChatListItem( {preview, name, timestamp, handleConvoClick} ) {

  return (
    <StyledContainer onClick={handleConvoClick}>
      <StyledSubContainer>
        <StyleProfilePicContainer>
          <ProfilePic />
        </StyleProfilePicContainer>
        <StyledTextContainer>
          <StyledName>
            {name}
          </StyledName>
          <StyledPreviewText>
            {preview.length > 23 ? preview.substring(0, 20) + '...' : preview}
          </StyledPreviewText>
        </StyledTextContainer>
        <StyledTimeStampContainer>
          <div>
            {timestamp}
          </div>
        </StyledTimeStampContainer>
      </StyledSubContainer>
    </StyledContainer>
  )
}
