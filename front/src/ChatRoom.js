import PropTypes from 'prop-types';
import React from 'react';

class ChatRoom extends React.Component {
  render() {
    const { to } = this.props;

    if (!to) {
      return <p>Please select a user to chat.</p>;
    }

    return (
      <div>
        <div className="chat-bubble-container" />
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
