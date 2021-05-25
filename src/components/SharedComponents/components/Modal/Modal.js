import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  z-index: 998;
`;

const PopUp = styled.div`
  width: 300px;
  height: 500px;
  background: green;
  z-index: 999;
`;

export default function Modal({ handleClickOff }) {
  return (
    <Container onClick={handleClickOff}>
      <PopUp>this is a modal</PopUp>
    </Container>
  );
}
