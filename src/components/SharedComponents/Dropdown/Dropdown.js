import { useHistory, useLocation } from 'react-router-dom'

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
  bottom: calc(100% - calc(68px / 2)); // height of footer minus half of self height
  right: calc((100vw/ 2) - calc(68px / 2)); // width of screen minus half of self width;
`

const StyledPencilIcon = styled(Edit2)`
  color: white;
`

const StyledUserAdd = styled(UserPlus)`
  color: white;
`

const StyledPlusCircleOutlined = styled(PlusCircleOutlined)`
  color: rgba(221, 221, 221, 0.6);
  font-size: 34px;
  cursor: pointer;
`

export default function Dropdown() {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <>
      {
        pathname === '/chats' ? 
          <StyledAddButton onClick={() => history.push('/new-chat')}>
            <StyledPencilIcon size="30"/>
          </StyledAddButton> : 
          <StyledAddButton onClick={() => history.push('/contact-add')}>
            <StyledUserAdd size="30"/>
          </StyledAddButton>
      }
    </>
  )
}
