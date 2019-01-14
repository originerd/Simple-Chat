import PropTypes from 'prop-types';
import React from 'react';

class ChatRoom extends React.Component {
  render() {
    return (
      <div>
        <div className="chat-bubble-container" />
        <input />
      </div>
    );
  }
}

ChatRoom.propTypes = {
  to: PropTypes.string,
  username: PropTypes.string.isRequired,
};

export default ChatRoom;
