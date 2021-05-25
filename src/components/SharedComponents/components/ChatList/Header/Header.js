<<<<<<< HEAD
import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const StyledHeader = styled.h1`
  font-size: 24px;
  color: #23293f;
  font-weight: 400;
  margin-bottom: 0px;
`;

const StyledHeaderContainer = styled.div`
  height: ${(props) => (props.isDesktopOrLaptop ? "100px" : "80px")};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
`;

const StyledHeaderSubContainer = styled.div`
  height: ${(props) => (props.isDesktopOrLaptop ? "70px" : "70%")};
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

const ProfilePic = styled.img`
  border-radius: 50%;
  height: 36px;
  width: 36px;
  border: 1px solid white;
`;

export default function Header({ heading, myPictureUrl }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
=======
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'

const StyledHeader = styled.h1`
    font-size: 24px;
    color: #23293f;
    font-weight: 400;
    margin-bottom: 0px;
  `

  const StyledHeaderContainer = styled.div`
    height:  ${props => props.isDesktopOrLaptop ? '100px' : '80px'};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
  `

  const StyledHeaderSubContainer = styled.div`
    height:  ${props => props.isDesktopOrLaptop ? '70px' : '70%'};
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

  const ProfilePic = styled.img`
    border-radius: 50%;
    height: 36px;
    width: 36px;
    border: 1px solid white;
  `

export default function Header({heading, myPictureUrl}) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

  return (
    <StyledHeaderContainer isDesktopOrLaptop={isDesktopOrLaptop}>
      <StyledHeaderSubContainer isDesktopOrLaptop={isDesktopOrLaptop}>
<<<<<<< HEAD
        <StyledHeader>{heading}</StyledHeader>
        <ProfilePic src={myPictureUrl} alt="My Picture" />
      </StyledHeaderSubContainer>
    </StyledHeaderContainer>
  );
=======
        <StyledHeader>
          {heading}
        </StyledHeader>
        <ProfilePic src={myPictureUrl} alt="My Picture" />
      </StyledHeaderSubContainer>
  </StyledHeaderContainer>
  )
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
}
