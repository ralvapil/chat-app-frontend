import React from 'react';
import chattingSrc from '../../../../assets/img/chatting.png';
import styled from 'styled-components';
import GoogleButton from 'react-google-button'

const ChattingImg = styled.img`
  width: 300px;
  height: 300px;
`

export default function Login() {
  return (
    <div>
      <ChattingImg src={chattingSrc}/>
      <GoogleButton
        onClick={() => { window.location = 'http://localhost:5000/auth/google' }}
      />
    </div>
  )
}
