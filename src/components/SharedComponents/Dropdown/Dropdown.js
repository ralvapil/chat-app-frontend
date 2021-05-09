import { useState } from 'react'
import { PlusCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components'
import ContextMenu from './ContextMenu'

const StyledAddButton = styled.button`
  background: rgb(0,106,255);
  border-radius: 50%;
  width: 68px;
  height: 68px;
  border: none;
  position: absolute;
  bottom: calc(96px - calc(68px / 2)); // height of footer minus half of self height
  right: calc((100vw/ 2) - calc(68px / 2)); // width of screen minus half of self width;
`

const StyledPlusCircleOutlined = styled(PlusCircleOutlined)`
  color: rgba(221, 221, 221, 0.6);
  font-size: 34px;
  cursor: pointer;
`

export default function Dropdown() {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <>
      <StyledAddButton onClick={() => setIsOpen(!isOpen)} />
      {
        isOpen ? <ContextMenu /> : ''
      }
    </>
  )
}
