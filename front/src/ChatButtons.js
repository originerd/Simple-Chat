import PropTypes from 'prop-types';
import React from 'react';

import './ChatButtons.css';

class ChatButtons extends React.Component {
  constructor(props) {
    super(props);

    this.selectChatRoom = this.selectChatRoom.bind(this);
  }
  selectChatRoom(username) {
    return () => { this.props.selectChatRoom(username) };
  }

  render() {
    const { selectedChatRoom, usernames } = this.props;

    if (usernames.length === 0) {
      return (
        <div className="chat-buttons">
          <p>There are no users to chat.</p>
        </div>
      );
    }

    return (
      <div className="chat-buttons">
        {usernames.map((username) => <button className={`chat-buttons__button${username === selectedChatRoom ? ' active' : ''}`} key={username} onClick={this.selectChatRoom(username)}>{username}</button>)}
      </div>
    );
  }
}

ChatButtons.propTypes = {
  selectChatRoom: PropTypes.func.isRequired,
  selectedChatRoom: PropTypes.string,
};

export default ChatButtons;
