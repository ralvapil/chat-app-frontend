import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  padding-left: 10px;
  background: #fff;
  border-bottom: 1px solid #d3d3d3;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

export default function MobileChatHeader( {cid} ) {

  return (
    <StyledWrapper>
      <Link to='/chat'>
        <button type="button">
          back
        </button>
      </Link>
      <div>
        Persons Name {cid}
      </div>
      <div>
        <button type="button">
          Calls
        </button>
      </div>
    </StyledWrapper>
  )
}
