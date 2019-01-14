import PropTypes from 'prop-types';
import React from 'react';

import './ChatButtons.css';

class ChatButtons extends React.Component {
  constructor(props) {
    super(props);

    this.selectChatRoom = this.selectChatRoom.bind(this);
  }
  selectChatRoom(username) {
    const { resetUnreadMessageCount, selectChatRoom } = this.props;

    return () => {
      resetUnreadMessageCount(username);
      selectChatRoom(username);
    };
  }

  renderButtons() {
    const { chatRoomToUnreadMessageCount, selectedChatRoom, usernames } = this.props;

    return usernames.map((username) => {
      const classNames = ['chat-buttons__button'];

      if (username === selectedChatRoom) {
        classNames.push('active');
      }

      let badge = null;

      if (chatRoomToUnreadMessageCount[username]) {
        badge = <span className="badge">{chatRoomToUnreadMessageCount[username]}</span>;
      }

      return (
        <button
          className={classNames.join(' ')}
          key={username}
          onClick={this.selectChatRoom(username)}
        >
          {username}
          {badge}
        </button>
      );
    });
  }

  render() {
    const { usernames } = this.props;

    if (usernames.length === 0) {
      return (
        <div className="chat-buttons">
          <p>There are no users to chat.</p>
        </div>
      );
    }

    return (
      <div className="chat-buttons">
        {this.renderButtons()}
      </div>
    );
  }
}

ChatButtons.propTypes = {
  chatRoomToUnreadMessageCount: PropTypes.objectOf(PropTypes.number).isRequired,
  resetUnreadMessageCount: PropTypes.func.isRequired,
  selectChatRoom: PropTypes.func.isRequired,
  selectedChatRoom: PropTypes.string,
};

export default ChatButtons;
