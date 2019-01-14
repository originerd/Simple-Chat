import PropTypes from 'prop-types';
import React from 'react';

import ChatBubble from './ChatBubble';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: '' };

    this.setMessage = this.setMessage.bind(this);
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
        <input onChange={this.setMessage} value={this.state.message} />
      </div>
    );
  }
}

ChatRoom.propTypes = {
  messages: PropTypes.array,
  to: PropTypes.string,
  username: PropTypes.string.isRequired,
};

export default ChatRoom;
