import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { ArrowLeft } from 'react-feather'
import img from '../../../assets/img/addFriends.svg'

import { 
  addContact, 
  getAddContactsError, 
  getAddContactsStatus, 
  clearErrorStatus 
} from '../../../features/contact/contactSlice'
import { selectUser } from '../../../features/auth/authSlice'

import { useSocket } from "../../Contexts/socketContext";
import MobileChatMenuHeader from "../MobileChatMenuHeader/MobileChatMenuHeader"

const StyledHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
`

const StyledBack = styled(ArrowLeft)`
  color: #55596a;
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
  left: 20px;
  top: 32px;
`

const StyledInstruction = styled.span`
  color: grey;
  width: 86%;
`

const StyledHeader = styled.h1`
  font-size: 25px;
  position: fixed;
  top: 30px;
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  // height: 800px;
  // border: 1px solid red;
   
`

const StyledSubWrapper = styled.div`
  width: 86%;
  max-height: 80%;
  // border: 1px solid blue;
  display: flex;
  align-items: center;
  // justify-content: center;
  flex-direction: column;
  padding-top: 90px;
`

const StyledHeaderSubContainer = styled.div`
  height: 70%;
  width: 94%;
  background: white;
  border-radius: 16px;
  border: 1px solid #f9f9f9;
  box-shadow: -2px -2px 5px 0px rgba(200, 200, 200, 0.6);
  box-shadow: 2px 2px 5px 0px rgba(200, 200, 200, 0.6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-left: 18px;
  padding-right: 18px;
`

const StyledField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 44px;
`

const StyledInput = styled.input`
  border: 1px solid #E8E8E8;
  border-radius: 45px;
  height: 55px;
  width: 86%;
  padding: 2px 20px;
  color: #8a8a8a;
  margin-top: 20px;
  font-size: 16px;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: #D4D4D4;
  }
`

const StyledLabel = styled.label`
  color: grey;
  font-size: 16px;
`

const StyledSubmitButton = styled.button`
  width: 86%;
  height: 58px;
  border-radius: 45px;
  border: 1px solid dodgerblue;
  background-color: dodgerblue;
  color:#fff;
  // margin-top: px;
  font-size: 18px;
  position: fixed;
  bottom: 50px;

  :disabled {
    background-color: #81c1ff;
    border: 1px solid #81c1ff;
  }
`

const ErrorMessage = styled.span`
  border-radius: 30px;
  color: #ef0252;
  background-color: #ffebf8;
  padding: 10px 16px;
  font-size: 13px;
  margin-top: 5px;
`

const SuccessMessage = styled.span`
  border-radius: 30px;
  color: #24d96c;
  background-color: #ecfcf2;
  padding: 10px 16px;
  font-size: 13px;
  margin-top: 5px;
`

const StyledImage = styled.img`
  padding-top: 50px;
  position: fixed;
  z-index: -1;
`

export default function MobileAddContact() {
  const [email, setEmail] = useState('');
  // const [nickName, setNickName] = useState('')
  const dispatch = useDispatch();

  const user = useSelector( selectUser )
  const error = useSelector(getAddContactsError);
  const status = useSelector(getAddContactsStatus);

  const { socket } = useSocket();
  const history = useHistory();

  useEffect(() => {
    if(status === 'success') setEmail('');
  }, [status])

  const handleBackClick = () => {
    dispatch(clearErrorStatus());
    history.goBack()
  }

  const handleInputChange = (e) => {
    if(error.length > 0 || status.length > 0) {
      dispatch(clearErrorStatus());
    }

    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: setup some validation
    
    dispatch(
      addContact({
        'type': 'socket',
        'eventType': 'addContact',
        'data': { 
          email,
          user: user.id
        },
        'socket': socket,
      })
    )
  }

  return(
    <form onSubmit={handleSubmit}>
      {/* <MobileChatMenuHeader 
        heading="Add Contacts"
        myPictureUrl={user.picture}
      />  */}
      <StyledWrapper>
        <StyledSubWrapper>
          <StyledBackButton type="button" onClick={handleBackClick}>
            <StyledBack/>
          </StyledBackButton>
          <StyledHeader>Add a Friend</StyledHeader>
          <StyledInstruction>Enter their email address and give them a nickname if you want</StyledInstruction>
          <StyledField>
            {/* <StyledLabel>Email</StyledLabel> */}
            <StyledInput type="text" name="email" id="email" value={email} placeholder="xyz@abc.com" onChange={handleInputChange}/>
            {
              error.length > 0 ? <ErrorMessage>{error}</ErrorMessage> : ''
            }
            {
              status === 'success' ? <SuccessMessage>Friend added.</SuccessMessage> : ''
            }
          </StyledField>
          {/* <StyledField>
            <StyledLabel>Nickname</StyledLabel>
            <StyledInput type="text" name="nickName" id="nickName" value={nickName} onChange={(e) => setNickName(e.target.value)}/>
          </StyledField> */}
          <StyledImage src={img} alt='addFriendImage'/>
          <StyledSubmitButton disabled={email.length === 0}>
            Add
          </StyledSubmitButton>
        </StyledSubWrapper>
      </StyledWrapper>
      {/* <StyledHeaderContainer>
        <StyledHeaderSubContainer>
          
          
          <button type="submit" disabled={email.length === 0}>Add</button>
        </StyledHeaderSubContainer>
      </StyledHeaderContainer> */}
    </form>
  )
}