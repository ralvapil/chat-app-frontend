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
  border: 1px solid rgba(155, 155, 155, 0.5);
  border-radius: 24px;
  padding: 8px 15px 8px 15px;
  resize: none;
  outline: none;
`

const StyledButtonWrapper = styled.div`
  height: 30px;
  width: 30px;
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
          <SendOutlined style={{ fontSize: '25px', color: '#1890ff' }}/>
        </StyledButtonWrapper>
      </StyleContainer>
    </StyledWrapper>
  )
}
