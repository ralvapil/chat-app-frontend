import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  margin-top: ${props => props.userIsDifferentThanPrevious ? '15px' : '2px'};
  margin-bottom: ${props => props.isLastMessage ? '15px' : '0'};
  max-width: 80%;
  display: inline-block;
  align-self: ${props => props.isNotCurrentUser ? "flex-start" : "flex-end"};
`

const StyledName = styled.div`
  color: grey;
  padding-left: 15px;
  font-size: 13px;
  text-align: ${props => props.isNotCurrentUser ? "left" : "right"};
  padding-right: 14px;
`

const StyledMessageBody = styled.div`
  padding: 12px 20px 12px;
  background: #3e78ff;
  /* border-radius: 3px 12px 3px 12px; */
  border-radius: 10px;

  /* border-radius: 25px; */
  display: inline-block;
  background:  ${props => props.isNotCurrentUser ? "rgba(251, 109,98, 0.26)" : "rgba(221, 221, 221, 0.26)"};
  float: ${props => props.isNotCurrentUser ? "left" : "right"};
`

const StyledMessageText = styled.span`
  color: #676767;
  font-size: 14px;
`

// const StyledTimeStamp = styled.div`
//   color: grey;
//   font-size: 10px;
//   padding-top: 3px;
//   text-align: right;
// `

export default function MobileChatMessage( {name, timestamp, userIsDifferentThanPrevious, children, isNotCurrentUser, isLastMessage} ) {
  console.log('is not', isNotCurrentUser)
  return (
    <StyledContainer 
      isNotCurrentUser={isNotCurrentUser} 
      userIsDifferentThanPrevious={userIsDifferentThanPrevious} 
      isLastMessage={isLastMessage}
    >
      {
        userIsDifferentThanPrevious ? <StyledName isNotCurrentUser={isNotCurrentUser}>{name}</StyledName> : ''
      }
      <StyledMessageBody isNotCurrentUser={isNotCurrentUser}>
        <StyledMessageText>
          {children}
        </StyledMessageText>
      </StyledMessageBody>
    </StyledContainer>
  )
}
