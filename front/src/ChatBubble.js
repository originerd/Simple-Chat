import PropTypes from 'prop-types';
import React from 'react';

import './ChatBubble.css';

class ChatBubble extends React.Component {
  renderMessage() {
    const { message, type } = this.props;

    switch (type) {
      case 'image':
        return <img src={message} />;
      default:
        return <p>{message}</p>;
    }
  }

  render() {
    const { isMine } = this.props;

    const classNames = ['chat-bubble', isMine ? 'right' : 'left'];

    return (
      <div className={classNames.join(' ')}>
        {this.renderMessage()}
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
