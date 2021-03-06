import PropTypes from 'prop-types';
import React from 'react';

import ChatBubble from './ChatBubble';
import './ChatRoom.css';
import ChatBubbles from './ChatBubbles';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: '' };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.sendImage = this.sendImage.bind(this);
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

  sendImage(event) {
    const { files } = event.target;

    if (!files || !files[0]) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.props.sendMessage(reader.result, "image");
    };
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

  renderChatBubbles() {
    const { messages, username } = this.props;

    return messages.map(({ from, message, type }, index) => <ChatBubble isMine={username === from} key={index} message={message} type={type} />)
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
          <ChatBubbles messages={messages} username={username} />
        </div>
        <div className="chat-room__inputs">
          <label className="chat-room__image-input">
            Image
            <input accept="image/*" onChange={this.sendImage} type="file" />
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
