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

  renderBadge(username) {
    const { chatRoomToUnreadMessageCount } = this.props;

    const unreadMessageCount = chatRoomToUnreadMessageCount[username];

    if (!unreadMessageCount) {
      return null;
    }

    return <span className="badge">{chatRoomToUnreadMessageCount[username]}</span>;
  }

  renderButtons() {
    const { selectedChatRoom, usernames } = this.props;

    return usernames.map((username) => {
      const classNames = ['chat-buttons__button'];

      if (username === selectedChatRoom) {
        classNames.push('active');
      }

      return (
        <button
          className={classNames.join(' ')}
          key={username}
          onClick={this.selectChatRoom(username)}
        >
          {username}
          {this.renderBadge(username)}
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
