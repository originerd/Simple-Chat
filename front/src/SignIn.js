import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: '' };

    this.setUsername = this.setUsername.bind(this);
  }

  setUsername(event) {
    this.setState({ username: event.target.value });
  }
  
  render() {
    return (
      <div>
        <input onChange={this.setUsername} />
        <button>Connect</button>
      </div>
    );
  }
}

export default SignIn;
