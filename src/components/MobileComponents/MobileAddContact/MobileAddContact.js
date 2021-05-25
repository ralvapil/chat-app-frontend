<<<<<<< HEAD
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ArrowLeft } from "react-feather";
import img from "../../../assets/img/addFriends.svg";

import {
  addContact,
  getAddContactsError,
  getAddContactsStatus,
  clearErrorStatus,
} from "../../../features/contact/contactSlice";
import { selectUser } from "../../../features/auth/authSlice";

import { useSocket } from "../../Contexts/socketContext";
import MobileChatMenuHeader from "../MobileChatMenuHeader/MobileChatMenuHeader";
=======
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
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const StyledHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
<<<<<<< HEAD
`;

const StyledBack = styled(ArrowLeft)`
  color: #55596a;
`;
=======
`

const StyledBack = styled(ArrowLeft)`
  color: #55596a;
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

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
<<<<<<< HEAD
`;
=======
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const StyledInstruction = styled.span`
  color: grey;
  width: 86%;
<<<<<<< HEAD
`;
=======
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const StyledHeader = styled.h1`
  font-size: 25px;
  position: fixed;
  top: 30px;
<<<<<<< HEAD
`;
=======
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  // height: 800px;
  // border: 1px solid red;
<<<<<<< HEAD
`;
=======
   
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const StyledSubWrapper = styled.div`
  width: 86%;
  max-height: 80%;
  // border: 1px solid blue;
  display: flex;
  align-items: center;
  // justify-content: center;
  flex-direction: column;
  padding-top: 90px;
<<<<<<< HEAD
`;
=======
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

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
<<<<<<< HEAD
`;
=======
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const StyledField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 44px;
<<<<<<< HEAD
`;

const StyledInput = styled.input`
  border: 1px solid #e8e8e8;
=======
`

const StyledInput = styled.input`
  border: 1px solid #E8E8E8;
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
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
<<<<<<< HEAD
    color: #d4d4d4;
  }
`;
=======
    color: #D4D4D4;
  }
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const StyledLabel = styled.label`
  color: grey;
  font-size: 16px;
<<<<<<< HEAD
`;
=======
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const StyledSubmitButton = styled.button`
  width: 86%;
  height: 58px;
  border-radius: 45px;
  border: 1px solid dodgerblue;
  background-color: dodgerblue;
<<<<<<< HEAD
  color: #fff;
=======
  color:#fff;
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
  // margin-top: px;
  font-size: 18px;
  position: fixed;
  bottom: 50px;

  :disabled {
    background-color: #81c1ff;
    border: 1px solid #81c1ff;
  }
<<<<<<< HEAD
`;
=======
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const ErrorMessage = styled.span`
  border-radius: 30px;
  color: #ef0252;
  background-color: #ffebf8;
  padding: 10px 16px;
  font-size: 13px;
  margin-top: 5px;
<<<<<<< HEAD
`;
=======
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const SuccessMessage = styled.span`
  border-radius: 30px;
  color: #24d96c;
  background-color: #ecfcf2;
  padding: 10px 16px;
  font-size: 13px;
  margin-top: 5px;
<<<<<<< HEAD
`;
=======
`
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const StyledImage = styled.img`
  padding-top: 50px;
  position: fixed;
  z-index: -1;
<<<<<<< HEAD
`;

export default function MobileAddContact() {
  const [email, setEmail] = useState("");
=======
`

export default function MobileAddContact() {
  const [email, setEmail] = useState('');
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
  // const [nickName, setNickName] = useState('')
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const error = useSelector(getAddContactsError);
  const status = useSelector(getAddContactsStatus);

  const { socket } = useSocket();
  const history = useHistory();

  useEffect(() => {
<<<<<<< HEAD
    if (status === "success") setEmail("");
  }, [status]);

  const handleBackClick = () => {
    dispatch(clearErrorStatus());
    history.goBack();
  };

  const handleInputChange = (e) => {
    if (error.length > 0 || status.length > 0) {
      dispatch(clearErrorStatus());
    }

    setEmail(e.target.value);
  };
=======
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
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: setup some validation
<<<<<<< HEAD

=======
    
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
    dispatch(
      addContact({
        type: "socket",
        eventType: "addContact",
        data: {
          email,
          user: user.id,
        },
        socket: socket,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <MobileChatMenuHeader 
        heading="Add Contacts"
        myPictureUrl={user.picture}
      />  */}
      <StyledWrapper>
        <StyledSubWrapper>
          <StyledBackButton type="button" onClick={handleBackClick}>
<<<<<<< HEAD
            <StyledBack />
          </StyledBackButton>
          <StyledHeader>Add a Friend</StyledHeader>
          <StyledInstruction>
            Enter their email address and give them a nickname if you want
          </StyledInstruction>
          <StyledField>
            {/* <StyledLabel>Email</StyledLabel> */}
            <StyledInput
              type="text"
              name="email"
              id="email"
              value={email}
              placeholder="xyz@abc.com"
              onChange={handleInputChange}
            />
            {error.length > 0 ? <ErrorMessage>{error}</ErrorMessage> : ""}
            {status === "success" ? (
              <SuccessMessage>Friend added.</SuccessMessage>
            ) : (
              ""
            )}
=======
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
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
          </StyledField>
          {/* <StyledField>
            <StyledLabel>Nickname</StyledLabel>
            <StyledInput type="text" name="nickName" id="nickName" value={nickName} onChange={(e) => setNickName(e.target.value)}/>
          </StyledField> */}
<<<<<<< HEAD
          <StyledImage src={img} alt="addFriendImage" />
=======
          <StyledImage src={img} alt='addFriendImage'/>
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
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
  );
}
