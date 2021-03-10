import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import MobileChatListItem from "../MobileChatListItem/MobileChatListItem"
import MobileChatMenuHeader from "../MobileChatMenuHeader/MobileChatMenuHeader"

export default function MobileChatListWindow() {
  const history = useHistory();

  const data = [
    { 
      preview: 'This is preview text',
      name: 'Roderick Amfee',
      timestamp: '12:46',
    },
    { 
      preview: 'This is preview text',
      name: 'Roderick Amfee',
      timestamp: '12:46',
    },
    { 
      preview: 'This is preview text',
      name: 'Roderick Amfee',
      timestamp: '12:46',
    },
    { 
      preview: 'This is preview text',
      name: 'Roderick Amfee',
      timestamp: '12:46',
    },
    { 
      preview: 'This is preview text',
      name: 'Roderick Amfee',
      timestamp: '12:46',
    },
    {       
      preview: 'This is preview text',
      name: 'Roderick Amfee',
      timestamp: '12:46',
    },
    { 
      preview: 'This is preview text',
      name: 'Roderick Amfee',
      timestamp: '12:46',
    },
    { 
      preview: 'This is preview text',
      name: 'Roderick Amfee',
      timestamp: '12:46',
    },
    { 
      preview: 'This is preview text',
      name: 'Roderick Amfee',
      timestamp: '12:46',
    },
    { 
      preview: 'This is preview text',
      name: 'Roderick Amfee',
      timestamp: '12:46',
    },
    { 
      preview: 'This is preview text',
      name: 'Roderick Amfee',
      timestamp: '12:46',
    },
    { 
      preview: 'This is preview text',
      name: 'Roderick Amfee',
      timestamp: '12:46',
    },
  ];

  const handleConvoClick = () => {
    history.push('/chat/60457f13aa458bd0890f2640')
  }

  const handleMessageIconClick = () => {
    history.push('/chats')
  }

  const handleInboxIconClick = () => {
    history.push('/requests')
  }

  const convos = data.map((val) => {
    return <MobileChatListItem 
      preview={val.preview} 
      name={val.name}
      timestamp={val.timestamp}
      handleConvoClick={handleConvoClick}
    />
  })

  return (
    <>
     <MobileChatMenuHeader 
      selected='chats' 
      handleMessageIconClick={handleMessageIconClick} 
      handleInboxIconClick={handleInboxIconClick}
     /> 
      <div>
        {convos}
      </div>
    </>
  )
}
