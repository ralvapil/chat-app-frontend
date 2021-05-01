import { useState } from 'react'
import { PlusCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components'
import ContextMenu from './ContextMenu'

const StyledAddButtonSubContainer = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: space-around;
  // height: 100%;
  height: 40px;
  width: 40px;
  border-radius: 50%;
`

const StyledPlusCircleOutlined = styled(PlusCircleOutlined)`
  color: rgba(221, 221, 221, 0.6);
  font-size: 34px;
  cursor: pointer;
`

export default function Dropdown() {
  const [ isOpen, setIsOpen ] = useState(true);

  return (
    <div>
      <StyledAddButtonSubContainer onClick={() => setIsOpen(!isOpen)}>
        <StyledPlusCircleOutlined />
      </StyledAddButtonSubContainer>
      {
        isOpen ? <ContextMenu /> : ''
      }
    </div>
  )
}
