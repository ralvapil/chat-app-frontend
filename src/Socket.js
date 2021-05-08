import { io } from "socket.io-client"; 

export class Socket {
  constructor(dispatch, messageReceivedFn, newConvosPushedFn, userId) {
    this.socket = io("http://localhost:5000", { query: `userId=${userId}` });
    this.dispatch = dispatch;
    this.socket.on('connect', () => {
      console.log('connected')
    })
    this.userId = userId;

    this.convosReceived(newConvosPushedFn)
    this.messageReceived(messageReceivedFn)
  }

  getSocket() {
    return this.socket;
  }

  closeSocket() {
    this.socket.disconnect();
  }

  async emitSocket (event, data)  {
    console.log('in emit for ', event)
   const result = await new Promise(resolve => this.socket.emit(event, data, response => {
      return resolve(response)
    }));
    return result;
  }

  convosReceived(newConvosPushedFn) {
    this.socket.on('newConvosPushed', (data) => {
      return this.dispatch(newConvosPushedFn({
        'type': 'newConvosPushed',
        data
      }))
    })
  }

  messageReceived(messageReceivedFn) {
    this.socket.on('message', (data) => {
      return this.dispatch(messageReceivedFn({
        'type': 'message',
        data,
      }))
    });
  }
}