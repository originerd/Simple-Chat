import PropTypes from 'prop-types';
import React from 'react';

import ChatButtonBadge from './ChatButtonBadge';
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

  render() {
    const { chatRoomToUnreadMessageCount, selectedChatRoom, usernames } = this.props;

    const chatButtons = usernames.map((username) => {
      const classNames = ['chat-button'];

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
          <ChatButtonBadge unreadMessageCount={chatRoomToUnreadMessageCount[username]} />
        </button>
      );
    });

    return <>{chatButtons}</>;
  }
}

ChatButtons.propTypes = {
  chatRoomToUnreadMessageCount: PropTypes.objectOf(PropTypes.number).isRequired,
  resetUnreadMessageCount: PropTypes.func.isRequired,
  selectChatRoom: PropTypes.func.isRequired,
  selectedChatRoom: PropTypes.string,
  usernames: PropTypes.array.isRequired,
};

export default ChatButtons;
