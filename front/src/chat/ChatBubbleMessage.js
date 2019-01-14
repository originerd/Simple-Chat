import PropTypes from 'prop-types';
import React from 'react';

class ChatBubbleMessage extends React.Component {
  render() {
    const { message, type } = this.props;

    switch (type) {
      case 'image':
        return <img alt="A message" src={message} />;
      default:
        return <p>{message}</p>;
    }
  }
}

ChatBubbleMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ChatBubbleMessage;
