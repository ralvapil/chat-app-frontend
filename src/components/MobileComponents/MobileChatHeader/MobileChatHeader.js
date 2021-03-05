import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LeftOutlined, PhoneOutlined } from '@ant-design/icons';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  background: #fff;
  border-bottom: 1px solid rgba(155, 155, 155, 0.3);
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 1px rgba(0,0,0,0.01), 
              0 2px 2px rgba(0,0,0,0.01), 
              0 4px 4px rgba(0,0,0,0.01), 
              0 6px 8px rgba(0,0,0,0.01),
              0 8px 16px rgba(0,0,0,0.01);
`;

const StyledHeaderButtonWrapper = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function MobileChatHeader( {cid} ) {
  return (
    <StyledWrapper>
      <Link to='/chat'>
        <StyledHeaderButtonWrapper>
          <LeftOutlined style={{color: '#1890ff', fontSize: '20px'}}/>
        </StyledHeaderButtonWrapper>
      </Link>
      <div>
        Persons Name {cid}
      </div>
      <StyledHeaderButtonWrapper>
        <PhoneOutlined style={{color: '#1890ff', fontSize: '20px'}}/>
      </StyledHeaderButtonWrapper>
    </StyledWrapper>
  )
}
