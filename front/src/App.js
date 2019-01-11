import React from 'react';

import SignIn from './SignIn';
import UserList from './UserList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: undefined };
  }

  render() {
    if (!this.state.username) {
      return <SignIn />;
    }

    return <UserList />;
  }
}

export default App;
