import { format } from "date-fns";
import { getTimestampInstance } from "../format";
import Message from "../../components/SharedComponents/components/ChatWindow/MessagesContainer/Message";

const getRenderMessages = (convo, currentUser) => {
  let prevMessageUserID = null;

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
