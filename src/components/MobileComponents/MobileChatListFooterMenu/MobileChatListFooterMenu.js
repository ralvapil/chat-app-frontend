import React from 'react'
import styled from 'styled-components'
import Dropdown from '../../SharedComponents/Dropdown/Dropdown'

const Container = styled.div`
  height: 96px;
  width: 100%;
  background: #fcfcfc;
  position: fixed;
  bottom: 0;
`

const InnerContainer = styled.div`
  height: 96px;
  width: 100%;
  background: white;
  border-radius: 24px 24px 0px 0px;
  border: 1px solid #f9f9f9;
  box-shadow: 0px -2px 5px 0px rgba(200, 200, 200, 0.2);
  position: relative;
`

const InteractionButton = styled.button`
  background: rgb(0,106,255);
  border-radius: 50%;
  width: 68px;
  height: 68px;
  border: none;
  position: absolute;
  top: -40%;
  right: 42%;
`

export default function MobileChatListFooterMenu() {
  return (
    <Container>
      <InnerContainer>
        <Dropdown />
      </InnerContainer>
    </Container>
  )
}
