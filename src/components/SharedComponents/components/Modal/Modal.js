<<<<<<< HEAD
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
=======
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: rgba(0,0,0, 0.5);
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
  height: 100vh;
  width: 100vw;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  z-index: 998;
<<<<<<< HEAD
`;
=======
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const PopUp = styled.div`
  width: 300px;
  height: 500px;
  background: green;
  z-index: 999;
<<<<<<< HEAD
`;

export default function Modal({ handleClickOff }) {
  return (
    <Container onClick={handleClickOff}>
      <PopUp>this is a modal</PopUp>
    </Container>
  );
=======
`

export default function Modal({handleClickOff}) {
  return (
    <Container onClick={handleClickOff}>
      <PopUp>
        this is a modal
      </PopUp>
    </Container>

  )
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
}
