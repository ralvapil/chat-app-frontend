<<<<<<< HEAD
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSocket } from "../../Contexts/socketContext";

import { selectUser } from "../../../features/auth/authSlice";
import {
  getMessages,
  getLastUpdatedConvos,
  getConvos,
} from "../../../features/message/messageSlice";
import {
  selectLastUpdated,
  getContacts,
  selectContacts,
} from "../../../features/contact/contactSlice";

const useMessengerData = () => {
  const user = useSelector(selectUser);
  const convos = useSelector(getMessages);
  const lastUpdateConvos = useSelector(getLastUpdatedConvos);
  const contacts = useSelector(selectContacts);
=======
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSocket } from '../../Contexts/socketContext'

import { selectUser } from '../../../features/auth/authSlice'
import { getMessages, getLastUpdatedConvos, getConvos } from '../../../features/message/messageSlice'
import { selectLastUpdated, getContacts, selectContacts } from '../../../features/contact/contactSlice'

const useMessengerData  = () => {
  const user = useSelector( selectUser )
  const convos = useSelector( getMessages )
  const lastUpdateConvos = useSelector( getLastUpdatedConvos )
  const contacts = useSelector( selectContacts);
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
  const lastupdatedContacts = useSelector(selectLastUpdated);
  const { socket } = useSocket();
  const dispatch = useDispatch();

  useEffect(() => {
<<<<<<< HEAD
    if (socket && !lastUpdateConvos) {
      dispatch(
        getConvos({
          type: "socket",
          eventType: "getConvos",
          data: {
            user: user.id,
          },
          socket: socket,
        })
      );
    }
  }, [dispatch, user, socket, lastUpdateConvos]);

  useEffect(() => {
    if (socket && !lastupdatedContacts) {
      dispatch(
        getContacts({
          type: "socket",
          eventType: "getContacts",
          data: {
            user: user.id,
          },
          socket,
        })
      );
    }
  }, [user, socket, dispatch, lastupdatedContacts]);
=======
    if(socket && !lastUpdateConvos) {
      dispatch(
        getConvos({
          'type': 'socket',
          'eventType': 'getConvos',
          'data': { 
            user: user.id
          },
          'socket': socket,
        }) 
      )
    }
  }, [dispatch, user, socket, lastUpdateConvos])

  useEffect(() => {
    if(socket && !lastupdatedContacts) {
      dispatch(
        getContacts({
          type: 'socket',
          eventType: 'getContacts',
          data: { 
            user: user.id
          },
          socket,
        })
      )
    }
  },[user, socket, dispatch, lastupdatedContacts])
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

  return {
    user,
    socket,
    dispatch,
    convos,
    contacts,
<<<<<<< HEAD
  };
};

export default useMessengerData;
=======
  }
}

export default useMessengerData;
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
