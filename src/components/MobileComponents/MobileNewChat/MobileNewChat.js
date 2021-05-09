import React, {useState, useEffect} from 'react'
import { useCombobox, useMultipleSelection } from 'downshift'
import { useSelector, useDispatch } from 'react-redux'
import { getContacts, selectContacts, selectLastUpdated } from '../../../features/contact/contactSlice'
import { selectUser } from '../../../features/auth/authSlice'
import { useSocket } from '../../Contexts/socketContext'; 
import { useHistory } from 'react-router-dom'

const items = [
  'apple',
  'pear',
  'orange',
  'grape',
  'banana',
]

const menuMultipleStyles = {
  maxHeight: '180px',
  overflowY: 'auto',
  width: '135px',
  margin: 0,
  borderTop: 0,
  background: 'white',
  position: 'absolute',
  zIndex: 1000,
  listStyle: 'none',
  padding: 0,
  left: '340px',
}

const comboboxStyles = {display: 'inline-block', marginLeft: '5px'}

const selectedItemIconStyles = {cursor: 'pointer'}

const comboboxWrapperStyles = {
  display: 'inline-flex',
  flexWrap: 'wrap',
}

const selectedItemStyles = {
  marginLeft: '5px',
  backgroundColor: 'aliceblue',
  borderRadius: '10px',
}

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
            user
          },
          socket,
        })
      )
    }
  },[user, socket, dispatch, lastUpdated])

  const contactIds = Object.keys(contacts);

  const currentComboStyle = {
    ...comboboxStyles,
    border: isFocused ? '1px solid red' : '0px'
  }

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
      const chatId = await socket.emitSocket('createChat', {user, members: selectedItems})

      history.push(`/chat/${chatId}`)
    }
  }

  console.log('selected items', selectedItems)

  return (
    <form onSubmit={handleSubmit}>
      test
      <div>
        <label {...getLabelProps()}>Contacts:</label>
        <div style={comboboxWrapperStyles}>
          <div style={currentComboStyle} {...getComboboxProps()} onFocus={() => setIsFocused(true)}>
            {selectedItems.map((selectedItem, index) => (
              <span
                style={selectedItemStyles}
                key={`selected-item-${index}`}
                {...getSelectedItemProps({selectedItem, index})}
              >
                {`${contacts[selectedItem]?.firstName} ${contacts[selectedItem]?.lastName}`}
                <span
                  style={selectedItemIconStyles}
                  onClick={() => removeSelectedItem(selectedItem)}
                >
                  &#10005;
                </span>
              </span>
            ))}
            <input 
              {...getInputProps(getDropdownProps({preventKeyAction: isOpen}))}
              style={{
                border: '0px',
                outline: 0,
              }}
            />
            {/* <button {...getToggleButtonProps()} aria-label={'toggle menu'}>
              &#8595;
            </button> */}
          </div>
        </div>
      </div>
      <div>
        <ul {...getMenuProps()} style={menuMultipleStyles}>
          {
            getFilteredItems(contactIds).map((contactId, index) => (
              <li
                style={
                  highlightedIndex === index ? {backgroundColor: '#bde4ff'} : {}
                }
                key={`${contacts[contactId]}${index}`}
                {...getItemProps({contactId, index})}
              >
                {`${contacts[contactId]?.firstName} ${contacts[contactId]?.lastName}`}
              </li>
            ))}
        </ul>
      </div>
      <button disabled={selectedItems?.length < 1} type="submit">Create</button>
    </form>
  )
}
