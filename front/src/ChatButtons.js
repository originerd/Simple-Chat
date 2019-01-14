import PropTypes from 'prop-types';
import React from 'react';

class ChatButtons extends React.Component {
  constructor(props) {
    super(props);

    this.selectChatRoom = this.selectChatRoom.bind(this);
  }
  selectChatRoom(username) {
    return () => { this.props.selectChatRoom(username) };
  }

  render() {
    const { usernames } = this.props;

    if (usernames.length === 0) {
      return <p>There are no users to chat.</p>;
    }

    return (
      <div>
        {usernames.map((username) => <button key={username} onClick={this.selectChatRoom(username)}>{username}</button>)}
      </div>
    );
  }
}

ChatButtons.propTypes = {
  selectChatRoom: PropTypes.func.isRequired,
};

export default ChatButtons;
