import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LeftOutlined, PhoneOutlined } from '@ant-design/icons';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  background: #fff;
  border-bottom: 1px solid rgba(155, 155, 155, 0.1);
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* box-shadow: 0 1px 1px rgba(0,0,0,0.01), 
              0 2px 2px rgba(0,0,0,0.01), 
              0 4px 4px rgba(0,0,0,0.01), 
              0 6px 8px rgba(0,0,0,0.01),
              0 8px 16px rgba(0,0,0,0.01); */
`;

const StyledNameText = styled.h1`
  font-size: 20px;
  font-weight: 400;
  color: #2D3F65;
  /* font-family: Roboto; */
`

const StyledHeaderButtonWrapper = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function MobileChatHeader( { cid, onPhoneClick, name } ) {
  return (
    <StyledWrapper>
      <Link to='/chats'>
        <StyledHeaderButtonWrapper>
          <LeftOutlined style={{color: '#FB6D62', fontSize: '20px'}}/>
        </StyledHeaderButtonWrapper>
      </Link>
      <StyledNameText>
        {name}
      </StyledNameText>
      <StyledHeaderButtonWrapper onClick={onPhoneClick}>
        <PhoneOutlined style={{color: '#FB6D62', fontSize: '20px'}}/>
      </StyledHeaderButtonWrapper>
    </StyledWrapper>
  )
}
