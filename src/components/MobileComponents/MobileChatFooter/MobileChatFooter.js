import React from 'react'
import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize';


const StyledWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #fcfcfc;
  border-top: 1px solid #d3d3d3;
  display: flex;
  align-items: center;
`;

const StyleContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`

const StyledTextArea = styled(TextareaAutosize)`
  width: 100%;
  min-height: 20px;
  border: 1px solid rgb(155, 155, 155);
  border-radius: 12px;
  padding: 8px 0px 8px 10px;
  resize: none;
  outline: none;
`

export default function MobileChatFooter({ messageInput, onChange, handleEnterPress }) {
  
  return (
    <StyledWrapper>
      <StyleContainer>
        <StyledTextArea
          rows={1} 
          cols={30} 
          id="msg"
          name="msg"
          value={messageInput}
          onChange={onChange}
          onKeyPress={handleEnterPress}
        />
      </StyleContainer>
    </StyledWrapper>
  )
}
