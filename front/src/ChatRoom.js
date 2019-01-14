import PropTypes from 'prop-types';
import React from 'react';

import ChatBubble from './ChatBubble';
import './ChatRoom.css';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: '' };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.setBubbles = this.setBubbles.bind(this);
    this.setMessage = this.setMessage.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.messages.length > prevProps.messages.length) {
      this.bubbles.lastChild.scrollIntoView({ behavior: 'smooth' });
    }
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

  setBubbles(bubbles) {
    this.bubbles = bubbles;
  }

  setMessage(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    const { messages, to, username } = this.props;

    if (!to) {
      return (
        <div className="chat-room">
          <p>Please select a user to chat.</p>
        </div>
      );
    }

    return (
      <div className="chat-room">
        <div className="chat-room__bubbles" ref={this.setBubbles}>
          {messages.map(({ from, message }, index) => <ChatBubble isMine={username === from} key={index} message={message} />)}
        </div>
        <div className="chat-room__inputs">
          <label className="chat-room__image-input">
            Image
            <input accept="image/*" type="file" />
          </label>
          <input
            className="chat-room__text-input"
            onChange={this.setMessage}
            onKeyPress={this.handleKeyPress}
            value={this.state.message}
          />
        </div>
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
