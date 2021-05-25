import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "styled-components";

import {
  getContacts,
  selectContacts,
  selectLastUpdated,
} from "../../../features/contact/contactSlice";
import { selectUser } from "../../../features/auth/authSlice";
import { createChat } from "../../../features/message/messageSlice";
import { useSocket } from "../../Contexts/socketContext";
import MobileChatMenuHeader from "../MobileChatMenuHeader/MobileChatMenuHeader";
import MobileChatListFooterMenu from "../MobileChatListFooterMenu/MobileChatListFooterMenu";

const StyleContact = style.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 13px;
  padding-bottom: 13px;
  border-bottom: 2px solid #f8f8f8;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledProPic = style.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  border: 1px solid white;
`;

const StyledName = style.span`
  font-size: 17px;
  font-weight: 500;
  padding-left: 12px;
  color: #55596a;
  
`;

export default function MobileChatRequestList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { socket } = useSocket();

  const user = useSelector(selectUser);
  const contacts = useSelector(selectContacts);
  const lastupdatedContacts = useSelector(selectLastUpdated);

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

  const handleMessageIconClick = () => {
    history.push("/chats");
  };

  const handleInboxIconClick = () => {
    history.push("/contacts");
  };

  const handleContactClick = async (contactUserId, chatId) => {
    //TODO: this needs to be made into a determined call

    // it will already know if a chat exists, so it will need to be
    // a request to create the chcat if not exists
    // then return back the chat id
    // then do the history re locate to the chat

    if (!chatId) {
      chatId = await socket.emitSocket("createChat", {
        user: user.id,
        members: [contactUserId],
      });
    }

    return history.push(`/chat/${chatId}`);

    // chat doesnt exist in store
    // send request to create it
  };

  const contactIds = Object.keys(contacts);
  const contactList = contactIds?.length
    ? contactIds.map((contactId) => {
        const test = 50;
        let arr = [];
        const contact = contacts[contactId];

        for (let i = 0; i < test; i++) {
          arr[i] = (
            <StyleContact
              key={contactId}
              onClick={() => handleContactClick(contact.user, contact?.chat_id)}
            >
              <StyledProPic src={contact.picture} />
              <StyledName>
                {`${contact.firstName} ${contact.lastName}`}
              </StyledName>
            </StyleContact>
          );
        }

        return arr;
      })
    : "";

  return (
    <>
      <MobileChatMenuHeader heading="Contacts" myPictureUrl={user.picture} />
      <div
        style={{ maxHeight: "calc(100vh - 94px - 80px)", overflow: "scroll" }}
      >
        {contactList}
      </div>
      <MobileChatListFooterMenu section="contacts" />
    </>
  );
}
