import { io } from "socket.io-client"; 

export class Socket {
  constructor(dispatch, messageReceivedFn, userId, messageHistoryReceivedFn) {
    this.socket = io("http://localhost:5000", { query: `userId=${userId}` });
    this.dispatch = dispatch;
    this.socket.on('connect', () => {
      console.log('connected')
    })
    this.userId = userId;

    this.messageReceived(messageReceivedFn)
    this.messageHistoryReceived(messageHistoryReceivedFn)
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
}