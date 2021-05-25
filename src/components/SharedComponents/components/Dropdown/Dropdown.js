import { useHistory, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { PlusCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components'
import ContextMenu from './ContextMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { Edit2, UserPlus } from 'react-feather'
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    minHeight: '300px',
    minWidth: '600px'
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0, 0.5)'
  },
};

const StyledAddButton = styled.button`
  background: rgb(0,106,255);
  border-radius: 50%;
  width: 68px;
  height: 68px;
  border: none;
  position: absolute;
  bottom: calc(100% - calc(68px / 2)); // height of footer minus half of self height
  right: calc((100%/ 2) - calc(68px / 2)); // width of screen minus half of self width
  cursor: pointer;
`

const StyledHeader = styled.h1`
  font-size: 24px;
  color: #23293f;
  font-weight: 400;
  margin-bottom: 16px;
  text-align: center;
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
Modal.setAppElement('#root')

export default function Dropdown() {
  const history = useHistory();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      {
        pathname === '/chats' || pathname.substring(0, 5) === '/chat' ? 
          <StyledAddButton onClick={() => history.push('/new-chat')}>
            <StyledPencilIcon size="30"/>
          </StyledAddButton> : 
          <StyledAddButton onClick={() => history.push('/contact-add')}>
            <StyledUserAdd size="30"/>
          </StyledAddButton>
          
      }
      <Modal 
        isOpen={isOpen} 
        onRequestClose={() => setIsOpen(false)}            
        style={customStyles}
        >
        <StyledHeader>Make a chat</StyledHeader>
      </Modal>
    </>
  )
}
