import PropTypes from 'prop-types';
import React from 'react';

class ChatBubble extends React.Component {
  render() {
    const { isMine, message } = this.props;

    return (
      <div className={isMine ? 'right' : 'left'}>
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
