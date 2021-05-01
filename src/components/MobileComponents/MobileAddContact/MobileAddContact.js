import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { addContact, getAddContactsError, getAddContactsStatus } from '../../../features/contact/contactSlice'
import { selectUser } from '../../../features/auth/authSlice'

import { useSocket } from "../../Contexts/socketContext";

export default function MobileAddContact() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const user = useSelector( selectUser )
  const error = useSelector(getAddContactsError);
  const status = useSelector(getAddContactsStatus);

  const { socket } = useSocket();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: setup some validation
    

    dispatch(
      addContact({
        'type': 'socket',
        'eventType': 'addContact',
        'data': { 
          email,
          user
        },
        'socket': socket,
      })
    )
  }

  return(
    <form onSubmit={handleSubmit}>
      <div>Add a contact</div>
      <label>Email Address</label>
      <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      {
        error.length > 0 ? <small>{error}</small> : ''
      }
      {
        status === 'success' ? <p>Contact added.</p> : ''
      }
      <button type="submit" disabled={email.length === 0}>Add</button>
    </form>
  )
}