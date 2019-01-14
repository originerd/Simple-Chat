import PropTypes from 'prop-types';
import React from 'react';
import io from 'socket.io-client';

import ChatButtons from './ChatButtons';
import ChatRoom from './ChatRoom';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = { usernames: [] };

    this.setUsernames = this.setUsernames.bind(this);
  }

  componentDidMount() {
    this.socket = io('http://localhost:8000');

    this.socket.on('usernames', this.setUsernames);
    this.socket.emit('join', this.props.username);
  }

  setUsernames(usernames) {
    this.setState({ usernames });
  }

  render() {
    const { username } = this.props;

    return (
      <div>
        <ChatButtons usernames={this.state.usernames.filter((name) => name !== username)} />
        <ChatRoom username={username} />
      </div>
    );
  }
}

Chat.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Chat;
