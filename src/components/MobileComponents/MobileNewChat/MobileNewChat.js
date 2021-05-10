import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useCombobox, useMultipleSelection } from 'downshift'
import { useSelector, useDispatch } from 'react-redux'
import { getContacts, selectContacts, selectLastUpdated } from '../../../features/contact/contactSlice'
import { selectUser } from '../../../features/auth/authSlice'
import { useSocket } from '../../Contexts/socketContext'; 
import { useHistory } from 'react-router-dom'
import { ArrowLeft } from 'react-feather'

const StyledBack = styled(ArrowLeft)`
  color: #55596a;
`

const StyledHeader = styled.h1`
  font-size: 24px;
  color: #23293f;
  font-weight: 400;
  margin-bottom: 16px;
  text-align: center;
`

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
`

const StyledCreateButton = styled.button`
  background-color: #341eff;
  color: #fafafa;
  width: 100px;
  height: 44px;
  border: none;
  border-radius: 40px;
  font-size: 15px;
  margin-top: 18px;

  &:disabled {
    background-color: rgba(79, 59, 255, 1);
    color: rgba(255, 255, 255, 0.8)
  }
`

const StyledProPic = styled.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  border: 1px solid white;
`

const StyledName = styled.p`
  margin: 0;
  display: inline-block;
  padding-left: 18px;
  font-size: 16px;
  color: #55596a;
  // color: rgb(0,106,255);
`

const StyledSelectedItem = styled.span`
  padding: 8px;
  border-radius: 18px;
  background-color: #f1f7ff;
  color: rgb(0,106,255);
`

const SelectedName = styled.p`
  margin: 0;
  display: inline-block;
  padding-left: 4px;
`

const SelectedProPic = styled.img`
  border-radius: 50%;
  height: 20px;
  width: 20px;
`

const StyledSelectItemRemoveIcon = styled.span`
  padding-left: 6px;
`

const ContactList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ContactListItem = styled.li`
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 24px;
  padding-right: 24px;
  border-bottom: 2px solid #f8f8f8;
  background: #FCFCFC;
  display: flex;
  align-items: center;

  background: white;
`

const TopContainer = styled.div`
  width: 100%;
  height: 240px;
  border-bottom: 1px solid #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SubContainer = styled.div`
  height: 90%;
  width: 94%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 16px;
  border: 1px solid #f9f9f9;
  box-shadow: -2px -2px 5px 0px rgba(200, 200, 200, 0.2);
  box-shadow: 2px 2px 5px 0px rgba(200, 200, 200, 0.2);
`

const BottomContainer = styled.div`
  width: 100%;
  height: calc(100vh - 240px);
  overflow: scroll;
`

const InputAndSelections = styled.div`
  border: 1px solid #f4f4f4;
  border-radius: 30px;
  background: #FCFCFC;
  height: 50px;
  padding-left: 10px;
  width: 94%;
`

const StyledInput = styled.input`
  padding-top: 14px;
  padding-left: 5px;
  padding-right: 30px;
  border: 0px;
  outline: 0;
  color: #b4b7c1;
  background-color: #FCFCFC;
`

const StyledLabel = styled.label`
  font-size: 12px;
  color: #b4b7c1
`

const items = [
  'apple',
  'pear',
  'orange',
  'grape',
  'banana',
]

export default function MobileNewChat() {
  const [inputValue, setInputValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const contacts = useSelector(selectContacts);
  const history = useHistory();

  const dispatch = useDispatch();
  const { socket } = useSocket();

  const user = useSelector(selectUser);
  const lastUpdated = useSelector(selectLastUpdated);

  useEffect(() => {
    if(socket && !lastUpdated) {
      dispatch(
        getContacts({
          type: 'socket',
          eventType: 'getContacts',
          data: { 
            user: user.id
          },
          socket,
        })
      )
    }
  },[user, socket, dispatch, lastUpdated])

  const contactIds = Object.keys(contacts);

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection()

  const getFilteredItems = contactIds =>
  contactIds.filter(
    contactId =>
      selectedItems.indexOf(contactId) < 0 &&
      (
      contacts[contactId]?.firstName.toLowerCase().startsWith(inputValue.toLowerCase()) ||
      contacts[contactId]?.lastName.toLowerCase().startsWith(inputValue.toLowerCase())
      ),
  )

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
    onStateChange: ({inputValue, type, selectedItem}) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(inputValue)

          break
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            setInputValue('')
            addSelectedItem(selectedItem)
            selectItem(null)
          }

          break
        default:
          break
      }
    },
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(selectedItems.length > 0) {
      const chatId = await socket.emitSocket('createChat', {user: user.id, members: selectedItems})

      history.push(`/chat/${chatId}`)
    }
  }

  console.log('selected items', selectedItems)

  return (
    <form onSubmit={handleSubmit}>
      <TopContainer>
        <SubContainer>
          <StyledBackButton type="button" onClick={() => history.goBack()}>
            <StyledBack/>
          </StyledBackButton>
          <StyledHeader >New Chat</StyledHeader>
          <StyledLabel {...getLabelProps()}>Add members to your new chat</StyledLabel>
            <InputAndSelections {...getComboboxProps()} onFocus={() => setIsFocused(true)}>
              {selectedItems.map((selectedItem, index) => (
                <StyledSelectedItem
                  key={`selected-item-${index}`}
                  {...getSelectedItemProps({selectedItem, index})}
                >
                  <SelectedProPic src={contacts[selectedItem]?.picture}/>
                  <SelectedName>
                    {`${contacts[selectedItem]?.firstName} ${contacts[selectedItem]?.lastName}`}
                  </SelectedName>
                  <StyledSelectItemRemoveIcon
                    onClick={() => removeSelectedItem(selectedItem)}
                  >
                    &#10005;
                  </StyledSelectItemRemoveIcon>
                </StyledSelectedItem>
              ))}
              <StyledInput 
                {...getInputProps(getDropdownProps({preventKeyAction: isOpen}))}
              />
            </InputAndSelections>
          <StyledCreateButton disabled={selectedItems?.length < 1} type="submit">Create</StyledCreateButton>
        </SubContainer>
      </TopContainer>
      <BottomContainer>
        <ContactList {...getMenuProps()}>
          {
            getFilteredItems(contactIds).map((contactId, index) => {
              const test = 50;
              let arr = [];

              for(let i = 0; i  < test; i++) {
                arr[i] = (
                  <ContactListItem
                    style={
                      highlightedIndex === index ? {backgroundColor: '#bde4ff'} : {}
                    }
                    key={`${contacts[contactId]}${index}`}
                    {...getItemProps({contactId, index})}
                  >
                    <StyledProPic src={contacts[contactId]?.picture} />
                    <StyledName>
                      {`${contacts[contactId]?.firstName} ${contacts[contactId]?.lastName}`}
                    </StyledName>
                  </ContactListItem>
                )
              }
              return arr
            })}
        </ContactList>
      </BottomContainer>
    </form>
  )
}
