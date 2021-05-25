import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Item = styled.li`
  padding: 12px 30px 12px 30px;
  text-align: center;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  background: white;

  &:first-child {
    border: 0px;
  }

  &:last-child {
    border: 0px;
  }

  &:hover {
    background: #f8f8f8;
    cursor: pointer;
  }
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
    0 1px 3px 0 rgb(0 0 0 / 12%);
  z-index: 15;
  position: fixed;
  bottom: calc(96px + calc(68px / 2) + 2px);
  right: calc((100vw / 2) - calc(250px / 2));
`;

export default function ContextMenu() {
  const history = useHistory();

  return (
    <List>
      <Item onClick={() => history.push("/contact/add")}>Add Contact</Item>
      <Item onClick={() => history.push("/new-chat")}>New Chat</Item>
    </List>
  );
}
