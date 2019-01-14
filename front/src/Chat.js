import PropTypes from 'prop-types';
import React from 'react';
import io from 'socket.io-client';

import './Chat.css';
import ChatButtons from './ChatButtons';
import ChatRoom from './ChatRoom';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatRoomToMessages: {},
      selectedChatRoom: undefined,
      usernames: [],
    };

    this.appendMessage = this.appendMessage.bind(this);
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

    this.setState((prevState) => ({
      ...prevState,
      chatRoomToMessages: {
        ...prevState.chatRoomToMessages,
        [chatRoom]: (prevState.chatRoomToMessages[chatRoom] || []).concat(message),
      },
    }));
  }

  selectChatRoom(username) {
    this.setState({ selectedChatRoom: username });
  }

  sendMessage(message) {
    const { username } = this.props;
    const { selectedChatRoom } = this.state;

    if (!selectedChatRoom) {
      return;
    }

    const newMessage = { from: username, message, to: selectedChatRoom };

    this.socket.send(newMessage);
    this.appendMessage(newMessage);
  }

  setUsernames(usernames) {
    this.setState({ usernames });
  }

  render() {
    const { username } = this.props;
    const { chatRoomToMessages, selectedChatRoom, usernames } = this.state;

    return (
      <div className="chat">
        <ChatButtons
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
