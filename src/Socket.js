import { io } from "socket.io-client"; 

export class Socket {
  constructor(dispatch, messageReceivedFn, cid) {
    this.socket = io("http://localhost:5000", { cid });
    this.dispatch = dispatch;
    this.socket.on('connect', () => {
      console.log('connected')
    })
    this.cid = cid;

    this.messageReceived(messageReceivedFn)
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
    console.log('received')
    this.socket.on('message', (data) => this.dispatch(messageReceivedFn(data)));
  }
}