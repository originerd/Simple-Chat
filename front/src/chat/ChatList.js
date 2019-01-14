import PropTypes from 'prop-types';
import React from 'react';

import ChatButtons from './ChatButtons';
import './ChatList.css';

class ChatList extends React.Component {
  render() {
    const { chatRoomToUnreadMessageCount, resetUnreadMessageCount, selectChatRoom, selectedChatRoom, usernames } = this.props;

    if (usernames.length === 0) {
      return (
        <div className="chat-list">
          <p>There are no users to chat.</p>
        </div>
      );
    }

    return (
      <div className="chat-list">
        <ChatButtons
          chatRoomToUnreadMessageCount={chatRoomToUnreadMessageCount}
          resetUnreadMessageCount={resetUnreadMessageCount}
          selectChatRoom={selectChatRoom}
          selectedChatRoom={selectedChatRoom}
          usernames={usernames}
        />
      </div>
    );
  }
}

ChatList.propTypes = {
  chatRoomToUnreadMessageCount: PropTypes.objectOf(PropTypes.number).isRequired,
  resetUnreadMessageCount: PropTypes.func.isRequired,
  selectChatRoom: PropTypes.func.isRequired,
  selectedChatRoom: PropTypes.string,
  usernames: PropTypes.array.isRequired,
};

export default ChatList;
