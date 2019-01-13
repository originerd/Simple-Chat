import React from 'react';

import SignIn from './SignIn';
import UserList from './UserList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: undefined };

    this.signIn = this.signIn.bind(this);
  }

  signIn(username) {
    this.setState({ username });
  }

  render() {
    const { username } = this.state;

    if (!username) {
      return <SignIn signIn={this.signIn} />;
    }

    return <UserList username={username} />;
  }
}

export default App;
