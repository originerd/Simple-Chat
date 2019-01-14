import PropTypes from 'prop-types';
import React from 'react';

import './ChatBubble.css';

class ChatBubble extends React.Component {
  render() {
    const { isMine, message } = this.props;

    const classNames = ['chat-bubble', isMine ? 'right' : 'left'];

    return (
      <div className={classNames.join(' ')}>
        <p>{message}</p>
      </div>
    );
  }
}

ChatBubble.propTypes = {
  isMine: PropTypes.bool,
  message: PropTypes.string.isRequired,
};

export default ChatBubble;
