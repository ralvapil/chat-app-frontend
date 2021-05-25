import { getTimestampInstance } from '../../utils/format';
import ChatListItem from '../../components/SharedComponents/components/ChatList/ListItem/ListItem';

const getLastConvoMessage = (currentConvo) => {
  if (currentConvo?.messages[currentConvo.messages?.length - 1]?.value) {
    return currentConvo.messages[currentConvo.messages.length - 1];
  }

  return '';
};

export const getConvoNickname = (currentConvo, user) => {
  return currentConvo?.nickname?.length > 0
    ? currentConvo.nickname
    : currentConvo.users
        .filter((convoUser) => user.id !== convoUser.user)
        .map((convoUser) => `${convoUser?.firstName} ${convoUser?.lastName}`)
        .join(', ');
};

const getChatListComponentItems = (chats, user, handleConvoClick) => {
  const chatIdList = Object.keys(chats);

  return chatIdList.map((cid) => {
    const currentConvo = chats[cid];

    const lastMessage = getLastConvoMessage(currentConvo);
    const timestamp = getTimestampInstance(lastMessage?.timestamp);
    const convoName = getConvoNickname(currentConvo, user);
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
    const pictureUrl =
      currentConvo.users.length <= 2
        ? currentConvo.users.find((convoUser) => user.id !== convoUser.user)
            .picture
        : 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chihuahua-dog-running-across-grass-royalty-free-image-1580743445.jpg?crop=0.446xw:1.00xh;0.254xw,0&resize=480:*';

    return (
      <ChatListItem
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
};

export default getChatListComponentItems;
