import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'

import { sendMessage, messageReceived, getMessages } from '../../../features/message/messageSlice'
import { Socket } from '../../../Socket';

let socket;

export default function DesktopChatWindow() {
  const { cid } = useParams();
  // const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messages = useSelector(getMessages);
  const dispatch = useDispatch();

  useEffect(() => {
    // socket = new Socket(dispatch, messageReceived);
    // console.log('effect is running')

    // return () => socket.closeSocket();
  }, [dispatch])

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(sendMessage({
      'type': 'socket',
      'data': input,
      'socket': socket,
    }));

    // setMessages((prevMessages) => { 
    //   return [...prevMessages, input]
    // })

    setInput('');
  }

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className="chatWindow">
      {
        messages.length > 0 ? messages.map((val) => {
          return <div>{val}</div>
        }) : ''
      }
      <br/>
      <form onSubmit={handleFormSubmit}>
        <label>Message</label>
        <input id="message" value={input} onChange={handleInputChange}/>
        <button onClick={handleFormSubmit}>Send</button>
      </form>
    </div>
  );
}
