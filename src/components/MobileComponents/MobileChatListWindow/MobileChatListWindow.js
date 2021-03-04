import React from 'react'
import { Link } from 'react-router-dom'

export default function MobileChatListWindow() {
  return (
    <>
      <div style={{width: '100%', height: '50px'}}>
      <Link to="/chat/1">
        <button type="button">
          go to id 1
        </button>
      </Link>
        header
      </div>
    </>
  )
}
