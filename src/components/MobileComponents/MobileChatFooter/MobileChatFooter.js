import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import { SendOutlined } from "@ant-design/icons";

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  min-height: 70px;
  width: 100%;
  background: white;
  border-radius: 24px 24px 0px 0px;
  border: 1px solid #f9f9f9;
  box-shadow: 0px -2px 5px 0px rgba(200, 200, 200, 0.6);
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
<<<<<<< HEAD
`;
=======
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

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
`;

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
`;

export default function MobileChatFooter({
  messageInput,
  onChange,
  handleEnterPress,
}) {
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
          placeholder="Type here"
        />
        <StyledButtonWrapper>
          <SendOutlined style={{ fontSize: "18px", color: "#adadad" }} />
        </StyledButtonWrapper>
      </StyleContainer>
    </StyledWrapper>
  );
}
