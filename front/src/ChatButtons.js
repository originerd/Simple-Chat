import React from 'react';

class ChatButtons extends React.Component {
  render() {
    const { usernames } = this.props;

    if (usernames.length === 0) {
      return <p>There are no users to chat.</p>;
    }

    return (
      <div>
        {usernames.map((username) => <button key={username}>{username}</button>)}
      </div>
    );
  }
}

export default ChatButtons;
