import PropTypes from 'prop-types';
import React from 'react';

import ChatBubble from './ChatBubble';

class ChatBubbles extends React.Component {
  render() {
    const { messages, username } = this.props;

    const chatBubbles = messages.map(({ from, message, type }, index) => (
      <ChatBubble
        isMine={username === from}
        key={index}
        message={message}
        type={type}
      />
    ));

    return <>{chatBubbles}</>;
  }
}

ChatBubbles.propTypes = {
  messages: PropTypes.array,
  username: PropTypes.string.isRequired,
};

export default ChatBubbles;
