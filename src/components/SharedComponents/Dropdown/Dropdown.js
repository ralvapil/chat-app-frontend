import { useHistory } from 'react-router-dom'

import { PlusCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components'
import ContextMenu from './ContextMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { Edit2, UserPlus } from 'react-feather'

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

const StyledPencilIcon = styled(Edit2)`
  color: white;
`

const StyledPlusCircleOutlined = styled(PlusCircleOutlined)`
  color: rgba(221, 221, 221, 0.6);
  font-size: 34px;
  cursor: pointer;
`

export default function Dropdown() {
  const history = useHistory();

  return (
    <>
      <StyledAddButton onClick={() => history.push('/new-chat')}>
        <StyledPencilIcon size="30"/>
      </StyledAddButton>
    </>
  )
}
