import React from 'react'
import { useHistory } from 'react-router-dom'
import MobileChatMenuHeader from "../MobileChatMenuHeader/MobileChatMenuHeader"

export default function MobileChatRequestList() {
  const history = useHistory();

  const handleMessageIconClick = () => {
    history.push('/chat')
  }

  const handleInboxIconClick = () => {
    history.push('/request')
  }

  return (
    <MobileChatMenuHeader 
      selected='inbox' 
      handleMessageIconClick={handleMessageIconClick} 
      handleInboxIconClick={handleInboxIconClick}
   /> 
  )
}
