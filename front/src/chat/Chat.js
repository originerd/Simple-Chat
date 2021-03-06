import PropTypes from 'prop-types';
import React from 'react';
import io from 'socket.io-client';

import './Chat.css';
import ChatList from './ChatList';
import ChatRoom from './ChatRoom';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatRoomToMessages: {},
      chatRoomToUnreadMessageCount: {},
      selectedChatRoom: undefined,
      usernames: [],
    };

    this.appendMessage = this.appendMessage.bind(this);
    this.resetUnreadMessageCount = this.resetUnreadMessageCount.bind(this);
    this.selectChatRoom = this.selectChatRoom.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.setUsernames = this.setUsernames.bind(this);
  }

  componentDidMount() {
    const { username } = this.props;

    this.socket = io('http://localhost:8000');

    this.socket.on('usernames', this.setUsernames);
    this.socket.on(username, this.appendMessage);
    this.socket.emit('join', username);
  }

  appendMessage(message) {
    const { username } = this.props;
    const { selectedChatRoom } = this.state;

    const { from } = message;
    const chatRoom = from === username ? selectedChatRoom : from;

    if (chatRoom !== selectedChatRoom) {
      this.setState((prevState) => ({
        ...prevState,
        chatRoomToUnreadMessageCount: {
          ...prevState.chatRoomToUnreadMessageCount,
          [chatRoom]: (prevState.chatRoomToUnreadMessageCount[chatRoom] || 0) + 1,
        },
      }));
    }

    this.setState((prevState) => ({
      ...prevState,
      chatRoomToMessages: {
        ...prevState.chatRoomToMessages,
        [chatRoom]: (prevState.chatRoomToMessages[chatRoom] || []).concat(message),
      },
    }));
  }

  resetUnreadMessageCount(username) {
    this.setState((prevState) => ({
      ...prevState,
      chatRoomToUnreadMessageCount: {
        ...prevState.chatRoomToUnreadMessageCount,
        [username]: 0,
      },
    }));
  }

  selectChatRoom(username) {
    this.setState({ selectedChatRoom: username });
  }

  sendMessage(message, type = "text") {
    const { username } = this.props;
    const { selectedChatRoom } = this.state;

    if (!selectedChatRoom || !message) {
      return;
    }

    const newMessage = { from: username, message, to: selectedChatRoom, type };

    this.socket.send(newMessage);
    this.appendMessage(newMessage);
  }

  setUsernames(usernames) {
    this.setState({ usernames });
  }

  render() {
    const { username } = this.props;
    const { chatRoomToMessages, chatRoomToUnreadMessageCount, selectedChatRoom, usernames } = this.state;

    return (
      <div className="chat">
        <ChatList
          chatRoomToUnreadMessageCount={chatRoomToUnreadMessageCount}
          resetUnreadMessageCount={this.resetUnreadMessageCount}
          selectChatRoom={this.selectChatRoom}
          selectedChatRoom={selectedChatRoom}
          usernames={usernames.filter((name) => name !== username)}
        />
        <ChatRoom
          messages={chatRoomToMessages[selectedChatRoom] || []}
          sendMessage={this.sendMessage}
          to={selectedChatRoom}
          username={username}
        />
      </div>
    );
  }
}

Chat.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Chat;
