import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    margin-top: 60px;
    margin-bottom: 60px;
    padding-left: 10px;
    padding-right: 10px;
    height: calc(100vh - 120px);
    overflow-y: scroll;
`

export default function MobileChatBody( {messages, cid} ) {
  console.log('hasown prop', messages.hasOwnProperty(cid))
  const renderedMessages = messages.hasOwnProperty(cid) ? messages[cid].map((message, idx) => {
    console.log(message)
    return <div key={idx}>{message}</div>
  }) : '';
  
  console.log('rm', renderedMessages)
  console.log('cid', cid)
  return (
    <StyledWrapper>
      {renderedMessages}
    </StyledWrapper>
  )
}
