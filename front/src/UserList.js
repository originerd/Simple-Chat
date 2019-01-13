import PropTypes from 'prop-types';
import React from 'react';
import io from 'socket.io-client';

class UserList extends React.Component {
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
    if (this.state.usernames.length === 0) {
      return <p>There are no users to chat.</p>;
    }

    return (
      <div>
        {this.state.usernames.map((username) => <button key={username}>{username}</button>)}
      </div>
    );
  }
}

UserList.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserList;
