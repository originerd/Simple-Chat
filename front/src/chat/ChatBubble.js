import PropTypes from 'prop-types';
import React from 'react';

import './ChatBubble.css';
import ChatBubbleMessage from './ChatBubbleMessage';

class ChatBubble extends React.Component {
  render() {
    const { isMine, message, type } = this.props;

    const classNames = ['chat-bubble', isMine ? 'right' : 'left'];

    return (
      <div className={classNames.join(' ')}>
        <ChatBubbleMessage message={message} type={type} />
      </div>
    );
  }
}

ChatBubble.propTypes = {
  isMine: PropTypes.bool,
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ChatBubble;
