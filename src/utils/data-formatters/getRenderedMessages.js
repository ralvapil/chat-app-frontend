<<<<<<< HEAD
import { format } from "date-fns";
import { getTimestampInstance } from "../format";
import Message from "../../components/SharedComponents/components/ChatWindow/MessagesContainer/Message";
=======
import { format } from 'date-fns'
import { getTimestampInstance } from '../format'
import Message from '../../components/SharedComponents/components/ChatWindow/MessagesContainer/Message'
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

const getRenderMessages = (convo, currentUser) => {
  let prevMessageUserID = null;

<<<<<<< HEAD
  return convo?.messages
    ? convo.messages.map((message, idx) => {
        const pictureUrl =
          currentUser.id !== message.user
            ? convo.users.find((user) => user.user === message.user)?.picture
            : currentUser.picture;

        const timestampInstance = getTimestampInstance(message.timestamp);

        const messageJsx = (
          <Message
            key={idx}
            name={message.senderName}
            timestamp={
              timestampInstance ? format(timestampInstance, "H:mm") : ""
            }
            isNotCurrentUser={message.user !== currentUser.id}
            userIsDifferentThanPrevious={message.user !== prevMessageUserID}
            isLastMessage={idx === convo.messages.length - 1}
            pictureUrl={pictureUrl}
          >
            {message.value}
          </Message>
        );

        if (prevMessageUserID !== message.user) {
          prevMessageUserID = message.user;
        }

        return messageJsx;
      })
    : "";
};

export default getRenderMessages;
=======
  return convo?.messages ? convo.messages.map((message, idx) => {
    const pictureUrl = 
      currentUser.id !== message.user ? 
      convo.users.find((user) => user.user === message.user)?.picture : 
      currentUser.picture;

    const timestampInstance = getTimestampInstance(message.timestamp);

    const messageJsx = <Message 
      key={idx} 
      name={message.senderName}
      timestamp={timestampInstance ? format(timestampInstance, 'H:mm') : ''}
      isNotCurrentUser={message.user !== currentUser.id}
      userIsDifferentThanPrevious = {message.user !== prevMessageUserID}
      isLastMessage={idx === convo.messages.length - 1}
      pictureUrl={pictureUrl}
    >
      {message.value}
    </Message>

    if(prevMessageUserID !== message.user) {
      prevMessageUserID = message.user;
    }

    return messageJsx;
  }) : '';
}

export default getRenderMessages;
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
