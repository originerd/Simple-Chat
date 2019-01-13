import PropTypes from 'prop-types';
import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined,
      username: '',
    };

    this.setError = this.setError.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  get isUsernameEmpty() {
    return /^\s*$/.test(this.state.username);
  }

  setError(error) {
    this.setState({ error });
  }

  setUsername(event) {
    this.setState({ username: event.target.value });

  signIn() {
    if (this.isUsernameEmpty) {
      this.setError('Username is emtpy');
      return;
    }

    fetch('http://localhost:8000/sessions', {
      method: 'POST',
      body: JSON.stringify({ username: this.state.username }),
    }).then(() => {
      this.props.signIn(this.state.username);
    }).catch((error) => {
      this.setError(error.message);
    });
  }

  renderError() {
    const { error } = this.state;

    if (!error) {
      return null;
    }

    return <p className="error">{error}</p>;
  }

  render() {
    return (
      <div>
        <input onChange={this.setUsername} />
        <button onClick={this.signIn}>
          Connect
        </button>
        {this.renderError()}
      </div>
    );
  }
}

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
}

export default SignIn;
