import { io } from "socket.io-client"; 

export class Socket {
  constructor(dispatch, messageReceivedFn, userId, messageHistoryReceivedFn, convosFn) {
    this.socket = io("http://localhost:5000", { query: `userId=${userId}` });
    this.dispatch = dispatch;
    this.socket.on('connect', () => {
      console.log('connected')
    })
    this.userId = userId;

    this.messageReceived(messageReceivedFn)
    this.messageHistoryReceived(messageHistoryReceivedFn)
    this.convosFn(convosFn)
  }

  getSocket() {
    return this.socket;
  }

  closeSocket() {
    this.socket.disconnect();
  }

  emitSocket(event, data) {
    this.socket.emit(event, data);
  }

  messageReceived(messageReceivedFn) {
    this.socket.on('message', (data) => {
      console.log('received', data)
      return this.dispatch(messageReceivedFn({
        'type': 'message',
        data,
        // 'socket': socket,
      }))
    });
  }

  messageHistoryReceived(messageHistoryReceivedFn) {
    this.socket.on('messageHistory', (data) => {
      console.log('message history received', data);
      return this.dispatch(messageHistoryReceivedFn({'type': 'message', data}))
    })
  }

  convosFn(convosFn) {
    this.socket.on('convos', (data) => {
      console.log('convos', data);

      return this.dispatch(convosFn({type: 'message', data}))
    })
  }
}