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
    return (
      <div>
        <ChatButtons usernames={this.state.usernames.filter((username) => username !== this.props.username)} />
        <ChatRoom />
      </div>
    );
  }
}

Chat.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Chat;
