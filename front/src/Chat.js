import PropTypes from 'prop-types';
import React from 'react';
import io from 'socket.io-client';

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

    this.selectChatRoom = this.selectChatRoom.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.setUsernames = this.setUsernames.bind(this);
  }

  componentDidMount() {
    this.socket = io('http://localhost:8000');

    this.socket.on('usernames', this.setUsernames);
    this.socket.emit('join', this.props.username);
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

    const newMessage = { from: username, message };

    this.socket.emit(selectedChatRoom, newMessage);
    this.setState((prevState) => ({
      ...prevState,
      chatRoomToMessages: {
        ...prevState.chatRoomToMessages,
        [selectedChatRoom]: (prevState.chatRoomToMessages[selectedChatRoom] || []).concat(newMessage),
      },
    }));
  }

  setUsernames(usernames) {
    this.setState({ usernames });
  }

  render() {
    const { username } = this.props;
    const { chatRoomToMessages, selectedChatRoom, usernames } = this.state;

    return (
      <div>
        <ChatButtons
          selectChatRoom={this.selectChatRoom}
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
