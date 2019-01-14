import React from 'react';

import './App.css';
import Chat from './Chat';
import SignIn from './SignIn';

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

    return <Chat username={username} />;
  }
}

export default App;
