<<<<<<< HEAD
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ArrowLeft } from "react-feather";
import { useMediaQuery } from "react-responsive";
=======
import React from 'react'
import {useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { ArrowLeft } from 'react-feather'
import { useMediaQuery } from 'react-responsive';
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100px;
<<<<<<< HEAD
  width: ${(props) =>
    props.isDesktopOrLaptop ? "calc(100vw - 400px)" : "100%"};
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
=======
  width: ${props => props.isDesktopOrLaptop ? 'calc(100vw - 400px)' : '100%'};
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
`;

const StyledBack = styled(ArrowLeft)`
  color: #55596a;
<<<<<<< HEAD
`;
=======
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
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
<<<<<<< HEAD
`;

const StyledSubContainer = styled.div`
  height: 70%;
  width: ${(props) => (props.isDesktopOrLaptop ? "calc(100% - 30px)" : "94%")};
=======
`

const StyledSubContainer = styled.div`
  height: 70%;
  width:  ${props => props.isDesktopOrLaptop ? 'calc(100% - 30px)' : '94%'};
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
  background: white;
  border-radius: 16px;
  border: 1px solid #f9f9f9;
  box-shadow: -2px -2px 5px 0px rgba(200, 200, 200, 0.6);
  box-shadow: 2px 2px 5px 0px rgba(200, 200, 200, 0.6);
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 56px;
<<<<<<< HEAD
`;
=======
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const StyledNameText = styled.h1`
  font-size: 17px;
  font-weight: 500;
<<<<<<< HEAD
  color: #2d3f65;
  margin: 0;
  padding-left: 8px;
`;
=======
  color: #2D3F65;
  margin: 0;
  padding-left: 8px;
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const ProfilePicPlaceholder = styled.div`
  background: lightgrey;
  border-radius: 50%;
  height: 50px;
  width: 50px;
<<<<<<< HEAD
`;
=======
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const ProfilePic = styled.img`
  border-radius: 50%;
  height: 34px;
  width: 34px;
  border: 1px solid white;
<<<<<<< HEAD
`;

export default function Header({ isGroup, name, pictureUrl }) {
  const history = useHistory();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
=======
`

export default function Header( { isGroup, name, pictureUrl } ) {
  const history = useHistory();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

  return (
    <StyledWrapper isDesktopOrLaptop={isDesktopOrLaptop}>
      <StyledSubContainer isDesktopOrLaptop={isDesktopOrLaptop}>
<<<<<<< HEAD
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
=======
        {
          isDesktopOrLaptop ? '' : <StyledBackButton onClick={() => history.push('/chats')}>
          <StyledBack/>
        </StyledBackButton>
        }
          <>
            {
              isGroup ? <ProfilePicPlaceholder/> : <ProfilePic src={pictureUrl} alt="Profile" />
            }
          </>
        <StyledNameText>
          {name}
        </StyledNameText>
      </StyledSubContainer>
    </StyledWrapper>
  )
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
}
