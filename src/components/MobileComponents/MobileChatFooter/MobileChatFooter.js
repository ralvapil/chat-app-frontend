import React from 'react'
import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize';
import { SendOutlined } from '@ant-design/icons';


const StyledWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  padding-top: 15px;
  padding-bottom: 15px;
  /* background: #fcfcfc; */
  border-top: 1px solid rgba(155, 155, 155, 0.1);
  display: flex;
  align-items: center;
  height: 90px;
  background: rgba(221, 221, 221, 0.3);
`;

const StyleContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 10px;
`

const StyledTextArea = styled(TextareaAutosize)`
  width: 80%;
  min-height: 20px;
  border: 1px solid rgba(221, 221, 221, 0.4);
  border-radius: 10px;
  padding: 12px 15px 12px 15px;
  resize: none;
  outline: none;
`

const StyledButtonWrapper = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
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
        <StyledButtonWrapper>
          <SendOutlined style={{ fontSize: '25px', color: '#FB6D62' }}/>
        </StyledButtonWrapper>
      </StyleContainer>
    </StyledWrapper>
  )
}
