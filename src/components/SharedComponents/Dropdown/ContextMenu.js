import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Item = styled.li`
  padding: 12px 30px 12px 30px;
  text-align: center;
  border-top: 1px solid #F0F0F0;
  border-bottom: 1px solid #F0F0F0;
  background: white;

  &:first-child {
    border: 0px;
  }

  &:last-child {
    border: 0px;
  }

  &:hover {
    background: #F8F8F8;
    cursor: pointer;
  }
`

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
  z-index: 15;
  position: absolute;
  left: -233px;
  top: 32px;
`

export default function ContextMenu() {
  const history = useHistory();

  return(
    <List>
      <Item onClick={() => history.push('/contact/add')}>Add Contact</Item>
      <Item>test2</Item>
      <Item>test3</Item>
    </List>
  )
}