import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useCombobox, useMultipleSelection } from 'downshift';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';

import {
  getContacts,
  selectContacts,
  selectLastUpdated,
} from '../../../features/contact/contactSlice';
import { selectUser } from '../../../features/auth/authSlice';
import { useSocket } from '../../Contexts/socketContext';

// Import img from '../../../assets/img/onlineMessaging.svg'
// import img from '../../../assets/img/socialNetworking.svg'
import img from '../../../assets/img/messagingApp.svg';
import img2 from '../../../assets/img/workChat.svg';

const StyledBack = styled(ArrowLeft)`
  color: #55596a;
`;

const StyledHeader = styled.h1`
  font-size: 24px;
  color: #23293f;
  font-weight: 400;
  margin-bottom: 16px;
  text-align: center;
  position: absolute;
  top: 30px;
`;

const StyledBackButton = styled.button`
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  position: fixed;
  left: 18px;
  top: 29px;
`;

const StyledCreateButton = styled.button`
  background-color: dodgerblue;
  color: #fafafa;
  width: 80%;
  height: 54px;
  border: none;
  border-radius: 40px;
  font-size: 17px;
  margin-top: 18px;
  margin-bottom: 10px;

  &:disabled {
    background-color: #81c1ff;
    // color: rgba(255, 255, 255, 0.8)
  }
`;

const StyledProPic = styled.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  border: 1px solid white;
`;

const StyledName = styled.p`
  margin: 0;
  display: inline-block;
  padding-left: 18px;
  font-size: 16px;
  color: #55596a;
  // color: rgb(0,106,255);
`;

const StyledSelectedItem = styled.span`
  padding: 8px;
  border-radius: 18px;
  background-color: #f1f7ff;
  color: rgb(0, 106, 255);
  margin-top: 10px;
`;

const SelectedName = styled.p`
  margin: 0;
  display: inline-block;
  padding-left: 4px;
`;

const SelectedProPic = styled.img`
  border-radius: 50%;
  height: 20px;
  width: 20px;
`;

const StyledSelectItemRemoveIcon = styled.span`
  padding-left: 6px;
`;

const ContactList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ContactListItem = styled.li`
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 24px;
  padding-right: 24px;
  border-bottom: 2px solid #f8f8f8;
  background: #fff
  display: flex;
  align-items: center;

  background: white;
`;

const TopContainer = styled.div`
  width: 100%;
  min-height: 240px;
  border-bottom: 1px solid #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const SubContainer = styled.div`
  height: 90%;
  width: 94%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 82px;
`;

const BottomContainer = styled.div`
  width: 100%;
  height: calc(100vh - 240px);
  overflow: scroll;
  z-index: 5;
  background: #fff;
  position: relative;
`;

const InputAndSelections = styled.div`
  padding: ${(props) =>
    props.numOfItems < 2 ? '0px 10px 10px 10px' : '10px 10px 10px 10px'};
  border: 1px solid #f4f4f4;
  border-radius: 30px;
  background: white;
  min-height: 60px;
  width: 94%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledInput = styled.input`
  margin-top: 5px;
  padding-top: 9px;
  padding-left: 14px;
  padding-right: 30px;
  border: 0px;
  outline: 0;
  color: #23293f;
  background: white;
  flex-grow: 2;
`;

const StyledLabel = styled.label`
  font-size: 12px;
  color: #23293f;
  font-weight: 500;
`;

const StyledImage = styled.img`
  padding-top: 50px;
  position: fixed;
  z-index: -3;
  right: 30px;
  top: 0px;
  // top: -200px;
  // right: -200px;
  width: 74px;
`;

const StyledBottomImage = styled.img`
  position: absolute;
  top: 50px;
  left: calc(calc(100vw - 180px) / 2);
  width: 180px;
  z-index: -2;
`;

export default function MobileNewChat() {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const contacts = useSelector(selectContacts);
  const history = useHistory();

  const dispatch = useDispatch();
  const { socket } = useSocket();

  const user = useSelector(selectUser);
  const lastUpdated = useSelector(selectLastUpdated);

  useEffect(() => {
    if (socket && !lastUpdated) {
      dispatch(
        getContacts({
          type: 'socket',
          eventType: 'getContacts',
          data: {
            user: user.id,
          },
          socket,
        })
      );
    }
  }, [user, socket, dispatch, lastUpdated]);

  const contactIds = Object.keys(contacts);

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection();

  const getFilteredItems = (contactIds) =>
    contactIds.filter(
      (contactId) =>
        selectedItems.indexOf(contactId) < 0 &&
        (contacts[contactId]?.firstName
          .toLowerCase()
          .startsWith(inputValue.toLowerCase()) ||
          contacts[contactId]?.lastName
            .toLowerCase()
            .startsWith(inputValue.toLowerCase()))
    );

  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectItem,
  } = useCombobox({
    inputValue,
    items: getFilteredItems(contactIds),
    onStateChange: ({ inputValue, type, selectedItem }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(inputValue);

          break;
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            setInputValue('');
            addSelectedItem(selectedItem);
            selectItem(null);
          }

          break;
        default:
          break;
      }
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedItems.length > 0) {
      const chatId = await socket.emitSocket('createChat', {
        user: user.id,
        members: selectedItems,
      });

      history.push(`/chat/${chatId}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TopContainer>
        <StyledHeader>Make a chat</StyledHeader>
        <SubContainer>
          <StyledBackButton type="button" onClick={() => history.goBack()}>
            <StyledBack />
          </StyledBackButton>
          <StyledImage src={img} alt="addFriendImage" />
          <StyledLabel {...getLabelProps()}>
            Add members to your new chat
          </StyledLabel>
          <InputAndSelections
            {...getComboboxProps()}
            onFocus={() => setIsFocused(true)}
            numOfItems={selectedItems.length}
          >
            {selectedItems.map((selectedItem, index) => (
              // <StyledSelectedItemWrapper>
              <StyledSelectedItem
                key={`selected-item-${index}`}
                {...getSelectedItemProps({ selectedItem, index })}
              >
                <SelectedProPic src={contacts[selectedItem]?.picture} />
                <SelectedName>
                  {`${contacts[selectedItem]?.firstName} ${contacts[selectedItem]?.lastName}`}
                </SelectedName>
                <StyledSelectItemRemoveIcon
                  onClick={() => removeSelectedItem(selectedItem)}
                >
                  &#10005;
                </StyledSelectItemRemoveIcon>
              </StyledSelectedItem>
              // </StyledSelectedItemWrapper>
            ))}
            <StyledInput
              {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
              placeholder="Search"
            />
          </InputAndSelections>
          <StyledCreateButton
            disabled={selectedItems?.length < 1}
            type="submit"
          >
            Create
          </StyledCreateButton>
        </SubContainer>
      </TopContainer>
      <BottomContainer>
        <StyledBottomImage src={img2} />
        <ContactList {...getMenuProps()}>
          {getFilteredItems(contactIds).map((contactId, index) => {
            const test = 50;
            const arr = [];

            for (let i = 0; i < test; i++) {
              arr[i] = (
                <ContactListItem
                  style={
                    highlightedIndex === index
                      ? { backgroundColor: '#bde4ff' }
                      : {}
                  }
                  key={`${contacts[contactId]}${index}`}
                  {...getItemProps({ contactId, index })}
                >
                  <StyledProPic src={contacts[contactId]?.picture} />
                  <StyledName>
                    {`${contacts[contactId]?.firstName} ${contacts[contactId]?.lastName}`}
                  </StyledName>
                </ContactListItem>
              );
            }

            return arr;
          })}
        </ContactList>
      </BottomContainer>
    </form>
  );
}
