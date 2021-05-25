<<<<<<< HEAD
import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-top: ${(props) =>
    props.userIsDifferentThanPrevious ? "15px" : "2px"};
  margin-bottom: ${(props) => (props.isLastMessage ? "15px" : "0")};
  max-width: 80%;
  display: inline-block;
  align-self: ${(props) =>
    props.isNotCurrentUser ? "flex-start" : "flex-end"};
  position: relative;
`;
=======
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
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const StyledMessageBody = styled.div`
  padding: 14px 24px;
  background: #3e78ff;
  border-radius: 30px;
  display: inline-block;
<<<<<<< HEAD
  background-color: ${(props) =>
    props.isNotCurrentUser ? "#f4eeff" : "#f1f7ff"};
  float: ${(props) => (props.isNotCurrentUser ? "left" : "right")};
  display: flex;
  align-items: center;
  justify-content: center;
`;
=======
  background-color:  ${props => props.isNotCurrentUser ? "#f4eeff" : "#f1f7ff"};
  float: ${props => props.isNotCurrentUser ? "left" : "right"};
  display: flex;
  align-items: center;
  justify-content: center;
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const StyledTimestamp = styled.div`
  font-size: 9px;
  padding-left: 10px;
  color: #c2c2c2;
<<<<<<< HEAD
`;

const StyledMessageText = styled.span`
  background-color: ${(props) =>
    props.isNotCurrentUser ? "#f4eeff" : "#f1f7ff"};
  color: ${(props) => (props.isNotCurrentUser ? "#8b4cff" : "rgb(0,106,255)")};
  font-size: 14px;
`;
=======
`

const StyledMessageText = styled.span`
  background-color:  ${props => props.isNotCurrentUser ? "#f4eeff" : "#f1f7ff"};
  color:  ${props => props.isNotCurrentUser ? "#8b4cff" :"rgb(0,106,255)"}; 
  font-size: 14px;
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const StyledProPicIcon = styled.img`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  border-color: white;
  position: absolute;
  top: -6px;
<<<<<<< HEAD
  {${(props) => {
    if (props.isNotCurrentUser) {
      return "left: -2px;";
    }

    return "right: -2px;";
  }}
`;

export default function Message({
  timestamp,
  userIsDifferentThanPrevious,
  children,
  isNotCurrentUser,
  isLastMessage,
  pictureUrl,
}) {
  return (
    <StyledContainer
      isNotCurrentUser={isNotCurrentUser}
      userIsDifferentThanPrevious={userIsDifferentThanPrevious}
      isLastMessage={isLastMessage}
    >
      {userIsDifferentThanPrevious ? (
        <StyledProPicIcon
          src={pictureUrl}
          isNotCurrentUser={isNotCurrentUser}
        />
      ) : (
        ""
      )}
=======
  {${props => {
    if(props.isNotCurrentUser) {
      return 'left: -2px;'
    }

    return 'right: -2px;'
  }}
`


export default function Message({
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
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
      <StyledMessageBody isNotCurrentUser={isNotCurrentUser}>
        <StyledMessageText isNotCurrentUser={isNotCurrentUser}>
          {children}
        </StyledMessageText>
        <StyledTimestamp>{timestamp}</StyledTimestamp>
      </StyledMessageBody>
    </StyledContainer>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
}
