import PropTypes from 'prop-types';
import React from 'react';

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { usernames: [] };
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
