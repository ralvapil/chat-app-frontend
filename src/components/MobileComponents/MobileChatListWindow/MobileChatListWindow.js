import React from 'react';
import { useHistory } from 'react-router-dom';
import useMessengerData from '../../SharedComponents/hooks/useMessengerData';
import styled from 'styled-components';

import { getTimestampInstance } from '../../../utils/format';
import MobileChatListItem from '../MobileChatListItem/MobileChatListItem';
import MobileChatMenuHeader from '../MobileChatMenuHeader/MobileChatMenuHeader';
import MobileChatListFooterMenu from '../MobileChatListFooterMenu/MobileChatListFooterMenu';

const List = styled.div`
  maxheight: calc(100vh - 94px - 80px);
  overflow: scroll;
  overflow-x: hidden;
`;

export default function MobileChatListWindow() {
  const history = useHistory();
  const { socket, user, dispatch, convos } = useMessengerData();

  const handleConvoClick = (cid) => {
    history.push(`/chat/${cid}`);
  };

  const handleMessageIconClick = () => {
    history.push('/chats');
  };

  const handleInboxIconClick = () => {
    history.push('/contacts');
  };

  const chatIdList = Object.keys(convos);

  const chats = chatIdList.map((cid) => {
    const currentConvo = convos[cid];
    const lastMessage = currentConvo?.messages[
      currentConvo.messages?.length - 1
    ]?.value
      ? currentConvo.messages[currentConvo.messages.length - 1]
      : '';

    const isTypingUser =
      currentConvo?.isTyping.length > 0
        ? currentConvo.isTyping[currentConvo.isTyping.length - 1]
        : '';

    const preview =
      isTypingUser?.length > 0
        ? `${
            currentConvo.users.find(
              (convoUser) => convoUser.user === isTypingUser
            ).firstName
          } is typing...`
        : lastMessage.value;

    const contact = currentConvo.isGroup
      ? null
      : currentConvo.users.find((convoUser) => user.id !== convoUser.user);
    const pictureUrl =
      currentConvo.users.length <= 2
        ? currentConvo.users.find((convoUser) => user.id !== convoUser.user)
            .picture
        : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chihuahua-dog-running-across-grass-royalty-free-image-1580743445.jpg?crop=0.446xw:1.00xh;0.254xw,0&resize=480:*';
    const convoName =
      currentConvo?.nickname?.length > 0
        ? currentConvo.nickname
        : currentConvo.users
            .filter((convoUser) => user.id !== convoUser.user)
            .map(
              (convoUser) => `${convoUser?.firstName} ${convoUser?.lastName}`
            )
            .join(', ');

    const timestamp = getTimestampInstance(lastMessage?.timestamp);

    return (
      <MobileChatListItem
        key={cid}
        preview={preview}
        name={convoName}
        timestamp={timestamp}
        handleConvoClick={() => handleConvoClick(cid)}
        unreadMsgCount={currentConvo.unreadMsgCount || 0}
        picture={pictureUrl}
        isGroup={currentConvo.isGroup}
      />
    );
  });
  return (
    <>
      <MobileChatMenuHeader myPictureUrl={user.picture} heading="Chats" />
      <List>
        {chats}
        {chats}
        {chats}
        {chats}
        {chats}
        {chats}
      </List>
      <MobileChatListFooterMenu />
    </>
  );
}
