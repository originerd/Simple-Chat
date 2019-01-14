import PropTypes from 'prop-types';
import React from 'react';

import ChatBubble from './ChatBubble';

class ChatRoom extends React.Component {
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
        <input />
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
