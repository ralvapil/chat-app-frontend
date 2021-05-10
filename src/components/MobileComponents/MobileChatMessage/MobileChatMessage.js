import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  margin-top: ${props => props.userIsDifferentThanPrevious ? '15px' : '2px'};
  margin-bottom: ${props => props.isLastMessage ? '15px' : '0'};
  max-width: 80%;
  display: inline-block;
  align-self: ${props => props.isNotCurrentUser ? "flex-start" : "flex-end"};
  position: relative;
`

const StyledName = styled.div`
  color: grey;
  padding-left: 15px;
  font-size: 13px;
  text-align: ${props => props.isNotCurrentUser ? "left" : "right"};
  padding-right: 14px;
`

const StyledMessageBody = styled.div`
  padding: 14px 24px;
  background: #3e78ff;
  border-radius: 30px;
  display: inline-block;
  background-color:  ${props => props.isNotCurrentUser ? "#f4eeff" : "#f1f7ff"};
  float: ${props => props.isNotCurrentUser ? "left" : "right"};
`

const StyledMessageText = styled.span`
  background-color:  ${props => props.isNotCurrentUser ? "#f4eeff" : "#f1f7ff"};
  color:  ${props => props.isNotCurrentUser ? "#8b4cff" :"rgb(0,106,255)"}; 
  font-size: 14px;
`

const StyledProPicIcon = styled.img`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  border-color: white;
  position: absolute;
  top: -6px;
  {${props => {
    if(props.isNotCurrentUser) {
      return 'left: -2px;'
    }

    return 'right: -2px;'
  }}

`

// const StyledTimeStamp = styled.div`
//   color: grey;
//   font-size: 10px;
//   padding-top: 3px;
//   text-align: right;
// `

export default function MobileChatMessage({
  name, 
  timestamp,
  userIsDifferentThanPrevious, 
  children, 
  isNotCurrentUser, 
  isLastMessage,
  pictureUrl
}) {

  return (
    <StyledContainer 
      isNotCurrentUser={isNotCurrentUser} 
      userIsDifferentThanPrevious={userIsDifferentThanPrevious} 
      isLastMessage={isLastMessage}
    >
      {
        userIsDifferentThanPrevious ? <StyledProPicIcon src={pictureUrl} isNotCurrentUser={isNotCurrentUser}/> : ''
      }
      <StyledMessageBody isNotCurrentUser={isNotCurrentUser}>
        <StyledMessageText isNotCurrentUser={isNotCurrentUser}>
          {children}
        </StyledMessageText>
      </StyledMessageBody>
    </StyledContainer>
  )
}
