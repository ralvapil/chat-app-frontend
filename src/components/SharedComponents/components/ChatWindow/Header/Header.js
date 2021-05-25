import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ArrowLeft } from "react-feather";
import { useMediaQuery } from "react-responsive";

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100px;
  width: ${(props) =>
    props.isDesktopOrLaptop ? "calc(100vw - 400px)" : "100%"};
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBack = styled(ArrowLeft)`
  color: #55596a;
`;
const StyledBackButton = styled.button`
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  position: fixed;
  left: 22px;
  top: 31px;
`;

const StyledSubContainer = styled.div`
  height: 70%;
  width: ${(props) => (props.isDesktopOrLaptop ? "calc(100% - 30px)" : "94%")};
  background: white;
  border-radius: 16px;
  border: 1px solid #f9f9f9;
  box-shadow: -2px -2px 5px 0px rgba(200, 200, 200, 0.6);
  box-shadow: 2px 2px 5px 0px rgba(200, 200, 200, 0.6);
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 56px;
`;

const StyledNameText = styled.h1`
  font-size: 17px;
  font-weight: 500;
  color: #2d3f65;
  margin: 0;
  padding-left: 8px;
`;

const ProfilePicPlaceholder = styled.div`
  background: lightgrey;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  height: 34px;
  width: 34px;
  border: 1px solid white;
`;

export default function Header({ isGroup, name, pictureUrl }) {
  const history = useHistory();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  return (
    <StyledWrapper isDesktopOrLaptop={isDesktopOrLaptop}>
      <StyledSubContainer isDesktopOrLaptop={isDesktopOrLaptop}>
        {isDesktopOrLaptop ? (
          ""
        ) : (
          <StyledBackButton onClick={() => history.push("/chats")}>
            <StyledBack />
          </StyledBackButton>
        )}
        <>
          {isGroup ? (
            <ProfilePicPlaceholder />
          ) : (
            <ProfilePic src={pictureUrl} alt="Profile" />
          )}
        </>
        <StyledNameText>{name}</StyledNameText>
      </StyledSubContainer>
    </StyledWrapper>
  );
}
