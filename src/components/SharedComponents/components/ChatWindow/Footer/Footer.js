import React from 'react'
import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize';
import { SendOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 0;
  min-height: 70px;
  width: ${props => props.isDesktopOrLaptop ? 'calc(100vw - 400px)' : '100%'};
  background: white;
  border-radius: 24px 24px 0px 0px;
  border: 1px solid #f9f9f9;
  box-shadow: 0px -2px 5px 0px rgba(200, 200, 200, 0.4);
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  width: 94%;
  border: 1px solid rgba(221, 221, 221, 0.4);
  border-radius: 30px;
  background: #fff;
`

const StyledTextArea = styled(TextareaAutosize)`
  width: 80%;
  min-height: 40px;
  padding: 9px 15px 8px 20px;
  border-radius: 20px;
  resize: none;
  outline: none;
  background: #fff;
  flex-grow: 2;
  border: none;
  display: flex;
  align-items: center;

  ::placeholder {
    color: #b4b7c1;
  }
`

const StyledButtonWrapper = styled.button`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
  background: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
`

export default function Footer({ messageInput, onChange, handleEnterPress }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })

  return (
    <StyledWrapper isDesktopOrLaptop={isDesktopOrLaptop}>
      <StyleContainer>
        <StyledTextArea
          rows={1} 
          cols={30} 
          id="msg"
          name="msg"
          value={messageInput}
          onChange={onChange}
          onKeyPress={handleEnterPress}
          placeholder="Type here"
        />
        <StyledButtonWrapper>
          <SendOutlined style={{ fontSize: '18px', color: '#adadad' }}/>
        </StyledButtonWrapper>
      </StyleContainer>
    </StyledWrapper>
  )
}
