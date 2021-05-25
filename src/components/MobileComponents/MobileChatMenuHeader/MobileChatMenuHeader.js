<<<<<<< HEAD
import React from "react";
import styled from "styled-components";
import {
  UserOutlined,
  MessageOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import Dropdown from "../../SharedComponents/components/Dropdown/Dropdown";
=======
import React from 'react'
import styled from 'styled-components'
import { UserOutlined, MessageOutlined, PlusCircleOutlined } from '@ant-design/icons';
import Dropdown from '../../SharedComponents/components/Dropdown/Dropdown'
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const StyledHeader = styled.h1`
  font-size: 24px;
  color: #23293f;
  font-weight: 400;
  margin-bottom: 0px;
`;

<<<<<<< HEAD
const StyledHeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
`;
=======
  const StyledHeaderContainer = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
  `
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 90px;
  margin-top: 40px;
`;

const StyledButtonSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  height: 100%;
`;

const StyledAddButtonSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  position: relative;
`;

<<<<<<< HEAD
const StyledHeaderSubContainer = styled.div`
  height: 70%;
  width: 94%;
  background: white;
  border-radius: 16px;
  border: 1px solid #f9f9f9;
  box-shadow: -2px -2px 5px 0px rgba(200, 200, 200, 0.6);
  box-shadow: 2px 2px 5px 0px rgba(200, 200, 200, 0.6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 18px;
  padding-right: 18px;
`;
=======
  const StyledHeaderSubContainer = styled.div`
    height: 70%;
    width: 94%;
    background: white;
    border-radius: 16px;
    border: 1px solid #f9f9f9;
    box-shadow: -2px -2px 5px 0px rgba(200, 200, 200, 0.6);
    box-shadow: 2px 2px 5px 0px rgba(200, 200, 200, 0.6);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 18px;
    padding-right: 18px;
  `
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const ProfilePic = styled.img`
  border-radius: 50%;
  height: 36px;
  width: 36px;
  border: 1px solid white;
`;

const StyledTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledMessageOutlined = styled(MessageOutlined)`
  color: ${(props) =>
    props.selected === "chats"
      ? "rgba(251, 109, 98, 0.7)"
      : "rgba(221, 221, 221, 0.6)"};
  font-size: 36px;
`;

const StyledInboxOutlined = styled(UserOutlined)`
  color: ${(props) =>
    props.selected !== "chats"
      ? "rgba(251, 109, 98, 0.7)"
      : "rgba(221, 221, 221, 0.6)"};
  font-size: 40px;
`;

const StyledPlusCircleOutlined = styled(PlusCircleOutlined)`
  color: rgba(221, 221, 221, 0.6);
  font-size: 34px;
`;

export default function MobileChatMenuHeader({ heading, myPictureUrl }) {
  return (
    <StyledHeaderContainer>
      <StyledHeaderSubContainer>
        <StyledHeader>{heading}</StyledHeader>
        <ProfilePic src={myPictureUrl} alt="My Picture" />
      </StyledHeaderSubContainer>
    </StyledHeaderContainer>
  );
}
