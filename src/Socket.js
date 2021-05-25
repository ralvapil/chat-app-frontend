import { io } from "socket.io-client"; 

export class Socket {
  constructor(
    dispatch, 
    messageReceivedFn, 
    newConvosPushedFn, 
    messageSentDiffDeviceFn, 
    memberIsTypingFn,
    memberIsTypingEndFn,
    userId
  ) {
    this.socket = io("http://localhost:5000", { query: `userId=${userId}` });
    this.dispatch = dispatch;
    this.socket.on('connect', () => {
      console.log('connected')
    })
    this.userId = userId;

    this.convosReceived(newConvosPushedFn)
    this.messageReceived(messageReceivedFn)
    this.messageSentDiffDevice(messageSentDiffDeviceFn)
    this.memberIsTyping(memberIsTypingFn)
    this.memberIsTypingEnd(memberIsTypingEndFn)

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

  messageSentDiffDevice(messageSentDiffDeviceFn) {
    this.socket.on('messageSentDifferentDevice', (data) => {
      return this.dispatch(messageSentDiffDeviceFn({
        type: 'message',
        data
      }))
    })
  }

  memberIsTyping(memberIsTypingFn) {
    this.socket.on('memberIsTyping', (data) => {
      return this.dispatch(memberIsTypingFn({
        type: 'message',
        data,
      }))
    })
  }

  memberIsTypingEnd(memberIsTypingEndFn) {
    this.socket.on('memberEndTyping', (data) => {
      return this.dispatch(memberIsTypingEndFn({
        type: 'message',
        data,
      }))
    })
  }
}