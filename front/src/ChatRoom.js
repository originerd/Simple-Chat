import PropTypes from 'prop-types';
import React from 'react';

import ChatBubble from './ChatBubble';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: '' };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.setMessage = this.setMessage.bind(this);
  }

  handleKeyPress(event) {
    if (!(event.key === 'Enter')) {
      return;
    }

    this.sendMessage();
  }

  sendMessage() {
    this.props.sendMessage(this.state.message);

    this.setState({ message: '' });
  }

  setMessage(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    const { messages, to, username } = this.props;

    if (!to) {
      return <p>Please select a user to chat.</p>;
    }

    return (
      <div>
        <div className="chat-bubble-container">
          {messages.map(({ from, message }, index) => <ChatBubble isMine={username === from} key={index} message={message} />)}
        </div>
        <input
          onChange={this.setMessage}
          onKeyPress={this.handleKeyPress}
          value={this.state.message}
        />
      </div>
    );
  }
}

ChatRoom.propTypes = {
  messages: PropTypes.array,
  sendMessage: PropTypes.func.isRequired,
  to: PropTypes.string,
  username: PropTypes.string.isRequired,
};

export default ChatRoom;
